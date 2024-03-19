// What is the Big O of the below function? (Hint, you may want to go line by line)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  for (let i = 0; i < input; ) {
    // let i = 0 O(1)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
    i += 1; // O(n)
  }

  for (let j = 0; j < input; ) {
    // let j = 0 O(1)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
    j += 1; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

/*
  Time Complexity: O(n)

  let's break it down
    6 + n + n + n + n + n + n + n
    6 + 5n
    Big(6 + 7n) -> O(n)
*/
