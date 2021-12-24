'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})
//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navber__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    
    navbarMenu.classList.remove('open')
    console.log(event.target.dataset.link); 
    const scrollTo = document.querySelector(link);
    scrollIntoView(link);
});


//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});


//Make home slowly fade to transparent as the window scrolls down.home__contact
const hme = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

function scrollIntoView(selector){
    const scrollTo = documnet.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});

}