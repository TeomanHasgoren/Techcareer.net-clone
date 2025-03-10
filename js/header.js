document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
});

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
});