////////////////////일반적인 setTimeOut 사용
// setTimeout(function(){console.log('setTimeOut!')},1000);

///////////////////Arrow Function
// setTimeout( () => {console.log('ArrowTimeOut!!')},1000);

/////////////////일반적인 map
let newArr = [1,2,3,4,5].map(function(value,index,object){
    console.log(object)
})

//////////////////Arrow map
// let newArr = [1,2,3,4,5].map( (value,index) => {
//     return value * 2;
// })

//////////////// () => {} 괄호가 없을경우 return 생략가능 
// let newArr = [1,2,3,4,5].map( value =>  value * 2)
newArr