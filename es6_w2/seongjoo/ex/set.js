let mySet = new Set();
//console.log(toString.call(mySet));

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

//console.log(mySet.has('crong'));

mySet.delete("crong");

mySet.forEach(function(v){
    console.log(v);
});