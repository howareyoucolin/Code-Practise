//Insertion Sort


var sort = function(inputArray){
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	for(var i=1;i<arr.length;i++){
		
		var k = i;
		
		while(k > 0){
			
			if(arr[k] >= arr[k-1]) break;
			else{
				
				//Swap
				var t = arr[k];
				arr[k] = arr[k-1];
				arr[k-1] = t;
				
			}
			
			k--;
			
		}//While
		
	}
	
	return arr;
	
}


//Worst Time: o(n^2)
//Avg Time: o(n^2)
//Best Time: o(n)
//Space: o(1)


exports.sort = sort;