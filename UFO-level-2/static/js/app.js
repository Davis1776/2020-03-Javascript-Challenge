// from data.js
var tableData = data;

//select the tbody in html to render dataset onto.
var tbody = d3.select("tbody")

//populates entire dataset onto html page.
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//filter button
var button = d3.select("#filter-btn");

//function for refresh stop.
var dateFilter = () => {
  //Enter key Fix
  d3.event.preventDefault();
  
  //Define Input Element Variable
  var inputElement = d3.select('#datetime');

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  // d3.event.prevent.Default()

  console.log(inputValue);
  console.log(inputElement);

  //need variable to store filtered data in.
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData)

  // Then, select the unordered list element by class name
  var list = d3.select("tbody");

  // remove any children from the list to
  list.html("");

  //append new results
filteredData.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});

};

// button.on("click", handleInput);
button.on('click', dateFilter);

//Enter Key Fix
d3.select("form").on('submit', dateFilter);
