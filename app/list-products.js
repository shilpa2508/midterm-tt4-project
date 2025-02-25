import './global.js';

const products = [
    { image: "assets/images/product1.jpg", title: "Product 1", description: "Short description 1", price: "$10" },
    { image: "assets/images/product2.jpg", title: "Product 2", description: "Short description 2", price: "$12" },
    { image: "assets/images/product3.jpg", title: "Product 3", description: "Short description 3", price: "$15" },
    { image: "assets/images/product4.jpg", title: "Product 4", description: "Short description 4", price: "$18" },
    { image: "assets/images/product5.jpg", title: "Product 5", description: "Short description 5", price: "$20" },
    { image: "assets/images/product6.jpg", title: "Product 6", description: "Short description 6", price: "$22" },
    { image: "assets/images/product7.jpg", title: "Product 7", description: "Short description 7", price: "$25" },
    { image: "assets/images/product8.jpg", title: "Product 8", description: "Short description 8", price: "$28" },
    { image: "assets/images/product9.jpg", title: "Product 9", description: "Short description 9", price: "$30" },
    { image: "assets/images/product10.jpg", title: "Product 10", description: "Short description 10", price: "$35" },
    { image: "assets/images/product11.jpg", title: "Product 11", description: "Short description 11", price: "$40" },
    { image: "assets/images/product12.jpg", title: "Product 12", description: "Short description 12", price: "$45" }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const card = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += card;
});
