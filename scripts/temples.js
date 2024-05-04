document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('nav').classList.toggle('active');
});
