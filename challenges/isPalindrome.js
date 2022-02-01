const isPalindrome1 = (str) => str.split('').reverse().join('') === str;

const isPalindrome2 = (str) =>
  str.split('').reduce((a, b) => b + a, '') === str;

const isPalindrome3 = (str) => {
  let rs = '';

  for (let char of str) {
    rs = char + rs;
  }

  return rs === str;
};

const isPalindrome4 = (str) => {
  let rs = '';

  for (let i = 0; i < str.length; i++) {
    rs = str[i] + rs;
  }

  return rs === str;
};

const isPalindrome5 = (str) => {
  let rs = '';

  for (let i = str.length - 1; i >= 0; i--) {
    rs += str[i];
  }

  return rs === str;
};

console.log('1', isPalindrome1('racecar')); // true
console.log('2', isPalindrome2('madam')); // true
console.log('3', isPalindrome3('hello')); // false
console.log('4', isPalindrome3('racecar')); // true
console.log('5', isPalindrome3('saul')); // false
