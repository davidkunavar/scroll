const btndown = document.getElementById("down");
const links = document.querySelector(".links");
const navbar = document.querySelector(".nav__bar");
const navLogo = document.querySelector(".nav__logo");
const navContainer = document.querySelector(".headar__container");
const date = document.querySelector("#date");


date.innerHTML = new Date().getFullYear();
const heightContainer = navContainer.getBoundingClientRect().height;


if(heightContainer === window.pageYOffset){
    navbar.style.display = "none";
}



btndown.addEventListener("click", function () {
    links.classList.toggle("show");
    navbar.classList.toggle("show");
    navLogo.classList.toggle("show");
    btndown.style.backgroundColor = "rgba(20, 20, 20, 0.8)";

})

window.addEventListener("scroll", function () {
    navbar.classList.add("sticky");
    console.log(navbar.classList)
    btndown.style.backgroundColor = "rgba(20, 20, 20, 0.8)";
    console.log(window.pageYOffset)
    if(window.pageYOffset === 0){
        navbar.classList.remove("sticky");
    }
})



