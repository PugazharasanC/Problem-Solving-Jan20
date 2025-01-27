// const { hollowSquare } = require("./Session - 2");
// const { allSubStrings } = require("./Session - 3")
const { sort } = require("./Session - 4");
const { searchInRotatedSortedArray } = require("./Session - 5");
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const [n, target] = userInput[0].split(" ").map(Number);
  const arr = userInput[1].split(" ").map(Number);
  console.log(target)
  console.log(searchInRotatedSortedArray(arr, target));

  //end-here
});
