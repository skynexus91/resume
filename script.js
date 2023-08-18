// Toggle sections visibility
const burgerButton = document.getElementById('burger-menu');
const sectionToggles = document.querySelectorAll('.section-toggle');

burgerButton.addEventListener('click', () => {
    sectionToggles.forEach(section => {
        section.classList.toggle('visible');
    });
});

// Theme switching
const themeButton = document.getElementById('theme-switch');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
