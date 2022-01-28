# Recursion

> **Anything you do with a recursion CAN be done iteratively (loop)**

Anatomy Of Recursion:

```javascript
let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) return 'done!';
  counter++;
  return inception();
}

inception(); // 01234 -> done!
```

### Rules

- Identify the base case.
- Identify the recursive case.
- Get closer and closer and return when needed. Usually you have 2 returns.

### When to use recursion

- When it gets to complicated problems like traversing or searching through trees or graphs.
- When we are sorting through items, there's also cases that recursion can be preferred.

### Every time you are using a tree or converting Something into a tree, consider recursion.

1. Divided into a number of subproblems that are smaller instances of the same problem.
2. Each instance of the subproblem is identical in nature.
3. The solutions of each subproblem can be combined to solve the problem at hand.

**Divide and Conquer using Recursion**

| Pros                        | Cons        |
| :-------------------------- | :---------- |
| DRY (don't repeat yourself) | Large Stack |
| Readability                 |             |

[Tail call optimization in ECMAScript 6](https://2ality.com/2015/06/tail-call-optimization.html)
