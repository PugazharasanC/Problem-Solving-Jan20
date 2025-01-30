// ? Day 7: Stacks, Queues & Recursion
// * Session Focus: Stack and queue operations, recursive problem - solving techniques.
// ? Session Practice Questions:
// ! Implement a stack using an array.
class Stack {
    constructor(size) {
        this.stack = [];
        this.size = size;
    }

    push(element) { // insertion
        if (this.stack.length == this.size) {
            throw new Error("Stack Overflow");
        }
        this.stack.push(element);
    }

    pop() { // deletion
        if (this.stack.length == 0) {
            throw new Error("Stack Underflow");
        }
        return this.stack.pop();
    }

    peek() { // checking which element is going to poped next
        return this.stack[this.stack.length - 1];
    }

    displayStack() { // for understanding
        return (`[${this.stack.join()}]`)
    }
}

// const myStack = new Stack(5);
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// console.log(myStack.displayStack())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
// // console.log(myStack.pop())
// console.log(myStack.displayStack())
// myStack.push(5);
// myStack.push(6);
// myStack.push(7);
// myStack.push(8);
// myStack.push(9);
// console.log(myStack.displayStack())
// myStack.push(10)


// ! Check for balanced parentheses in an expression.
function checkBalancedParentheses(expression = "") {
    const stack = [];
    const obj = {
        '}': "{", ")": "(", "]": "["
    }
    for (let char of expression) {
        if (char == "{" || char == "[" || char == "(") {
            stack.push(char);
        } else {
            if (stack.length == 0 || stack.pop() != obj[char])
                return false;
        }
    }
    return stack.length == 0;
}

// const testCases = [
//     "()",        // Expected output: true
//     "({[]})",    // Expected output: true
//     "({[})",     // Expected output: false
//     "{[}",       // Expected output: false
//     "((()))",    // Expected output: true
//     "",          // Expected output: true (empty string is balanced)
//     "(((((((((",  // Expected output: false
//     ")))",       // Expected output: false
// ];

// testCases.forEach(testCase => {
//     console.log(`Input: "${testCase}" => Result: ${checkBalancedParentheses(testCase)}`);
// });
// ! Reverse a string using a stack.
function reverse(str = "") {
    const stack = []
    for (let chr of str) {
        stack.push(chr)
    }
    let rev = []
    while (stack.length) {
        rev.push(stack.pop())
    }
    return rev.join("")
}
// console.log(reverse("Hello World"))
// console.log(reverse("Hello World 1234567890"))
// ! Implement a queue using two stacks.
class Queue {
    // Queue using array
    constructor() {
        this.arr = []
    }

    enqueue(element) { // insertion
        this.arr.push(element)
        // this.arr.unshift(element)
    }

    dequeue() { // deletion
        if (this.arr.length == 0) {
            throw new Error("Queue Underflow")
        }
        return this.arr.shift() // using shift, as we use push for insertion
        // return this.arr.pop() // using pop, as we use unshift for insertion
    }

    peek() { // checking which element is going to enqueued next
        return this.arr[0]
        // return this.arr[this.arr.length-1] // if we used unshift for insertion
    }
}

// const myQueue = new Queue()
// myQueue.enqueue(1)
// myQueue.enqueue(2)
// myQueue.enqueue(3)
// myQueue.enqueue(4)
// myQueue.enqueue(5)
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())

function queueUsingStack() {
    const stack1 = [];// going to have all the values
    // temp stack used for dequeue and peek
    return {
        enqueue: (element) => stack1.push(element),
        dequeue: () => {
            const stack2 = [];
            if (stack1.length == 0) {
                throw new Error("Queue Underflow")
            }
            while (stack1.length) {
                stack2.push(stack1.pop())
            }
            const element = stack2.pop()
            while (stack2.length) {
                stack1.push(stack2.pop())
            }
            return element;
        },
        peek: () => {
            const stack2 = [];
            if (stack1.length == 0) {
                throw new Error("Queue Underflow")
            }
            while (stack1.length) {
                stack2.push(stack1.pop())
            }
            const element = stack2[stack2.length - 1]
            while (stack2.length) {
                stack1.push(stack2.pop())
            }
            return element;
        }
    }
}
// const myQueue = queueUsingStack()
// myQueue.enqueue(1)
// myQueue.enqueue(2)
// myQueue.enqueue(3)
// myQueue.enqueue(4)
// myQueue.enqueue(5)
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())

// ! Find the next greater element for each array element.
function nextGreaterElement(arr = []) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            let index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i)
    }
    return result;
}

// const testCases = [
//     [4, 5, 2, 10],       // Expected output: [5, 10, 10, -1]
//     [1, 3, 2, 4],        // Expected output: [3, 4, 4, -1]
//     [10, 9, 8, 7],       // Expected output: [-1, -1, -1, -1]
//     [1, 2, 3, 4, 5],     // Expected output: [2, 3, 4, 5, -1]
//     [5, 4, 3, 2, 1],     // Expected output: [-1, -1, -1, -1, -1]
//     [],                  // Expected output: []
// ];

