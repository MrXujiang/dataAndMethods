/**
 * 模板模式
 */

 // 模板渲染方法
 function formatString(str, data) {
   return str.replace(/\{\{(\w+)\}\}/g, function(match, key) {
     return typeof data[key] === undefined ? '' : data[key]
   })
 }
