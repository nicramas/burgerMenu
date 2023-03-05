const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav_1');
const nav2 = document.getElementById('nav_2');
const nav3 = document.getElementById('nav_3');
const nav4 = document.getElementById('nav_4');
const nav5 = document.getElementById('nav_5');


function toggleNav() {
//Toggle: Menu bars open/plosed
    hamburger.classList.toggle('change');
//Toggle: Menu active
overlay.classList.toggle('overlay_active');
if (overlay.classList.contains('overlay_active')) {
    // overlay - animate in
    overlay.classList.remove('overlay_slideLeft');
    overlay.classList.add('overlay_slideRight');
} else {
    //overlay - animate out
    overlay.classList.add('overlay_slideLeft');
    overlay.classList.remove('overlay_slideRight');
}
}



// Event Listeners
hamburger.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
