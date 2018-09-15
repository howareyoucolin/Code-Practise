//Heap Sort


var sort = function(inputArray){
	
	//Clone array to avoid mutating the original
	var arr = Object.assign([], inputArray);
	
	
	//Max length is also the right most boundry of the heap
	//Init the max length value
	var max_length = arr.length;
	
	
	/**
	* Swap 2 items of array 'arr'
	* @param index a, index b
	*/
	var _swap = function(i,j){
		
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
		
	}
	
	
	/**
	* Check if a node has left leaf
	* @param index of array 'arr'
	* @return TRUE if it has left leaf, FALSE otherwise
	*/
	var _has_leftnode = function(i){

		return i*2+1 < max_length;
		
	}
	
	
	/**
	* Check if a node has right leaf
	* @param index of array 'arr'
	* @return TRUE if it has left leaf, FALSE otherwise
	*/
	var _has_rightnode = function(i){

		return i*2+2 < max_length;
		
	}
	
	
	/**
	* Get the value of the left node
	* @param index of array 'arr'
	* @return value of the left node 
	*/
	var _leftnode_val = function(i){

		return arr[i*2+1];
		
	}
	
	
	/**
	* Get the value of the right node
	* @param index of array 'arr'
	* @return value of the right node 
	*/
	var _rightnode_val = function(i){

		return arr[i*2+2];
		
	}
	
	
	/**
	* Get the index of the left node
	* @param index of array 'arr'
	* @return index of the left node 
	*/
	var _leftnode_index = function(i){

		return i*2+1;
		
	}
	
	
	/**
	* Get the index of the right node
	* @param index of array 'arr'
	* @return index of the right node 
	*/
	var _rightnode_index = function(i){

		return i*2+2;
		
	}
	
	
	/**
	* Heapify the heap from node i recursively
	* @param index i
	* @return void
	*/
	var _heapify = function(i){
		
		var max_leaf_index = i;
		
		//Find the max value among the node and its leaves
		//Compare the right leaf
		if(_has_rightnode(i)){
			if(arr[max_leaf_index] < _rightnode_val(i)){
				max_leaf_index = _rightnode_index(i);
			}
		}
		
		//Then compare the left leaf
		if(_has_leftnode(i)){
			if(arr[max_leaf_index] < _leftnode_val(i)){
				max_leaf_index = _leftnode_index(i);
			}
		}
		
		//If max value isn't the current node, swap and proform another heapify to the child leaf
		if(max_leaf_index != i){
			_swap(i,max_leaf_index);
			_heapify(max_leaf_index);
		}
		
		return;
		
	}
	
	
	/**
	* Heapify the heap from toe to top
	* @return void
	*/
	var _max_heapify = function(){
		
		for(var i = max_length-1; i>=0; i--){
			
			if(_has_leftnode(i)){
				_heapify(i);
			}
				
		}
	
	}
	
	
	//Initally build a max heap from 'arr'
	_max_heapify();

	//Keep poping the root of the tree to the end of the array,
	//then move the last leaf to the root and re-heapify the heap,
	//Countinue the process til the heap is empty
	while(max_length > 1){
		
		_swap(0,(--max_length));
		_heapify(0);
	
	}
	
	return arr;
	
}


//Time: o(n*log(n))
//Space: o(1)
//Note: 
// --> heap heap is kind of like a tree but normally implemented with an array.
// --> heap heap is easy for insertion and deletion but slow to traversal.
// --> heap sort is not stable due to issues dealing with duplicate items.
//Source:
// --> https://www.programiz.com/dsa/heap-sort


exports.sort = sort;