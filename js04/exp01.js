const str = `
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`
//생성자 방식
const reEx = new RegExp('the','gi'); /* g : 'the'만 인식  gi : 'the','The' 대소문자 둘 다 */
console.log(str.match(reEx)); 


//리터널 방식
// const reEx2 = /the/gi;
const reEx2 = /aaa/gi;
console.log(str.match(reEx2));