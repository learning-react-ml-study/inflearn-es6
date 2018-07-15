const myObj = {name:'seongjoo', changedValue:0};
const proxy = new Proxy(myObj, {
    get:function(target, property, receiver){
        console.log("get value");
        return target[property];
    },set:function(target, property, value){
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});
proxy.name; // get value
proxy.name = 'testname';    // set value