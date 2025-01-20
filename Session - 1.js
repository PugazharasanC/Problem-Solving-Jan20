//? Day 1: Problem Statements & Systematic Approaches
//?* Session Focus: Interpreting problem statements, breaking down problems systematically.
//? Session Practice Questions:
// ? Determine if a number is positive or negative.
function classifyBalance(n) {
  return n < 0 ? "negative" : n > 0 ? "positive" : "zero";
}
// console.log(classifyBalance(-1));
// console.log(classifyBalance(0));
// console.log(classifyBalance(1));
// ? Find the sum of two integers.
function findSum(a, b) {
  return a + b;
}
// console.log(findSum(1, 2));
// ? Identify the maximum and minimum of three numbers.
function minMaxMid(a, b, c) {
  const obj = {};
  if (a >= b && a >= c) {
    obj.max = a;
  } else if (b >= a && b >= c) {
    obj.max = b;
  } else {
    obj.max = c;
  }

  if (a <= b && a <= c) {
    obj.min = a;
  } else if (b <= a && b <= c) {
    obj.min = b;
  } else {
    obj.min = c;
  }
  obj.mid = a + b + c - obj.max - obj.min;
  return obj;
}

function max(a, b) {
  return a < b ? b : a;
}
function min(a, b) {
  return a < b ? a : b;
}
function minMaxMid1(a, b, c) {
  const obj = {};
  obj.max = max(a, max(b, c));
  obj.min = min(a, min(b, c));
  obj.mid = a + b + c - obj.max - obj.min;
  return obj;
}

// console.log(minMaxMid(2, 2, 3));
// console.log(minMaxMid1(2, 2, 3));
// ? Count the number of digits in a number.
function countDigits(n) {
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    n = parseInt(n / 10);
    count++;
  }
  return count;
}
// console.log(countDigits(0));
// console.log(countDigits(1))
// console.log(countDigits(10));
// console.log(countDigits(200));
// console.log(countDigits(2000));
// console.log(countDigits(4145));
// ? Check if a string contains only alphabets.
// ! Calculate the area of a circle with a given radius.
function areaCircle(n) {
  return Math.PI * n * n;
}
console.log(areaCircle(1));
// ! Check if a character is a vowel.
function isVowel(char) {
    return "aeiouAEIOU".indexOf(char) != -1
//   return (
//     char == "a" ||
//     char == "e" ||
//     char == "i" ||
//     char == "o" ||
//     char == "u" ||
//     char == "A" ||
//     char == "E" ||
//     char == "I" ||
//     char == "O" ||
//     char == "U"
//   );
}
// // todo Post-Session Practice Questions:
// // todo Calculate the difference between two integers.
// // todo Check if a number is even or odd.
// // todo Calculate the perimeter of a rectangle.
// // todo Find the largest of four numbers.
// // todo Calculate the average of three numbers.
// // todo Count the number of vowels in a string.
// // todo Determine if a character is uppercase.
// // todo Print the reverse of a string.
// // todo Find the square of a number.
