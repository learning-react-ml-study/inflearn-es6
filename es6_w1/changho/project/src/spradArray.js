// spread 오퍼레이터
let arr = ['apple', '배', '꿩']

let newData = [1, 2, ...arr, 545] // 얕은 복사
console.log(newData)


let pre = [32, 45, 4643];

let newPre = [1, ...pre];

// 함수의 응용
console.log(
    Math.max(...pre)
)

function sum() {
    let total = 0;
    for(let n  of arguments) {
        total += n
    }
    return total;
}


console.log(sum(...pre))

// from method
// function addMark (str) {
//     let newData = [];
//     for(let s of str) {
//         newData.push(`${s}!`);
//     }
//     return newData;
// }

function addMark() {
    let newArr = Array.from(arguments)
    console.log(newArr)
    let realData = newArr.map((v) => {
        return `${v}!`
    })
    return realData;
}


addMark('dfdf')


