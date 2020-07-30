const wHeight = $(window).height()
const wWidth = $(window).width()
const canvas = document.querySelector("#the-canvas")
const context = canvas.getContext("2d")
const player = {}
canvas.width = wWidth
canvas.height = wHeight
let orbs = []
$(window).load(() => {
  $("#loginModal").modal("show")
})

$(".name-form").submit((event) => {
  event.preventDefault()
  player.name = document.querySelector("#name-input").value
  $("#loginModal").modal("hide")
  $("#spawnModal").modal("show")
  document.querySelector(".player-name").innerHTML = player.name
})

$(".start-game").click((event) => {
  $(".modal").modal("hide")
  $(".hiddenOnStart").removeAttr("hidden")
  init()
})
