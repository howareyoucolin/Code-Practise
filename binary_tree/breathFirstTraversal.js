document.write('Breath First Traversal:');
document.write('<br>');

class Queue{
    constructor() { 
        this.items = []; 
    } 
	enqueue(element) {     
		this.items.push(element); 
	} 
	dequeue() { 
		if(this.isEmpty()) 
			return "Underflow"; 
		return this.items.shift(); 
	} 
	isEmpty() { 
		return this.items.length == 0; 
	} 
}

var treeA = Object.assign({}, tree);

(function(){

	//Main:

	if(treeA.root === null) return;

	var queue = new Queue();
	queue.enqueue(treeA.root);

	while(!queue.isEmpty()){
		var item = queue.dequeue();
		document.write(item.data + ' ');
		if(item.left !== null) queue.enqueue(item.left);
		if(item.right !== null) queue.enqueue(item.right);
	}

	return;

})();

document.write('<br>');
document.write('<br>');




