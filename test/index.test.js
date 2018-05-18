const moneyFormat = require('../dist/index.min');

test(`给数字或者数字类型的字符串加千分符`, () => {
    expect(moneyFormat()).toEqual('');
    expect(moneyFormat('')).toEqual('');
    expect(moneyFormat('-')).toEqual('');
    expect(moneyFormat('哈哈')).toEqual('');
    expect(moneyFormat(100)).toEqual('100');
    expect(moneyFormat(1000)).toEqual('1,000');
    expect(moneyFormat(10000)).toEqual('10,000');
    expect(moneyFormat(100000)).toEqual('100,000');
    expect(moneyFormat(1000000)).toEqual('1,000,000');
    expect(moneyFormat('100')).toEqual('100');
    expect(moneyFormat('1000')).toEqual('1,000');
    expect(moneyFormat('10000')).toEqual('10,000');
    expect(moneyFormat('100000')).toEqual('100,000');
    expect(moneyFormat('1000000')).toEqual('1,000,000');
    expect(moneyFormat('-10000')).toEqual('-10,000');
});
