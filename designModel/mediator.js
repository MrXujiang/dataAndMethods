var Mediator = (function(){
  var __messages = {};
  return {
    register: function(type, fn) {
      if(typeof __messages[type] === 'undefined') {
        messages[type] = [fn];
      }else {
        __messages[type].push(fn);
      }
    },
    send: function(type) {
      if(__messages[type]){
        var i = 0,
        len = __messages[type].length;
        for(;i<len;i++){
          __messages[type][i] && __messages[type][i]();
        }
      }
    }
  }
})
