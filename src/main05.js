const color = ['red', 'blue', 'green', 'orange'];/*  => 배열 */

const [car, bus,,my] = color; /*  => ,로 순서 조정 가능. */
console.log(car);
console.log(my);

// 전개연산자(스프레드 연산자) ... => 펼쳐서 보여준다~
const fruit = ['apple', 'orange', 'banana'];

// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
console.log(...fruit)

function toOj(a,b,c){
    return {
        a:a,
        b:b,
        c:c
    }
}
console.log(toOj(fruit[0],fruit[1],fruit[2]));
console.log(toOj(...fruit));