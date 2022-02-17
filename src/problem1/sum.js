// Method 1: For-Loop
const sum_to_n_a = function (n) {
  sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Method 2: Arithmetic Series / Partial Sum
const sum_to_n_b = function (n) {
  sum = (n * (n + 1)) / 2;
  return sum;
};

// Method 3: Recursion
const sum_to_n_c = function (n) {
  let sum = 0;
  if (n === 0) {
    return 0;
  }
  sum = sum + sum_to_n_c(n - 1);
  return sum + n;
};
