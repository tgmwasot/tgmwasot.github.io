

let arr1 = [];
for(i = 0; i < 10; i++) {
arr1[i] = Math.floor( Math.random() * 200 ) + 100

console.log (arr1[i])
}

let arr2 = [];
for(i = 0; i < 10; i++) {
arr2[i] = Math.floor( Math.random() * 200 ) + -200

console.log (arr2[i])
}


let arr3 = [
    {fname: taty, lname: joseph, title:miss, sufffix:dr, age:21},
    {fname: nate, lname: watson, title:mr,   sufffix:dr, age:24},
    {fname: sharan, lname: marley, title:miss, sufffix:dr, age:17},
    {fname: kim, lname: jenner, title:miss, sufffix:dr, age:36},
    {fname: khloe, lname: kardashian, title:miss, sufffix:dr, age:33},
]

let arr4 = [-100, 0, 100, 1900, 1904, 2000]

let arr5 = [1, 4, 5, 7]

let arr6 = [2, 4, 6, 8 ,10]


let hypotenuse = (num1 , num2) => (Math.sqrt((num1 * num1) + (num2 * num2)))

let quadratic = (a, b, c) => {
    let root1 = (-b + Math.sqrt((b * b) - (4 * a * c)))/2
    let root2 = (-b - Math.sqrt((b * b) - (4 * a * c)))/2
} 

let sphereR = (r) => ((4/3) * Math.PI * (r * r * r ))

let kelvin = (fahrenheit) => Math.floor((fahrenheit - 32) * (5/9) + 273.15)

let arctan = (val) => Math.atan( Math.PI + val)

let sumSquare = (number1) => ((number1 * number1) + number1)

let sum = " "

let isLeapyear = (year) => { if   ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))  sum+= year; return 'true' }
let years = arr4.map((year) => { if   ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))  sum+= year; return 'true' })

let timeFallen = (distance) => distance/speed

let getFirstName=(item) => (item.fname)

let dot

dot = (arr1,arr2) => arr1.map((x,i) => arr1[i] * arr2[i])

let sumArr = arr2.filter(values=> {return values%2==0})

let volumeArr= arr4.map(radius=>sphereR(radius))

// let sumArr = (values) => { if values % 2 == 0 return values}