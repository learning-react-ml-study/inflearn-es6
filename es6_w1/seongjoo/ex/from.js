function addMark() {
    let newData = [];
    for(let i=0;i<arguments.length;i++){
        newData.push(arguments[i]+'!');
    }

    console.log(newData);
}

addMark(1,2,3,4,5);