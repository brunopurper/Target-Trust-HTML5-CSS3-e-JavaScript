const burger = document.getElementById('menu-burger');

const navUL = document.getElementById('nav');


burger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});