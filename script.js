// setTimeout(function () {
//     window.location.href = "enjoy.html";
// }, 10000)   

let addedOverlay = document.getElementById('addedOverlay');
let burgerBtn = document.getElementById('burgerBtn');
let noPrice = document.getElementById('noPrice');
let addPrice = document.getElementById('addPrice');




const openOverlay = (overlay, no, add) => {
    addedOverlay.style.display = overlay;
    noPrice.style.display = no;
    addPrice.style.display = add;
};

burgerBtn.addEventListener('click', () => openOverlay("flex", "flex", "none"));
addedOverlay.addEventListener('click', () => openOverlay("none", "none", "flex"));

let menuLogo = document.getElementById('menuLogo');
let mainNav = document.getElementById('mainNav');

const hamburgerEvent = (nav) => {
    mainNav.style.display = nav;
};

menuLogo.addEventListener('click', () => hamburgerEvent("flex"));