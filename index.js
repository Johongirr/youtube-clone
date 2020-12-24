// navbar hamburger menu
const navbarBtn = document.querySelector('.nav__list-left-hamburger');
// side nav hamburger menu
const sideMenuBtn = document.querySelector('.side-menu__hamburger');
// side menu container
const sideMenuContainer = document.querySelector('.side-menu-container')
// side menu
const sideMenu = sideMenuContainer.querySelector('.side-menu');

let isMenuOpen = false;


function openMenu(){
    console.log('Open menu')
    if(!isMenuOpen){  
        sideMenuContainer.style.display = "block";
        sideMenu.style.transform ="translateX(0)";
        sideMenu.style.transition ="all 2s";
        document.body.style.overflowY = "hidden";
        isMenuOpen = true;
    }
}
function closeMenu(){
    console.log('close Menu')
    if(isMenuOpen){  
        sideMenu.style.transform ="translateX(-260px)";
        sideMenu.style.transition ="all 2s";
        sideMenuContainer.style.display ="none";
        document.body.style.overflowY = "visible";
        isMenuOpen = false;
    }
}

navbarBtn.addEventListener('click', openMenu);


sideMenuBtn.addEventListener('click', closeMenu)