// Toggle Menu for small screens
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});
