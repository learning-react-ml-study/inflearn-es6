const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
};

console.log(SETTING.name);
let mySet = new Set();
let count = 0;

function getRandomNumber(maxNumber) {
    let randNum = [];
    randNum += parseInt(Math.random() * maxNumber) + 1;
    mySet.add(randNum);
    count = mySet.size;
}
for(let i=0; SETTING.count>count; i++){
    getRandomNumber(SETTING.maxNumber);
}
console.log(mySet.values());
