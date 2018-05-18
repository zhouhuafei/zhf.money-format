(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('moneyFormat', function () {
    /**
     * @description 给数字或者数字类型的字符串加千分符
     * */
    function moneyFormat(value = '') {
        value = value.toString();
        if (isNaN(Number(value))) {
            return '';
        }
        // 格式化成金额形式的正则
        const format = /(?!\b)(?=(\d{3})+$)/g;
        const arr = value.split('.');
        arr[0] = arr[0].replace(format, ',');
        value = arr.join('.');
        return value;
    }

    return moneyFormat;
});
