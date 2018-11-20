/**
 * 防抖函数--在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 */
 function debounce(fun, delay) {
    return function (args) {
        let that = this
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun.call(that, args)
        }, delay)
    }
}
