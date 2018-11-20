/**
 * 字符串扩展
 */

 codePointAt(n)               //能够正确处理4个字节储存的字符，返回一个字符的码点
 String.fromCodePoint(point)  //可以识别0xFFFF的字符,如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。
 for (let codePoint of 'foo') {      // 字符串的遍历器接口,使得字符串可以被for...of循环遍历,这个遍历器最大的优点是可以识别大于0xFFFF的码点
 includes(argStr, index)             //：返回布尔值，表示是否找到了参数字符串,第二个参数表示开始搜索的位置
 startsWith(argStr, index)           //：返回布尔值，表示参数字符串是否在源字符串的头部
 endsWith(argStr, index)             //：返回布尔值，表示参数字符串是否在源字符串的尾部。使用第二个参数n时，
                                     //  endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束
 repeat(n)                            // 返回一个新字符串，表示将原字符串重复n次
                                      // 如果repeat的参数是负数或者Infinity，会报错
                                      // 参数如果是小数，会被取整
 padStart(len, fillstr)，padEnd()                 //  如果某个字符串不够指定长度，会在头部或尾部补全。padStart用于头部补全，padEnd用于尾部补全
                                                  //  如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串
                                                  //  如果省略第二个参数，则会用空格补全长度
 标签模板
 var total = 30;
 var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

 // 将各个参数按照原来的位置拼合回去
 function passthru(literals, ...values) {
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index]
  return output;
}
