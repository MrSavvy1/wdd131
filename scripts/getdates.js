document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear(); 
    const lastModified = document.lastModified; 
    document.getElementById('copyright').textContent += currentYear;
    document.getElementById('last-modified').textContent += lastModified;
});
