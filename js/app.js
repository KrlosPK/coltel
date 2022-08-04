const circlesEls = document.getElementById("circles");
const firstCircleEl = document.getElementById("circle1");
const secondCircleEl = document.getElementById("circle2");
const thirdCircleEl = document.getElementById("circle3");
const fourthCircleEl = document.getElementById("circle4");
const bannerImg = document.querySelector("[bg-img]");

firstCircleEl.addEventListener("click", function () {
    bannerImg.setAttribute("src", "imgs/Publicidad 2.png");
});
secondCircleEl.addEventListener("click", function () {
    bannerImg.setAttribute("src", "imgs/4.jpg");
});
thirdCircleEl.addEventListener("click", function () {
    bannerImg.setAttribute("src", "imgs/mapa-contacto.jpeg");
});
fourthCircleEl.addEventListener("click", function () {
    bannerImg.setAttribute("src", "imgs/1.png");
});
