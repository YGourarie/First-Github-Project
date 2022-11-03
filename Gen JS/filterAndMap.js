// FILTER

let arr = ["a", "g", "FAIL", "X", "FAIL"];

function noFail(arr) {
  let newArr = arr.filter((element) => element !== "FAIL");
  return newArr;
}

console.log(noFail(arr));

// MAP

let arr = [0, 1, 5, 20];

let newArr = arr.map((element) => element * 100);

// longer version

// let newArr = arr.map((element) => {
//     return element * 100
// })

console.log(newArr);
