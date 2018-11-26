/**
 * 同步模块模式
 */
var SMD = (function(){
  var F = {},

  _define = function(str, fn){
    // 解析模块路由
    var parts = str.split('.'),
    old = parent = F,
    i = len = 0;

    if(parts[0] === 'F') {
      parts = parts.slice(1);
    }

    if(parts[0] === 'define' || parts[0] === 'moudle') {
      return
    }

    for(len = parts.length; i<len; i++) {
      if(typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = {};
      }
      old = parent;
      parent = parent[parts[i]];
    }

    if(fn) {
      old[parts[--i]] = fn();
    }

    return F
  },

  _module = function() {
    var args = [].slice.call(arguments),
    fn = args.pop(),
    parts = args[0] && args[0] instanceof Array ? args[0] : args,
    modules = [],
    modIDs = '',
    i = 0,
    ilen = parts.length,
    parent, j, jlen;
    while(i < ilen) {
      if(typeof parts[i] === 'string'){
        parent = F;
        modIDs = parts[i].replace(/^F\./, '').split('.');
        for(j=0, jlen = modIDs.length; j<jlen; j++){
          parent = parent[modIDs[j]] || false;
        }
        modules.push(parent);
      }else{
        modules.push(parts[i]);
      }
      i++;
    }
    fn.apply(null, modules);
  }

  return {
    define: _define,
    module: _module
  }
})()
