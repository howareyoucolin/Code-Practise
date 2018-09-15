//Quick Sort


var sort = function(inputArray){
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	
	/**
	* Resursive arrang numbers a big array into two partitions of a chosen pivot
	* @param left position, right position, a pivot for comparison
	* @return void
	*/
	var quickSort = function(left,right,pivot){
		
		//Base case
		if(right - left < 2) return;
		
		var i = left - 1;
		
		for(var j = left; j < right; j++){
			
			if(arr[j] < pivot){
				
				i++;
				
				//Swap and move smaller items to the left
				var t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
			
		}
		
		//Swap pivot into the midpoint 
		var t = arr[i+1];
		arr[i+1] = arr[right];
		arr[right] = t;
		
		//Partitions
		quickSort(left,i,arr[i]);
		quickSort(i+2,right,arr[right]);
		
	}
	
	
	//Kick start mergeSort 
	quickSort(0,arr.length-1,arr[arr.length-1]);
	
	//Return mutated sorted array
	return arr;
	
}


//Worst Time: o(n^2)
//Avg Time: o(n*log(n))
//Best Time: o(n*log(n))
//Space: o(1)


exports.sort = sort;