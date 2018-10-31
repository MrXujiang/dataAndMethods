function Dictionary() {
  var items = {};

  // 判断元素中是否有某个属性
  this.has = function(key) {
    return key in items
  }

  // 设置字典属性,值
  this.set = function(key, value) {
    items[key] = value;
  }

  // 移除某个属性
  this.remove = function(key) {
    if(this.has(key)) {
      delete items[key];
      return true
    }
    return false
  }

  // 获取某个属性
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined
  }

  // 获取字典值列表
  this.values = function() {
    var values = [];
    for(var i in items) {
      if(this.has(i)) {
        values.push(itmes[i]);
      }
    }
    return values
  }

  // 获取字典属性大小
  this.size = function() {
    return Object.keys(items).length
  }

  // 获取字典的键名数组
  this.keys = function() {
    return Object.keys(items)
  }

  // 清除字典
  this.clear = function() {
    items = {}
  }
}
