
var tableData = data;

var tbody = d3.select("tbody");+

function buildtable(tableData) {
  tbody.html("");}
// Console.log the weather data from data.js
console.log(tableData);

data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([index, value]) => {
      var cell = srow.append("td");
      cell.text(value);
    });
  });



var filterButton = d3.select("#filter-btn")
filterButton.on("click", function() {
    tbody.html("")
    var filterTab = d3.select(".form-control")
    var inputDate = filterTab.property("value")
    console.log(inputDate)
    var filteredData = tableData.filter(element => 
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
