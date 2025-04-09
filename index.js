function factorial(n) {
  let sum = 2;
  for (let i = 2; i <= n; i++) {
    sum *= i
  }
  return sum
}

console.log(factorial(29))
