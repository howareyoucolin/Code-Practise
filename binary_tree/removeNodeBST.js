/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

    var node = root;
    var nodeParent = root;
    var childReference = null;
    
    //Find the node with key
    while(node !== null){
        if(node.val === key){
            break;
        }    
        else if(node.val < key){
            nodeParent = node;
            node = node.right;
            childReference = 'right';
        }
        else{
            nodeParent = node;
            node = node.left;
            childReference = 'left';
        }
    }    
    
    //If node is not in the tree
    if(node === null) return root;
    
    //If node is a leaf
    if(node.left === null && node.right === null){
        if(childReference === null) return null;//Root node matches the key
        nodeParent[childReference] = null;      
    }
    //If node is has one child
    else if(node.left === null){
        if(childReference === null) return node.right;//Root node matches the key
        nodeParent[childReference] = node.right;
         
    }
    else if(node.right === null){
        if(childReference === null) return node.left;//Root node matches the key
        nodeParent[childReference] = node.left;
    }
    //If node is has both children
    else{
        var value = findMinNode(node.right);  
        node.val = value;
        node.right = deleteNode(node.right,value);
    }

    return root;
    
};

var findMinNode = function(node){
    if(node === null) return false;
    while(node.left !== null){
        node = node.left;
    }
    return node.val;
}
