const healthObj = {
    showHealth : function () {
        console.log(`오늘의운동시간 : ${this.healthTime}`)
    }
};

const myHealth = Object.assign(Object.create(healthObj),{
    name:'seongjoo',
    lastTime:"11:20"
});

console.log(myHealth);