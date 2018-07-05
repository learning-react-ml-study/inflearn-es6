// 디스트럭쳐링
// let arr1 = [1, 3, 4];
// // let [a, b, c] = arr1;
// let [a, b, c] = arr1;

// let a, b;
let [a, b] = [1, 2];
console.log(a, b);

// console.log(a, b, c); // 1, 3, 4

let [c, ...other] = [1, 2, 3, 4, 5];
console.log(c);
console.log(other);

let funcObj = {
    title: 'sbs',
    news: 'loremsdk'
}
let {title, news} = funcObj;
console.log(title)
console.log(news);

// let [a, , b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // 3

// let [a, ...other] = [1, 2, 3, 4, 5];
// console.log(a) // 1
// console.log(other); // [2, 3, 4, 5];

// default 값 
// let [a, b, c = 3] = [1, 2];

// let object = {name: 'dk', age: 23};

// let {name, age} = object;
// console.log('name: ', name); // dk
// console.log('age: ', age) // 23

// let {name: x, age: y} = {name: 'chang', age: 11};


let json = {
        title: 'google',
        news: 'skdjfklsjdf',
        url: 'www.google.com'
    }

function sort(obj) {
    let {title, news} = obj;
    console.log(title);
}
sort(json);

// let [google, {title, news, url}] = json
// console.log(google)  // {title: "google", news: "skdjfklsjdf", url: "www.google.com"}
// console.log(title,news, url)  // naver skadfldskfl www.naver.com


// let funcObj = {
//     title: 'sbs',
//     news: 'loremsdk'
// }

// function sort(obj) {
//     let {title, news} = obj  // 내부에서 분할 할당
//     console.log(title)
//     document.body.innerText = title
// }

// sort(funcObj)  // sbs



// function displayStudentInfo(obj) {
//     var {first, last} = obj;
//     return `내 이름은 ${first} ${last}입니다`
// }

// function printFullName({first, last}) {
//     return `내 이름은 ${first} ${last}입니다`
// }

const todos = [{id: 1, completed: true}, {id: 2, completed: false}, {id: 3, completed: true}];

let data = todos.filter(({completed}) => completed);

console.log(data);

function getEvent(e) {
    [e.target.name]
}
    

const json2 = [
    
]