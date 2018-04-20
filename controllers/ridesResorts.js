module.exports = {
  getRidesResortByResortID: (req, res, next) => {
    const db = req.app.get('db')

    db.get_rideresort_by_resortid(req.params.id).then(rideResort => {
      res.send(rideResort)
    })
  },

  bookRide: (req, res, next) => {
    try {
      const db = req.app.get('db')
      const { id, seats } = req.params
      const { resort_id } = req.query
      db.book_ride([Number(id), Number(seats)]).then(response => {
        db.get_rideresort_by_resortid(Number(resort_id)).then(rides => {
          res.send(rides)
        })
      }) 
    } catch (error) {
      console.error('we have an error booking a ride:', error)
      res.status(500).send(error)
    }
  },

  addRide: (req, res, next) => {
    const db = req.app.get('db')
    const { username, seats, price, date, time } = req.params
    const { resort_id } = req.query
    db.add_ride(username, price, date, time).then(response => {
      db.get_rideresort_by_resortid(Number(resort_id)).then(rides => {
        res.send(rides)
      })
    })
  }
}