let ws = new WeakSet();
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr,arr2};

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws);
console.log(ws.has(arr),ws.has(arr2));