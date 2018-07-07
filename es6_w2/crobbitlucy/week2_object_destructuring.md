# Object 생성 & Desturcturing

## Object 간단히 생성하기

1. 일반적인 방법

```javascript
const name = "crong";
const age = 33;

const obj = {
	name : name;
	age: age
}

console.log(obj);
```

```javascript
function getObj() {
  const name = "crong";
  const getName = function() {
    return name;
  }
  const setName = function(newname) {
    name = newname;
  }
  const printNAme = function(){
    console.log(name);
  }

  return {
    getName : getName,
    setName : setName
  }
  //오브젝트 리터럴 형태로 반환할 때 키와 밸류 값이 같아서 불편함
}
var obj = getObj();
console.log(obj.getName()); // "crong"
```

이러한 경우 (key값과 value가 일치)
```javascript
return {getName, setName, name}
// value값도 그냥 넘길 수 있음
```
으로 대체할 수 있음. 

<br/>

오브젝트 리터럴을 만들 때 위에 값들이 있는 경우
```javascript
const data = {
  name,
  getName() {},
  age
}
```
key 없이 value 값만 넣어서 생성할 수 있다.


+ 참고
  * http://webclub.tistory.com/390 객체 리터럴에 관한 설명
  * https://infoscis.github.io/2018/01/25/ecmascript-6-expanded-object-functionality/ '객체 리터럴 문법 확장' 항목 참고

## Destructuring Array

```javascript
//Desturcturing
let data = ["crong", "honux", "jk", "jinny"];
let myname = data[0];
```

↓ 배열에서 특정 인덱스 값에 의미가 있을 때 이렇게 뽑아서 사용.

기존 방법
```javascript
let jisu = data[0];
let jung = data[2];
```

새로운 방법
```javascript
let [jisu,,jung] = data;

console.log(jisu, jung); // "crong", "jk"
// jung 뒤에 다른 인덱스들은 생략 가능.
```


Destructuring을 사용하면 변수에 배열이나 오브젝트의 필요한 값을 할당하는 데 굉장히 유용.


## Destructuring Object

```javascript
let obj = {
  name : "crong",
  address: "Korea",
  age : 10
}
```

개선된 방법
```javascript
let {name, age} = obj;
console.log(name, age); //"crong", 10
```

이름을 변경할 수도 있다.
```javascript
let {name:myName, age:myAge} = obj; // 새로운 이름을 설정
console.log(myName, myAge); //"crong", 10
```


## Destructuring 활용 : JSON 파싱

```javascript
var new = [
  {
    "title" : "sbs",
    "imgurl" : "http://www.naver.com",
    "newslist" : [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
      "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "title" : "mbc",
    "imgurl" : "http://www.naver.com",
    "newslist" : [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
      "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
```

개선된 방법
```javascript
let [,mbc] = news;
let {title, imgurl} = mbc;
console.log(title, imgurl); // "mbc" "http://www.naver.com"
```

좀더 개선된 방법
```javascript
let [,{title, imgurl}] = news;
console.log(imgurl);
```

* 참고
  * http://zeddios.tistory.com/category/Swift 왕초보를 위한 JSON Parsing


## Destructuring 활용_Event객체 전달

↓ html
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<div> This is div tag </div>
	</body>
</html>
```
↓ javasvript
```javascript
function getNewsList([,{newslist}]{
	//매개변수이기 때문에 여기에서도 destructuring 가능
console.log(newslist);}

document.querySelector("div").addEventListener("click", fun
ction({type, target}){
console.log(type,target.tagName);
});

getNewsList(news);
// "click" "div"
```
* 참고
  * http://blog.sonim1.com/152 Event 객체에 관한 정리
