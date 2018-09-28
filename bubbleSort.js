function bubbleSort(array) {
  var last = array.length - 1;
  var counter = 1;
  while (counter != 0) {
    counter = 0;
    for(var i = 0; i < last; ++i) {
      var num1 = array[i];
      var num2 = array[i+1];
      if (num1 > num2) {
        array[i] = num2;
        array[i+1] = num1;
        ++counter;
      };
    };
  };
  return array;
};

console.log(bubbleSort([10,4,2,7,45,8,19,21]))

module.exports = bubbleSort
