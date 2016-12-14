
var csv = require('csv-parser')
var fs = require('fs')
var violations = [];

fs.createReadStream('simple_data/parking_feb_2016.csv')
  .pipe(csv())
  .on('data', function (data) {
    console.log( data.VIOLATION_CODE );
    violations.push(data.VIOLATION_CODE );
  })


  .on('end', function () {
    console.log("number of violation", violations.length);
  });
