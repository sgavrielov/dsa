/* 
  Write a functions that finds the factorial of any number.
  One should use recursive, the other should just use a for loop.
*/

/*
  1. Identify the base case.
  2. Identify the recursive case.
  3. Get closer and closer and return when needed. Usually you have 2 returns.
*/

function findFactorialRecursive(num) {
  if (num < 1) return 1;
  return num * findFactorialRecursive(num - 1);
}

function findFactorialIterative(num) {
  if (num === 2) return 2;

  let answer = 1;

  for (let i = 2; i <= num; i++) {
    answer = answer * i;
  }

  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
