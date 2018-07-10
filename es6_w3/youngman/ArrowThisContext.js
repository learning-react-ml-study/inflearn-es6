const myObj = { 
    customFunc(){
        setTimeout(function(){
            console.log('function is ',this)
        }, 1000);
    },

    arrowFunc(){
        setTimeout(() => {
            console.log('Arrow function is ', this)
        }, 1000);
    },

    printData(){
        console.log('printData!!')
    }
};

myObj.customFunc();
myObj.arrowFunc();