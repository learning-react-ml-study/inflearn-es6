const healthObj = {
    showHealth : function () {
        console.log(`오늘의운동시간 : ${this.healthTime}`)
    },
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
};

const newobj = Object.setPrototypeOf({
    name:'seongjoo',
    lastTime:"11:20"
}, healthObj);

console.log(newobj);