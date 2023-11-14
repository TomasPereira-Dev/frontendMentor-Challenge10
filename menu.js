const header = document.querySelector("header");
const navbarContainer = document.querySelector(".navbar-container");
const navbar = document.querySelector(".navbar");
const mainContent = document.querySelector("main");

const hamburgerBtn = document.createElement("img");
hamburgerBtn.setAttribute("src", "./images/icon-menu.svg");

const closeBtn = document.createElement("img")
closeBtn.setAttribute("src", "./images/icon-close-menu.svg");
closeBtn.setAttribute("class", "close-btn")

if(window.innerWidth <= 425){
    header.appendChild(hamburgerBtn)
    navbar.style.flexDirection = "column";
}

window.addEventListener("resize", () => {
    if(window.innerWidth <= 425){
        header.appendChild(hamburgerBtn);
        navbar.style.flexDirection = "column";
    }else{
        header.removeChild(hamburgerBtn);
        navbar.style.flexDirection = "row";
        navbarContainer.style.display = "flex";
    }
})

hamburgerBtn.addEventListener("click", () => {
    navbarContainer.prepend(closeBtn)
    navbarContainer.classList.toggle("mobile-navbar-container");
    mainContent.style.filter = "blur(1px) opacity(0.5)";
})

closeBtn.addEventListener("click", () => {
    navbarContainer.classList.toggle("mobile-navbar-container")
    navbarContainer.removeChild(closeBtn);
    mainContent.style.filter = "none";
})