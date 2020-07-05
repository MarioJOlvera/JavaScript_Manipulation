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

let filters = d3.select("#filters");

filters.on("click", function(){
    d3.event.preventDefault();

    let dateInput = d3.select("#datetime");
    let cityInput = d3.select("#city");
    let stateInput = d3.select("#state");
    let countryInput = d3.select("#country");
    let shapeInput = d3.select("#shape");

    console.log(dateInput.property("value"));
    console.log(cityInput.property("value"));
    console.log(stateInput.property("value"));
    console.log(countryInput.property("value"));
    console.log(shapeInput.property("value"));

    let filtered = tableData.filter(UFOSighting => {
        return (UFOSighting.datetime === dateInput.property("value"),
        (UFOSighting.city === cityInput.property("value")),
        (UFOSighting.state === stateInput.property("value")),
        (UFOSighting.country === countryInput.property("value")),
        (UFOSighting.shape === shapeInput.property("value"))
    });

    displayData(filtered);

});

let filterInputs = d3.selectAll('.form-control');

function clearEntries(){
    filters = {};

    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0){
            d3.select('#' + entry.id).node().value = "";
        }
    });
};






