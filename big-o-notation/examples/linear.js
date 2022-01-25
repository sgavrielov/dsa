const names = ['Saul', 'Dan', 'Jhon', 'Jane', 'William', 'Sara'];

function findName(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'William') return true;
  }
  return false;
}

console.log(findName(names));
