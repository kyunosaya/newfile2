//주소 기억 데이터 저장이 된다.
localStorage.setItem('book','javascript');
localStorage.setItem('it','html');
const str = localStorage.getItem('book');
console.log(str);

//객체
const color = {
    title:'red',
    sample:'apple',
    no:['no01,no02']
}
// localStorage.setItem('sample',color);

//객체 -> JSON string : stringify() -> storage
const som = JSON.stringify(color);
// console.log(som);
localStorage.setItem('som',som);
const obj = (localStorage.getItem('som')); // JSON.parse()로 다시 객체형태로 만들어줌.
console.log(obj);
console.log(obj.sample);
console.log(obj.no);
console.log(obj.no[0]);
// localStorage.removeItem('sample');