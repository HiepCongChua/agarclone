const express = require("express")
const app = express()
const port = 8000
const socketIo = require("socket.io")
const helmet = require("helmet")
app.get("/", (req, res) => res.send("Hello World!"))
app.use(express.static(__dirname + "/public"))
const expressServer = app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
const io = socketIo(expressServer) // Atach socket server to http server
app.use(helmet())
io.sockets.on("connection", (socket) => {
  socket.on("disconnect", (data) => {})
  socket.on("dataFromClient", () => {
    socket.emit("event", {}, () => {})
  })
  socket.on("", () => {})
})
app.get("/stats", () => {})
module.exports = {
  app,
  io,
}
