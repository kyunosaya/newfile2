// 배열
const all = {
    type:'it',
    title:'javascript',
    'num-level' : 3 /* => 특수문자는 따옴표 안에. */
}

console.log(all.type);
// console.log(all[type]); => X
console.log(all['type']);
console.log(all['num-level']);