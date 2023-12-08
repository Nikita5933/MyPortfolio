const menuWrapper = document.querySelector(".header__head-wrapper");
const menuBtn = document.querySelector('.header__head-arrow');
const parallaxItems = document.querySelectorAll('.header__elipse');
const links = document.querySelectorAll('.header__link a');
const scroll = calcScroll();

// Menu 

menuBtn.addEventListener('click', () => {
    links.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.style.transform = 'rotate(-45deg)';
            fadeOut();
        });
    });
    menuBtn.style.transform = 'rotate(45deg)';
    if (menuWrapper.classList.contains('fade_active')) {
        menuBtn.style.transform = 'rotate(-45deg)';
        fadeOut();
        return;
    }
    fadeIn();
});


function fadeOut() {
    menuWrapper.classList.remove('fade_active');
    menuWrapper.classList.add('fade_disable');
    setTimeout(()=> {
        document.body.style.marginRight = `0px`;
        document.body.style.overflowY = 'scroll';
        menuWrapper.style.visibility = 'hidden';
    },401);
}
function fadeIn() {
    menuWrapper.style.visibility = 'visible';
    document.body.style.marginRight = `${scroll}px`;
    menuWrapper.style.width = `calc(100% - ${scroll}px)`;
    document.body.style.overflowY = 'hidden';
    menuWrapper.classList.add('fade_active');
    menuWrapper.classList.remove('fade_disable');
    menuWrapper.focus();
}


// Paralax items effect

document.addEventListener("mousemove", parallax);
function parallax(event) {
    if (window.innerWidth > 767) {


        parallaxItems.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
}

// Scroll problem fix

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}