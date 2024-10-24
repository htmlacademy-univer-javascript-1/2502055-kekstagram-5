const COMMENT_SEQUENCES = [
  'Всё отлично!', 'В целом всё неплохо.', 'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];

const RANDOM_NAMES = [
  'Адрей', 'Антон', 'Вася', 'Петя', 'Вика', 'Даша', 'Саша', 'Дмитрий', 'Евгений', 'Бодан', 'Света'
];

const RANDOM_ADVERBS = ['quickly', 'quietly', 'happily', 'sadly', 'slowly', 'carefully',
  'joyfully', 'eagerly', 'angrily', 'calmly', 'loudly', 'boldly', 'gently',
  'vigorously', 'gracefully', 'patiently', 'sharply', 'politely', 'briskly', 'rudely'
];

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const AVATAR_COUNT = 6;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 1000;

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createCommentMessage = (phrasesCount) => {
  const index = getRandomNumber(0, COMMENT_SEQUENCES.length - 1);
  let index2 = index;
  while (index === index2) {
    index2 = getRandomNumber(0, COMMENT_SEQUENCES.length - 1);
  }

  return phrasesCount === 1 ? COMMENT_SEQUENCES[index] : `${COMMENT_SEQUENCES[index] } ${ COMMENT_SEQUENCES[index2]}`;
};

const createComment = () => ({
  id : createIdGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID)(),
  avatar : `img/avatar-${ getRandomNumber(1, AVATAR_COUNT)}.svg`,
  message : createCommentMessage(getRandomNumber(1, 2)),
  name : getRandomArrayElement(RANDOM_NAMES)
});

const getRandomObjectArray = (builder, max) => Array.from({length: getRandomNumber(0, max)}, builder);

const getUniqId = createIdGenerator(1, PHOTO_COUNT);

const createPhotoMeta = () => {
  const photo = {};
  photo.id = getUniqId();
  photo.url = `photos/${photo.id}.jpg`;
  photo.description = getRandomArrayElement(RANDOM_ADVERBS);
  photo.likes = getRandomNumber(MIN_LIKES, MAX_LIKES);
  photo.comments = getRandomObjectArray(createComment, MAX_COMMENTS);
  return photo;
};

// eslint-disable-next-line no-unused-vars
const photos = getRandomObjectArray(createPhotoMeta, 25);
