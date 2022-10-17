

//getting the button with id "copy" and storing it in a variable 
let copy = document.getElementById("copy")
//using the event listener to invoke the function "GCD" when the user clicks on the button
copy.addEventListener("click",GCD)


function GCD() {

     console.log("here")
    //getting the user input and storing it in a variable
    let integer1 = document.getElementById ("integer1").value
    let integer2 = document.getElementById ("integer2").value
    let answer = 0;

    //for loop that runs until i is greater than or equal to the largest number
    for  (let i = 1; i<= integer1 && i <= integer2; i++) {

    //if statement used to find the greatest common divisor by dividing both numbers with i and finding the largest that divides them both   
     if (integer1%i == 0 && integer2%i ==0) {
      //variable to store the largest divisor as the loop runs until it stops
      answer = i;


}

 }
 
 //storing the results in gcd to pass it to the textbox
 let gcd = document.getElementById("gcd")
     gcd.value= answer
}

//getting the button with id "submit" and storing it in a variable 
let submit = document.getElementById("submit")

//using the event listener to invoke the function "sumdigits" when the user clicks on the button
submit.addEventListener("click",sumdigits)

function sumdigits() {
    //getting the user input and storing it in a variable
    let digits = document.getElementById ("digits").value
    

    let num = 0;
    let total = 0;

    
    //a while loop that runs while the user input is larger than 0
    while (digits>0) {
        
        //this gets the last digit of the user input and stores it in num
        num = digits%10;
       
        //total sums up the digits stored in num
        total += num;

        //this reduces the user input by a digit
        digits = Math.floor(digits/10);

    }

    console.log(total)
    //storing the results in sum to pass it to the textbox
    let sum = document.getElementById("sum")
     sum.value= total

}


//getting the button with id "combine" and storing it in a variable 
let combine = document.getElementById("combine")
//using the event listener to invoke the function "names" when the user clicks on the button
  combine.addEventListener("click",Names)

function Names() {

    //getting the user input and storing them in a variable
    let title = document.getElementById ("title").value
    let first = document.getElementById ("first").value
    let last = document.getElementById ("last").value
    let suffix = document.getElementById ("suffix").value
    let fullname1= ""


    //creating the full name by adding the first and last name input from the user
    

    if (first.length === 0 || last.length === 0 ) {

        document.getElementById("first").value = "Enter Value"
        document.getElementById("last").value = "Enter Value"
    }
     else if (title.length === 0) { 

         fullname1= first + " " + last + ", " + suffix

     }

     else if (suffix.length === 0) {

        fullname1= title + ". " + first + " " + last

     }

     else if (suffix.length === 0 && title.length === 0) { 
        fullname1= first + " " + last 

     }

     else {
        fullname1= title + ". " +first + " " + last + ", " + suffix

     }

     //storing the results in sum to pass it to the textbox
    let fullname = document.getElementById("fullname")
    fullname.value= fullname1

    console.log(fullname)

    // if (title.length>0)
        // let title1 = title
   
    // if (suffix.length>0)
        // let suffix1 = suffix



         

}











