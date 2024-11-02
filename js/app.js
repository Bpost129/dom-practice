const likeBtnEl = document.querySelector('#like-button')
// console.dir(likeBtnEl)
likeBtnEl.addEventListener('click', () => {
  console.log('You clicked me!')
})



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}