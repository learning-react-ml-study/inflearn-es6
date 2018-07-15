const proxy = new Proxy({name:'seongjoo', changedValue:0}, {
    get:function(target, property, receiver){
        console.log("get value");
        return Reflect.get(target,property);
    },set:function(target, property, value){
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});