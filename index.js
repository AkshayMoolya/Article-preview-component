
const arrow = document.getElementById("arrowl");
const share = document.getElementById("sharel");
const open = document.getElementById("showl");
const show = document.getElementById("showMe")  

open.addEventListener("click", ()=> {
arrow.classList.toggle("hidden");
share.classList.toggle("hidden");

})

show.addEventListener("click", ()=>{
share.classList.toggle("hidden");

})