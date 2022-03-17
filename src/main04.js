//객체 할당 기본 시스템
const {a1,a2,a3} = {
    a1 : 10, 
    a2 : 20, 
    a3 : 30, 
    a4 : 40
}
console.log(a1);

//
const book = {
    type : 'it',
    title : 'html',
    price : '20,000'
}
//할당 값이 없는 경우 추가 데이터 할당할 수는 있음,
//기본 할당 값, 추가된 할당 충돌 -> 기본 할당 값이 이김.
const {type,title,price,level=0} = book;
console.log(type);
console.log(level);

//기본 할당 이름 -> 이름의 변경이 필요할 경우
const welcome = type;
console.log(welcome);

//
const graphic = {
    some : 'paint',
    bookname : 'painter'
}
const {some:subtitle,bookname} = graphic;
console.log(subtitle);