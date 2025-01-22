//? Day 2: Maths & Pattern Creation
//* Session Focus: Solving fundamental math problems and creating patterns.
//? Session Practice Questions:
// ! Calculate the factorial of a number.
function factorial(n) {
  let ans = 1;
  for (let val = n; val > 0; val--) {
    ans = ans * val;
  }
  return ans;
}

// ! Generate the Fibonacci sequence up to N terms.
function fibonacci(n) {
  let arr = [];
  if (n > 0) arr.push(0);
  if (n > 1) arr.push(1);
  if (n > 2)
    for (let ind = 2; ind < n; ind++) {
      arr.push(arr[ind - 1] + arr[ind - 2]);
    }
  return arr;
}
// ! Check if a number is prime.
function isPrime(n) {
  let count = 0;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let fact = 3; fact * fact <= n; fact += 2) {
    count++;
    if (n % fact == 0) {
      return [count, false];
    }
  }
  return [count, true];
}
// ! Sum of digits in a number.
function sumOfDigits(n) {
  let sum = 0;
  if (n < 0) n = -n;
  while (n > 0) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}
// ! Check if a number is a palindrome.
function isPalindrome(n) {
  let rev = 0;
  let temp = n;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev == temp;
}
// ! Print a right-angled triangle pattern of asterisks.
function rightAngledTriangle(n) {
    for (let row = 0; row < n; row++){
        let arr = []
        for (let col = 0; col <= row; col++)
            arr.push('*')
        console.log(arr.join(''));
    }
}
// ! Print a hollow square pattern.
function hollowSquare(n) {
    for (let row = 0; row < n; row++){
        let arr = []
        for (let col = 0; col < n; col++){
            if (row == col || col == n - row - 1)
                arr.push('*')
            else
                arr.push(" ")
        }
        console.log(arr.join(""));
    }
}
module.exports = {hollowSquare, factorial, fibonacci, isPrime, sumOfDigits, isPalindrome, rightAngledTriangle };
// Post-Session Practice Questions:
// todo Find the LCM of two numbers.
// todo Generate a pyramid pattern of numbers.
// todo Calculate the GCD of two numbers.
// todo Print an inverted triangle pattern of stars.
// todo Check if two numbers are coprime.
// todo Print a diamond pattern of stars.
// todo Print Pascal’s triangle up to N rows.
// todo Find all divisors of a number.
// todo Print a checkerboard pattern.
