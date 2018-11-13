/**
 * djb2散列函数
 */
 var djb2HashCode = function(key) {
   var hash = 5381;
   for(var i=0; i<key.length; i++){
     hash = hash*33 + key.charCodeAt(i);
   }
   return hash % 1013
 }
