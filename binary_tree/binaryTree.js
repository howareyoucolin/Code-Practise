/**
* Node class
**/
var Node = function(data){
	
	this.data = data;
	this.left = null;
	this.right = null;
	
}

/**
* Binary tree class
**/
var Tree = function(data){
	
	/**
	* Constructor
	**/
	this.root = null;
	if(data !== undefined) this.root = new Node(data);
	
	/**
	* Insertion
	**/
	this.insert = function(data){
		if(this.root === null) this.root = new Node(data);
		else insertNode(data,this.root);
	}
	
	/**
	* Insertion helper function
	**/
	var insertNode = function(data,node){
		if(data < node.data){
			if(node.left === null) node.left = new Node(data);
			else insertNode(data,node.left);
		}
		else{
			if(node.right === null) node.right = new Node(data);
			else insertNode(data,node.right);
		}
	}
	
}

var tree = new Tree();
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
//console.log(tree);


