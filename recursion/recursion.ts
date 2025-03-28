// https://en.wikipedia.org/wiki/Recursion_(computer_science)

function factorial(n: number): number {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 5 = 5 * 4 * 3 * 2 * 1 = 120

function fibonacci(n): number {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(9)); // 9 = 0 1 1 2 3 5 8 13 21 34

function findSum(n: number): number {
  if (n <= 1) return n;
  return n + findSum(n - 1);
}
console.log(findSum(5)); // 5 = 5 + 4 + 3 + 2 + 1 = 15

function sumArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4])); // 10

function findElement(
  collection: any[],
  target: any,
  index: number = 0
): number {
  if (index >= collection.length) return -1;
  if (collection[index] === target) return index;
  return findElement(collection, target, index + 1);
}
console.log(findElement([1, 2, 3, 4], 3)); // 2
console.log(findElement(["a", "b", "c"], "z")); // -1

function reverseString(str: string): string {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello")); // "olleh"
