// Day 18: Algorithms

// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // Logs [2, 3, 4, 5, 8]

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // Logs [2, 3, 4, 5, 8]

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2])); // Logs [2, 3, 4, 5, 8]

// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([5, 3, 8, 4, 2], 4)); // Logs 3

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([2, 3, 4, 5, 8], 4)); // Logs 2

// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

console.log(countOccurrences('hello')); // Logs { h: 1, e: 1, l: 2, o: 1 }

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstringWithoutRepeatingChars(str) {
    let maxLength = 0;
    let currentSubstring = '';
    for (let char of str) {
        let index = currentSubstring.indexOf(char);
        if (index !== -1) {
            currentSubstring = currentSubstring.slice(index + 1);
        }
        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    return maxLength;
}

console.log(longestSubstringWithoutRepeatingChars('abcabcbb')); // Logs 3

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Logs [4, 5, 1, 2, 3]

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Logs [1, 2, 3, 4, 5, 6]

// Activity 5: Dynamic Programming (Optional)

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacciDP(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacciDP(10)); // Logs 55

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

console.log(knapsack([60, 100, 120], [10, 20, 30], 50)); // Logs 220
