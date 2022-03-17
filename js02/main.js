import data from './data.json';
//js, node_modules => 경로 없이 쓸 수 있음.
import $ from 'jquery';

$(function(){
    $('body').text('welcome');
})

console.log(data);
console.log(data.array);
console.log(data.array[1]);
console.log(data.obj.a);
console.log(typeof data);

// 일반객체 -> json(string)
const color = {
    title:'red',
    sample:'apple',
    number:100
}
console.log(typeof color);
const str = JSON.stringify(color);
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log(obj);
console.log(typeof obj);