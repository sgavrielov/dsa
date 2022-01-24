/*
  Create a function that reverse a string:
  'Hi My Name is Saul' should be:
  'luaS si emaN yM iH'
*/

const reverseString = (str) => {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') return;

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
};

const reverseString1 = (str) => str.split('').reverse().join('');
const reverseString2 = (str) => [...str].reverse().join('');

console.log(reverseString2('Hi My Name is Saul'));
