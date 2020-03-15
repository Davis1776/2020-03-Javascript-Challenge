// from data.js
var tableData = data;
var tbody = document.querySelector("tbody");
var date_time = document.querySelector("#datetime");
var city = document.querySelector("#city");
var state = document.querySelector("#state");
var country = document.querySelector("#country");
var shape = document.querySelector("#shape");

var button_filter = document.querySelector("#filter-btn");
var button_clear= document.querySelector("#clear-btn");

button_filter.addEventListener("click", Filter_Click);

function Table(){
    tbody.innerHTML = "";
    
    for(var i = 0; i< tableData.length; i++){
        var address = tableData[i];
        console.log(address)
        var fields = Object.keys(address);

        var row = tbody.insertRow(i);
        for (var x= 0;x<fields.length;x++){
            var field = fields[x];
            var cell = row.insertCell(x);
            cell.innerHTML = address[field];
        }
    }
}

// Build function for date, state, city, country, shape (of UFO)
function Filter_Click() {
    var table_date = date_time.value;
    var filter_state = state.value.trim().toLowerCase();
    var filter_city = city.value.trim().toLowerCase();
    var filter_country = country.value.trim().toLowerCase();
    var filter_shape = shape.value.trim().toLowerCase();
  
    // Date filter
    if (table_date != ""){
      tableData = data.filter(function(address) {
        var address_Date = address.datetime; 
      return address_Date === table_date;
      });
    }
    else {tableData};
    
    // State filter
    if(filter_state != ""){
      tableData = tableData.filter(function(address){
        var address_State = address.state;
        return address_State === filter_state;
      });
    }
    else{tableData};
  
    // City filter
    if(filter_city != ""){
      tableData = tableData.filter(function(address){
        var address_City = address.city;
        return address_City === filter_city;
      });
    }
    else{tableData};
  
    // Country filter
    if(filter_country != ""){
        tableData = tableData.filter(function(address){
        var address_Country = address.country;
        return address_Country === filter_country;
      });
    }
    else{tableData};
  
    // Shape of UFO filter
    if(filter_shape != "") {
        tableData = tableData.filter(function(address){
        var address_Shape = address.shape;
        return address_Shape === filter_shape;
      });
    }
    
    else{tableData};
  
  Table();
  }
 
  // Render the table for the first time on page load
  Table();

  button_clear.addEventListener("click", function(){            //Clear button clears out the table everytime we press it. 
    tbody.innerHTML = "";
    
})