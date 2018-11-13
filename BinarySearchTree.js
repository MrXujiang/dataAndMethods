/**
 * 二叉搜索树
 */

 function BinarySearchTree() {
   var Node = function(key) {
     this.key = key;
     this.left = null;
     this.right = null;
   }

   var root = null;

   // 向树中插入一个值
   this.insert = function(key) {
     var newNode = new Node(key);
     if(root === null) {
       root = newNode;
     }else{
       insertNode(root,newNode);
     }
   }

   var insertNode = function(node, newNode){
     if(newNode.key < node.key) {
       if(node.left === null){
         node.left = newNode;
       }else{
         insertNode(node.left, newNode)
       }
     }else{
       if(node.right === null){
         node.right = newNode;
       }else{
         insertNode(node.right, newNode)
       }
     }
   }

   // 中序遍历---以上行顺序访问BST所有节点，也就是以最小到最大的顺序
   this.inOrderTraverse = function(cb){
     inOrderTraverseNode(root, cb);
   }

   // 中序排序辅助方法
   var inOrderTraverseNode = function(node, cb){
     if(node !== null){
       inOrderTraverseNode(node.left, cb);
       cb(node.key);
       inOrderTraverseNode(node.right, cb);
     }
   }

   // 先序排序 --- 优先于后代节点的顺序访问每个节点
   this.preOrderTraverse = function(cb) {
     preOrderTraverseNode(root, cb);
   }

   // 先序排序辅助方法
   var preOrderTraverseNode = function(node, cb) {
     if(node !== null) {
       cb(node.key);
       preOrderTraverseNode(node.left, cb);
       preOrderTraverseNode(node.right, cb);
     }
   }

   // 后续遍历 --- 先访问后代节点，再访问节点本身
   this.postOrderTraverse = function(cb) {
     postOrderTraverseNode(root, cb);
   }

   // 后续遍历辅助方法
   var postOrderTraverseNode = function(node, cb) {
     if(node !== null){
       postOrderTraverseNode(node.left, cb);
       postOrderTraverseNode(node.right, cb);
       cb(node.key);
     }
   }

   // 最小值
   this.min = function(){
     return minNode(root)
   }

   var minNode = function (node) {
     if(node) {
       while(node && node.left !== null){
         node = node.left;
       }
       return node.key
     }
     return null
   }

   // 最大值
   this.max = function() {
     return maxNode(root)
   }

   var maxNode = function(node) {
     if(node){
       while(node && node.right !== null){
         node = node.right;
       }
       return node.key
     }
     return null
   }

   // 搜索树中某个值
   this.search = function(key) {
     return searchNode(root, key)
   }

   var searchNode =function(node, key){
     if(node === null) {
       return false
     }
     if(key < node.key) {
       return searchNode(node.left, key)
     } else if(key > node.key) {
       return searchNode(node.right, key)
     }else {
       return true
     }
   }

   // 移除某个节点
   this.remove  =function(key) {
     root = removeNode(root, key);
   }

   // 发现最小节点
   var findMinNode = function (node) {
     if(node) {
       while(node && node.left !== null){
         node = node.left;
       }
       return node
     }
     return null
   }

   var removeNode = function(node, key) {
     if(node === null) {
       return null
     }

     if(key < node.key){
       node.left = removeNode(node.left, key);
       return node
     } else if( key > node.key){
       node.right = removeNode(node.right, key);
       return node
     } else {
       // 一个页节点
       if(node.left === null && node.right === null) {
         node = null;
         return node
       }

       // 只有一个子节点的节点
       if(node.left === null) {
         node = node.right;
         return node
       }else if(node.right === null) {
         node = node.left;
         return node
       }

       // 有两个子节点的节点
       var aux = findMinNode(node.right);
       node.key = aux.key;
       node.right = removeNode(node.right, aux.key);
       return node
     }
   }
 }

 function printNode(value) {
   console.log(value);
 }

 var tree = new BinarySearchTree();
 tree.insert(9);
 tree.insert(11);
 tree.insert(34);
 tree.insert(4);
 tree.insert(1);
 tree.insert(8);
 tree.insert(6);
 tree.insert(24);
 tree.insert(41);
 tree.insert(10);

 // tree.preOrderTraverse(printNode);
 tree.search(9)
