let likesCount = 0

const likeBtnEl = document.querySelector('#like-button')
const dislikeBtnEl = document.querySelector('#dislike-button')
const commentBtnEl = document.querySelector('#comment-button')
const commentListEl = document.querySelector('ul')
const inputEl = document.querySelector('input')

const submitComment = () => {
  const commentEl = document.createElement('li');
  commentEl.textContent = inputEl.value
  inputEl.value = ''
  if (commentEl.textContent !== '') commentListEl.appendChild(commentEl)
  }

const handleReaction = () => {
  likesCount++
  likeBtnEl.textContent = `${likesCount} like(s). Like this post!`
}

likeBtnEl.addEventListener('click', handleReaction)
dislikeBtnEl.addEventListener('click', handleReaction)

commentBtnEl.addEventListener('click', submitComment)

inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') commentBtnEl.click()
})


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}