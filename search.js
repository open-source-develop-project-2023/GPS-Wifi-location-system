const toogleBtn = document.querySelector('.GIT__toogleBtn');
const menu = document.querySelector('.GIT__menu');
const back = document.querySelector('.Back');

toogleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
    back.classList.toggle('active');
});