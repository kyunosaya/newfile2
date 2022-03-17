const color = ['red', 'blue', 'green', 'orange'];

// function myColor(a,b,...c){
//     return{
//         a:a,
//         b:b,
//         c:c,
//     }
// }

//1차변형
// function myColor(a,b,...c){
//     return {a,b,c}
// }

// 2차변형 : 화살표함수
// const myColor = (a,b,...c) => {return {a,b,c} }

//3차변형
const myColor = (a,b,...c) => ({a,b,c})

console.log(myColor(...color));