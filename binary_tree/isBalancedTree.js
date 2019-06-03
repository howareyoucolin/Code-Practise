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
var isBalanced = function(root) {
    
    if(root === null) return true;
    
    if(Math.abs(getMaxHeight(root.left) - getMaxHeight(root.right)) > 1) return false;
    
    return isBalanced(root.left) && isBalanced(root.right);
    
};

var getMaxHeight = function(root){
    if(root === null) return 0;
     return 1+Math.max(getMaxHeight(root.left),getMaxHeight(root.right));
}
