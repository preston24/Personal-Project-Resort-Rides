const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

//controllers
const ridesResorts = require('./controllers/ridesResorts');
const getResorts = require("./controllers/getResorts");

//middleware
const isAuthenticated = require('./middleware/isAuthenticated')


require('dotenv').config();


const app = express();
const port = 9090;

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
})

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK,
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {

      const db = app.get('db');
      db.get_user_by_auth_id({ auth_id: profile.id }).then(results => {
        let user = results[0];

        if (user) {
          return done(null, user)
        } else {
          let userObj = {
            username: profile.displayName,
            auth_id: profile.id
          }
          
          db.create_user(userObj).then(results => {
            let user = results[0];
            return done(null, user)
          })
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const db = app.get('db');

  db.get_user_by_id({ id }).then(results => {
    let user = results[0];
    return done(null, user);
  });
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "/#/resorts",
    failureRedirect: "/#/"
  })
);

app.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/#/')
});

app.get("/auth/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {
    return res.status(404).send("user not authenticated");
  }
});


app.use( express.static( `${__dirname}/client/build` ) );


//Ride Endpoints
app.get('/api/ride_resort/:id', isAuthenticated, ridesResorts.getRidesResortByResortID);
app.put('/api/rides/:id/:seats', isAuthenticated, ridesResorts.bookRide);
app.post('/api/rides/', isAuthenticated, ridesResorts.addRide);
app.delete('/api/rides/:id/:userId', isAuthenticated, ridesResorts.deleteRide);

//Resort Endpoints
app.get('/api/resorts/', isAuthenticated, getResorts.getResorts);


// //Ride Endpoints
// app.get('/api/ride_resort/:id', ridesResorts.getRidesResortByResortID);
// app.put('/api/rides/:id/:seats', ridesResorts.bookRide)
// app.post('/api/rides/', ridesResorts.addRide)
// app.delete('/api/rides/:id/:userId', ridesResorts.deleteRide)

// //Resort Endpoints
// app.get('/api/resorts/', getResorts.getResorts);



app.listen(port, () => {
  console.log('listening on port', port);
});