//Import Mocha library functions
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


//Import custom functions
var bubbleSort = require('../sorting/bubbleSort');
var insertionSort = require('../sorting/insertionSort');
var selectSort = require('../sorting/selectSort');
var mergeSort = require('../sorting/mergeSort');


describe('Sortings', function() {


	//Test arrays for all sort functions
	var test_array = [18, 14, 12, 13, 0, 7, 9, 1, 16, 17, 2, 8, 10, 4, 6, 15, 5, 19, 3, 11];
	var result_array = Object.assign([], test_array).sort(function(a, b){return a - b;});
	var test_array_1 = [1,4,5,3,4,4,2,3,5];
	var result_array_1 = Object.assign([], test_array_1).sort(function(a, b){return a - b;});
	var test_array_2 = [0];
	var result_array_2 = Object.assign([], test_array_2).sort(function(a, b){return a - b;});
	var test_array_3 = [];
	var result_array_3 = Object.assign([], test_array_3).sort(function(a, b){return a - b;});
	
	
	//Test bubble sort
	describe('Bubble Sort', function() {
		it('should sort ' + test_array.join(' '), function() {
		  expect(bubbleSort.sort(test_array)).to.deep.equal(result_array);
		});
		it('should sort array contains duplicate items ' + test_array_1.join(' '), function() {
		  expect(bubbleSort.sort(test_array_1)).to.deep.equal(result_array_1);
		});
		it('should sort array with only a single item', function() {
		  expect(bubbleSort.sort(test_array_2)).to.deep.equal(result_array_2);
		});
		it('should sort empty array', function() {
		  expect(bubbleSort.sort(test_array_3)).to.deep.equal(result_array_3);
		});
	});
	
	
	//Test insertion sort
	describe('Insertion Sort', function() {
		it('should sort ' + test_array.join(' '), function() {
		  expect(insertionSort.sort(test_array)).to.deep.equal(result_array);
		});
		it('should sort array contains duplicate items ' + test_array_1.join(' '), function() {
		  expect(insertionSort.sort(test_array_1)).to.deep.equal(result_array_1);
		});
		it('should sort array with only a single item', function() {
		  expect(insertionSort.sort(test_array_2)).to.deep.equal(result_array_2);
		});
		it('should sort empty array', function() {
		  expect(insertionSort.sort(test_array_3)).to.deep.equal(result_array_3);
		});
	});
	
	
	//Test selection sort
	describe('Selection Sort', function() {
		it('should sort ' + test_array.join(' '), function() {
		  expect(selectSort.sort(test_array)).to.deep.equal(result_array);
		});
		it('should sort array contains duplicate items ' + test_array_1.join(' '), function() {
		  expect(selectSort.sort(test_array_1)).to.deep.equal(result_array_1);
		});
		it('should sort array with only a single item', function() {
		  expect(selectSort.sort(test_array_2)).to.deep.equal(result_array_2);
		});
		it('should sort empty array', function() {
		  expect(selectSort.sort(test_array_3)).to.deep.equal(result_array_3);
		});
	});
	
	
	//Test merge sort
	describe('Merge Sort', function() {
		it('should sort ' + test_array.join(' '), function() {
		  expect(mergeSort.sort(test_array)).to.deep.equal(result_array);
		});
		it('should sort array contains duplicate items ' + test_array_1.join(' '), function() {
		  expect(mergeSort.sort(test_array_1)).to.deep.equal(result_array_1);
		});
		it('should sort array with only a single item', function() {
		  expect(mergeSort.sort(test_array_2)).to.deep.equal(result_array_2);
		});
		it('should sort empty array', function() {
		  expect(mergeSort.sort(test_array_3)).to.deep.equal(result_array_3);
		});
	});
	
	
});