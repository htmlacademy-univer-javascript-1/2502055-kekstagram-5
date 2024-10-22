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
