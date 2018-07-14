# 객체 

## class를 통한 객체 생성
JavaScript는 프로토타입 기반 언어이기 때문에 원래 클래스가 없었지만 **class**라는 키워드가 생김
```javascript
function Health(name) {
this.name = name;
}
Health.prototype.showHealth = function() {
console.log(this.name + "님 안녕하세요");
}

const h = new Health("crong");
h.showHealth(); // "crong님 안녕하세요"
```
효율적인 객체를 프로토타입 안에 둠으로써 객체를 생성해주는 방식.
그러나 다른 객체지향 언어와 달리 constructor가 없어서 불편했음.

```javascript
class Health {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
    }
    
  showHealth() {
  console.log("안녕하세요 " this.name);
  } // prototype에 저장된다. (내부적으로 함수로 처리됨)
}

const myHealth = new Health("crong");
myHealth.showHealth();
```
비록 모습은 클래스지만 모두 prototype에서 function으로 연결된 구조이다.
```javascript
console.log(toString.call(Health)); // [object Function]
```
구조적으로 바뀌는 것은 아니나 가독성을 높여주는 데에 의미가 있음.

## Object Assign으로 JS객체 만들기

es5에서 생긴 **create**.
new 키워드에 거부감이 존재한다 생각하여 new로 생성자를 만들지 않고 순수한 오브젝트를 만들기 위한 방법을 고안함.
```javascript
const healthObj = {
  showHealth : function() {
    console.log("오늘 운동시간 : " + this.healthTime);
    }
}

const myHealth = Object.create(healthObj); // Object.create는 프로토타입에 생성시켜준다.
myHealth.healthTime = "11:20";
myHealth.name = "crong";

console.log(myHealth); // object 형태로 출력되며, prototype 객체에 showHealth가 들어감
```
위 방법은 JS의 제일 표준적인 방법에 가깝지만 값을 추가할 때 계속 따로 해주어야 함.
이 문제를 **object assign** 메서드로 개선하였다.
```javascript
const myHealth = object.assign(Object.create(healthObj), {
 name : "crong",
 lastTime : "11:20"
});
```
object assign은 클래스 객체에 필요한 속성값을 두번째 인자로 바로 넣어줄 수 있다.
(prototype에 넣어줄 것은 첫 번째 인자로 들어감)
→ 프로토타입에 넣어줄 메서드들은 위에 따로 묶어서 미리 정의해둔 뒤 인자에 넣어서 바로 생성할 수 있음.

## Object assign으로 Immutable 객체만들기

```javascript
const previousObj = {
	name : "crong",
	lastTime : "11:20"
};
```
이러한 객체가 있다고 가정했을 때,
```javascript
const myHealth = Object.assign({},previousObj, {
	"lastTime" : "12:30"
});

//myHealth
{
  name : "crong",
  lastTime : "12:30"
}
```
2번째 인자에서 객체의 모든 값들을 모두 추출한 다음 3번째에서는 달라진 값은 대체/새로운 값은 추가/아니면 값을 유지한다.
새로운 객체를 생성하는 것이기 때문에 둘은 값이 같아도 완전 다른 두 개의 객체가 됨.

이를 react에서 잘 사용하면 이전 값과 비교해서 렌더링하기, 히스토리 값을 저장하기 등 활용도가 높다.

## Object setPrototypeOf로 객체만들기

object assign에서는 기존의 속성값을 뽑아 객체값을 변형해서 다른 것을 만드는 추가 기능을 지원해준다면, **setPrototypeOf는 말 그대로 프로토타입 객체만 추가하는 명확하고 단순한 기능 제공.

```javascript
const healthObj = {
	showHealth: fucntion() {
		console.log("오늘 운동시간 : " + this.healthTime);
	}
	setHealth : function(newTime) { this.healthTime = newTime; }
};

const myHealth = {
	name : "crong",
	lastTime : "11:20"
};

Object.setPrototypeOf(myHealth, healthObj); // 첫째 인자값으로 들어오는 객체에 두번째 인자값을 프로토타입으로 지정.

Object.setPrototypeOf({ name : "crong", lastTime : "11:20" }. healthObj); // 첫째 인자값에 바로 객체를 써넣을 수도 있음.
```

## Object setPrototypeOf 로 객체간 prototype chain생성하기

prototype chain을 사용해서 상속과 같은 방식으로 기존 메서드들을 재사용할 수 있음.
```javascript
//parent
const healthObj = {
	showHealth: fucntion() {
		console.log("오늘 운동시간 : " + this.healthTime);
	}
	setHealth : function(newTime) { this.healthTime = newTime; }
};

//child obj
const healthChildObj = {
	getAge : funtion() {
return this.age; }
}

const childObj = Object.setPrototypeOf({
	age : 22
}, healthChildObj);
```

이미 구성된 다른 오브젝트를 사용하고 싶다면?
```javascript
Obeject.setPrototypeOf(healthChildObj, healthObj);
```
이렇게 할 경우 childObj는 prototype chain으로 연결된 상태가 된다.(↓)

```
age : 22  
    __proto__ // healthChildObj 상속  
    getAge  
        __proto__ // healthObj 상속  
        setHealth  
        showHealth  
```