// testCases.forEach(testCase => {
//     console.log(`Input: [${testCase}] => Next Greater Elements: [${nextGreaterElement(testCase)}]`);
// });

// ! Evaluate a postfix expression using a stack.
function evaluatePostfix(expression = []) {
    try {

        const stack = new Stack();
        for (let val of expression) {
            if (val == "+" || val == "-" || val == "*" || val == "/") {
                let val1 = stack.pop();
                let val2 = stack.pop();
                switch (val) {
                    case "+": stack.push(val1 + val2); break;
                    case "-": stack.push(val2 - val1); break;
                    case "*": stack.push(val1 * val2); break;
                    case "/": stack.push(Math.floor(val2 / val1)); break;
                }
            } else {
                stack.push(Number(val))
            }
        }
        return stack.pop();
    } catch (err) {
        return "Invalid expression"
    }
}

const testCases = [
    // Example 1: Simple addition and multiplication
    {
        input: ["2", "1", "+", "3", "*"],
        expected: 9
    },
    // Example 2: Division followed by addition
    {
        input: ["4", "13", "5", "/", "+"],
        expected: 6
    },
    // Example 3: Subtraction and multiplication
    {
        input: ["10", "6", "9", "3", "/", "-", "*"],
        expected: 30
    },
    // Example 4: Single number, no operators
    {
        input: ["5"],
        expected: 5
    },
    // Example 5: More complex expression with multiple operators
    {
        input: ["2", "3", "4", "*", "+", "5", "-"],
        expected: 9
    },
    // Example 6: Single operator, simple expression
    {
        input: ["3", "2", "+"],
        expected: 5
    },
    // Example 7: Expression resulting in zero
    {
        input: ["2", "3", "-", "4", "*"],
        expected: -4
    },
    // Example 8: Negative numbers and division
    {
        input: ["10", "3", "/", "4", "5", "*", "-"],
        expected: -17
    },
    // Example 9: Integer division, rounding down toward zero
    {
        input: ["7", "3", "/"],
        expected: 2 // Integer division, so 7 // 3 is 2
    },
    // Example 10: A longer sequence of operations
    {
        input: ["5", "1", "2", "+", "4", "*", "+", "3", "-"],
        expected: 14
    },
    // Edge Case 1: Empty input (edge case, should ideally handle gracefully)
    {
        input: [],
        expected: "Invalid expression" // Assuming you handle this case.
    },
    // Edge Case 2: Complex expression with mixed operations and negative result
    {
        input: ["3", "4", "+", "2", "*", "7", "/"],
        expected: 2
    },
];

// testCases.forEach(({ input, expected }, index) => {
//     const result = evaluatePostfix(input);  // replace with your actual function
//     console.log(`Test Case ${index + 1}:`);
//     console.log(`Input: ${input}`);
//     console.log(`Expected: ${expected}`);
//     console.log(`Result: ${result}`);
//     console.log(`Pass: ${result === expected}`);
//     console.log('---');
// });

// ! Design a browser’s forward and backward navigation (stack - based).

function BrowserHistory() {
    const forwardStack = []
    const backwardStack = [];
    return {
        visit: (url) => {
            backwardStack.push(url);
            forwardStack.length = 0
            return `Visiting ${url}`
        },
        back: (steps) => {
            while (steps-- && backwardStack.length) {
                forwardStack.push(backwardStack.pop())
            }
            return backwardStack[backwardStack.length - 1]
        },
        forward: (steps) => {
            while (steps-- && forwardStack.length) {
                backwardStack.push(forwardStack.pop())
            }
            return backwardStack[backwardStack.length - 1]
        }
    }
}


// history = BrowserHistory()
// console.log(history.visit("google.com"))  // Visit "google.com"
// console.log(history.visit("facebook.com"))  // Visit "facebook.com"
// console.log(history.visit("youtube.com"))  // Visit "youtube.com"

// console.log(history.back(1))  // Should return "facebook.com"
// console.log(history.back(1))  // Should return "google.com"
// console.log(history.forward(1))  // Should return "facebook.com"
// console.log(history.visit("linkedin.com"))  // Visit "linkedin.com"
// console.log(history.back(2))  // Should return "google.com"
// console.log(history.forward(1))  // Should return "facebook.com"
// console.log(history.forward(1))  // Should return "facebook.com"

// // todo Post - Session Practice Questions:
// // todo Implement a circular queue.
// // todo Sort a stack using recursion.
// // todo Find the maximum element in a stack in constant time.
// // todo Design a data structure supporting min, max, push, and pop in constant time.
// // todo Reverse the first k elements of a queue.
// // todo Implement a priority queue.
// // todo Find the minimum element in a stack.
// // todo Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.
// // todo Design a system that supports efficient insertion and retrieval of most recent elements(deque).



//! recursion

function fact(n) {
    console.log("Enter fact with value", n);
    let ans;
    if (n == 0) { ans = 1; }
    if (n == 1) {ans =  1;}
    else ans = n * fact(n - 1);
    console.log("Ending fact with value", ans, "for", n);
    return ans;
}

console.log(fact(5))