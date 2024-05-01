// app.js
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Loop through each product and create a product card
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Create HTML content for the product card
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;

        // Append the product card to the product list
        productList.appendChild(productCard);
    });
});
