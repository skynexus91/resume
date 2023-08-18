const burgerButton = document.getElementById('burger-menu');
const sectionToggles = document.querySelectorAll('.section-toggle');
const themeButton = document.getElementById('theme-switch');

burgerButton.addEventListener('click', () => {
    sectionToggles.forEach(section => {
        section.closest('section').classList.toggle('visible');
    });
});

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
