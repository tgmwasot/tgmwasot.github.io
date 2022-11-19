// Filename: assignment04.js
// Author: Tania Mwasote (tgmwasot@svsu.edu)
// Description: Javascript

//Arrays
//10 random integers between 100 and 1000
let arr1 = [];
for(i = 0; i < 10; i++) {
arr1[i] = Math.floor( Math.random() * 900 ) + 100

console.log (arr1[i])
}

//10 random integers between -200 and 200
let arr2 = [];
for(i = 0; i < 10; i++) {
arr2[i] = Math.floor( Math.random() * 400 ) + -200

console.log (arr2[i])
}

//five objects with the properties
let arr3 = [
    {fname: "taty", lname: "joseph", title:"miss", sufffix:"dr", age:21},
    {fname: "nate", lname: "watson", title:"mr",   sufffix:"dr", age:24},
    {fname: "sharan", lname: "marley", title:"miss", sufffix:"dr", age:17},
    {fname: "kim", lname: "jenner", title:"miss", sufffix:"dr", age:36},
    {fname: "khloe", lname: "kardashian", title:"miss", sufffix:"dr", age:33},
]

//years
let arr4 = [-100, 0, 100, 1900, 1904, 2000]

//r
let arr5 = [1, 4, 5, 7]

//distances
let arr6 = [2, 4, 6, 8 ,10]

//Arrow Functions
//phythagorean theorem arrow function
let hypotenuse = (num1 , num2) => (Math.sqrt((num1 * num1) + (num2 * num2)))

//roots of quadratic equation arrow function
let quadratic = (a, b, c) => {
    let root1 = (-b + Math.sqrt((b * b) - (4 * a * c)))/2
    let root2 = (-b - Math.sqrt((b * b) - (4 * a * c)))/2
} 

//volume of sphere arrow function
let sphereR = (r) => ((4/3) * Math.PI * (r * r * r ))

//fahrenheit to kelvin arrow function
let kelvin = (fahrenheit) => Math.floor((fahrenheit - 32) * (5/9) + 273.15)

//arctan arrow function
let arctan = (val) => Math.atan( Math.PI + val)

//sum of number and its squares arrow function
let sumSquare = (number1) => ((number1 * number1) + number1)

//leap year arrow function
let isLeapyear= year=>{
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        return true
    else return false
}

//time fallen arrow function
let timeFallen = (distance) => Math.sqrt(distance)/16



//Methods
//sum of leapyear
let total = 0;

arr4.map(year => {
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 ==0))
        total+=year
})
console.log(total)

//Getting full name
arr3.map(person =>{
    console.log(person.fname + " " + person.lname)
   })

//Dot product of arr 1 and 2
arr1.map((x,i) => console.log(arr1[i] * arr2[i]))


//Sum of all even numbers in arr2
let sum = 0;

arr2.map(e=>{
    if(e%2==0)

    sum +=e


})

console.log(sum)

//Volume of spheres in arr5
arr5.map(r => console.log(sphereR(r)))

//time it takes for objects to fall in arr6
arr6.map(distance => console.log(timeFallen(distance)))

//sum of arctans in arr5
arr5.reduce(r => console.log(arctan(r)))