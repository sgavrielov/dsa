# Big O Notation

![Big O Complexity Chart](https://camo.githubusercontent.com/1f54eb7ec7299bd1f488c3f5667a82442e7acf9d6bf66decb0ed9e9432895e6d/68747470733a2f2f69322e77702e636f6d2f7777772e6a65737369636179756e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30382f73637265656e73686f742d352e706e673f726573697a653d3834362532433539312673736c3d31)

### Big O's

|             |                  |                                                                                            |
| :---------- | :--------------- | :----------------------------------------------------------------------------------------- |
| O(1)        | Constant Time    | no loops                                                                                   |
| O(log n)    | Logarithmic Time | usually searching algorithms have log n if they are sorted (Binary Search)                 |
| O(n)        | Linear Time      | for loops, while loops through n items                                                     |
| O(n log(n)) | Log Linear Time  | usually sorting operations                                                                 |
| O(n^2)      | Quadratic Time   | every element in a collection needs to be compared to ever other element. Two nested loops |
| O(2^n)      | Exponential Time | recursive algorithms that solves a problem of size N                                       |
| O(n!)       | Factorial Time   | you are adding a loop for every element                                                    |

> Note: **Iterating through half a collection is still O(n)**. **Two separate collections: O(a \* b)**

### What Can Cause Time in a Function:

- Operations (+,-, \*, /)
- Comparisons (<, >, ===)
- Looping (for, while)
- Outside Function call (function())

### What Causes Space Complexity:

- Variables
- Data Structures
- Function Call
- Allocations

### Rule Book

1. Always worst Case
2. Remove Constants
3. - Different inputs should have different variables: `O(a + b)`
   - A and B arrays nested would be: `O(a * b)`.
4. Drop Non-dominant terms

> Note: + for steps in order. \* for nested steps

### What is good code ?

1. Readable - That others can be able to understand your code
2. Scalable - Big O allows us to measure if our code can be scalable

### How to measure time complexity & space complexity

```javascript
const names = ['Saul', 'Dan', 'Jhon', 'Jane', 'William', 'Sara'];

function findName(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'William') return true;
  }
  return false;
}

console.log(findName(names));

/*
  In big O we always measure the worst case

  Time Complexity: O(n)
    - for loop

  Space Complexity: O(1)
    - let i = 0;
*/
```
