/**
 * Definition for TreeNode.
 * 
  *class TreeNode {
  *  constructor(val, left, right){
  *    this.val = (val===undefined ? 0 : val)
  *    this.left = (left===undefined ? null : left)
  *    this.right = (right===undefined ? null : right)
  *  }
  *}
 * 
*/

/**
@param {TreeNode} list
@returns {number}
*/

module.exports = function(list){
  //Solution goes here

  let count = 0

  for (let i = 0; i < list.length; i++) {

    count++

  }
  console.log(count)



}