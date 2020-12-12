//UFO sightings - level 1 Javascript

//Set the variable first

var tbody = d3.select ('tbody');


// from data.js
var tableData = data;



//Create a function to add a table from a given dataset
function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");
    
    //Loop through the data
    data.forEach((dataRow) => {
   
    // Append a table row to the table body 'tbody'
    let row = tbody.append('tr');

    //Loop through each field in the dataRow and each value
    //as a table cell (td)        

    Object.values(dataRow).forEach((val)=> {
        //append a Cell to the row for each value
        let cell = row.append('td');
        cell.text(val);
    });
})
}
// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
