/**
 * 备忘录模式 --缓存数据
 */
 var Memo = function() {
   var cache = {};
   return function(name, cb) {
     if(cache[name]){
       // something to do
       cb && cb()
     }else{
       // 异步请求逻辑
     }
   }
 }
