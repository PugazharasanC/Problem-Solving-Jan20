//? Day 4: Arrays & Array Manipulations
//* Session Focus: Array creation, traversal, and manipulation techniques.
//? Session Practice Questions:
//! Find the maximum and minimum elements in an array.
function minAndMax(arr = []) {
    let min = arr[0], max = arr[0];
    for (let ind = 1; ind < arr.length; ind++) {
        if (arr[ind] < min) {
            min = arr[ind]
        }
        if (arr[ind] > max) {
            max = arr[ind]
        }
    }
    return { max, min }
}
//! Find the second - largest element in an array.
function secLargest(arr = []) {
    console.log(arr)
    let max = arr[0];
    let secMax = -Infinity;
    for (let ind = 1; ind < arr.length; ind++) {
        if (max < arr[ind]) {
            secMax = max;
            max = arr[ind];
        }
        else if (arr[ind] < max && arr[ind] > secMax) {
            secMax = arr[ind]
        }
    }
    return { max, secMax }
}

// console.log(secLargest(
//     Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
// ))
//! Sort an array of integers.
function sort(arr = []) { // selection sort
    for (let ind = 0; ind < arr.length; ind++) {
        let minInd = ind;
        for (let i = ind + 1; i < arr.length; i++) {
            if (arr[minInd] > arr[i])
                minInd = i;
        }
        if (ind !== minInd) {
            [arr[ind], arr[minInd]] = [arr[minInd], arr[ind]]
        }
    }
    return arr;
}
//! Rotate an array by one position.
function rotateOne(arr = []) { //
    console.log(arr)
    // arr.push(arr.shift())
    let temp = arr[0]
    for (let ind = 1; ind < arr.length; ind++) {
        arr[ind - 1] = arr[ind]
    }
    arr[arr.length - 1] = temp;
    console.log(arr)
    return arr;
}
//! Remove duplicates from a sorted array.
function removeDuplicates(arr = []) {
    let unique = [arr[0]]
    for (let ind = 1; ind < arr.length; ind++) {
        if (arr[ind - 1] != arr[ind]) {
            unique.push(arr[ind])
        }
    }
    return unique;
}
//! Calculate the sum of elements in an array.
function sum(arr = []) {
    let total = 0;
    for (let ind = 0; ind < arr.length; ind++) total += arr[ind]
    return total;
}
function rightSidedSum(arr = []) {
    let total = 0; //sum(arr);
    for (let ind = arr.length - 1; ind >= 0; ind--) {
        total += arr[ind]
        arr[ind] = total - arr[ind]
    }
    return arr
}
// console.log(rightSidedSum([1, 2, 3, 4, 5]))
//! Find the number of occurrences of an element in an array.
function findOcc(arr = [], elem = 2) { //arr[Math.floor(Math.random() * arr.length)]) {
    // console.log(arr, elem)
    let count = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] == elem) {
            count++;
        }
    }
    return { elem, count }
}
module.exports = { findOcc, rotateOne, sort, minAndMax, sum, secLargest, removeDuplicates }
//? Post - Session Practice Questions:
// todo Merge two sorted arrays. very imp
// todo Reverse the elements in an array.
// todo Rotate an array to the left by K positions. imp
// todo Search for an element in a sorted array.
// todo Find the cumulative sum of an array.
// todo Calculate the product of all elements in an array.
// todo Check if an array is a palindrome.
// todo Find the intersection of two arrays. imp
