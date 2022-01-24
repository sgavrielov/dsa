# Data Structures & Algorithms

## Big-O Notation

- O(1) -> Constant Time
- O(n) -> Linear Time
- O(n^2) -> Ouadratic Time
- O(n!) -> Factorial Time

### What can cause time in a function

- Operations (+, -, \*, /)
- Comparisions (<, >, ===)
- Looping (for, while)
- Outside Functions call (function())

### Rule Book

1. Worst Case
2. Remove Constants
3. Different terms for inputs
4. Drop Non Dominants

---

## Space Complexity

### What cause space complexity

- Variables
- Data Structures
- Function Call
- Allocations

## Data Structures

- Array

## Classes In JavaScript

#### Reference Type

```js
const object1 = { value: 10 };
const object2 = object1; // reference
const object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false
```

#### Context vs Scope

```js
// scope
function a() {
  let b = 4;
}
console.log(b); // Error: Uncaught ReferenceType: b is not defined
```

#### Instantation

```js
class Player {
  constructor(name, type) {
    console.log('player', this); // player Wizard {}
    this.name = name;
    this.type = type;
  }

  introduce() {
    return `Hi I'm ${this.name}, I'm a ${this.type}`;
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // Error: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // console.log('wizard', this);

    super(name, type);
    console.log('wizard', this); // wizard Wizard { name: 'Saul', type: 'Dark Magic' }
  }

  play() {
    return `Weeeee I'm a ${this.type}`;
  }
}

const wizard = new Wizard('Saul', 'Dark Magic');

console.log(wizard.play()); // Weeeee I'm a Dark Magic
console.log(wizard.introduce()); // Hi I'm Saul, I'm a Dark Magic
```
