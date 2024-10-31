const titleEl = document.querySelector('#main-title')
titleEl.style.textAlign = 'center'
titleEl.style.backgroundColor = 'coral'

const imgEl = document.querySelector('#imagee')

imgEl.setAttribute("src", `https://picsum.photos/${getRandomInt(200, 800)}`)
imgEl.setAttribute("alt", "A random placeholder image")

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}