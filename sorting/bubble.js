function bubble(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        /* OR */
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const sortMe = [54, 50, 1, 8, 6, 3, 200, 5, 2, 44, 60, 63, 7, 20, 89];

console.log(bubble(sortMe)); // [1, 2, 3, 5, 6, 7, 8, 20, 44, 50, 54, 60, 63, 89, 200]
