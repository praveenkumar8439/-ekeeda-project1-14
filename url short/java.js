
let button=document.getElementById("URL");
button.addEventListener("click",short);
    window.alert("please enter")
async function short(){
    let text = document.getElementById("text").value;
let shorturl = document.getElementById("short")
  
       const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
       const data = await result.json();

       shorturl.value =data.result.short_link;
    }
let shortcopy=document.getElementById("short")
let copy=document.getElementById("COPY");
copy.onclick = () =>{
    shortcopy.select();
    window.navigator.clipboard.writeText(shortcopy.value)
}
