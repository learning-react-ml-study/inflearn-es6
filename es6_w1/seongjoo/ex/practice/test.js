function print() {
    let list = document.querySelectorAll("li");
    let listArray = Array.from(list);
    let eArray = listArray.filter(function (value) {
        return value.innerText.includes('e');
    });
    return eArray;
}

console.log(print());