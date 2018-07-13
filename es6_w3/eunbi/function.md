# function

**1. Arrow function**
원래 쓰던 함수를  arrow로 축약하여 쓸 수 있다

``` function(){ } ```<br>
 **=>** ``` ()=>{ } ```

<code>
function(obj){
    return obj;
 }
</code><br>
<b> => </b><br>
<code>(obj) => { return object }</code><br>
<code>(obj) => { object }</code>
<br><br>

> **this**  
객체 안에서 생성된 arrow function은 this가 window가 아닌 객체를 가리킨다


**2. default function**

parameter값에 기본 값을 지정하여 값을 넣지 않을 시 기본 값으로 함수가 돌아갈수 있다

``` function(value = default){ } ``` <br>
``` function(value = { a : default }) ```

**3. rest parameters**

매개변수앞에 ...을 넣으면 배열로 매개변수를 받는다

```
function(...arg){
    console.log(toString.call(arg));
    //출력 : [object Array]
}
```


