function getObj() {
    const name = "crong";

    const getName = function() {
        return name;
    }

    const setName = function(newname) {
        name = newname;
    }

    const printName = function() {
        console.log(name);
    }

    /*return {
        getName: getName,
        setName: setName
    }*/

    return {getName,setName,name}
}

var obj = getObj();
console.log(obj);