let link=document.getElementsByClassName("link");
let currentvalue=1;
function activelink(){
     for(l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentvalue=event.target.value;
}
function backbtn(){
    if(currentvalue>1){
    for(l of link){
        l.classList.remove("active");
    }
    currentvalue--;
    link[currentvalue-1].classList.add("active")
}

}
function nextbtn(){
    if(currentvalue<6){
    for(l of link){
        l.classList.remove("active");
    }
    currentvalue++;
    link[currentvalue-1].classList.add("active")
}

}
