/**
 * 散列表
 * 分离链接法
 */
function HashTable() {
  var table = [];

  // 散列函数
  var loseloseHashCode = function(key) {
    var hash = 0;
    for(var i=0; i<key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37
  };

  var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  }

  // put
  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    if(table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  }

  // get
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if(table[position] !== undefined){
      var current table[position].getHead();
      while(current.next) {
        if(current.element.key === key){
          return current.element.value
        }
        current = current.next
      }

      // 检查链表在第一个或最后一个情况
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  // remove
  this.remove = function(key) {
    var position = loseloseHashCode(key);
    if(table[position] !== undefined) {
      var current = table[position].getHead();
      while(current.next) {
        if(current.element.key === key) {
          table[position].remove(current.element);
          if(table[position].isEmpty()){
            table[position] = undefined;
          }
          return true
        }
        current = current.next;
      }

      // 检测是否是最后一个元素
      if(current.element.key === key) {
        table[position].remove(current.element);
        if(table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true
      }
    }
    return false
  }
}

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
