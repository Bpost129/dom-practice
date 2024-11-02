const likeBtnEl = document.querySelector('#like-button')
const commentBtnEl = document.querySelector('#comment-button')
const commentListEl = document.querySelector('ul')
const inputEl = document.querySelector('input')

// console.dir(inputEl)
likeBtnEl.addEventListener('click', () => {
  console.log('You clicked me!')
})

commentBtnEl.addEventListener('click', () => {
  const commentEl = document.createElement('li');
  commentEl.textContent = inputEl.value
  commentListEl.appendChild(commentEl)
})



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}