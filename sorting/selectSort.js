//Selection Sort


var sort = function(inputArray){
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	for(var i=0;i<arr.length-1;i++){
		
		var minIndex = i;
		var minValue = arr[i];
		
		//Find minimum
		for(var k=i+1;k<arr.length;k++){
			if(minValue > arr[k]){
				minValue = arr[k];
				minIndex = k;
			}
		}
		
		//Swap
		var t = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = t;
		
	}
	
	return arr;
	
}


//Time: o(n^2)
//Space: o(1)


exports.sort = sort;