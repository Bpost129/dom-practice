/* --------------- Variables ------------- */

let likesCount = 0

/* ----------- Element References --------- */

const likeBtnEl = document.querySelector('#like-button')
const dislikeBtnEl = document.querySelector('#dislike-button')
const commentBtnEl = document.querySelector('#comment-button')
const commentListEl = document.querySelector('ul')
const inputEl = document.querySelector('input')

/* --------------- Functions ------------- */

const submitComment = () => {
  const commentEl = document.createElement('li');
  commentEl.textContent = inputEl.value
  inputEl.value = ''
  if (commentEl.textContent !== '') commentListEl.appendChild(commentEl)
  }

const handleReaction = (e) => {
  e.target.id === 'like-button' ? likesCount++ : likesCount--
  likeBtnEl.textContent = `${likesCount} like(s). Like this post!`
}

/* ------------- Event Listenters ----------- */

likeBtnEl.addEventListener('click', handleReaction)

dislikeBtnEl.addEventListener('click', handleReaction)

commentBtnEl.addEventListener('click', submitComment)

inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') commentBtnEl.click()
})

