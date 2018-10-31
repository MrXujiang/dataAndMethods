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

  // put
  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    table[position] = value;
  }

  // get
  this.get = function(key) {
    return table[loseloseHashCode(key)]
  }

  // remove
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;
  }
}
