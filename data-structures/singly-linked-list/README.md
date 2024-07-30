# Data Structures - Singly Linked List

| Method  | Time Complexity |
| :------ | --------------: |
| prepend |            O(1) |
| append  |            O(1) |
| lookup  |            O(n) |
| insert  |            O(n) |
| delete  |            O(n) |

## What is a pointer ?

A pointer is simply a reference to another place in memory or another object or another node.

Example:

```javascript
const obj1 = { a: true };
const obj2 = obj1; // reference to another object (obj1)
```

| Pros           | Cons        |
| :------------- | :---------- |
| Fast Insertion | Slow Lookup |
| Fast Deletion  | More Memory |
| Ordered        |             |
| Flexible Size  |             |
