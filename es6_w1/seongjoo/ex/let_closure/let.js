var list = document.querySelectorAll("li");
for(let i = 0; i<list.length; i++) {
    list[i].addEventListener("click",function(){
        console.log(i+"번째 리스트입니다.");
    });
}