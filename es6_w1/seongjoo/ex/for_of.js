var data = [1,2,undefined,NaN,null,""];
console.log('for문');
for(var i=0;i<data.length;i++){
    console.log(i)
}
console.log('forEach')
data.forEach(function (value) {
   console.log("valueus",value);
});
console.log("for in문");
for(let idx in data){
    console.log(data[idx]);
}
console.log("for of문");
Array.prototype.getIndex = function(){};
for(let value of data){
    console.log(value);
}