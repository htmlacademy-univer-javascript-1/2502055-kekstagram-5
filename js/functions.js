const checkStringLength = (form, len) => {
  return form.length <= len;
}

const checkPalindrome = (form) => {
  let normalizedForm = form.replaceAll(' ', '').toLowerCase();
  let invertedForm = '';

  for (let i = normalizedForm.length - 1; i >= 0; --i) {
    invertedForm += normalizedForm[i];
  }

  return invertedForm === normalizedForm;
}

const getDigits = (input) => {
  let result = '';
  let str = input.toString();
  for (let i = 0; i < str.length; ++i) {
    if (!Number.isNaN(parseInt(str[i]))) {
      result += str[i];
    }
  }

  return parseInt(result);
}

/*  Тесты:

console.log(checkStringLength('проверяемая строка', 20) , '1.1')
console.log(checkStringLength('проверяемая строка', 18) , '1.2')
console.log(checkStringLength('проверяемая строка', 10) , '1.3')

console.log(checkPalindrome('топот') , '2.1')
console.log(checkPalindrome('ДовОд') , '2.2')
console.log(checkPalindrome('Кекс') , '2.3')
console.log(checkPalindrome('Лёша на полке клопа нашёл ') , '2.4')

console.log(getDigits('2023 год') , '3.1')
console.log(getDigits('ECMAScript 2022'), '3.2')
console.log(getDigits('1 кефир, 0.5 батона'), '3.3')
console.log(getDigits('агент 007') , '3.4')
console.log(getDigits('а я томат'),'3.5')
console.log(getDigits(2023) , '3.6')
console.log(getDigits(-1), '3.7')
console.log(getDigits(1.5), '3.8') */
