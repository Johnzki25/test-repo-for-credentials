const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading delay
    setTimeout(function() {
        document.querySelector(".loader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }, 3000); // 3-second delay
});