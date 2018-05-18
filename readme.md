# 给数字或者数字类型的字符串加千分符
```
const moneyFormat = require('zhf.money-format');

moneyFormat(); // ''
moneyFormat(''); // ''
moneyFormat('-'); // ''
moneyFormat('哈哈'); // ''
moneyFormat(100); // '100'
moneyFormat(1000); // '1,000'
moneyFormat(10000); // '10,000'
moneyFormat(100000); // '100,000'
moneyFormat(1000000); // '1,000,000'
moneyFormat('100'); // '100'
moneyFormat('1000'); // '1,000'
moneyFormat('10000'); // '10,000'
moneyFormat('100000'); // '100,000'
moneyFormat('1000000'); // '1,000,000'
moneyFormat('-10000'); // '-10,000'
```
