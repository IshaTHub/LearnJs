// ================================
// DAY 1: ARRAY BASICS IN JAVASCRIPT
// ================================

// ==================
// 1. ARRAY FUNDAMENTALS
// ==================

// Array Creation
let arr1 = [1, 2, 3, 4, 5];           // Literal notation
let arr2 = new Array(1, 2, 3, 4, 5);  // Constructor (less common)
let arr3 = Array.from([1, 2, 3]);     // From another array/iterable

console.log("Basic Arrays:", arr1, arr2, arr3);

// Array Properties
console.log("Length:", arr1.length);  // O(1) operation

// Array Indexing (0-based)
console.log("First element:", arr1[0]);           // O(1)
console.log("Last element:", arr1[arr1.length - 1]); // O(1)
console.log("Negative indexing doesn't work:", arr1[-1]); // undefined

// ==================
// 2. ESSENTIAL ARRAY METHODS
// ==================

let numbers = [1, 2, 3, 4, 5];

// ITERATION METHODS
// forEach - executes function for each element
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map - creates new array with transformed elements
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// filter - creates new array with elements that pass test
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens); // [2, 4]

// find - returns first element that satisfies condition
let found = numbers.find(num => num > 3);
console.log("First number > 3:", found); // 4

// MODIFICATION METHODS
let modArray = [1, 2, 3];
modArray.push(4);        // Add to end - O(1)
modArray.unshift(0);     // Add to beginning - O(n)
console.log("After push/unshift:", modArray); // [0, 1, 2, 3, 4]

let popped = modArray.pop();      // Remove from end - O(1)
let shifted = modArray.shift();   // Remove from beginning - O(n)
console.log("Popped:", popped, "Shifted:", shifted);
console.log("After pop/shift:", modArray); // [1, 2, 3]

// ==================
// 3. TIME & SPACE COMPLEXITY
// ==================

/*
ARRAY OPERATIONS COMPLEXITY:
- Access by index: O(1)
- Search (linear): O(n)
- Insertion at end: O(1)
- Insertion at beginning/middle: O(n)
- Deletion at end: O(1)
- Deletion at beginning/middle: O(n)
*/

// ==================
// 4. COMMON PATTERNS FOR DSA
// ==================

// Pattern 1: Nested loops for comparisons
function hasSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
}

// Pattern 2: Hash map for O(1) lookups
function hasSumOptimized(arr, target) {
    let seen = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (seen.has(complement)) {
            return true;
        }
        seen.set(arr[i], i);
    }
    return false;
}

// Pattern 3: Running totals/accumulation
function runningSum(arr) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }
    return result;
}

// ==================
// PROBLEM 1: TWO SUM
// ==================

/*
Problem: Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

Example: nums = [2,7,11,15], target = 9
Output: [0,1] because nums[0] + nums[1] = 2 + 7 = 9
*/

// Solution 1: Brute Force - O(n²) time, O(1) space
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // No solution found
}

// Solution 2: Hash Map - O(n) time, O(n) space
function twoSum(nums, target) {
    let map = new Map(); // or use object: let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        // Check if complement exists in map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store current number and its index
        map.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Test Two Sum
console.log("\n=== TWO SUM TESTS ===");
console.log(twoSum([2, 7, 11, 15], 9));     // [0, 1]
console.log(twoSum([3, 2, 4], 6));          // [1, 2]
console.log(twoSum([3, 3], 6));             // [0, 1]

// ==================
// PROBLEM 2: RUNNING SUM OF 1D ARRAY
// ==================

/*
Problem: Given an array nums, return the running sum of nums.
Running sum: runningSum[i] = sum(nums[0]…nums[i])

Example: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: [1, 1+2, 1+2+3, 1+2+3+4] = [1,3,6,10]
*/

// Solution 1: New Array - O(n) time, O(n) space
function runningSum1(nums) {
    let result = [];
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    
    return result;
}

// Solution 2: In-place modification - O(n) time, O(1) space
function runningSum2(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}

// Solution 3: Using map() - O(n) time, O(n) space
function runningSum3(nums) {
    let sum = 0;
    return nums.map(num => sum += num);
}

// Test Running Sum
console.log("\n=== RUNNING SUM TESTS ===");
console.log(runningSum1([1, 2, 3, 4]));     // [1, 3, 6, 10]
console.log(runningSum2([1, 1, 1, 1, 1]));  // [1, 2, 3, 4, 5]
console.log(runningSum3([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]

// ==================
// PROBLEM 3: FIND NUMBERS WITH EVEN NUMBER OF DIGITS
// ==================

/*
Problem: Given an array nums of integers, return how many of them 
contain an even number of digits.

Example: nums = [12,345,2,6,7896]
Output: 2
Explanation: 12 has 2 digits (even), 345 has 3 digits (odd), 
2 has 1 digit (odd), 6 has 1 digit (odd), 7896 has 4 digits (even)
*/

// Helper function: Count digits in a number
function countDigits(num) {
    // Method 1: Convert to string
    return Math.abs(num).toString().length;
    
    // Method 2: Mathematical approach
    // return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Solution 1: Using string conversion - O(n*m) where m is avg digits
function findNumbers1(nums) {
    let count = 0;
    
    for (let num of nums) {
        let digitCount = num.toString().length;
        if (digitCount % 2 === 0) {
            count++;
        }
    }
    
    return count;
}

// Solution 2: Using filter and map - O(n*m)
function findNumbers2(nums) {
    return nums.filter(num => num.toString().length % 2 === 0).length;
}

// Solution 3: Mathematical approach - O(n*log(m))
function findNumbers3(nums) {
    let count = 0;
    
    for (let num of nums) {
        let digits = Math.floor(Math.log10(Math.abs(num))) + 1;
        if (digits % 2 === 0) {
            count++;
        }
    }
    
    return count;
}

// Solution 4: One-liner with reduce
function findNumbers4(nums) {
    return nums.reduce((count, num) => 
        count + (num.toString().length % 2 === 0 ? 1 : 0), 0);
}

// Test Find Numbers with Even Digits
console.log("\n=== FIND NUMBERS WITH EVEN DIGITS TESTS ===");
console.log(findNumbers1([12, 345, 2, 6, 7896]));    // 2
console.log(findNumbers2([555, 901, 482, 1771]));    // 1
console.log(findNumbers3([1, 22, 333, 4444, 55555])); // 2

// ==================
// KEY TAKEAWAYS & PATTERNS
// ==================

console.log("\n=== KEY PATTERNS LEARNED ===");

// 1. Hash Maps for O(1) lookups (Two Sum)
console.log("1. Use Map/Object for fast lookups");

// 2. Running totals/Prefix sums (Running Sum)
console.log("2. Accumulate values for running calculations");

// 3. String conversion for digit manipulation
console.log("3. Convert numbers to strings for digit operations");

// 4. Multiple solution approaches
console.log("4. Always consider time/space tradeoffs");

// ==================
// COMPLEXITY SUMMARY
// ==================

/*
PROBLEM COMPLEXITIES:

Two Sum:
- Brute Force: O(n²) time, O(1) space
- Hash Map: O(n) time, O(n) space

Running Sum:
- All solutions: O(n) time
- New array: O(n) space
- In-place: O(1) space

Find Even Digit Numbers:
- String method: O(n*m) time, O(1) space
- Math method: O(n*log(m)) time, O(1) space
where n = array length, m = average number of digits
*/