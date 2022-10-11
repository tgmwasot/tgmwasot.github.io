/* define your functions here */

display()

//function to calculate the total
function calculateTotal (quantity, price) {
    

    let total = quantity * price

    return total
}

//function to calculate the subtotal
function calculateSubTotal(){
    let total = 0
    
    //for each item in the cart invoke the calculate total function and store the
    //totals in the total variable
    for (const item of cart) {
        total+= calculateTotal(item.quantity, item.product.price)
    }
    return total
}

// let table = document.getElementById("table")
// table.innerHTML=""



// for (const item of cart) {
//     let total = calculateTotal(item.quantity, item.product.price)

//     outputCartRow(item, total)
    
// }

//function that adds the rows to the table
 function outputCartRow (item, total) {


    let table = document.getElementById("table")

    
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    
    //inserting the infromation into the rows and cells
    cell1.innerHTML="<img src= images/"+ item.product.filename +">"
    cell2.innerHTML = item.product.title
    cell3.innerHTML = item.quantity
    cell4.innerHTML = "$"+item.product.price
    cell5.innerHTML = "$"+total

   
    // table.innerHTML+= "<tr><td><img src= images/"+item.filename+"></td><td>"+ item.product.title+ "</td><td>3</td> <td>$" +item.product.price+"</td><td>"+total+"</td></tr>"
    let arr = cart
    // for(let item of arr){
    //     console.log(item)
    // }
    // total = calculateTotal(quantity[i], price[i]);


     



 }


 function display(){
    let table = document.getElementById("table")
    table.innerHTML=""
    for (const item of cart) {
        let total = calculateTotal(item.quantity, item.product.price)
    
        outputCartRow(item, total)
        
    }
   

    let row = table.insertRow(3)
    row.classList.add("totals")
    let cell1 = row.insertCell(0)
    cell1.colspan = 4
    let cell2 = row.insertCell(1)
    cell1.innerHTML = "Subtotal"
    cell2.innerHTML = calculateSubTotal()


    


 }





        
