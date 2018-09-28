const assert = require('chai').assert
const bubbleSort = require('./bubbleSort')

describe('bubbleSort functionality', function(){
  it('can sort an array of numbers using bubble sort', function() {
    assert.deepEqual(bubbleSort([5,3,4,2,1]), [1,2,3,4,5]);
  });
});
