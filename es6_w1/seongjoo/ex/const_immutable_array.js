const list = ['apple','orange','watermelon'];
list2 = [].concat(list, 'banana');
console.log(list === list2);    // false