const myObj = {
    runTimeout() {
        setTimeout(()=> {
            this.printData();
        },200);
    },
    printData() {
        console.log("hi inflearn")
    }
}

myObj.runTimeout();