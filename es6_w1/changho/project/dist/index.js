'use strict';

var hello = 'hello';

var arr = [1, 2, 3];

function set() {
    console.log('start');
};
setTimeout(set, 0);
console.log('next');

// string method들 
// startsWith --> string 처음 단어에 매칭 되면 true 아니면 false
var first = 'hello world  ~~';
var second = 'hello';

var third = 'mine';
var forth = 'e';

var result = first.startsWith(second);
console.log(result); // true

// endsWith --> 끝단어가 매칭되는지 확인

var con = first.endsWith(second);
console.log(con); // false

var result2 = third.endsWith(forth); // third의 끝단어가 forth로 끝나는지 체크

console.log(result2); // true

// includes  --> 어떤 string이 들어가 있는지 체크 인자로 str을 받는다

console.log(first.includes(second)); // true
console.log(first.includes('he')); // true


// template 메소드
var template = 'this is template string method ' + first + ' ' + second;
console.log(template);

// arry for - of

var data = [1, 2, 3];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        console.log(n);
    }

    // string 값도 변화 가능
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

var str = '2sdagsd';

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var s = _step2.value;

        console.log(s);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}