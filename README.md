# json-to-csv

json-to-csv is NodeJS for converting JSON file to CSV file.

## Version of npm and NodeJS
```bash
 NodeJS v14.19.1
 npm 6.14.16
```

## Checking your version of npm and Node.js
```bash
 node -v
 npm -v
```

## Packages
```bash
 fs
 jsonexport
```

## Installation
```bash
 npm i jsonexport
```

## Usage
```bash
 node index.js
```

## Source Code
```javascript
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
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

