module.exports = {
  getRidesResortByResortID: (req, res, next) => {
    const db = req.app.get('db')
    db.get_rideresort_by_resortid(req.params.id).then(rideResort => {
      res.send(rideResort)
    })
  }
}