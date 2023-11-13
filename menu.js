const header = document.querySelector("header");

const hamburgerBtn = document.createElement("img");
hamburgerBtn.setAttribute("src", "./images/icon-menu.svg");



window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if(width <= 425){
        header.appendChild(hamburgerBtn);
    }
})