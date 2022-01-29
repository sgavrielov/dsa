function merge(arr) {
  if (arr.length === 1) return arr;

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // console.log('left', left);
  // console.log('right', right);

  return mergeHelper(merge(left), merge(right));
}

function mergeHelper(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sortMe = [9, 8, 7, 4, 5, 6, 2, 0, 3, 1];

console.log(merge(sortMe)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
