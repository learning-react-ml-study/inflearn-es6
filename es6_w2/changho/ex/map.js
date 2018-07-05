var firstMap = new Map;

// let arr = [1 ,2 ,3, 4];
// let ws = new WeakSet();

// ws.add(arr);

// console.log(ws);

// // 참조가 사라지면 가비지 콜렉션 대상이 된다.

let wm = new WeakMap();

let myFunc = function() {};


class Person {
    constructor(name) {
        this.name = name;
    }
}

let a = new Person('changhao');

console.log(a.name);


let mySet = new WeakSet();
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

let obj = {arr, arr2};

mySet.add(arr);
mySet.add(arr2);
mySet.add(obj);

arr = [1, 2, 5];
arr2 = null;
obj = null;

// console.log(mySet.has(arr), mySet.has(arr2), mySet.has(obj)) // false false
// console.log(mySet.size);

console.log(mySet.has(arr));

