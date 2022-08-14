// from data.js
var tableData = data;

// Variables

// HTML table reference
var html_table_body = d3.select('tbody');

// Function that adds js data to table (lesson 3 activity 3 code) 
function tableBuilder(xdata) {

 // selects all table rows and removes it, used to create (filter) the table
  html_table_body.selectAll('tr').remove();

  // loops through all data in parameter's array, and adds it to the html table
    xdata.forEach(city => {
    var row = html_table_body.append("tr");
    Object.entries(city).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


  // function that filters table by date (lesson 3 activity 9 code)
function filterDate() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node then get the value
  var tableInput = d3.select("#datetime");
  var tableValue = tableInput.property("value");

  // map table data with filter value (date)
  var filteredData = data.filter(city => city.datetime === tableValue);

  // rebuild table with new filtered data by calling the tableBuilder function
  tableBuilder(filteredData);
};

// event handlers for date button form
// Select the button
var button = d3.select("#filter-btn");
button.on("click",filterDate);

// build the table upon loading 

tableBuilder(data);