'use strict';

// spread 오퍼레이터
var arr = ['apple', '배', '꿩'];

var newData = [1, 2].concat(arr, [545]); // 얕은 복사
console.log(newData);

var pre = [32, 45, 4643];

var newPre = [1].concat(pre);

// 함수의 응용
console.log(Math.max.apply(Math, pre));

function sum() {
    var total = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            total += n;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return total;
}

console.log(sum.apply(undefined, pre));

// from method
// function addMark (str) {
//     let newData = [];
//     for(let s of str) {
//         newData.push(`${s}!`);
//     }
//     return newData;
// }

function addMark() {
    var newArr = Array.from(arguments);
    console.log(newArr);
    var realData = newArr.map(function (v) {
        return v + '!';
    });
    return realData;
}

addMark('dfdf');