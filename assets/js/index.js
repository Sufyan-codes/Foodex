const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')

if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show__menu')
    })
    
}

if(navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show__menu')
    })
}
