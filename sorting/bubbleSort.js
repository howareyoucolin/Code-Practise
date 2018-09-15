//Bubble Sort


var sort = function(inputArray){
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	for(var i=0;i<arr.length-1;i++){
		for(var k=0;k<arr.length-1-i;k++){
			
			if(arr[k] > arr[k+1]){
				
				//Swap
				var t = arr[k];
				arr[k] = arr[k+1];
				arr[k+1] = t;
				
			}
			
		}
	}
	
	return arr;
	
}


//Time: o(n^2)
//Space: o(1)


exports.sort = sort;
