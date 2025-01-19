// const array1 = [7, 44, 84, 71, 78, 11, 3, 55, 20, 88];
// const array2 = [1, 34, 2, 50, 92, 64, 65, 32, 89, 88, 32, 50, 34, 88, 89];
// const peopleArr = [
//   { name: 'Emily Chen', age: 29 },
//   { name: 'Marcus Rodriguez', age: 11 },
//   { name: 'Sophia Kim', age: 18 },
//   { name: 'Daniel Thompson', age: 26 },
//   { name: 'Isabella Garcia', age: 9 },
//   { name: 'Alexander Wright', age: 22 },
//   { name: 'Olivia Bennett', age: 5 },
//   { name: 'Ryan Patel', age: 27 },
//   { name: 'Emma Nakamura', age: 14 },
//   { name: 'Jackson Moore', age: 17 },
// ];

// function arraysEven(arr) {
//   return arr.filter((num) => !(num % 2));
// }

// console.log('only return even numbers = ', arraysEven(array1));

// function arraysCombine(arr1, arr2) {
//   const combinedArr = arr1.concat(arr2);
//   return combinedArr.filter((num, indx) => {
//     return combinedArr.indexOf(num) === indx;
//   });
// }

// console.log(
//   'combine arrays and remove duplicates = ',
//   arraysCombine(array1, array2)
// );

// function pg18(arr) {
//   const adults = [];
//   for (const pupil of arr) {
//     if (pupil.age >= 18) {
//       adults.push(pupil.name);
//     }
//   }
//   return adults;
// }

// console.log('only 18 and older = ');
// console.log(pg18(peopleArr));

// function arrayUnique(arr) {
//   const unique = [...new Set(arr)];
//   return unique;
// }

// console.log('remove duplicates = ', arrayUnique(array2));

// function arraySortCombine(arr1, arr2) {
//   const combinedArr = arr1.concat(arr2);
//   return combinedArr.sort((a, b) => a - b);
// }

// console.log(
//   'sort in ascendance and combine arrays = ',
//   arraySortCombine(array1, array2)
// );

// function arrayCount(arr) {
//   const count = {};
//   arr.forEach((element) => {
//     count[element] = (count[element] || 0) + 1;
//   });

//   return count;
// }

// console.log('count numbers in array = ');
// console.log(arrayCount(array2));
// //arrays end

// //recursion starts
// function countFactorial(num) {
//   let countedFactorial = 0;
//   if (num === 0) {
//     return (countedFactorial = 1);
//   } else if (num > 0) {
//     countedFactorial = num * countFactorial(num - 1);
//     return countedFactorial;
//   }
// }

// console.log('recursive factorial count of 6 = ', countFactorial(6));

// function stringHandler(str) {
//   return str.split('').reverse().join('');
// }

// console.log('string reverser = ', stringHandler('9 8 7 6 5 4 3 2 1'));

// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     return (num = fibonacci(num - 1) + fibonacci(num - 2));
//   }
// }

// console.log('fibonacci = ' + fibonacci(5));

// //не зміг зробити сам і підглянув рішення в інтернеті :(
// function stringCombinator(str) {
//   if (str.length === 1) return [str];
//   const combinations = [];
//   for (let i = 0; i < str.length; i++) {
//     const fixed = str[i];
//     const remaining = str.slice(0, i) + str.slice(i + 1);
//     const subPermutations = stringCombinator(remaining);
//     subPermutations.forEach((sub) => {
//       combinations.push(fixed + sub);
//     });
//   }
//   return combinations;
// }

// const input = 'abc';
// const result = stringCombinator(input);
// console.log(result);

// //не вийшло
// // function sumCombinator(arr, num) {
// //   const result = [];
// //   if (arr.length === 1) return [arr];
// //   const targetSum = num;
// //   const combinations = [];
// //   for (let i = 0; i < arr.length; i++) {

// //   }
// //   return combinations;
// // }

// // const sumCombinatorArr = [3, 2, 5, 1, 6, 7, 8, 9];
// // const combinations = sumCombinator(sumCombinatorArr, 10);
// // console.log(combinations);

// //zamykannia
// function createCounter() {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createPasswordManager() {
//   let password = '';
//   return {
//     setPassword(newPassword) {
//       password = newPassword;
//     },
//     checkPassword(toCheckPassword) {
//       return toCheckPassword === password;
//     },
//   };
// }

// const passwordManager = createPasswordManager();
// passwordManager.setPassword('mySecurePassword');
// console.log(passwordManager.checkPassword('wrongPassword'));
// console.log(passwordManager.checkPassword('mySecurePassword'));

// function createTimer() {
//   let startDate;
//   let time = 0;
//   return {
//     start() {
//       startDate = Date.now();
//     },
//     stop() {
//       const endDate = Date.now();
//       return console.log((time = endDate - startDate));
//     },
//   };
// }

// const timer = createTimer();
// timer.start();

// function createLimiter(n) {
//   const maxCalls = n;
//   let currentCalls = 0;

