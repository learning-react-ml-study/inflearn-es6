## for of: 순회하기
'''
var data=[1,2,undefined, NaN, null,""];
for (var i=0; i<data.length; i++){
	console.log(i);
};
'''
data.forEach(function(value){
	console.log(value);
});

for (let idx in data) {
	console.log(data[idx]);
}
for in 순회가 되지만
Array.prototype.getIndex=function(){};
상위의 객체까지 출력됨

for (let value of data) {
	console.log(value);
}
상위의 값이 포함되지 않음

var str="hello world!!";
for(let value of str) {
	console.log(value);
} //문자단위로 출력됨
==spread opertaor_배열의 복사
let pre=["apple", "orange", 100];
let newData=[...pre]; #...는 펼침을 의미
console.log(pre, newData); //똑같은 결과 
console.log(pre==newData);//false
메모리에 새로운 공간에 새롭게 들어간 것 (출처가 다름)

==
let pre=[100,200,"hello", null];
let newData=[0,1,2,3,...pre,4]; //pre 값들이 펼쳐서 들어감
console.log(newData);

function sum(a,b,c) {
	return a+b+c;
}
let pre=[100,200,,300];

sum.apply(null,pre); 펼쳐지면서 a,b,c에 값이 들어감
console.log(sum(...arr)); //각각의 값들을 매개변수로 들어감

==from 메서드
function addMark() {
	let newData=[];

	for(let i=0; i<arguments.length; i++) {
    newData.push(arguments[i]+"!");
	}
    console.log(newData);
}

addMark(1,2,3,4,5);
가변적인 파라미터가 들어가는 경우는 arguments는 유용함

function addMark() {
	let newData=[];
	arguments.map(function(value){
		return value+"!";
	});
	console.log(newData);
}

addMark(1,2,3,4,5); //에러 arguments는 배열처럼 보이지만 배열이 아님

function addMark() {
	 let newArray=Array.from(arguments)
	 let newData=newArray.map(function(value){
	 	return value+"!";
	 });
     console.log(newData);
}

addMark(1,2,3,4,5); 
from으로 진짜 배열 만들기;
