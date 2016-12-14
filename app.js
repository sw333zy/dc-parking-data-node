var processor = require('./data-processor');
var analyzer = require('./data-analyzer.js');

console.log(processor);

processor.parseFile(function callBack(violations){
  analyzer.dataAnaylzer(violations);
});
