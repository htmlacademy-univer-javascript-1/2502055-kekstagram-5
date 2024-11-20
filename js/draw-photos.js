import {createPhotos} from './data.js';

const photos = createPhotos();
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photosFragment = document.createDocumentFragment();
const photosContainer = document.querySelector('.pictures');

photos.forEach(({url, description, likes, comments}) => {
  const photo = photoTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__info')
    .querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__info')
    .querySelector('.picture__comments').textContent = comments.length;

  photosFragment.appendChild(photo);
});

photosContainer.appendChild(photosFragment);
