let quot = document.getElementById("quot");
let author = document.getElementById("author");

let btn = document.getElementById("btn");
let copy = document.getElementById("execopy");

const url = "https://api.quotable.io/random";
let getQuote = () => {
    fetch(url)
    .then(data => data.json())
    .then((item) => {
     quot.innerText= item.content;
     author.innerText=("Author :- " +item.author)
    })
};
window.addEventListener("load",getQuote);
btn.addEventListener("click",getQuote);
document.getElementById("execCopy").addEventListener("click",execCopy)
function execCopy(){
    // quot.innerHTML="copyed";
navigator.clipboard.writeText(quot.innerHTML)
}
function myfunction(){
    var x = document.getElementById("abot");

    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}
