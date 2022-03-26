const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling 
const hightlightMenu = () => {
    const elem = documeny.querySelector('.hightLight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY


// adds the highlight clas to my menu items

if (window.innerWidth > 960 && scrollPos < 600 ) {
    homeMenu.classList.add('highLight')
    aboutMenu.classList.remove('highLight')
    return 
} else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highLight')
    homeMenu.classList.remove('highLight')
    servicesMenu.classList.remove('highLight')
    return
} else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highLight')
    aboutMenu.classList.remove('highLight')
    return
}

if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highLight')
}
}

window.addEventListener('scroll', 'highLightMenu');
window.addEventListener('click', 'highLightMenu');

// close mobile menu when clicking on a menu item
const hideMobileMenu = () =>  {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active'); 
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);