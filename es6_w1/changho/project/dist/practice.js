'use strict';

// console.log( lis)


function print() {
    var lis = document.querySelectorAll('li');
    var newArr = Array.from(lis);
    var newData = newArr.filter(function (v) {
        return v.innerText.includes('e');
    });
    return newData;
}

// 내 버전
function strFilter(tag, str) {
    var node = document.querySelectorAll(tag);
    var newArr = Array.from(node);
    var data = newArr.filter(function (v) {
        return v.innerText.includes(str);
    });
    return data;
}

console.log(strFilter('li', 'e'));
console.log(strFilter('p', 'news'));
console.log(print());