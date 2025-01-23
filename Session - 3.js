//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.
//? Session Practice Questions:
//! Count vowels and consonants in a string.
function countVowelsAndConsonants(str) {
    const counter = { vowels: 0, consonants: 0, others: 0 };
    // console.log(str.length)
    for (let ind = 0; ind < str.length; ind++) {
        const char = str[ind];
        if ((char <= "Z" && char >= 'A') || (char <= 'z' && char >= 'a')) {
            if (char == 'A' || char == 'E' || char == "I" || char == "O" || char == "U" || char == 'a' || char == 'e' || char == "i" || char == "o" || char == "u") {
                counter.vowels++;
            } else {
                counter.consonants++;
            }
        } else counter.others++
    }
    return counter
}
//! Reverse a string.
function reverse(str) {
    let reversedStr = ""
    for (let ind = 0; ind < str.length; ind++) {
        reversedStr = str[ind] + reversedStr
    }
    return reversedStr;
}

//! Convert a string to lowercase/uppercase.
function toUpperCase(str) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const arr = [];
    for (let ind = 0; ind < str.length; ind++) {
        let currInd = lower.indexOf(str[ind])
        if (currInd != -1) {
            arr.push(upper[currInd]);
        } else {
            arr.push(str[ind]);
        }
    }
    return arr.join("")
}
function toLowerCase(str) {
    const arr = [];
    for (let ind = 0; ind < str.length; ind++)
        if (str[ind] <= 'Z' && str[ind] >= 'A')
            arr.push(String.fromCharCode(str.charCodeAt(ind) + 32))
        else
            arr.push(str[ind])
    return arr.join("")
}
//! Find the longest word in a sentence.
function longest(str) {
    let start = 0;
    let maxLen = 0;
    let maxStart = -1;
    let maxEnd = -1;
    let ind = 1;
    for (ind = 1; ind <= str.length; ind++) {
        if (ind == str.length || str[ind] == ' ') {
            const len = ind - start;
            if (len > maxLen) {
                maxLen = len;
                maxStart = start
                maxEnd = ind;
            }
            start = ind + 1;
        }
    }

    return str.substring(maxStart, maxEnd);
}
//! Check if a string is a palindrome.
// madam => madam
// malayalam => malayalam
// mom => mom
// dad => dad
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] != str[end]) return false;
        start++;
        end--;
    }
    return true;

}
//! Remove duplicates from a string.
function removeDuplicates(str) {
    let removedStr = "";
    for (let ind = 0; ind < str.length; ind++) {
        const char = str[ind];
        if (removedStr.indexOf(char) == -1) {
            removedStr += char;
        }
    }
    return removedStr;
}
//! Find all substrings of a given string.
function allSubStrings(str) {
    let arr = []
    for (let itr = 0; itr < str.length; itr++) {
        let temp = ""
        for (let ind = itr; ind < str.length; ind++) {
            temp += str[ind]
            arr.push(temp);
        }
    }
    return arr;
}

module.exports = { removeDuplicates, isPalindrome, countVowelsAndConsonants, reverse, toLowerCase, toUpperCase, longest, allSubStrings }
// // ? Post-Session Practice Questions:
// // todo Concatenate two strings.
// // todo Find the frequency of each character in a string.
// // todo Replace spaces in a string with %20.
// // todo Check if a string is an anagram of another.
// // todo Count the number of words in a sentence.
// // todo Find the first non-repeating character in a string.
// // todo Remove all vowels from a string.
// // todo Find the shortest word in a sentence.
// // todo Count occurrences of a substring within a string.
