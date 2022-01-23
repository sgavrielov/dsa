/* 
  Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.

  Examples:
  ------------------------------------
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'i'];
  should return false
  ------------------------------------
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'x'];
  should return true
  ------------------------------------

  - 2 parameters - arrays - no size limit
  - return true OR false
  
  The brute force:
    Time Complexity: O(array1 * array2)
    Space Complexity: O(1)
  Better Solution:
    Time Complexity: O(array1 + array2)
    Space Complexity: O(array1)
   
*/

// brute force solution
// const commonItems = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) return true;
//     }
//   }
//   return false;
// };

// Better Solution
const commonItems = (arr1, arr2) => {
  // Loop through the first array and create object
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[array1[i]]) map[array1[i]] = true;
  }

  // Loop through the second array and check if item in second array exists on created object.
  // where properties === items in the array
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) return true;
  }

  return false;
};

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// console.log(commonItems(array1, array2));
console.log(commonItems(array1, array2));
