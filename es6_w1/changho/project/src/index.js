
const hello = 'hello'

let arr = [1, 2, 3];




function set() {
    console.log('start')
};
setTimeout(set, 0)
console.log('next')

// string method들 
// startsWith --> string 처음 단어에 매칭 되면 true 아니면 false
let first = 'hello world  ~~';
let second = 'hello'

let third = 'mine';
let forth = 'e';

let result = first.startsWith(second);
console.log(result) // true

// endsWith --> 끝단어가 매칭되는지 확인

let con = first.endsWith(second)
console.log(con) // false

let result2 = third.endsWith(forth)  // third의 끝단어가 forth로 끝나는지 체크

console.log(result2) // true

// includes  --> 어떤 string이 들어가 있는지 체크 인자로 str을 받는다

console.log(first.includes(second))  // true
console.log(first.includes('he'))  // true


// template 메소드
let template = `this is template string method ${first} ${second}`
console.log(template)

// padStart
let padMethod = 'padStart'

console.log(padMethod.padStart(10, '32')) // 32padStart
console.log(padMethod.padStart(1, '32')) // padStart

// padEnd
console.log(
    padMethod.padEnd(10, '32')  // padStart32
)


// arry for - of

let data = [1, 2, 3];
for(let n of data) {
    console.log(n)
}

// string 값도 변화 가능
let str = '2sdagsd';

for(let s of str) {
    console.log(s)
}

