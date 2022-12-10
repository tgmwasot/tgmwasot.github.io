// --- global variables ---

var loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
  ]; 
  
// initialize stuff
  
  // --- function: loadDoc() ---
  
  function loadDoc() {
    
    // pre-fill defaults for first loan year
    var defaultYear = loans[0].loan_year;
    // console.log(defaultYear) // debug: defaultYear starts at 2020
    // document.getElementById("loan_year0" + 1).value = defaultYear++; // js
    $("#loan_year0" + 1).val(defaultYear++); // jquery
    // console.log(defaultYear) // debug: defaultYear increments
    var defaultLoanAmount = loans[0].loan_amount;
    //fix these
   // document.getElementById("loan_amt0" + 1).value 
     // = defaultLoanAmount.toFixed(2);

     //Using jquery to replace get element by ID because ?????
     $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));

    var defaultInterestRate = loans[0].loan_int_rate;
    $("#loan_int0" + 1).val(defaultInterestRate);

    //Had to replace a bunch of stuff might not work
    var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    $("#loan_bal0" + 1).text(toComma(loanWithInterest.toFixed(2)));
    

    // pre-fill defaults for other loan years
    for(var i=2; i<6; i++) {

        // explain these
      $("#loan_year0" + i).val(defaultYear++);
      $("#loan_year0" + i).attr("disabled","true");
      $("#loan_year0" + i).css({"backgroundColor":"grey"});
      $("loan_year0" + i).css({"color":"white"});
      $("loan_amt0" + i).val(defaultLoanAmount.toFixed(2));
      $("loan_int0" + i).val(defaultInterestRate);
      $("loan_int0" + i).attr("disabled","true");
      $("loan_int0" + i).css({"backgroundColor":"gray"});
      $("loan_int0" + i).css({"color":"white"});


     loanWithInterest 
       = (loanWithInterest + defaultLoanAmount) 
       * (1 + defaultInterestRate);
     $("loan_bal0" + i).text(toComma(loanWithInterest.toFixed(2)));
      } // end: "for" loop
    
    // all input fields: ut {text-align: right;}
  
      $("input[type=text]").focus(function() {
      $(this).select();
      $(this).css("background-color", "yellow");
    }); 

    $("input[type=text]").blur(function() {
      $(this).css("background-color", "white");
    });
    
    // set focus to first year: messes up codepen
    // $("#loan_year01").focus();
    // update loans array when exiting "year" input field (jquery)
    $("#loan_year01").blur( function() {
      updateLoansArray();
    });
    
  } // end: function loadDoc()
  
  //WYD
  function toComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  $("#save").on("click", function() {
    localStorage.setItem("info", JSON.stringify(loans));
 });
// come back here for name of variables and update form
  $("#restore").on("click", function() {
       loans = JSON.parse(localStorage.getItem("info"));
      for (let i=1; i<6; i++) {
        $("#loan_year0" + i).val(loans[i-1].loan_year);
        $("#loan_amt0" + i).val(loans[i-1].loan_amount.toFixed(2));
        $("#loan_int0" + i).val(loans[i-1].loan_int_rate);
      }});

  function updateLoansArray() {

    let equal = true;
    let loanYear = /20[\d]{2}/;
    if(!loanYear.test($("#loan_year01").val())) {
        equal = false; }
    
    // update the loans array

    if(equal) {
    loans[0].loan_year = parseInt($("#loan_year01").val()); // jquery
    // update all the years in the "year" column
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
      $("#loan_year0"+ (i+1) ).val(loans[i].loan_year); // jquery
    }
  }

  let loanAmount = /\d*$|\d*\.\d*?/
  for (i = 1; i < 6; i++) {
    if(!loanAmount.test($("#loan_amt0${i}").val())) {
      equal = false;
    } }

      if(equal) {
        for(i = 1; i<6; i++){
            loans[i-1].loan_amount = parseFloat($("#loan_amt0${i}").val()).toFixed(2);;

      } }

      let loanInterest = /[0]?[\.]\d*/
      if(!loanInterest.test($(`#loan_int01`).val())) {
        valid = false;
      }
        if(equal) {
        for(i=0; i<5; i++){
            loans[i].loan_int_rate = parseFloat($("#loan_int01").val());
        }
    }
}
      
  function updateForm () {
 
  let reminder = 0;
  let sum = 0;

  for(let i = 1; i < 6; i++) {
    sum += loans[i-1].loan_amount;
    reminder += loans[i-1].loan_amount;
    reminder += (1 + loans[i-1].loan_int_rate);
    $("#loan_bal0" + i).html("$" + toComma(balance.toFixed(2))); }

    $("#loan_int_accrued").html("$" + toComma((reminder - sum).toFixed(2))); }
  //Angular javascript   

  let app = angular.module("calculator", []);

  app.controller("mycontroller", function ($scope) {
    
    )
