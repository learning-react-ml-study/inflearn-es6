function print() {
    let list = document.querySelectorAll("li");
    let listArray = Array.from(list);
    // console.log("listArray:",listArray);
    let eArray = listArray.filter(function (value) {
        console.log("value:",value);
        console.log("value.innerText:",value.innerText);
        return value.innerText.includes('e');
    });
    return eArray;
}

console.log(print());