// const { hollowSquare } = require("./Session - 2");
// const { allSubStrings } = require("./Session - 3")
const { findOcc } = require("./Session - 4");
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
  const arr = userInput[1].split(" ").map(Number);
  console.log(findOcc(arr));

  //end-here
});
