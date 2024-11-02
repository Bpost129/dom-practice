const likeBtnEl = document.querySelector('#like-button')
const commentBtnEl = document.querySelector('#comment-button')

// console.dir(commentBtnEl)
likeBtnEl.addEventListener('click', () => {
  console.log('You clicked me!')
})

commentBtnEl.addEventListener('click', () => {
  console.log('I work!!')
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}