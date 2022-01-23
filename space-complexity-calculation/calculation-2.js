function arrOfHiNTimes(n) {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'HI';
  }

  return hiArray;
}

console.log(arrOfHiNTimes(6)); // O(n)
