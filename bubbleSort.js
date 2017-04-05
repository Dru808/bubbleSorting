/*jshint esversion: 6*/

var numberSets = require('./numbersets.json').numberArrays;


function bubbleSort(arr) {
  var holder = null;
  var sorted = true;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= arr[i + 1]) {
      holder = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = holder;

      sorted  = false;
    }

  if(sorted === false) {
    bubbleSort(arr);
  }

  }
  return arr;
}

module.exports = bubbleSort;