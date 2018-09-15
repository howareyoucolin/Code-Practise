//Merge Sort


var sort = function(inputArray){
	
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	
	/**
	* Resursive divide a big array into halves and merge them back into a sorted array
	* @param unsorted array
	* @return sorted array
	*/
	var mergeSort = function(arr){
		
		//Base case
		if(arr.length <= 1) return arr;
		
		//Divide to 2 sub arrays
		var frontHalf = arr.slice(0, parseInt(arr.length/2));
		var rearHalf = arr.slice(parseInt(arr.length/2));
		
		//Merge sub arrays recursively
		return _merge(mergeSort(frontHalf),mergeSort(rearHalf));
		
	}
	
	
	/**
	* This function is to merge two smaller arrays into a big sorted one
	* @param array 1, array 2
	* @return merged and sorted array
	*/
	var _merge = function(a,b){
		
		var result_array = [];
		
		//2 pointers
		var p1 = 0;
		var p2 = 0;
		
		//Sort and merge 2 sub arrays
		while(p1 < a.length && p2 < b.length){
			
			if(a[p1] < b[p2]){
				result_array.push(a[p1]);
				p1++;
			}else{
				result_array.push(b[p2]);
				p2++;
			}
			
		}
		
		//Add the rest of array-a reminding items
		for(var i=p1; i<a.length; i++){
			result_array.push(a[i]);
		}
		
		//Add the rest of array-b reminding items
		for(var i=p2; i<b.length; i++){
			result_array.push(b[i]);
		}
		
		return result_array;
		
	}
	
	
	//Kick start mergeSort 
	return mergeSort(arr);
	
	
}


//Time: o(n*log(n))
//Space: o(n)


exports.sort = sort;