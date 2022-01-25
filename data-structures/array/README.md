# Data Structures - Array

| Method | Time Complexity |
| :----- | --------------: |
| lookup |            O(1) |
| push   |            O(1) |
| pop    |            O(1) |
| insert |            O(n) |
| delete |            O(n) |

### Static Array

- static arrays is that they're fixed in size, meaning you need to specify the number of elements your array will hold.

### Dynamic Array

- can be O(n)
- dynamic array allow us to copy & rebuild an array at new location, witch with more memory, if we wanted more memory.

> Note: In JS, JS automatically resizing the array if it's needed to be resized.

| Pros          | Cons                                  |
| :------------ | :------------------------------------ |
| Fast lookup   | Slow insert                           |
| Fast push/pop | Slow deletes                          |
| Ordered       | Fixed sizes\* (if using static array) |
