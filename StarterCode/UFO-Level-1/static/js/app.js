// from data.js
var tableData = data;

function displayData(tableData){
    let tbody = d3.select("tbody");
    tableData.forEach((UFOSighting) => {
        let new_tr = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
            let new_td = new_tr.append("td").text(value)
        });
    });
};

displayData(tableData)

let dateInput = d3.select("#datetime");
let button = d3.select("filter-btn")

function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInput.property("value"));
    let new_table = tableData.filter(UFOSighting => UFOSighting.datetime === dateInput.property("value"));
    displayData(new_table);
};

dateInput.on("change", clickSelect);


