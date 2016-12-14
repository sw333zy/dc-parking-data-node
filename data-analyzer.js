module.exports = {
  dataAnaylzer: dataAnaylzer
};
var _ = require('lodash');


function dataAnaylzer(violations) {
  unique_violations = _.uniq(violations);
  console.log(unique_violations);
  violations_frequency = _.countBy(violations);
  console.log(violations_frequency);

  var maxValue = 0;
  var maxKey = '';

  _.forEach(violations_frequency, function(value, key) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  });
  console.log("Total number of tickets:", violations.length);
  console.log("Total of unique violation types:", unique_violations.length );
  console.log ("The most common violation type for a parking ticket:", maxKey, "\nNumber of tickets with that violation:", maxValue);
}
