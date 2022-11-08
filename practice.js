let word = "this is a string/nthat i am writing"

console.log(word)

let one= 1, two = 2

console.log(one,two)



    let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}


// for (let i=1; i<=6; i++) {

//     for (let j=1; j<=i-1; j++) {

//         console.log('*')
//     }
//     for(k=1;k<=num-(i+1);k++) {
//         System.out.print(" ");
//     }
// }
let mango= " "

function pineapple(x,y) {

  mango = x + y
return mango
}

function watermelon() {

  mango = pineapple(5,7)
  let dog = 5 + mango
  

  return dog
 
}

console.log(watermelon())

var rice = (lip, oil) => {

  lip = 5
   oil = 6

  let ans = lip + oil

}

let arr = [4,5,6,7,8,9]

console.log(Math.max(arr))

console.log(arr.length)

let pine = {
  name: "dog",
  ages: [23,34,45,56],
  othernames: ["pat","polly","diane"]
}

console.log(pine.keys)
let b = [
  [1, "two", 3, "four", 5],
  [6, 7, 8, 9, 10, 11, 12, 13],
  [14, 15],
  [16,17,18,19,20],
]
// print 2d array as rows of strings, with elements separated by a single space and rows separated by new line / carriage return, CR/LF = \n
str = ""
for(let i=0; i<b.length; i++) {
  for(let j=0; j<b[i].length; j++) {
    str += b[i][j] + " " 
  }
  str += "\n"
}
console.log(str)

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);