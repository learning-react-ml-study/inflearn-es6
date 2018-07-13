function sum(value, size={value:1}) {
    return value * size.value;
}

console.log(sum(3,{value:0}));