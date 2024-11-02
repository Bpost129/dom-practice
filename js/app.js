const likeBtnEl = document.querySelector('#like-button')
const commentBtnEl = document.querySelector('#comment-button')
const commentListEl = document.querySelector('ul')
const inputEl = document.querySelector('input')

// console.dir(inputEl)
likeBtnEl.addEventListener('click', () => {
  console.log('You clicked me!')
})

const submitComment = () => {
  const commentEl = document.createElement('li');
  commentEl.textContent = inputEl.value
  inputEl.value = ''
  if (commentEl.textContent !== '') commentListEl.appendChild(commentEl)
}

commentBtnEl.addEventListener('click', submitComment)
inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') commentBtnEl.click()
})


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}