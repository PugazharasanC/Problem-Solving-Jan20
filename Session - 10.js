// ? Day 10: Advanced Techniques & Recap
// * Session Focus: Recap of Two - Pointer Technique, Sliding Window, Fast & Slow Pointers, and Hashing.
// ? Session Practice Questions:
// ! Find two numbers in a sorted array that add up to a target sum(two - pointer).
function targetSum(arr, target) {
    //? Time Complexity O(n**2)
    // for (let ind1 = 0; ind1 < arr.length; ind1++) {
    //     for (let ind2 = ind1 + 1; ind2 < arr.length; ind2++) {
    //         if (arr[ind1] + arr[ind2] === target) {
    //             return [ind1 + 1, ind2 + 1]
    //         }
    //     }
    // }
    // ? Time complexity O(n)
    let left = 0;
    let right = arr.length - 1;
    let res = [-1, -1]
    while (left < right) {
        if (arr[left] + arr[right] == target) {
            return [left + 1, right + 1]

        } else if (arr[left] + arr[right] > target) {
            right--;
        } else {
            left++;
        }
    }
    return -1;
}

// ? Find the length of the longest substring without repeating characters(sliding window).
function longestSubString(str) {
    let set = new Set();
    let left = 0;
    let max = 0;
    for (let ind = 0; ind < str.length; ind++) {
        let char = str[ind];

        while (set.has(char)) {
            set.delete(str[left++]);
        }
        set.add(char)
        if (set.size > max) {
            console.log(set)
            max = set.size
        }
    }
    return max;
}
// console.log(longestSubString("Check if a linked list has a cycle(fast & slow pointers)"))
// ? Check if a linked list has a cycle(fast & slow pointers).
// ? Find the first non - repeating character in a string(hashing).
function firstNonRepeatingChar(str) {
    let map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let char of str) {
        if (map.get(char) === 1) {
            return char;
        }
    }
    return -1;
}
// firstNonRepeatingChar("abacabad")
// ? Find the maximum sum of a subarray of size k(sliding window).
function maxSumSubArray(arr, k) {
    let sum = 0;
    let max = -Infinity;
    let left = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        sum += arr[ind];
        // console.log(subarray)
        if (ind >= k - 1) {
            max = Math.max(sum, max);
            sum -= arr[left++];
        }
    }
    return max;
}

// console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3))
// ! Check if a permutation of one string is a substring of another(hashing).
function checkInclusion(str1, str2) {
    if (str1.length > str2.length) return false;

    const getAscii = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    // Fill arr1 with frequency of characters in str1
    for (let char of str1) {
        arr1[getAscii(char)]++;
    }

    // Fill arr2 with frequency of the first window in str2
    for (let i = 0; i < str1.length; i++) {
        arr2[getAscii(str2[i])]++;
    }

    // If the first window matches the frequency of str1, return true
    if (arr1.every((count, index) => count === arr2[index])) {
        return true;
    }

    // Slide the window over str2
    for (let i = str1.length; i < str2.length; i++) {
        arr2[getAscii(str2[i])]++; // Include the new character in the window
        arr2[getAscii(str2[i - str1.length])]--; // Remove the old character from the window

        // Compare the frequency arrays
        if (arr1.every((count, index) => count === arr2[index])) {
            return true;
        }
    }

    return false;
}

// console.log(checkInclusion("set", "longest"));
// ! Merge two sorted arrays without using extra space (two - pointer).
function merge(arr1 = [], arr2 = []) {
    let ind1 = arr1.length - 1;
    let ind2 = 0;
    while (ind1 >= 0 && ind2 < arr2.length) {
        if (arr1[ind1] > arr2[ind2]) {
            [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]]
            ind1--;
            ind2++;
        } else {
            ind1--;
        }
    }
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    console.log(arr1, arr2)
}
// merge([1, 2, 7], [2, 5, 6]) // [1,2,2,3,5,6]
// ? Find all triplets in an array that sum up to zero(two - pointer).
function triplets(arr = []) {
    arr.sort((a, b) => a - b);
    console.log(arr)
    let res = [];
    for (let ind = 0; ind < arr.length; ind++) {
        if (ind > 0 && arr[ind] == arr[ind - 1]) continue;
        let left = ind + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[left] + arr[right] + arr[ind];
            if (sum == 0) {
                res.push([arr[left], arr[right], arr[ind]])
                left++;
                while (left < right && arr[left] == arr[left - 1])
                    left++;
                while (left < right && arr[right] == arr[right + 1])
                    right--;
            }
            else if (sum > 0) right--;
            else left++;
        }
    }
    return res
}
// console.log(triplets([-1, 0, 1, -1, 2, -1, -4]))
// ? Find the maximum length of a subarray with equal 0s and 1s(sliding window).
function maxLength(arr = []) {
    const map = new Map();
    let sum = 0;
    let max = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        sum += arr[ind] == 0 ? -1 : 1;
        if (sum == 0) {
            max = ind + 1;
        }
        console.log(sum, max)
        if (map.has(sum)) {
            max = Math.max(max, ind - map.get(sum))
        } else {
            map.set(sum, ind)
        }
    }
    return max;
}
console.log(maxLength([1, 0, 1, 1, 0]))
// todo Post - Session Practice Questions:
// todo Find the first missing positive integer in an array(hashing).
// todo Count the number of subarrays with a sum equal to zero(sliding window).
// todo Check if an array contains duplicate elements within k distances(sliding window).
// todo Find the longest subarray with a sum equal to k(sliding window).
// todo Find the longest mountain in an array(two - pointer).
// todo Sort an array by the parity of elements(two - pointer).
// todo Find all pairs in an array with a difference equal to a target value(two - pointer).
// todo Find the longest subarray with at most two distinct characters(sliding window).
// todo Find the first non - repeating element in a stream of characters(hashing).
// todo Merge two sorted arrays without using extra space (two - pointer).
// todo Find the largest subarray with a sum less than or equal to a given value(sliding window).
