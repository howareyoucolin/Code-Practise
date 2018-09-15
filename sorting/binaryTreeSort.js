//Binary Tree Sort


var sort = function(inputArray){
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	
	/**
	* Class: node
	* with a value, and 2 pointers 'left' & 'right'
	*/
	var node = function(value){
			
		this.value = value;
		this.left = null;
		this.right = null;
	
	}
	
	if(arr.length == 0){
		return [];
	}
	
	//Init a root node
	var root = new node(arr[0]);

	//Build the node tree
	for(var i=1; i<arr.length; i++){

		var pointer = root;

		while(true){
			
			if(arr[i] > pointer.value){
				if(pointer.right !== null){
					pointer = pointer.right;
				}else{
					pointer.right = new node(arr[i]);
					break;
				}
			}else{
				if(pointer.left !== null){
					pointer = pointer.left;
				}else{
					pointer.left = new node(arr[i]);
					break;
				}
			}		
			
		}

	}
	
	var result_array = [];
	
	/**
	* Inorder tree travaersal recursively
	*/
	var traversal = function(n){
		
		//Base case
		if(n.left === null && n.right === null){
			result_array.push(n.value);
			return;
		}
		
		if(n.left !== null) traversal(n.left);
		result_array.push(n.value);
		if(n.right !== null) traversal(n.right);
		
	}
	
	//Kick starter
	traversal(root);
	
	return result_array;
	
}


//Worst Time: o(n^2)
//Avg Time: o(n*log(n))
//Best Time: o(n*log(n))
//Space: o(n)


exports.sort = sort;