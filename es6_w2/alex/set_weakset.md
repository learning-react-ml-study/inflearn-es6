Set : array의 확장판, 여러 가지의 데이터, object를 원소로 가진다.

* 추가한 순서대로 인덱스를 부여하여 저장

* 중복 불가 - 삭제시 효율성 증대

  

Weakset : 원소로 object만 사용 - string, number, symbol 같은 데이터를 사용할 수 없다.



Let test_set_01 = new Set([1,2,1,2,”test”]); 

console.log(test_set_01.size); 

console.log(test_set_01)

for(let element of test_set_01)

{            console.log(element);

}

test_set_01.add(100);

test_set_01.add(100).add(1000);

let test_func = () => {};

test_set_01.add(test_func);

Console.log(test_set_01.has(100)); 

.delete

.clear

 