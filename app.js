const btn = document.querySelector('.nav-logo');

btn.onclick = function() {
    const resNav = document.querySelector(".nav-list");
    resNav.classList.toggle("nav-list-visible");
}