/**
 * 双向链表
 * 链接是双向的，一个链向下一个元素，一个链向前一个元素
 */

 function DoubleLinkedList() {
   var Node = function(element) {
     this.element = element;
     this.next = null;
     this.prev = null;
   }

   var length = 0;
   var head = null;
   var tail = null;

   // 在任意位置插入一个元素
   this.insert = function(position, element) {
     // 检查边界条件
     if(position > -1 && position < length) {
       var node = new Node(element),
       previous,
       current = head,
       index = 0;
       if(position === 0) {
         if(!head) {
           head = node;
           tail = node;
         }else{
           current.prev = node;
           previous.next = current;
           head = node;
         }
       }else if(position === length){
         current = tail;
         current.next = node;
         node.prev = current;
         tail = node;
       }else {
         while(index++ < position) {
           previous = current;
           current = current.next;
         }
         previous.next = node;
         node.prev = previous;
         node.next = current;
         current.prev = node;

       }
       length++;
       return true
     }else {
       return false
     }
   }

   // 在任意位置移除一个元素
   this.removeAt = function(position) {
     // 检测越界条件
     if(position > -1 && position < length){
       var current = head, previous, index = 0;
       if(position === 0){
         head = current.next;
         if(length === 1) {
           tail = null;
         }else{
           current.prev = null;
         }
       }else if(position === length - 1){
         current = tail;
         tail = current.prev;
         tail.next = null;
       }else{
         while(index++ < position){
           previous = current;
           current = current.next;
         }
         previous.next = current.next;
         current.next.prev = previous;
       }
       length--;
       return current.element
     }else{
       return null
     }
   }

 }
