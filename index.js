const bars = document.querySelector('.fa-bars'),
nav = document.querySelector('nav ul'),
barsClose = document.querySelector('.fa-x');


bars.addEventListener('click', =>{
    nav.classList.add('active'),
    barsClose.style.display = 'block',
})