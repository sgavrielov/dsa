const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// CONSTANT
function logFirst(collection: any[]): any {
  if (collection.length === 0) return -1;
  return collection[0];
}
console.log(logFirst(elements)); // 1

// LINEAR
function findElement(collection: any[], target: any): number {
  if (collection.length === 0) return -1;
  if (!target) return -1;
  for (let i = 0; i < collection.length; ++i) {
    if (collection[i] === target) return i;
  }
  return -1;
}
console.log(findElement(elements, 5));

// QUADRATIC
function logAllPairs(collection: any[]): void {
  for (let i = 0; i < collection.length; ++i) {
    for (let j = 0; j < collection.length; ++j) {
      console.log(collection[i], collection[j]);
    }
  }
}
// logAllPairs(elements);
