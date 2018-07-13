const data = [
    {
        name: 'coffee-bean',
        order: true,
        items:['americano','milk','green-tea']
    },
    {
        name:'starbucks',
        order:false
    },
    {
        name: 'coffee-king',
        order: true,
        items:['americano','latte']
    }
];

function fn(tags, name, items) {
    console.log(tags);
    if(typeof items === 'undefined'){
        items = '<span style="color:red">주문가능한 상품이 없습니다.</span>';
    }
    return (tags[0] + name + tags[1] + items +tags[2]);
}
data.forEach((v) => {
    let template = fn`<h1>welcome ${v.name} !!</h1>
<h2>주문가능항목</h2><div>${v.items}</div>`;
    document.querySelector('#message').innerHTML += template;
});