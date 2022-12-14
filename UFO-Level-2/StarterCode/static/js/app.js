// from data.js
var tableData = data;
const originalData = data;

// Variables

// HTML table reference
var html_table_body = d3.select('tbody');

// resets table function
function resetTable() {
	tableBuilder(originalData);
};

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
function filterTable() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Selecting the dropdown box and its value (same as js data key)
  var selectBoxInput = d3.select("#columnSelect");
  var selectBoxValue = selectBoxInput.property("value");
  // Select the input element and get the raw HTML node then get the value
  var tableInput = d3.select("#textBoxInput");
  var tableValue = tableInput.property("value");
  
  // map table data with filter value (date) BONUS ACTIVITY: selecting data columns with the same column name as the selected dropdown menu
  var filteredData = tableData.filter(city => city[selectBoxValue] === tableValue);
 
  // rebuild table with new filtered data by calling the tableBuilder function
  tableBuilder(filteredData);
};

// event handlers for date button form
// filter button
var button = d3.select("#filter-btn");
button.on("click",filterTable);

// reset button
var buttonS = d3.select("#reset-btn");
buttonS.on("click",resetTable);

// build the table upon loading via reset table function
tableBuilder(originalData);