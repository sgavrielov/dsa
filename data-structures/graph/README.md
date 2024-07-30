# Data Structures - Graph

## Types of Graphs

- Directed
- Undirected

## Weighted Graph

Unweighted:

```javascript
const unweightedGraph = {
  1: [2, 3],
  2: [],
  3: [4],
  4: [2, 5],
  5: [6],
  6: [],
};
```

Weighted:

```javascript
const weightedGraph = {
  1: [2, 3], // 1 --> 2 = 12, 1 --> 3 = -2
  2: [],
  3: [4], // 3 --> 4 = 14
  4: [2, 5], // 4 --> 2 = 9, 4 --> 5 = 1
  5: [6], // 5 --> 6 = 10
  6: [],
};
```

Graph Data

```javascript
// Edge List
const edgeList = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
// index -> note
// value -> nodes neighbors
// Note -> the index of the array is the value of the actual Graph node
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
/*
  This matrix is simply going to have 0 & 1 indicating
  whether the Node x has a connection to Node y.
  0 - No
  1 - Yes
*/
const adjacentMatrix = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
```

| Pros          | Cons            |
| :------------ | :-------------- |
| Relationships | Scaling is hard |
