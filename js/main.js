/* Initialize variables */
const listIcon = document.querySelector(".list-icon");
const menuPhone = document.querySelector(".mobile-menu");
const allIconBox = document.querySelectorAll(".icon-box");
const section = document.querySelector("section");

/****  Functions  ***/
listIcon.addEventListener("click" , function() {
      listIcon.classList.toggle("active");
      menuPhone.classList.toggle("open");
});


