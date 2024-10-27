const checkStringLength = (form, len) => form.length <= len;

const checkPalindrome = (form) => {
  const normalizedForm = form.replaceAll(' ', '').toLowerCase();
  let invertedForm = '';

  for (let i = normalizedForm.length - 1; i >= 0; --i) {
    invertedForm += normalizedForm[i];
  }

  return invertedForm === normalizedForm;
};

const getDigits = (input) => {
  let result = '';
  const str = input.toString();
  for (let i = 0; i < str.length; ++i) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }

  return parseInt(result, 10);
};


checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);
checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');
getDigits('2023 год');
getDigits('ECMAScript 2022');
getDigits('1 кефир, 0.5 батона');
getDigits('агент 007');
getDigits('а я томат');
getDigits(2023);
getDigits(-1);
getDigits(1.5);

const checkMeetengTime = (startWork,endWork, startMeeting, meetingDuration) => {
  const [startWorkHour, startWorkMinute] = startWork.split(':').map((num) => parseInt(num, 10));
  const [endWorkHour, endWorkMinute] = endWork.split(':').map((num) => parseInt(num, 10));
  const [startMeetingHour, startMeetingMinute] = startMeeting.split(':').map((num) => parseInt(num, 10));
  const startWorkInMinutes = startWorkHour * 60 + startWorkMinute;
  const endWorkInMinutes = endWorkHour * 60 + endWorkMinute;
  const startMeetingInMinutes = startMeetingHour * 60 + startMeetingMinute;

  const endMeetingInMinutes = startMeetingInMinutes + meetingDuration;

  return startMeetingInMinutes >= startWorkInMinutes && endMeetingInMinutes <= endWorkInMinutes;

};

checkMeetengTime('08:00', '17:30', '14:00', 90);
checkMeetengTime('8:0', '10:0', '8:0', 120);
checkMeetengTime('08:00', '14:30', '14:00', 90);
checkMeetengTime('14:00', '17:30', '08:0', 90);
checkMeetengTime('8:00', '17:30', '08:00', 900);

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomObjectArray = (builder, max) => Array.from({length: getRandomNumber(0, max)}, builder);

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

export {getRandomNumber, getRandomObjectArray, createIdGenerator, getRandomArrayElement};
