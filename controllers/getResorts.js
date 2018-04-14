module.exports = {
  getResorts: (req, res, next) => {
    const db = req.app.get('db')

    db.get_resorts().then(resorts => {
      res.send(resorts)
    })
  }
}