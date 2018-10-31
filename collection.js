/**
 * 集合：没有重复元素，没有顺序的数组
 */
'use strict'

function Set() {
  var items = {};

  // 判断集合是否有某个元素
  this.has = function(value) {
    return items.hasOwnProperty(value);
  }

  // 向集合中添加元素
  this.add = function(value) {
    if(!this.has(value)) {
      items[value] = value;
      return true
    }
    return false
  }

  // 移除集合中的某个元素
  this.remove = function(value) {
    if(this.has(value)){
      delete items[value];
      return true
    }
    return false
  }

  // 清空集合中元素
  this.clear = function() {
    items = {};
  }

  // 获取集合中元素的个数
  this.size = function() {
    return Object.keys(items).length
  }

  // 返回集合中值的数组
  this.values = function() {
    return Object.keys(items)
  }

  // 并集
  this.union = function(otherSet) {
    var unionSet = new Set();
    var values = this.values();
    for(var i=0; i<values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for(var i=0; i< values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet
  }

  // 交集
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();
    var values = this.values();
    for(var i=0; i<values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet
  }

  // 差集
  this.difference = function(otherSet) {
    var differenceSet = new Set();
    var values = this.values();
    for(var i=0; i<values.length; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet
  }

  // 子集
  this.subset = function(otherSet) {
    if(this.size() > otherSet.size()) {
      return false
    } else {
      var values = this.values();
      for(var i=0; i< values.length; i++) {
        if(!otherSet.has(values[i])){
          return false
        }
      }
      return true
    }
  }
}

// 测试
var set = new Set();
set.add(1);
set.add('ffff');
var set1 = new Set();
set1.add(11);
set1.add('ffff');
var union = set1.union(set);
console.log(union);
