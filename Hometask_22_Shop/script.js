const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productInfoContainer = document.querySelector('.product-info');
const ordersList = window.localStorage;
const ordersModal = document.querySelector('.orders-modal');
const ordersButton = document.querySelector('.my-orders-button');
const modalOverlay = document.querySelector('.orders-modal-overlay');

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const products = {
    'Category 1': [
        {
            name: 'Product A',
            category: 1,
            description: 'Description for Product A',
            price: 34.59,
            purchasedDate: undefined
        },
        {
            name: 'Product B',
            category: 1,
            description: 'Description for Product B',
            price: 30.65,
            purchasedDate: undefined
        }
    ],
    'Category 2': [
        {
            name: 'Product C',
            category: 2,
            description: 'Description for Product C',
            price: 12.45,
            purchasedDate: undefined
        },
        {
            name: 'Product D',
            category: 2,
            description: 'Description for Product D',
            price: 11.59,
            purchasedDate: undefined
        }
    ],
    'Category 3': [
        {
            name: 'Product E',
            category: 3,
            description: 'Description for Product E',
            price: 56.79,
            purchasedDate: undefined
        },
        {
            name: 'Product F',
            category: 3,
            description: 'Description for Product F',
            price: 76.99,
            purchasedDate: undefined
        }
    ],
    'Category 4': [
        {
            name: 'Product G',
            category: 4,
            description: 'Description for Product G',
            price: 45.99,
            purchasedDate: undefined
        },
        {
            name: 'Product H',
            category: 4,
            description: 'Description for Product H',
            price: 50.99,
            purchasedDate: undefined
        },
        {
            name: 'Product I',
            category: 4,
            description: 'Description for Product I',
            price: 34.99,
            purchasedDate: undefined
        }
    ]
};


categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.textContent = category;
    categoryElement.addEventListener('click', () => displayProducts(category));
    categoriesContainer.appendChild(categoryElement);
});


function displayProducts(category) {
    productsContainer.innerHTML = `<h1>Products of ${category}</h1>`;
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.addEventListener('click', () => displayProductInfo(product));
        productsContainer.appendChild(productElement);
    });
}


function displayProductInfo(product, createBuyButton = true) {
    productInfoContainer.innerHTML = '';
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    const productDescription = document.createElement('div');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = "Price(USD): " + product.price;

    productDetails.appendChild(productName);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productPrice);

    productInfoContainer.appendChild(productDetails);
    if (createBuyButton) {
        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            alert(`You have purchased ${product.name}`);
            product.purchasedDate = new Date();
            ordersList.setItem(product.name, JSON.stringify(product));
            updateOrdersListModal();
            displayCategories();
        });

        productInfoContainer.appendChild(buyButton);
    }
}


function displayCategories() {
    productsContainer.innerHTML = '<p style="text-align: center;">Category is not selected</p>';
    productInfoContainer.innerHTML = '<p style="text-align: center;">Product is not selected</p>';
}

// Homework_23
function getOrderTokenByKey(OrderKey, tokenKey) {
    const object = ordersList.getItem(OrderKey);
    const order = JSON.parse(object);

    return order[tokenKey];
}


function addItemToOrders(itemKey, itemValue) {
    ordersList.setItem(itemKey, itemValue);

    const newItem = document.createElement('div');
    newItem.classList.add('orders-list-item');
    let itemPrice = getOrderTokenByKey(itemKey, 'price');
    let itemPurchasedDate = new Date(getOrderTokenByKey(itemKey, 'purchasedDate'));
    let itemPurchasedYear = itemPurchasedDate.getFullYear();
    let itemPurchasedMonth =  itemPurchasedDate.getMonth();
    let itemPurchasedDayOfMonth =  itemPurchasedDate.getDate();
    let itemPurchasedHours =  itemPurchasedDate.getHours();
    let itemPurchasedMinutes =  itemPurchasedDate.getMinutes();
    let itemPurchasedSeconds =  itemPurchasedDate.getSeconds();

    let itemPurchasedAt = `${itemPurchasedYear}/${itemPurchasedMonth}/${itemPurchasedDayOfMonth} ${itemPurchasedHours}:${itemPurchasedMinutes}:${itemPurchasedSeconds}`;

    newItem.textContent = `${itemKey} for ${itemPrice}(USD),
    purchased at ${itemPurchasedDate}`;

    newItem.addEventListener('click', function (event) {
        event.preventDefault();
        displayProductInfo(JSON.parse(ordersList.getItem(itemKey)), false);
    })

    const deleteOrderButton = document.createElement('button');
    deleteOrderButton.classList.add('delete-order-button');
    deleteOrderButton.setAttribute('order-key', itemKey)
    deleteOrderButton.textContent = 'Delete this order';

    deleteOrderButton.addEventListener('click', function (event) {
        event.preventDefault();
        ordersList.removeItem(this.getAttribute('order-key'));
        updateOrdersListModal();
    })

    newItem.appendChild(deleteOrderButton);
    ordersModal.appendChild(newItem);
}

function updateOrdersListModal(pageFirstLoaded = true) {
    if (pageFirstLoaded) {
        ordersModal.innerHTML = '\n' +
            '    <svg class="modal__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">\n' +
            '        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>\n' +
            '    </svg>\n' +
            '    <p>Your orders, click on order to get more info</p>';
        window.closeCross = document.querySelector('.modal__cross');

        closeCross.addEventListener('click', function (event) {
            event.preventDefault();
            ordersModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            displayCategories();
        })

        for (let i = 0; i < ordersList.length; i++) {
            const itemKey = ordersList.key(i);
            const itemValue = ordersList.getItem(itemKey);

            addItemToOrders(itemKey, itemValue);
        }
    } else {
        addItemToOrders(itemKey, itemValue);
    }
}

ordersButton.addEventListener('click', function (event) {
    event.preventDefault();
    ordersModal.classList.add('active');
    modalOverlay.classList.add('active');
});

console.log(ordersList);
displayCategories();
updateOrdersListModal();
