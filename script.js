// 1. What does the following code return?

let example = new Set([1, 1, 2, 2, 3, 4]); // [1,2,3,4]

// 2. What does the following code return?
let ex2 = [...new Set("referee")].join(""); // "ref"

// 3. What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

console.log(m); // {Array(3) => true, Array(3) => false}

//4. Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate.

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7])); //true
console.log(hasDuplicate([1, 5, -1, 4])); //false

//5.Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
  let vowelMap = new Map();
  for (let char of str) {
    if ("aeiou".includes(char)) {
      if (!vowelMap.has(char)) {
        vowelMap.set(char, 1);
      } else {
        vowelMap.set(char, vowelMap.get(char) + 1);
      }
    }
  }
  return vowelMap;
};

console.log(vowelCount("awesome")); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }