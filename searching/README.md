# Searching

- Linear Search
- Binary Search
- Breadth First Search (BFS)/Traversal
- Depth First Search (BFS)/Traversal

> The time complexity of BFS and DFS is O(n)

### Breadth First Search (BFS)

Example

```js
//       9
//   4      20
// 1   6 15   170

// BFS[9, 4, 20, 1, 6, 15, 170]
```

| Pros          | Cons        |
| :------------ | :---------- |
| Shortest Path | More Memory |
| Closer Nodes  |             |

### Depth First Search (DFS)

Example

```js
//       9
//   4      20
// 1   6 15   170

// BFS[9, 4, 1, 6, 20, 15, 170]
```

| Pros             | Cons         |
| :--------------- | :----------- |
| Less Memory      | Can Get Slow |
| Dose Path Exist? |              |
