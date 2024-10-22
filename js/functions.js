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
