//? Day 6: Sorting Algorithms
//* Session Focus: Introduction to sorting algorithms: bubble sort, selection sort, and insertion sort.
//? Session Practice Questions:

//! Implement bubble sort on an array of integers.

// ASC => [num1, num2] => num1 <= num2
// DESC => [num1, num2] => num1 >= num2

// Comparitive sorting
// ? for asc, the first value should be lesser than the second value, i will take two values from the array, i will check those two, to check whether they are in proper order or not, if it is proper, then no issues, if the first value is larger, i will make a swap to get the smallest value in the first place

function bubbleSort(arr = []) {
    console.log("before :::", arr)
    let count = 0;
    for (let _ = 0; _ < arr.length - 1; _++) {
        let isSwapped = false;
        count++;
        for (let ind = 1; ind < arr.length; ind++) {
            if (arr[ind - 1] > arr[ind]) {
                let temp = arr[ind - 1];
                arr[ind - 1] = arr[ind];
                arr[ind] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped == false) break;
    }
    console.log("Count :::", count)
    console.log("after ::::", arr)
}

// bubbleSort(Array.from({ length: 10 }, (_, i) => Math.floor(Math.random() * 100)*i))

//! Sort an array using selection sort.
function selectionSort(arr = []) {
    console.log(arr)
    for (let ind = 0; ind < arr.length; ind++) {
        let minInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[minInd] > arr[ind1]) {
                minInd = ind1;
            }
        }
        if (minInd != ind) {
            arr[ind] = arr[ind] + arr[minInd]
            arr[minInd] = arr[ind] - arr[minInd]
            arr[ind] = arr[ind] - arr[minInd]
        }
    }
    console.log(arr)
}
// selectionSort(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
//! Sort an array of integers in descending order.

function selectionSortDESC(arr = []) {
    console.log(arr)
    for (let ind = 0; ind < arr.length; ind++) {
        let maxInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[maxInd] < arr[ind1]) {
                maxInd = ind1;
            }
        }
        if (maxInd != ind) {
            arr[ind] = arr[ind] + arr[maxInd]
            arr[maxInd] = arr[ind] - arr[maxInd]
            arr[ind] = arr[ind] - arr[maxInd]
        }
    }
    console.log(arr)
}
function bubbleSortDESC(arr = []) {
    console.log("before :::", arr)
    let count = 0;
    for (let _ = 0; _ < arr.length - 1; _++) {
        let isSwapped = false;
        count++;
        for (let ind = 1; ind < arr.length; ind++) {
            if (arr[ind - 1] < arr[ind]) {
                let temp = arr[ind - 1];
                arr[ind - 1] = arr[ind];
                arr[ind] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped == false) break;
    }
    console.log("Count :::", count)
    console.log("after ::::", arr)
}
// bubbleSortDESC(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
//! Implement insertion sort on an array of integers.
function insertionSort(arr = []) {
    console.log(arr)
    for (let ind = 1; ind < arr.length; ind++) {

        let val = arr[ind];
        let ind1
        for (ind1 = ind - 1; ind1 >= 0; ind1--) {
            if (val < arr[ind1]) {
                arr[ind1 + 1] = arr[ind1];
            } else break;
        }
        arr[ind1 + 1] = val;
    }
    console.log(arr)
}
// insertionSort(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
//! Find the median of a sorted array.
function findMedian(arr = []) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 == 0) {
        return (arr[mid] + arr[mid - 1]) / 2
    } else {
        return arr[mid]
    }
}

console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])) // 10
//! Sort an array of 0s, 1s, and 2s(Dutch National Flag problem).
function sort012(arr = []) {
    console.log(arr)
    let left = 0, mid = 0;
    let right = arr.length - 1;
    while (mid <= right) {
        if (arr[mid] == 0) {
            [arr[left], arr[mid]] = [arr[mid], arr[left]]
            left++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        }
        else {
            [arr[mid], arr[right]] = [arr[right], arr[mid]]
            right--;
        }
    }
    console.log(arr)

}
// sort012(Array.from({ length: 15 }, () => Math.floor(Math.random() * 3)))
//! Sort an array of strings by their lengths.
function getString(len) {
    let str = "";
    for (let _ = 0; _ < len; _++) {
        str += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    return str;
}
function sortStr(arr = []) {
    console.log(arr)
    for (let ind = 0; ind < arr.length; ind++) {
        let maxInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[maxInd].length > arr[ind1].length) {
                maxInd = ind1;
            }
        }
        if (maxInd != ind) {
            [arr[ind], arr[maxInd]] = [arr[maxInd], arr[ind]]
        }
    }
    console.log(arr)
}
console.log(
   sortStr( Array.from({ length: 5 }, () => getString(Math.floor(Math.random() * 10))))
        // .sort((a, b) => a.length - b.length)
)


module.exports = {}

// ? Post - Session Practice Questions:
// todo Sort an array using merge sort.
// todo Implement quicksort on an array of integers.
// todo Sort a nearly sorted array(where each element is at most k places away from its target position).
// todo Perform a bucket sort on an array of decimals.
// todo Sort an array of integers by frequency of elements.
// todo Sort an array of strings lexicographically.
// todo Sort an array using heap sort.
// todo Sort a matrix row-wise and column - wise.
// todo Find the kth smallest element in an array.
// todo Sort an array containing negative and positive numbers, with negatives coming first.
