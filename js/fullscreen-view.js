const fullscreenContainer = document.querySelector('.big-picture');
const containerMeta = fullscreenContainer.querySelector('.big-picture__social');
const commentsList = containerMeta.querySelector('.social__comments');
const closeButton = fullscreenContainer.querySelector('.big-picture__cancel');
const commentsCount = containerMeta.querySelector('.social__comment-count');
const commentsLoader = containerMeta.querySelector('.comments-loader');

const loadComment = (comment) => {
  commentsList.insertAdjacentHTML('beforeend', `<li class="social__comment"><img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35"><p class="social__text">${comment.message}</p></li>`);
};

const insertComments = (commentField, comments, count) => {
  commentField.innerHTML = '';
  for (let i = 0; i < count; ++i) {
    loadComment(comments[i]);
  }
};

const drawBigPicture = (url, description, likes, comments) => {
  fullscreenContainer.querySelector('.big-picture__img')
    .querySelector('img').src = url;
  containerMeta.querySelector('.social__header')
    .querySelector('.social__likes')
    .querySelector('.likes-count').textContent = likes;
  containerMeta.querySelector('.social__header')
    .querySelector('.social__caption').textContent = description;
  containerMeta.querySelector('.social__comment-count')
    .querySelector('.comments-count').textContent = comments.length;
  insertComments(commentsList, comments, comments.length);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePreview();
  }
};

function closePreview() {
  fullscreenContainer.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
}

closeButton.addEventListener('click', () => {
  closePreview();
});

function openPreview(url, description, likes, comments) {
  fullscreenContainer.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  drawBigPicture(url, description, likes, comments);
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
}

export {openPreview};
