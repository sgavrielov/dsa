let calculations = 0;
function fibonacci() {
  const cache = {};
  return function fib(n) {
    calculations++;
    if (n < 2) return n;
    if (n in cache) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

console.log(`DP: ${fibonacci()(10)} -> Calculations: ${calculations}`);
