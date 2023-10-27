let textSave=document.querySelector("textarea");
let color=document.querySelector("input");
let div=document.querySelector("div");
textSave.value=localStorage.getItem("text")

textSave.addEventListener("input",()=>{
    localStorage.setItem("text",textSave.value);
})

color.addEventListener("input",()=>{
   div.style.background=`linear-gradient(white,${color.value})`;
})