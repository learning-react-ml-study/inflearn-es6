const healthObj = {
    showHealth : function () {
        console.log(`오늘의운동시간 : ${this.healthTime}`)
    }
};

const myHealth = Object.create((healthObj));

myHealth.healthTime = '11:20';
myHealth.name = 'seongjoo';

console.log(myHealth);