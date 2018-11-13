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
      table[position] = value;
    }else{
      var index = ++position;
      while(table[index] != undefined){
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  }

  // get
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if(table[position] !== undefined){
      if(table[position].key === key){
        return table[position].value
      }else{
        var index = ++position;
        while(table[index].key === undefined || table[index].key !== key){
          index++;
        }
        if(table[index].key === key){
          return table[index].value
        }
      }
    }
    return undefined
  }

  // remove
  this.remove = function(key) {
    var position = loseloseHashCode(key);
    if(table[position] !== undefined){
      if(table[position].key === key){
        table[position] = undefined;
      }else{
        var index = ++position;
        while(table[index].key === undefined || table[index].key !== key){
          index++;
        }
        if(table[index].key === key){
          table[index] = undefined;
        }
      }
    }
    return undefined
  }
}
