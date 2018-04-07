const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

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
console.log(11111, profile)
        if (user) {
          console.log(2222222, user)
          return done(null, user)
        } else {
          let userObj = {
            username: profile.displayName,
            auth_id: profile.id
          }
          console.log(333333333, userObj)
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
    successRedirect: "http://localhost:3000/#/resorts",
    failureRedirect: "http://localhost:3000/#/"
  })
);

app.get("/auth/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {
    return res.status(404).send("user not authenticated");
  }
});


//rides endpoints



app.listen(port, () => {
  console.log('listening on port', port);
});