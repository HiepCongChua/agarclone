const socket = io.connect("http://localhost:8000")
function init() {
  //ham se duoc goi khi click vao start button
  draw()
  socket.emit("init", {
    playerName: player.name,
  })
}
socket.on("initReturn", (data) => {
  orbs = data.orbs
})

socket.on("tock", (data) => {
  console.log(data)
})
