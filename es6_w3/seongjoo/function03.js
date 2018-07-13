const el  = document.querySelector('p');

const myObj = {
    register() {
        el.addEventListener('click',(evt)=>{
            this.printData(evt.target);
        });
    },
    printData(el) {
        console.log('clicked!!',el.innerText);
    }
}

myObj.register();