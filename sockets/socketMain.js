const { io } = require("../server")
const Orb = require("./classes/Orbs")
const PlayerConfig = require("./classes/PlayerConfig")
const players = []
const PlayerData = require("./classes/PlayerData")
const Player = require("./classes/Player")
const orbs = []
const settings = {
  defaultOrbs: 500,
  defaultSpeed: 6,
  defaultSize: 6,
  defaultZoom: 1.5,
  worldWidth: 500,
  worldHeight: 500,
}
initGame()
setInterval(() => {
  io.to("game").emit("tock", {
    players,
  })
}, 33)
io.sockets.on("connection", (socket) => {
  socket.on("init", (data) => {
    socket.join("game")
    const playerConfig = new PlayerConfig(settings)
    const playerData = new PlayerData(data.playerName, settings)
    const player = new Player(socket.id, playerConfig, playerData)
    socket.emit("initReturn", { orbs })
    players.push(playerData)
  })
})
function initGame() {
  for (let i = 0; i < settings.defaultOrbs; i++) {
    orbs.push(new Orb(settings))
  }
}
module.exports = io
