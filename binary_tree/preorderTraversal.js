document.write('Pre-order Traversal:');
document.write('<br>');

var treeC = Object.assign({}, tree);

(function(){
	
	//Main:
	
	var traversal = function(node){
		if(node === null) return;
		document.write(node.data + ' ');
		traversal(node.left);
		traversal(node.right);
	}
	
	traversal(treeC.root);
	
})();

document.write('<br>');
document.write('<br>');