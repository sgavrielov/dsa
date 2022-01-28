# Recursion

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
