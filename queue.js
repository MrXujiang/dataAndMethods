/**
 * 队列
 * 先进先出
 */
 function Queue() {
   var items = [];

   // 添加元素
   this.enqueue = function(element) {
     items.push(element)
   }

   // 删除元素
   this.dequeue = function() {
     return items.shift()
   }

   // 返回队列中第一个元素
   this.front = function() {
     return items[0]
   }

   // 判断队列是否为空
   this.isEmpty = function() {
     return items.length == 0
   }

   // 返回队列大小
   this.size = function() {
     return items.length;
   }

   // 打印
   this.print = function() {
     console.log(items.toString())
   }
 }
