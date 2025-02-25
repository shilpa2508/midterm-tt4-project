import './global.js';

const products = [
    { image: "assets/images/product1.jpg", title: "Product 1", description: "Wireless Earbuds – Crystal-clear sound with noise cancellation. Enjoy 24-hour battery life!", price: "$10" },
    { image: "assets/images/product2.jpg", title: "Product 2", description: "Smartwatch – Track fitness, heart rate & receive notifications on your wrist.", price: "$12" },
    { image: "assets/images/product3.jpg", title: "Product 3", description: "Gaming Mouse – High-speed precision with customizable RGB lighting.", price: "$15" },
    { image: "assets/images/product4.jpg", title: "Product 4", description: "Bluetooth Speaker – Portable, waterproof & delivers powerful bass", price: "$18" },
    { image: "assets/images/product5.jpg", title: "Product 5", description: "Laptop Backpack – Stylish, lightweight & fits up to 15-inch laptops.", price: "$20" },
    { image: "assets/images/product6.jpg", title: "Product 6", description: "Wireless Charger – Fast charging for iPhone & Android devices.", price: "$22" },
    { image: "assets/images/product7.jpg", title: "Product 7", description: "Portable Power Bank – 20,000mAh for on-the-go fast charging.", price: "$25" },
    { image: "assets/images/product8.jpg", title: "Product 8", description: "Smart LED Bulb – Voice control & color-changing via app.", price: "$28" },
    { image: "assets/images/product9.jpg", title: "Product 9", description: "Noise Cancelling Headphones – Immersive sound with 30-hour battery.", price: "$30" },
    { image: "assets/images/product10.jpg", title: "Product 10", description: "4K Action Camera – Waterproof, ultra-HD recording for adventures.", price: "$35" },
    { image: "assets/images/product11.jpg", title: "Product 11", description: "Fitness Tracker – Monitors steps, heart rate & sleep patterns.", price: "$40" },
    { image: "assets/images/product12.jpg", title: "Product 12", description: "USB-C Hub – Multi-port adapter for laptops & tablets.", price: "$45" }
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
