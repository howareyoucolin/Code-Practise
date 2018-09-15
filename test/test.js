//Import Mocha library functions
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


//Import custom functions
var bubbleSort = require('../sorting/bubbleSort');
var insertionSort = require('../sorting/insertionSort');


describe('Sortings', function() {


	//Test array for all sort functions
	var test_array = [18, 14, 12, 13, 0, 7, 9, 1, 16, 17, 2, 8, 10, 4, 6, 15, 5, 19, 3, 11];
	var result_array = Object.assign([], test_array).sort(function(a, b){return a - b;});
	
	
	//Test bubble sort
	describe('Bubble Sort', function() {
		it('should sort ' + test_array.join(' '), function() {
		  expect(bubbleSort.sort(test_array)).to.deep.equal(result_array);
		});
	});
	
	
	//Test insertion sort
	describe('Insertion Sort', function() {
		it('should sort ' + test_array.join(' '), function() {
		  expect(insertionSort.sort(test_array)).to.deep.equal(result_array);
		});
	});
	
	
});