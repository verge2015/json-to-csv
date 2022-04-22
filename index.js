const fs = require("fs");
const jsonexport = require('jsonexport');

//Get raw data from CSV file in Resources Folder
const rawdata = fs.readFileSync('./resources/json-to-csv.json');
//Convert to JSON
const contacts = JSON.parse(rawdata);

jsonexport(contacts, async function(err, csv){
    if (err) return console.error(err);
    //Target directory and filename for output CSV file
    fs.writeFileSync('./output/json-to-csv.csv', csv, 'binary');
    console.log("File written");
});