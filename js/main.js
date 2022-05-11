/* Initialize variables */
const listIcon = document.querySelector(".list-icon");
const menuPhone = document.querySelector(".mobile-menu");
var typed = new Typed("#name" ,  { 
      strings: ["Malak Mamdouh"] , 
      typeSpeed: 150 , 
      backSpeed: 150 , 
      loop: true 
});


/****  Functions  ***/
listIcon.addEventListener("click" , function() {
      listIcon.classList.toggle("active");
      menuPhone.classList.toggle("open");
});