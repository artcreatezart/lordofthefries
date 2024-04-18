// setTimeout(function () {
//     window.location.href = "enjoy.html";
// }, 10000)   

let addedOverlay = document.getElementById('addedOverlay');
let burgerBtn = document.getElementById('burgerBtn');
let emptyIcon = document.getElementById('emptyIcon');
let oneIcon = document.getElementById('oneIcon');
let noPrice = document.getElementById('noPrice');
let addPrice = document.getElementById('addPrice');




const openOverlay = (overlay, empty, one, no, add) => {
    addedOverlay.style.display = overlay;
    emptyIcon.style.display = empty;
    oneIcon.style.display = one;
    noPrice.style.display = no;
    addPrice.style.display = add;
};

burgerBtn.addEventListener ('click', () => openOverlay ("flex", "flex", "none", "flex", "none"));
addedOverlay.addEventListener ('click', () => openOverlay ("none", "none", "flex", "none", "flex"));

let menuLogo = document.getElementById('menuLogo');
let mainNav = document.getElementById('mainNav');

const hamburgerEvent = (nav) => {
    mainNav.style.display = nav;
};

menuLogo.addEventListener ('click', () => hamburgerEvent ("flex"));