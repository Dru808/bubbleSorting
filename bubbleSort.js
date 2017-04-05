/*jshint esversion: 6*/

var numberSets = require('./numbersets.json').numberArrays;


function bubbleSort(a) {
  var holder = null;
  var sorted = true;

  for(var i = 0; i < a.length; i++) {
    if(a[i] >= a[i + 1]) {
      holder = a[i];
      a[i] = a[i + 1];
      a[i + 1] = holder;

      sorted  = false;
    }

  if(sorted === false) {
    bubbleSort(a);
  }

  }
  return a;
}

module.exports = bubbleSort;