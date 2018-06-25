// console.log( lis)





function print() {
    let lis = document.querySelectorAll('li')
    let newArr = Array.from(lis);
    let newData = newArr.filter((v) => {
        return v.innerText.includes('e'); 
    })
    return newData;
}

// 내 버전
function strFilter (tag, str) {
    let node = document.querySelectorAll(tag);
    let newArr = Array.from(node);
    let data = newArr.filter((v) => {
        return v.innerText.includes(str)
    })
    return data;
}

console.log(strFilter('li', 'e'))
console.log(strFilter('p', 'news'))
console.log(print())