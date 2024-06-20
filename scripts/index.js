function createHamButtonDiv(x) {
    x.classList.toggle("change");
    const parentNav = document.querySelector("nav");
    const existingDiv = parentNav.querySelector(".ham-button-div");

    if (existingDiv) {
        existingDiv.remove();
    } else {
        const newDiv = document.createElement("div");
        newDiv.className = "ham-button-div";
        newDiv.innerHTML = '<a href="index.html">Home</a><a href="services.html">Services</a><a href="Readme.html">About</a><a href="">Contact</a>';
        parentNav.appendChild(newDiv);
    }
}