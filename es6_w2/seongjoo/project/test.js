const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
};

let mySet = new Set();
let setCount = 0;
let {name:myTitle,count:countNum,maxNumber:myMaxNumber} = SETTING;
console.log(myTitle);

function getRandomNumber(maxNumber) {
    let randNum = [];
    randNum += parseInt(Math.random() * maxNumber) + 1;
    mySet.add(randNum);
    setCount = mySet.size;
}
for(let i=0; countNum>setCount; i++){
    getRandomNumber(myMaxNumber);
}
console.log(mySet.values());
