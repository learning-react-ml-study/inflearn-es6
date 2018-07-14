## Proxy의 사전적 정의
> 대리, 대리인

## Proxy의 개념
프록시는 일반적으로 다른 어떤 클래스의 인터페이스로 동작하는 클래스이다. (중략) 요컨대, 프록시는 내부적으로 실제의 객체(real subject)에 접근할 때 호출되는 래퍼(wrapper) 혹은 대리 객체다.</br>

## MSDN의 문서상 Proxy의 정의
> The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).</br>
Proxy 객체는 기본 작업 (예 : 속성의 조회, 할당, 열거, 함수 호출 등)에 대한 사용자 정의 동작을 정의하는 데 사용됩니다.

## Proxy Example

### Introduction & Default usage
기본 사용방법

~~~javascript
proxyObj = new Proxy(target, handler)
~~~
* target : 가상화될 객체 또는 함수
* handler : 변경 또는 구현할 메서드가 있는 파라메터

~~~javascript
const myObj = {name:'crong'};   // target
const proxy = new Proxy(myObj,{
  get : function(target, property, receiver){
    console.log('get value');
  }, //get handler
  set : function(target, property, value){
    console.log('set value');
  } //set handler
});
~~~

### Proxy Pattern - PhoneBook
상황을 가정해보자. 우선 다음과 같이 전화번호부 객체가 구현되어있는 상태이다.</br>

~~~javascript
function PhoneBook() {
  this.dictionary = {
    '이승민': '01012341234',
    '이현섭': '01023456789',
    '오유근': '01077777777'
  };
}

PhoneBook.prototype.get = function(name, callback) {
  var self = this;
  setTimeout(function() {
    callback(self.dictionary[name]);
  }, 3000);
}
~~~

이 전화번호부 클래스의 get()이 호출될 때마다, 조회수를 따로 기록하여 저장하고 싶다면 어떡해야 할까? 전화번호부 클래스의 코드를 고치는 것은 예상치못한 사이드 이펙트를 초래할 수 있기 때문에 지양하고 싶다.

이런 경우에 프록시 패턴을 사용할 수 있다.

~~~javascript
function PhoneBookProxy() {
  var phoneBook = new PhoneBook();
  var viewCount = 0;

  return {
    get: function(name, callback) {
      viewCount++;
      phoneBook.get(name, callback);
    },

    getViewCount: function() {
      return viewCount;
    }
  };
}
~~~

위와 같이 프록시 객체를 구현해서 조회수를 따로 저장하고 PhoneBook을 대리하는 객체로 PhoneBookProxy를 사용하면 된다. 이 때 프록시 클래스는 공개된 인터페이스인 get()메소드를 반드시 구현해야 한다.

### Proxy Caching

위의 PhoneBook 객체는 하나의 전화번호를 얻기 위해서는 무려 3초를 기다려야 한다. 따라서 캐시를 이용해 좀 더 빠르게 해볼 수 있을 것이다. 이 때도 프록시 패턴을 활용할 수 있다.

~~~javascript
function PhoneBookProxy() {
  var phoneBook = new PhoneBook();
  var viewCount = 0;
  var cache = {};

  return {
    get: function(name, callback) {
      viewCount++;

      if (cache[name]) {
        callback(cache[name]);
      } else {
        phoneBook.get(name, function(number) {
          cache[name] = number;
          callback(number);
        });
      }
    },

    getViewCount: function() {
      return viewCount;
    }
  };
}
~~~

아까 만든 프록시 객체에 캐시를 저장하는 변수를 추가하고, get() 메소드에 캐시를 검사하는 로직만 추가하면 된다. 프록시 객체를 통해서 get()을 호출하면 2번째 요청부터는 캐시로부터 데이터를 반환할 수 있다.