
//object creation
let news = {

    name: "tania",
    age: 20,
    title: "ceo"

} ;

console.log (news.name)



//array of object

const newsOut = [
    {
        name: "gina",
        title: "queen",
        age: 25

}, {
    name:"betty",
    age:45,
    title: "ceo"
} 
]

function check (newsOut) {

    for (let i=0; i<newsOut.length; i++)  {

        let inf = newsOut[i];

        console.log(inf)
    }

}

let word= "stressed"

let rev= ""

for (let i= word.length-1;i>0;i--)

    rev+= word[i]

    console.log(rev)

    function calculateTotal (quantity, price) {
    

        let total = quantity * price
    
        return total
    }

    let subtotal =calculateTotal (10,2)

    let OB = {

        name: "kyle",
        num: 3,
        hobby: [ {
            title: "ceo",
            age: 6,
            num:4

    }],

    friend: "sabby"
    }

    console.log(OB)



    //use "" to avoid errors
    //console.log(JSON.parse(OB))
    //variable scope

    function sum (a,b) {

        return a+b
    }

    let sum2 = (a,b) => a+b

    function randonNumber() {

        return Math.random
    }

    let randomNumber2 = () => Math.random

    document.addEventListener('click', randomeNumber) [
        console.log('click')
    ]

    document.addEventListener('click', () => )