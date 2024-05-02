document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Loop through each product and create a product card
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create HTML content for the product card
        productCard.innerHTML = `
    <div class="container">
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <span class="product-price">${product.price} ₹</span>
   <a href="https://wa.me/${product.phoneNumber}?text=${product.text}"> <button>Contact Us</button></a>
    <p class="description">${product.description}</p>
    </div>
`;


        // Append the product card to the product list
        productList.appendChild(productCard);
    });
});
