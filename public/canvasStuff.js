function init() {
  draw()
}
player.locX = Math.floor(500 * Math.random() + 100)
player.locY = Math.floor(500 * Math.random() + 100)
function draw() {
  // draw cricle
  context.clearRect(0, 0, canvas.width, canvas.height) // xoa nhung khung hinh cu
  context.beginPath()
  context.fillStyle = "rgb(255,0,0)"
  context.arc(player.locX, player.locY, 10, 0, Math.PI * 2)
  context.fill()
  context.lineWidth = 3
  context.strokeStyle = "rgb(0,255,0)"
  context.stroke()
  requestAnimationFrame(draw) // ban chat la goi de quy ve nhieu khung hinh (30 khung/s)
}

canvas.addEventListener("mousemove", (event) => {
  // di chuyen circle theo mouse
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  }
  const angleDeg = // return radian
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI
  if (angleDeg >= 0 && angleDeg < 90) {
    xVector = 1 - angleDeg / 90
    yVector = -(angleDeg / 90)
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90
    yVector = -(1 - (angleDeg - 90) / 90)
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90
    yVector = 1 + (angleDeg + 90) / 90
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90
    yVector = 1 - (angleDeg + 90) / 90
  }

  speed = 10
  xV = xVector
  yV = yVector

  if (
    (player.locX < 5 && player.xVector < 0) ||
    (player.locX > 500 && xV > 0)
  ) {
    player.locY -= speed * yV
  } else if ((player.locY < 5 && yV > 0) || (player.locY > 500 && yV < 0)) {
    player.locX += speed * xV
  } else {
    player.locX += speed * xV
    player.locY -= speed * yV
  }
})
