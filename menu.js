let menu = document.getElementById('menu');
let openMenuBtn = document.getElementById('openMenuBtn')
let closeMenuBtn = document.getElementById('closeMenuBtn');

openMenuBtn.addEventListener('click', ()=>{
    menu.style.width = '100%';    
});

closeMenuBtn.addEventListener('click', ()=>{
    menu.style.width = '0';    
});