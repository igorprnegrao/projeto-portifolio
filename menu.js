let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let icon = document.getElementById('icone')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
    icon.classList.add('hidden')
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

