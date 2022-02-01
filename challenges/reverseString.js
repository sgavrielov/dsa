const revStr1 = (str) => str.split('').reverse().join('');

const revStr2 = (str) => {
  let rs = '';

  for (let char of str) {
    rs = char + rs;
  }

  return rs;
};

const revStr3 = (str) => {
  let rs = '';

  for (let i = 0; i < str.length; i++) {
    rs = str[i] + rs;
  }

  return rs;
};

const revStr4 = (str) => {
  let rs = '';

  for (let i = str.length - 1; i >= 0; i--) {
    rs += str[i];
  }

  return rs;
};

const revStr5 = (str) => str.split('').reduce((a, b) => b + a, '');

const revStr6 = (str) => {
  let rs = '';
  str.split('').forEach((char) => (rs = char + rs));
  return rs;
};

console.log('1', revStr1('hello')); // olleh
console.log('2', revStr2('hello')); // olleh
console.log('3', revStr3('hello')); // olleh
console.log('4', revStr4('hello')); // olleh
console.log('5', revStr5('hello')); // olleh
console.log('6', revStr6('hello')); // olleh
