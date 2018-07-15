# Template

## Template 처리

json으로 응답을 받고, javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom에 추가!

데이터 + HTML문자열의 결합이 필요하기 때문에.

# function

## Arrow function 활용

```js
setTimeout(()=>{
 console.log("settimeout arrow");
},1000);
```

# module

https://poiemaweb.com/es6-module

# Proxy

```js
const myObj = {name:'seongjoo'};

const proxy = new Proxy(myObj, {});

proxy.name; // seongjoo
```