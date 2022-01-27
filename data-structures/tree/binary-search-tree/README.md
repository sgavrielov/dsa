# Binary Search Tree

| Method | Time Complexity |
| :----- | --------------: |
| lookup |        O(log n) |
| insert |        O(log n) |
| delete |        O(log n) |

Rules:

- all child nodes in the tree to the right of the root node must be greater than the current node.
- all child nodes in the tree to the left of the root node must be less than the current node.
- node can only have up to two children.

| Pros             | Cons               |
| :--------------- | :----------------- |
| Better than O(n) | No O(1) operations |
| Ordered          |                    |
| Flexible Size    |                    |
