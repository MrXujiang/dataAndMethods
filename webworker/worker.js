// 引入脚本
importScripts('say.js', 'list.js');

// 用于向html页面传回一条消息
postMessage('hello, world----' + name + '----' + list[0]);

// 监听信息
onmessage = function(e) {
    console.log('接收到html页面信息: ', e.data)

    // 结束本worker
    // close()
}