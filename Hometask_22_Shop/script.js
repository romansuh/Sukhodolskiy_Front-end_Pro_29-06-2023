const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productInfoContainer = document.querySelector('.product-info');

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const products = {
    'Category 1': [
        { name: 'Product A', description: 'Description for Product A' },
        { name: 'Product B', description: 'Description for Product B' }
    ],
    'Category 2': [
        { name: 'Product C', description: 'Description for Product C' },
        { name: 'Product D', description: 'Description for Product D' }
    ],
    'Category 3': [
        { name: 'Product E', description: 'Description for Product E' },
        { name: 'Product F', description: 'Description for Product F' }
    ],
    'Category 4': [
        { name: 'Product G', description: 'Description for Product G' },
        { name: 'Product H', description: 'Description for Product H' },
        { name: 'Product I', description: 'Description for Product I' }
    ]
};


categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.textContent = category;
    categoryElement.addEventListener('click', () => displayProducts(category));
    categoriesContainer.appendChild(categoryElement);
});


function displayProducts(category) {
    productsContainer.innerHTML = '';
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.addEventListener('click', () => displayProductInfo(product));
        productsContainer.appendChild(productElement);
    });
}


function displayProductInfo(product) {
    productInfoContainer.innerHTML = '';
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    const productDescription = document.createElement('div');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;

    productDetails.appendChild(productName);
    productDetails.appendChild(productDescription);
    productInfoContainer.appendChild(productDetails);

    const buyButton = document.createElement('button');
    buyButton.classList.add('buy-button');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => {
        alert(`You have purchased ${product.name}`);
        productInfoContainer.innerHTML = '';
        displayCategories();
    });

    productInfoContainer.appendChild(buyButton);
}


function displayCategories() {
    productsContainer.innerHTML = '';
    productInfoContainer.innerHTML = '';
}

displayCategories();
