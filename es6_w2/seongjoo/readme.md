# Object

key와 value값이 같다면 하나로 사용하여도 제대로 출력됨.

# Destructuring 

구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것. 배열과 객체 리터럴에서 필요한 값만 추출하여 변수에 할당하거나 반환할때 유용함.

# Set & WeakSet

## Set 으로 유니크한 배열만들기

set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용.

## WeakSet 으로 효과적으로 객체타입저장하기

참조를 가지고 있는 개체만 저장이 가능하다.

객체형태를 중복없이 저장하려고 할때 유용하다.

# Map & WeakMap

## Map & WeakMap 추가정보를 담은 객체저장하기

ES6

Array -> set, weakset<br>
Object -> map, weakmap

대체하는게 아닌 비슷한 유

map은 key/value

## WeakMap 클래스 인스턴스 변수 보호하기

WeakMap 활용