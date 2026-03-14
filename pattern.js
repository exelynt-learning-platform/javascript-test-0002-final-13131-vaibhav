// Helper: factorial of n
function factorial(n) {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// Helper: binomial coefficient C(n, k)
function nCr(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

// Print the pattern: 5 rows, one leading space per row, one space between numbers
for (let row = 1; row <= 5; row++) {
  let line = "";

  // Leading spaces (row 1: 0, row 2: 1, ...)
  for (let s = 1; s < row; s++) {
    line = line + " ";
  }

  // Numbers with single space between
  let n = 5 - row;
  for (let k = 0; k <= n; k++) {
    if (k > 0) line = line + " ";
    line = line + nCr(n, k);
  }

  console.log(line);
}
