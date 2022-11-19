// Filename: assignment04part2.js
// Author: Tania Mwasote (tgmwasot@svsu.edu)
// Description: Javascript


//Event listeners for the functions and radio buttons
document
  .getElementById("loadjson")
  .addEventListener("click", loadJson);
document
  .getElementById("loadpriorcountry")
  .addEventListener("click", loadPriorCountry);
document
  .getElementById("loadnextcountry")
  .addEventListener("click", loadNextCountry);

//
let country = 0
let json ={}
json.Countries = []
function loadJson() {
  fetch('https://api.covid19api.com/summary')
  .then(res => res.json()) 
  .then(data => {
    for (let currCountry of data.Countries) {
        console.log("here"+currCountry)
        let country = currCountry
        //let country = {}
        // country.ID = currCountry.ID
        // country.Country = currCountry.Country
        // country.Slug = currCountry.Slug
        // country.NewConfirmed = currCountry.NewConfirmed 
        // country.TotalConfirmed = currCountry.TotalConfirmed
        // country.NewDeaths = currCountry.NewDeaths
        // country.TotalDeaths= currCountry.TotalDeaths
        // country.NewRecovered = currCountry.NewRecovered
        // country.TotalRecovered = currCountry.TotalRecovered
        // country.Date = currCountry.Date

       
        json.Countries.push(country)
    }

    });

  document.getElementById("coviddata").innerHTML = "JSON data loaded.";
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange 
//     = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           document.getElementById("coviddata").innerHTML 
//             = "JSON data loaded.";
//           json = JSON.parse(this.responseText);
//         }
//       };

//       xhttp.open("GET", "https://api.covid19api.com/summary", true);
//       xhttp.send();
    }
    
    function loadPriorCountry () {
      country--
      if (country < 0) 
        country = 0
      document.getElementById("coviddata").innerHTML 
                = json.Countries[country].Country
                + ", " 
                + json.Countries[country].TotalDeaths
    }
    
    function loadNextCountry () {
      country++
      if (country > json.Countries.length - 1) 
        country = json.Countries.length - 1
      document.getElementById("coviddata").innerHTML 
                = json.Countries[country].Country
                + ", " 
                + json.Countries[country].TotalDeaths
    }