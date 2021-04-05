module.exports = (app) => {
  app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    next()
  })
}