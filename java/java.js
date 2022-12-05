const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav =document.getElementById("navbar");

if (bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active")
    })

}

if (close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
    
}


var single = document.getElementById("mainimg");
var small = document.getElementsByClassName("small-img");

small[0].onclick = function(){
    single.src = small[0].src;
}
small[1].onclick = function(){
    single.src  =small[1].src;
}
small[2].onclick = function(){
    single.src = small[2].src;
}
small[3].onclick = function(){
    single.src = small[3].src;
}