var csv = require('csv-parser');
var fs = require('fs');
var violations = [];

module.exports = {
  parseFile: parseFile
};

function parseFile(callBack) {
  fs.createReadStream('data/parking_feb_2016.csv')
    .pipe(csv())
    .on('data', function onNewLineEvent(data) {
      console.log( data.VIOLATION_CODE );
      violations.push(data.VIOLATION_CODE );
    })
    .on('end', function onFileEndEvent() {
      callBack(violations);
    }
  );

}
