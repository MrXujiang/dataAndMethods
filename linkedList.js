/**
 * 链表
 * 定义 链表存储有序的元素单元，但不同于数组，链表中的元素在内存中并不是连续放置的，
 * 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成
 */

function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null
  }

  var length = 0;
  var head = null;

// 向尾部添加一个新项
  this.append = function(element) {
    var node = new Node(element),
    current;

    if(head === null) {
      head = node;
    }else {
      current = head;

      while(current.next) {
        current = current.next;
      }

      current.next = node
    }

    length++;
  }

// 向列表中特定位置插入一个新项
  this.insert = function(position, element) {
    // 检测越界条件
    if(position > -1 && position < length) {
      var node = new Node(element),
      current = head,
      previous,
      index = 0;
       if(position === 0) {
         node.next = current;
         head = node;
       }else{
         while(index++ < position){
           previous = current;
           current = current.next;
         }
         previous.next = node;
         node.next = current;
         length++;
         return true
       }
    }else {
      return false
    }
  }

// 从列表中特定位置移除一项
  this.removeAt = function(position) {
    // 检查越界条件
    if(position > -1 && position < length) {
      var current = head,
      previous,
      index=0;

      // 移除第一项
      if(position === 0) {
        head = current.next;
      }else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
      length--;
      return current.element;
    }else {
      return null
    }
  }

// 从列表中移除一项
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index)
  }

// 返回元素在列表中的索引
  this.indexOf = function(element) {
    var current = head,
    index = 0;

    while(current) {
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1
  }

// 判断列表是否为空
  this.isEmpty = function() {
    return length === 0
  }

// 返回链表中包含元素的个数
  this.size = function() {
    return length
  }

  this.getHead = function() {
    return head
  }

// 输出元素的值
  this.toString = function() {
    var current = head,
    string = '';
    while(current) {
      string += '\t'+ current.element;
      current = current.next;
    }
    return string
  }

// 打印元素
  this.print = function() {

  }
}

// 测试
var list = new LinkedList();
list.append('xujiang');
list.append('xiaoming');
