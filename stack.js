/**
 * 栈
 * 定义： 一种遵循后进先出的有序集合，比如一摞书或者一叠盘子
 */

 function Stack() {
   var items = [];

   // push
   this.push = function(element) {
     items.push(element)
   }

   // pop
   this.pop = function() {
     return items.pop()
   }

   // peek 获取栈中最后添加的元素
   this.peek = function() {
     return items[items.length -1]
   }

   // isEmpty
   this.isEmpty = function() {
     return items.length == 0
   }

   // size
   this.size = function() {
     return items.length
   }

   // clear
   this.clear = function() {
     items = []
   }

   // print
   this.print = function() {
     console.log(items.toString())
   }
 }

 // 十进制转换为任何进制
 function baseConverter(decNumber, base) {
   var remStack = new Stack(),
       rem,
       baseString = '',
       digits = '0123456789ABCDEF';

   while(decNumber > 0) {
     rem = Math.floor(decNumber % base);
     remStack.push(rem);
     decNumber = Math.floor(decNumber / base);
   }

   while (!remStack.isEmpty()) {
     baseString += digits[remStack.pop()];
   }

   return baseString;
 }
