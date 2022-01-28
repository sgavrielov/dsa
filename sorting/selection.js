function selection(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    let temp = arr[i];

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

const sortMe = [54, 50, 1, 8, 6, 3, 200, 5, 2, 44, 60, 63, 7, 20, 89];

console.log(selection(sortMe)); // [1, 2, 3, 5, 6, 7, 8, 20, 44, 50, 54, 60, 63, 89, 200]
