// ? Day 5: Searching Algorithms
// * Session Focus: Linear search and binary search techniques.
// ? Session Practice Questions:
// ! Implement a linear search to find an element in an array.

function linearSearch(arr = [], target = 100) {
    // time comp : O(n)
    let count = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        count++;
        if (arr[ind] == target) {
            return { ind, count };
        }
    }
    return {
        ind: - 1, count
    };
}
// ! Implement a binary search on a sorted array.
function binarySearch(arr = [], target) {
    // Array should be sorted
    // console.log(arr)
    let start = 0;
    let count = 0;
    let end = arr.length - 1;
    while (start <= end) {
        count++;
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return { ind: mid, count };
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return {
        ind: - 1, count
    };
}
// ! Find the first and last occurrence of a target in an array.
function firstAndLastOccurrence(arr = [], target) {
    // console.log(arr.join(", "), target)
    let obj = {
        first: -1,
        last: []
    }
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] == target) {
            if (obj.first == -1) {
                obj.first = ind;
            }
            obj.last.push(ind);
        }
    }
    return obj;
}
function firstAndLastOccurrenceInSorted(arr = [], target) {
    console.log(target)
    function binarySearch(arr, target, isFirst = false) {
        let start = 0;
        let end = arr.length - 1;
        let res = -1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (arr[mid] == target) {
                res = mid;
                if (isFirst) {
                    end = mid - 1;
                } else {
                    start = mid + 1
                }
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return res;
    }
    let first = binarySearch(arr, target, true);
    let last = binarySearch(arr, target, false);
    return { first, last }
}

// ! Search for a target in a rotated sorted array.
// [1, 2, 3, 4, 5, 6, 7]
// [4, 5, 6, 7, 1, 2, 3] 1
function searchInRotatedSortedArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        console.log(arr[mid], arr[start], arr[end], target)
        if (arr[mid] == target) {
            return mid;
        } else if (arr[start] < arr[mid]) {
            if (arr[start] <= target && target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (arr[mid] < target && target <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
// ! Count occurrences of a target using binary search.
function countOccurrences(arr, target) {
    const { first, last } = firstAndLastOccurrenceInSorted(arr, target);
    return last - first + 1;
}
// ! Find the index where an element should be inserted in a sorted array.
function findInsertionIndex(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}
// ! Find the peak element in a mountain array.
function peakElement(arr) {
    let start = 0; let end = arr.length - 1;
    while (start < end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}

console.log(peakElement([5, 3, 2, 2, 1]))

module.exports = { linearSearch, binarySearch, firstAndLastOccurrence, searchInRotatedSortedArray }

// todo Post - Session Practice Questions:
// todo Find the floor and ceiling of a target in a sorted array.
// todo Find the smallest missing element in a sorted array.
// todo Perform ternary search on a sorted array.
// todo Find the index of a target in an infinite array.
// todo Find the minimum element in a rotated sorted array.
// todo Count the frequency of elements using binary search.
// todo Find the closest element to a target in a sorted array.
// todo Implement an exponential search.
// todo Find the peak index in a bitonic array.
