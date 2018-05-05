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
      res.status(500).send(error)
    }
  },

  addRide: (req, res, next) => {
    const db = req.app.get('db')
    const { seats, price, time, resortId, userId } = req.body
  
    db.add_ride([Number(seats), Number(price), time, Number(userId)]).then(response => {
      const rideId = response[0].id
      db.add_ride_resort(rideId, resortId).then(response => {
        res.send('Ok')
      })
    })
  },

  deleteRide: (req, res, next) => {
    const db = req.app.get('db')
    const { id, userId } = req.params

    db.delete_ride([id, userId]).then(rides => {
      res.send(rides)
    })
  }
}