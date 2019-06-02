document.write('In-order Traversal:');
document.write('<br>');

var treeB = Object.assign({}, tree);

(function(){
	
	//Main:
	
	var traversal = function(node){
		if(node === null) return;
		traversal(node.left);
		document.write(node.data + ' ');
		traversal(node.right);
	}
	
	traversal(treeB.root);
	
})();

document.write('<br>');
document.write('<br>');