function setTitle(event){
    document.title = document.querySelector("input").value;
}
function loading(){
    let ls = localStorage.getItem("counter");
    let ss = sessionStorage.getItem("counter");
    if (ls) {
        document.getElementById("ls").innerText = ls;
    }
    if (ss){
        document.getElementById("ss").innerText = ss;
    }
}
function iterate(id){
    let temp = document.getElementById(id).innerText;
    let i = parseInt(temp) + 1;
    document.getElementById(id).innerText = i;
    if(id==="ss"){
        sessionStorage.setItem("counter", i);
    }
    if(id==="ls"){
        localStorage.setItem("counter", i);
    }
}