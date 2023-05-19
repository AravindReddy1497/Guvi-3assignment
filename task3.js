
//Question 1 a. odd numbers in anonymous function

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = array.filter(function(number) {
  return number % 2 !== 0;
});
oddNumbers.forEach(function(number) {
  console.log(number);
});

//a. iife function 
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function() {
  let oddNumbers = array.filter(function(number) {
    return number % 2 !== 0;
  });
  oddNumbers.forEach(function(number) {
    console.log(number);
  });
})();

// b. string caps in anonymous fn
let strings = ["hello", "aravind", "good","morning"];

let titleCaseStrings = strings.map(function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCaseStrings);

// b. string caps in iife fn

let string1 = ["hello", "aravind", "good","morning"];

let titleCaseStrings1 = (function(string1) {
  return string1.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  });
})(string1);

console.log(titleCaseStrings1);




//c.sum of all numbers in an array in anonymous fn
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(acc, number) {
  return acc + number;
}, 0);

console.log(sum);

//c.sum of all numbers in an array in iife fn

let number3 = [1, 2, 3, 4, 5];

let sum1 = (function(number3) {
  return number3.reduce(function(acc, number) {
    return acc + number;
  }, 0);
})(numbers);

console.log(sum1);



//d. prime numbers in anonymous fn
let number1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = numbers.filter(function(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
});

console.log(primeNumbers);

//d. prime numbers in iife fn
let number2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers1 = (function(number2) {
  return number2.filter(function(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  });
})(numbers);

console.log(primeNumbers1);



//e. palindrome in anonymous function

let word = "malayalam";

let isPalindrome = (function(word) {
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
})(word);

console.log(isPalindrome);

//e. palindrome in IIFE function
let word1 = "hello";

let iifeIsPalindrome = (function(word) {
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
})(word);

console.log(iifeIsPalindrome);




// f. sorted array in anonymous function 
let array3 = [1, 3, 5];
let array4 = [2, 4, 6];

let median = ((arr3, arr4) => {
  let mergedArray = arr3.concat(arr4);
  let sortedArray = mergedArray.sort((a, b) => a - b);
  let length = sortedArray.length;
  
  if (length % 2 === 0) {
    let mid = length / 2;
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    let mid = Math.floor(length / 2);
    return sortedArray[mid];
  }
})(array3, array4);

console.log(median);

// in IIFE Function

let array5 = [1, 3, 5];
let array6 = [2, 4, 6];

let iifeFunction = (function(arr5, arr6) {
  let mergedArray = arr5.concat(arr6);
  let sortedArray = mergedArray.sort((a, b) => a - b);
  let length = sortedArray.length;

  if (length % 2 === 0) {
    let mid = length / 2;
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    let mid = Math.floor(length / 2);
    return sortedArray[mid];
  }
})(array5, array6);

console.log(iifeFunction);

// g. duplicates in array in anonymous fn
let array7 = [1, 2, 3, 4, 2, 3, 5];

let uniqueArray = array7.filter(function(value, index, self) {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);

//g. duplicates in iife fn
let array8 = [1, 2, 3, 4, 2, 3, 5];

let uniqueArray1 = (function(array) {
  return array.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(array);

console.log(uniqueArray1);

// h. rotate k value in anonymous fn
let array9 = [1, 2, 3, 4, 5];
let k = 3;

let rotatedArray = array.slice(k).concat(array.slice(0, k));

console.log(rotatedArray);

// h. rotate k value in iife fn

let array10 = [1, 2, 3, 4, 5];
let k1 = 3;

let rotatedArray1 = (function(array, k) {
  return array.slice(k).concat(array.slice(0, k));
})(array, k);

console.log(rotatedArray1);



// 2.a odd numbers in Arrow function 

const arrowOddNumbers = (n) => {
  const numbers = [];
  for (let i = 1; i <= n; i += 2) {
    numbers.push(i);
  }
  return numbers;
};

console.log(arrowOddNumbers(10));


// b. title cap letters in Arrow function

const convertToTitleCase = (arr) => {
  return arr.map((str) => {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
      return match.toUpperCase();
    });
  });
};
const string2 = ["hello", "aravind", "good","morning"];
const titleCaseStrings3 = convertToTitleCase(strings);

console.log(titleCaseStrings3);

//c.sum of numbers in arrow function 
const sumArray = (arr) => {
  return arr.reduce((total, num) => total + num, 0);
};

const numbers1 = [1, 2, 3, 4, 5];
const sumOfNum = sumArray(numbers);

console.log(sumOfNum);

//d. prime numbers in arrow function
const getPrimeNumbers = (arr) => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
};

const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumber = getPrimeNumbers(numbers);

console.log(primeNumber);

//e. palindrome in arrow function
const getPalindromes = (arr) => {
  const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  return arr.filter((str) => isPalindrome(str));
};

const words = ["malayalam"];
const palindromes = getPalindromes(words);
console.log(palindromes);


