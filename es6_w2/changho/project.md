# 디스트럭쳐링
## 개요
다음과 같은 형태가 디스트럭쳐링의 기본 형태이다. 
```javascript
let one, two;

[one, two] = [1, 2];
console.log(one, two) // 1, 2
```
변수 one과 two가 1, 2에 분할 되어 할당 된다. 이를 ES6에서 디스트럭쳐링 어사인먼트(Destructuring Assignment)로 표기하고 있다. 한국어로 궂이 표기하자면 분할 할당이라고 할 수 있다. 

## Array 분할

```javascript
let one, two, three, four;
const arr = [1, 2, 3];
[one, two, three] = arr;
[one two];   // [1, 2]
[one two, three, four]  // [1, 2, 3, undefined]
[one, ...other] = [1, 2, 3, 4, 5, 6]; // other = [2, 3, 4, 5, 6]로 할당
```

## Object 분할 

```javascript
let {one, two} = {one: 1, two: 9};
console.log(one, two) // 1, 9 
```
- 함수에서 파라미터 분할 할당
```javascript
let funcObj = {
    title: 'sbs',
    news: 'loremsdk'
}

function sort(obj) {
    let {title, news} = obj  // 내부에서 분할 할당
    console.log(title)
}

sort(funcObj)  // sbs
```
# Map 
- `new`키워드를 이용해서 생성한다.
- 배열로 `[key, value]`값을 집어 넣는다.
- 왜 맵을 사용하는가?
    - 사이즈를 찾기 유용하다. --> `Object.keys(obj)`로 루프 시킬 필요가 없다.
    - 키값에 어떤 데이타 타입이 설정이 가능하다.
    - `Object.prototype`으로 객체 키값을 덮어 쓰더라도 Map에는 영향이 없다. 
    - 반복문을 사용하기 편하다
```javascript
let newMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
])

for(var el of newMap) {
    el.forEach((key, i) => {
        console.log(index, key)
    })
}
```


# WeakMap 

- `map`과 비슷하지만 반드시 모든 키값이 객체 형태여야 한다.
- 하지만 반복문에 사용할 수는 없다.


# Set
중복 없는 값을 저장하려고 할때,  이미 존재하는지 체크
```javascript
let firstSet = new Set();
console.log(firstSet); // Set(0) {}

firstSet.add('one');
firstSet.add('two');

```

# WeakSet
참조를 가지고 있는 객체형태만이 저장 가능하다. 즉 객체형태만을 중복없이 사용가능하다.
```javascript

```

```javascript

```