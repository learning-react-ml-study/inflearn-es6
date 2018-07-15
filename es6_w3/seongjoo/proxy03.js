const proxy = new Proxy({name:'seongjoo', changedValue:0}, {
    get:function(target, property, receiver){
        console.log("get value");
        return (property in target) ? target[property] : "anonymous";
    },set:function(target, property, value){
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});