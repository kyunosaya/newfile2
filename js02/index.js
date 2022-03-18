import som from './export01'; /* default라서 이름 설정해줌(som) */
import {num} from './export02';
import * as str from './export03';
import data from './data01.json';

console.log(som);
console.log(num.sub);
console.log(str.sub(20));
console.log(str.default);
console.log(data);