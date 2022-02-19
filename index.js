const bordure=document.querySelector(".click-event");
const reponse=document.querySelector("p")
const btn1=document.getElementById("btn_1");
const btn2=document.getElementById("btn_2");
btn1.addEventListener("click" ,()=>{
    // bordure.style.border="dashed 4px pink";
    // reponse.style.visibility="visible";
    // reponse.style.backgroundColor="green";
    bordure.classList.toggle("autour");
    reponse.classList.toggle("vrai");
});
btn2.addEventListener("click" ,()=>{
    // bordure.style.border="dashed 4px pink";
    // reponse.style.visibility="visible";
    // reponse.style.backgroundColor="red";
    bordure.classList.toggle("autour");
    reponse.classList.toggle("faux");
});