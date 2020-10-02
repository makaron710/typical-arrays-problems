
exports.min = function min (array) {
  if(!array || array.length == 0){return 0;}

  var min = array[0];
  for(let i = 1; i < array.length; i++) {
    min = (array[i] < min) ? array[i] : min
  }
  return min;
}

exports.max = function max (array) {
  if(!array || array.length == 0){return 0;}

  var max = array[0];
  for(let i = 1; i < array.length; i++) {
    max = (array[i] > max) ? array[i] : max
  }
  return max;
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){return 0;}

  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
