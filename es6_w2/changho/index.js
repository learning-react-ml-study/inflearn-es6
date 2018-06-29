console.log('2주차 파일 및 프로젝트')

// 디스트럭쳐링 
function displayStudentInfo(obj) {
    var {first, last} = obj;
    return `내 이름은 ${first} ${last}입니다`
}

function printFullName({first, last}) {
    return `내 이름은 ${first} ${last}입니다`
}

function createStudent({likesJavaScript = true, likesES2015 = true} = {}) {
    var start = 'The student';
    if(likesJavaScript && likesES2015) {
        start += ' likes javascript and ES2015';
    } else if(likesJavaScript) {
        start += ' likes javascript'
    } else if(likesES2015) {
        start += ' likes ES2015'
    } else {
        start += ' does not Much....'
    }
    return start;
}
// reverse array
function reverseArr(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
}


let arr1 = [1, 3, 4];
// let [a, b, c] = arr1;

// console.log(a, b, c); // 1, 3, 4

// let [a, , b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // 3

let [a, ...other] = [1, 2, 3, 4, 5];
console.log(a) // 1
console.log(other); // [2, 3, 4, 5];

// default 값 
// let [a, b, c = 3] = [1, 2];

let object = {name: 'dk', age: 23};

let {name, age} = object;
console.log('name: ', name); // dk
console.log('age: ', age) // 23

let {name: x, age: y} = {name: 'chang', age: 11};





