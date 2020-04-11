
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

var filterButton = d3.select("#filter-btn")
filterButton.on("click", function() {
    tbody.html("")
    var filterTab = d3.select(".form-control")
    var inputDate = filterTab.property("value")
    console.log(inputDate)
    var filteredData = data.filter(element => 
        element.datetime === inputDate)
        console.log(filteredData)
    filteredData.forEach((info) => {
        var row = tbody.append("tr")
        Object.entries(info).forEach(([key,value]) => {
            var cell = row.append("td")
            cell.text(value)
        })
    })
    
})


// =========================================

// var tbody = d3.select("tbody");

// // Console.log the weather data from data.js
// console.log(data);

// data.forEach((weatherReport) => {
//     var row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(([key,value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  