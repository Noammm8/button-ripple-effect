const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    console.log(event.pageX - btnEl.offsetLeft);
    console.log(event.pageY - btnEl.offsetTop);
})