//   return function () {
//     if (currentCalls < maxCalls) {
//       currentCalls++;
//       console.log(currentCalls);
//       return currentCalls;
//     } else {
//       console.log('exceeded max function calls');
//       return null;
//     }
//   };
// }

// const limiter = createLimiter(4);

// function createObjectStore() {
//   const storage = {};
//   return {
//     addObject(key, object) {
//       storage[key] = object;
//     },
//     getObject(key) {
//       return storage[key];
//     },
//     removeObject(key) {
//       delete storage[key];
//       console.log(`obj було видалено.`);
//     },
//   };
// }

// const objectStore = createObjectStore();
// objectStore.addObject('user1', { name: 'John', age: 30 });
// objectStore.addObject('user2', { name: 'Jane', age: 25 });
// console.log(objectStore.getObject('user1'));
// objectStore.removeObject('user1');

// //generated functions
// const simpleFunctions = [
//   // Function to add two numbers
//   function add(a, b) {
//     return a + b;
//   },

//   // Function to subtract two numbers
//   function subtract(a, b) {
//     return a - b;
//   },

//   // Function to check if a number is even
//   function isEven(number) {
//     return number % 2 === 0;
//   },

//   // Function to convert a string to uppercase
//   function toUpperCase(str) {
//     return str.toUpperCase();
//   },

//   // Function to reverse a string
//   function reverseString(str) {
//     return str.split('').reverse().join('');
//   },

//   // Function to check if a number is positive
//   function isPositive(num) {
//     return num > 0;
//   },
// ];

// function createFilter(arr) {
//   return function (arg) {
//     for (const func of arr) {
//       try {
//         if (func(arg)) {
//           console.log(`function  ${func.name} worked with: ${arg}`);
//         } else {
//           console.log(
//             `Function  ${func.name} was not working with the arg${arg} `
//           );
//         }
//       } catch (error) {
//         console.log(`Function ${func.name} threw error with: ${arg}`);
//       }
//     }
//   };
// }
// const filter = createFilter(simpleFunctions);
// filter(4);

// function memoize(func) {}

// function taskScheduler(task, time) {
//   return function () {
//     setTimeout(() => {
//       task();
//     }, time);
//   };
// }

// const myTask = () => {
//   console.log('task is done!');
// };

// const scheduledTask = taskScheduler(myTask, 3000);

// scheduledTask();

// const simpleFunctions2 = [
//   // Log a message
//   function logMessage() {
//     console.log('This is a simple message.');
//   },

//   // Generate and log a random number
//   function logRandomNumber() {
//     console.log(`Random Number: ${Math.floor(Math.random() * 100)}`);
//   },

//   // Log the current date and time
//   function logCurrentDate() {
//     console.log(`Current Date and Time: ${new Date().toLocaleString()}`);
//   },

//   // Log a greeting
//   function logGreeting() {
//     console.log('Hello, World!');
//   },

//   // Log a countdown from 5
//   function logCountdown() {
//     console.log('Countdown: 5, 4, 3, 2, 1, Liftoff!');
//   },
// ];

// function stepByStep(arr) {
//   const functionArr = arr;
//   let arrayCount = 0;
//   return function () {
//     if (currentIndex < arr.length) {
//       arr[currentIndex]();
//       currentIndex++;
//     } else {
//       console.log('No more functions to execute.');
//     }
//   };
// }

// const executeFunctions = stepByStep(simpleFunctions);

// executeFunctions();
// executeFunctions();

// //already did the same in taskScheduler?
// function delay(fn, time) {}

// function sum(arg) {
//   const args = [];

//   function adder(nextArg) {
//     if (nextArg === undefined) {
//       return args.reduce((acc, curr) => acc + curr, 0);
//     }
//     args.push(nextArg);
//     return adder;
//   }
//   return arg !== undefined ? adder(arg) : adder;
// }

// console.log(sum(1)(2)(3)()); // 6
// console.log(sum(5)(10)(-2)(3)()); // 16

// function sequence(functions) {
//   return function () {
//     for (const func of functions) {
//       func();
//     }
//   };
// }

// const executeSequence = sequence(simpleFunctions2);
// executeSequence();

//recursion retry to do the last task

function sumCombinationsCounter(arr, desiredSum) {
  const result = [];

  function findCombinations(currentCombination, remainingArray, currentSum) {
    if (currentSum === desiredSum) {
      result.push([...currentCombination]);
      return;
    }

    if (currentSum > desiredSum) {
      return;
    }

    for (let i = 0; i < remainingArray.length; i++) {
      const nextNum = remainingArray[i];
      findCombinations(
        [...currentCombination, nextNum],
        remainingArray.slice(i + 1),
        currentSum + nextNum
      );
    }
  }

  findCombinations([], arr, 0);

  return result;
}

const sumCombinatorArr = [3, 2, 5, 1, 6, 7, 8, 9];
const combinations = sumCombinationsCounter(sumCombinatorArr, 10);
console.log('combinations=');
console.log(combinations);
