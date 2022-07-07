const loader=document.querySelector(".loader")
const content=document.querySelector(".content")

content.style.display="none"

window.addEventListener("load",()=>{
    loader.style.display="none"
    content.style.display="block"
})