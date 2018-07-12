// const wm = new WeakMap();
const obj = {};

function Area(height,width) {
    // wm.set(this, {height,width});
    obj.height = height;
    obj.width = width;
}

Area.prototype.getArea = function() {
    /*const {height, width} =  wm.get(this);
    return height*width;*/
    // return this.height*this.width;
    return obj.height * obj.width;

}

let myarea = new Area(10,20);

//console.log(myarea.getArea());
/*
console.log(wm.has(myarea));

myarea = null;

console.log(wm.has(myarea));*/

console.log(obj);

myarea = null;

console.log(obj);
