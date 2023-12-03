const toogleBtn = document.querySelector('.GIT__toogleBtn');
const menu = document.querySelector('.GIT__menu');
const search = document.querySelector('.GIT__search');

toogleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
    search.classList.toggle('active');
});