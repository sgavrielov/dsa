function insertion(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      //move number to the first position
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (arr[i] < arr[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
            //move number to the right spot
            arr.splice(j, 0, arr.splice(i, 1)[0]);
          }
        }
      }
    }
  }

  return arr;
}

const sortMe = [54, 50, 1, 8, 6, 3, 200, 5, 2, 44, 60, 63, 7, 20, 89];

console.log(insertion(sortMe)); // [1, 2, 3, 5, 6, 7, 8, 20, 44, 50, 54, 60, 63, 89, 200]
