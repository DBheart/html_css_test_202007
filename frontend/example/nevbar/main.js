const toggleBtn = document.querySelector(".nav__button");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".nav__icon");

toggleBtn.addEventListener('click',() =>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})