document.write('Post-order Traversal:');
document.write('<br>');

var treeD = Object.assign({}, tree);

(function(){
	
	//Main:
	
	var traversal = function(node){
		if(node === null) return;
		traversal(node.left);
		traversal(node.right);
		document.write(node.data + ' ');
	}
	
	traversal(treeD.root);
	
})();

document.write('<br>');
document.write('<br>');