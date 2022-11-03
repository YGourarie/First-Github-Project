// FUNCTION TO SUM TWO NUMS

function addition(num1, num2) {
  return num1 + num2;
}

// CONVERT HOURS TO SECONDS

function hoursToSeconds(hours) {
  return hours * 60 * 60;
}

// console.log(hoursToSeconds(24))

// CALCULATE PERIMITER OF RECTANGLE

function calcPerimiter(length, width) {
  return length * 2 + width * 2;
}

// console.log(calcPerimiter(6,7))

// EXTEND STRING

function extendString(string) {
  return string + "FRONTEND";
}

// console.log(extendString('hellooo'))

// CHECK IF SUM OF TWO NUMBERS ARE GREATER THAN 100

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

// console.log(sumGreaterThan100(50,500))

//RETURN TRUE IF IT IS NOT THE NUMBER 0

function notZero(element) {
  return element !== 0;
}

// console.log(notZero(0))

//RETURN 1 IF EVEN AND -1 IF NOT (USING TERNARY OPERATOR)

function boolInt(num) {
  return num % 2 === 0 ? 1 : -1;
}

// console.log(boolInt(5))

// MEDIUM CHALLENGES

// GIVEN TWO VALUES RETURN THE FIRST IF IT'S FALSEY OTHERWISE RETURN THE SECOND

function filterFalsey(a, b) {
  return !a ? a : b;
}

// console.log(filterFalsey('h', 3));

//SUM ALL ELEMENTS IN ARRAY

function sumArr(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumArr([1,2,3,4,5]))

//ADD ALL NUMBERS UNTIL THE ONE THAT IS GIVEN
//FOR EXAMPLE 3 WOULD BE 1 + 2 + 3

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// console.log(progressiveSum(3))

//CONVERT TIME IN SECONDS TO MM:SS FORMAT

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  if (timerMinutes.toString().length < 2) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

// console.log(calcTime(5000))

//MAX NUM IN ARRAY

function getMax(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(getMax([1,5,6,3,7,5]))

//REVERSE A STRING (3 methods)

function reverseStringDecrementing(str) {
  let pal = "";
  for (let i = str.length - 1; i >= 0; i--) {
    pal = pal + str[i];
  }
  return pal;
}
// by incrementing were just adding each char to beginning of 'pal' thus
// reversing it
function reverseStringIncrementing(str) {
  let pal = "";
  for (let i = 0; i < str.length; i++) {
    pal = str[i] + pal;
  }
  return pal;
}

function reverseSplitReverseJoin(str) {
  return str.split("").reverse().join("");
}

let word = "yehudah g";

// console.log(reverseStringDecrementing(word));

// console.log(reverseStringIncrementing(word));

// console.log(reverseSplitReverseJoin(word));

//CONVERT EVERY ELEMENT OF ARRAY INTO ZERO

//METHOD 1: FOR LOOP

function convertToZeroLoop(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0;
  }
  return newArr;
}

//METHOD 2: ARRAY "FILL"

function convertToZeroFill(arr) {
  return new Array(arr.length).fill(0);
}
//METHOD 3: ARRAY MAP

function convertToZeroMap(arr) {
  return arr.map((element) => 0);
}

// solution checks
let arry = [1, 2, 3, 4];

// console.log(convertToZeroLoop(arry));
// console.log(convertToZeroFill(arry));
// console.log(convertToZeroMap(arry));

//FILTER OUT ALL THE APPLES (2 METHODS)

function removeApples(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "Apple") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function removeApplesFilter(arr) {
  let newArr = arr.filter((elem) => elem !== "Apple");
  return newArr;
}

let appleArr = ["Orange", "Apple", "Banana", 5];

// console.log(removeApples(appleArr));
// console.log(removeApplesFilter(appleArr))

//FILTER OUT FALSEY VALUES ONLY RETURN TRUTHY (2 MEHTODS)

function filterOutFalsey(arr) {
  let trueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      trueArr.push(arr[i]);
    }
  }
  return trueArr;
}

function filterOutFalseyFilter(arr) {
  let newArr = arr.filter((elem) => !!elem);
  return newArr;
}

let trueArray = ["", 0, false, [], "0", 1, null, undefined, "l"];

// console.log(filterOutFalsey(trueArray));
// console.log(filterOutFalseyFilter(trueArray));

//TRUTHY TO TRUE, FALSEY TO FALSE

function convertBool(arr) {
  let newArr = arr.map((elem) => !!elem);
  return newArr;
}

// console.log(convertBool(trueArray))

//ADVANCED CHALLENGES

//CONVERT NUMBER RATING TO STARS AND PERIOD FOR HALF

function showRating(rating) {
  let stars = "";
  for (i = 0; i < Math.floor(rating); i++) {
    if (i !== Math.floor(rating) - 1) {
      stars += "* ";
    } else {
      stars += "*";
    }
  }
  if (!Number.isInteger(rating)) {
    stars += " .";
  }
  return stars;
}

// console.log(showRating(3.5))

//SORT ARRAY OF NUMBERS FROM LOW TO HIGH

function sortLowToHigh(arr) {
  return arr.sort((a, b) => a - b);
}

let numArr = [1, 4, 7, 2, 5, 10, -1, 5, 4];

// console.log(sortLowToHigh(numArr))

//SORT PRICES IN ARRAY OF OBJECTS HIGH TO LOW

function sortObjects(arrayOfObjects) {
  return arrayOfObjects.sort((a, b) => b.price - a.price);
}

let objArr = [
  { id: 1, price: 50 },
  { id: 1, price: 5 },
  { id: 1, price: 37 },
  { id: 1, price: 1000 },
  { id: 1, price: 124 },
];

// console.log(sortObjects(objArr))

// CALL GIVEN API AND RETURN ALL POSTS BY GIVEN USER ID
// function postsByUser(idNum) {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.filter(element => element.userId === idNum));
//     });
// }

async function postsByUser(idNum) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await promise.json();
  const posts = result.filter((element) => element.userId === idNum);
  console.log(posts);
}

// postsByUser(5);

//FIND FIRST SIX OBJECTS WITH INCOMPLETE TODOS FROM API

//With for loop
async function firstSixIncomplete() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();
  const todos = [];
  for (let i = 0; todos.length < 6; i++) {
    if (!result[i].completed) {
      todos.push(result[i]);
    }
  }
  console.log(todos);
}
//with filter and slice
async function firstSixIncompleteSlice() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();
  const incompletes = result
    .filter((element) => !element.completed)
    .slice(0, 6);
  console.log(incompletes);
}

firstSixIncompleteSlice();
// firstSixIncomplete();
