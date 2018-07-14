const previousObj = {
    name : "seongjoo",
    lastTime : "11:20"
};

const myHealth = Object.assign({}, previousObj, {
    "lastTime":"11:20",
    "name":"noah",
    "age":99
});

console.log("myhealth is ",myHealth);