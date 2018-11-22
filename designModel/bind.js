/**
 * 绑定函数兼容
 */

 if(Function.prototype.bind === undefined){
   Function.prototype.bind = function(context) {
     var slice = Array.prototype.slice,
        args = slice.call(arguments, 1),
        that = this;
     // 返回新函数
     return function() {
       var addArgs = slice.call(arguments),
           allArgs = args.concat(addArgs);
           return that.apply(context, allArgs)
     }
   }
 }
