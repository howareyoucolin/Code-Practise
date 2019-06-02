/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    var traversal = function(lTree,rTree){
        if(lTree === null && rTree === null) return true;
        else if(lTree === null || rTree === null) return false;
        else if(lTree.val !== rTree.val) return false;
        else return traversal(lTree.left,rTree.right) && traversal(lTree.right,rTree.left);
    }
    
    if(root === null) return true;
    else return traversal(root.left,root.right);
     
};
