document.addEventListener('DOMContentLoaded', function() {
    const productArray = [
        { id: 'product1', name: 'Product 1' },
        { id: 'product2', name: 'Product 2' },
        { id: 'product3', name: 'Product 3' },
        { id: 'product4', name: 'Product 4' }
    const currentYear = new Date().getFullYear(); 
    const lastModified = document.lastModified; 
    document.getElementById('currentyear').textContent += currentYear;
    document.getElementById('lastModified').textContent += lastModified;
    




    const productNameSelect = document.getElementById('productName');

    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
});


