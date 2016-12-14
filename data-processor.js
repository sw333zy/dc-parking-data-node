
var csv = require('csv-parser')
var fs = require('fs')
var violations = [];
var _ = require('lodash');

fs.createReadStream('simple_data/parking_feb_2016.csv')
  .pipe(csv())
  .on('data', function (data) {
    console.log( data.VIOLATION_CODE );
    violations.push(data.VIOLATION_CODE );
  })


  .on('end', function () {
    console.log("number of violation", violations.length);
    uniqued_violations = _.uniq(violations);
    console.log(uniqued_violations);
    console.log(_.countBy(violations));
    console.log(_.values(_.countBy(violations)));
    console.log(_.keys(_.countBy(violations)));
    console.log(_.toPairs(_.countBy(violations)));

    violations_frequency_pairs = _.toPairs(_.countBy(violations));
    violations_frequency = _.countBy(violations);

    var maxValue = 0;
    var maxKey = '';

    _.forEach(violations_frequency, function(value, key) {
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    });

    console.log ("maximum", maxKey, maxValue);
  });
