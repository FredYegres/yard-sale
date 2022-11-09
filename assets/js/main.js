let productList = [];
let shoppingCart = [];

class Product {
    constructor(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.added = false;
    }

}

productList.push(new Product(
    'Round Metal Reclaimed Wood Shelf ',
    44.99,
    './assets/img/71pyGc3ydML._AC_SX522_.jpg',
    "The black floating shelves have a simple and elegant style, with a unique black iron round frame and wooden texture, bringing gentleness within reach and embellishing the colors of life."
));
productList.push(new Product(
    'Wall Mounted Floating Corner Shelf',
    16.99,
    './assets/img/61skRhqi14L._AC_SX522_.jpg',
    "The floating corner shelves are perfect for a variety of decorative styles, turn any corner into an elegant storage and display space. This corner shelves for wall - great for storing your books, photo frames, knick knacks, vases, alarm clock, toothbrushes and more."
));
productList.push(new Product(
    'Natural Dried Pampas Grass Bouquet',
    21.99,
    './assets/img/91+O6e7J01L._AC_SX522_.jpg',
    "Our dry pampas grass is easy to plume. Once it's in the shape that you desire, you can place it in a vase and enjoy the decorative ambiance it provides for your home or office. There's no watering or fertilizing needed."
));
productList.push(new Product(
    'Round shelf',
    35.99,
    './assets/img/round_shelf.png',
    "Boasting a modern design, this wood shelf is fashionable and contemporary. With two shelves in this unit, you can display all your ornaments, photo frame, and plants."
));
productList.push(new Product(
    'Contemporary Metal Leaves Wall Decor',
    67.99,
    './assets/img/81yWN9cbAPS._AC_SX522_.jpg',
    "Level up the empty walls of your boho chic style home by displaying these creative metal wall arts."
));
productList.push(new Product(
    'Ceramic Hollow Donut Vase',
    37.99,
    './assets/img/61lRkA4GtDL._AC_SX522_.jpg',
    "Minimalist abstract design - If the ordinary vase design doesn't attract you, you will be attracted by this white ceramic vase for living room decor. "
));
productList.push(new Product(
    'Floral Throw Pillow Covers Set Yellow Orange',
    12.99,
    './assets/img/81OlHqJojKL._AC_SX522_.jpg',
    "Abstract floral print on one side adds cuteness to these boho pillow covers, unique and adorable. These retro floral cushion covers work equally well in the bedroom and living room."
));
productList.push(new Product(
    'Reversible Modern L-Shaped Desk',
    169.99,
    './assets/img/81lEv9a7Q2L._AC_SX522_.jpg',
    "This modern L shape desk can be configured on the left or right-hand side. Self-leveling feet to stabilize on level surface, it is quite stable even on unlevel ground."
));
productList.push(new Product(
    'Retro refrigerator',
    120.99,
    './assets/img/Bitmap.png',
    "With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro vintage aesthetic to your kitchen or workplace."
));
productList.push(new Product(
    'Mini Potted Fake Plants',
    25.99,
    './assets/img/715Nbzwto6L._AC_SX522_.jpg',
    "Our mini potted artificial plants have eucalyptus leaves that are made of plastic. The pot is made of good paper pulp, please do not put it in the water."
));
productList.push(new Product(
    'Minimalist Art Framed Canvas Prints Artwork',
    36.99,
    './assets/img/61O-U2bIseL._AC_SX679_.jpg',
    "High definition giclee picture printed on high-quality canvas, waterproof, uv resistant and fade resistant indoor, high-quality thick canvas."
));
productList.push(new Product(
    'Rustic Wood Wall Mirror Decorative',
    23.99,
    './assets/img/81rIa5UgmvL._AC_SX522_.jpg',
    "This decorative mirror made of natural solid wood, torched finished features carbonized black color, and the beautiful wood texture makes it an antique accent. This stylish and eye-catching decor piece is the perfect addition to your house."
));

renderProducts();

const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.menu');
const cart = document.querySelector('.navbar-shopping-cart');
const myOrderClose = document.querySelector('.title-container img');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.product-detail-cart');
const menuInfo = document.querySelector('#product-detail-info');

email.addEventListener('click', () => {
    toggleElement([menuCart, menuInfo], desktopMenu);
    renderCart(shoppingCart);
});
menu.addEventListener('click', () => toggleElement([menuCart, menuInfo], mobileMenu));
cart.addEventListener('click', () => toggleElement([mobileMenu, desktopMenu, menuInfo], menuCart));
myOrderClose.addEventListener('click', () => menuCart.classList.add('inactive'));

function toggleElement(array, target = '') {
    array.forEach(element => {
        element.classList.add('inactive');
    })

    if(target) {
        target.classList.toggle('inactive');
    }
}

function renderProducts() {
    const cardsContainer = document.querySelector('.cards-container');

    cardsContainer.innerHTML = '';

    productList.forEach(product => {
        const productCard = document.createElement('DIV');
        productCard.classList.add('product-card');
        
        const cardImage = document.createElement('IMG');
        cardImage.src = product.image;
        cardImage.alt = 'imagen producto';
        cardImage.classList.add('product-image');
        cardImage.onclick = () => openInfo(product);
    
        const productInfo = document.createElement('DIV');
        productInfo.classList.add('product-info');
    
        const div = document.createElement('DIV');

        const price = document.createElement('P');
        price.textContent = `$${product.price}`;

        const name = document.createElement('P');
        name. textContent = product.name;
    
        const figure = document.createElement('FIGURE');
    
        const imageFigure = document.createElement('IMG');
        imageFigure.onclick = () => {
            updateCart(product);
            toggleElement([menuInfo])
        }

        if(!product.added) {
            imageFigure.src = './assets/img/icons/bt_add_to_cart.svg';
        } else {
            imageFigure.src = './assets/img/icons/bt_added_to_cart.svg';
        }
        imageFigure.alt = 'agregar al carro';
    
        div.append(price, name);
        figure.appendChild(imageFigure);
        productInfo.append(div, figure);
        productCard.append(cardImage, productInfo);
        cardsContainer.appendChild(productCard);
    });

    renderCart();
}

function openInfo(product) {
        menuInfo.innerHTML= '';

        const divClose = document.createElement('DIV');
        divClose.classList.add('product-detail-close');
        divClose.onclick = () => toggleElement([mobileMenu, desktopMenu, menuCart], menuInfo);

        const closeImage = document.createElement('IMG');
        closeImage.src = './assets/img/icons/icon_close.png';
        closeImage.alt = 'close';

        const image = document.createElement('IMG');
        image.src = product.image;
        image.alt = 'product';
    
        const productInfo = document.createElement('DIV');
        productInfo.classList.add('product-info');
    
        const price = document.createElement('P');
        price.textContent = `$${product.price}`;
        price.classList.add('product-price');

        const name = document.createElement('P');
        name.classList.add('product-name');
        name.textContent = product.name;

        const description = document.createElement('P');
        description.classList.add('product-description');
        description.textContent = product.description;
    
        const button = document.createElement('BUTTON');
        button.onclick = () => {
            updateCart(product);
            openInfo(product);  
        }
        
        if(!product.added) {
            button.classList.add('primary-button', 'add-to-cart-button');
            button.textContent = 'Add to cart';
        } else {
            button.classList.add('primary-button', 'add-to-cart-button', 'added');
            button.textContent = 'Remove from cart';
        }

        const imageButton = document.createElement('IMG');
        if(!product.added) {
            imageButton.src = './assets/img/icons/bt_add_to_cart.svg';
        } else {
            imageButton.src = './assets/img/icons/bt_added_to_cart.svg';
        }
        imageButton.alt = 'add to cart';
    
        divClose.appendChild(closeImage);
        button.appendChild(imageButton);
        productInfo.append(price, name, description, button);
        menuInfo.append(divClose, image, productInfo);

        toggleElement([mobileMenu, desktopMenu, menuCart]);
        menuInfo.classList.remove('inactive');

    renderCart();
}

function renderCart() {
    const orderContent = document.querySelector('.my-order-content');
    orderContent.innerHTML = '';
    let totalPrice;
    const items = document.querySelector('.items');
    items.textContent = shoppingCart.length;

    if(shoppingCart.length === 0) {
        const empty = document.createElement('H2');
        empty.classList.add('empty');
        empty.textContent = 'Your Shopping Cart is Empty!';

        orderContent.appendChild(empty);
        return;
    }

    function totalAmount() {
        totalPrice = 0;
        shoppingCart.forEach(product => {
            totalPrice += product.price;
        });
    }

    shoppingCart.forEach(product => {

        const divCart = document.createElement('DIV');
        divCart.classList.add('shopping-cart');

        const figureCart = document.createElement('FIGURE');

        const imageCart = document.createElement('IMG');
        imageCart.src = product.image;
        imageCart.alt = 'product image';

        const name = document.createElement('P');
        name.textContent = product.name;

        const price = document.createElement('P');
        price.textContent = `$${product.price}`;

        const iconDelete = document.createElement('IMG');
        iconDelete.src = './assets/img/icons/icon_close.png';
        iconDelete.alt = 'delete';
        iconDelete.onclick = () => updateCart(product);

        figureCart.appendChild(imageCart);
        divCart.append(figureCart, name, price, iconDelete)
        orderContent.appendChild(divCart);

        totalAmount();

    });
    
    const divOrder = document.createElement('DIV');
    divOrder.classList.add('order');

    const pOrder = document.createElement('P');
    const spanOrder = document.createElement('SPAN');
    spanOrder.textContent = 'Total';
    const total = document.createElement('P');
    total.textContent = `$${totalPrice.toFixed(2)}`;
    const checkoutButton = document.createElement('BUTTON');
    checkoutButton.classList.add('primary-button', 'checkout-button');
    checkoutButton.textContent = 'Checkout';

    pOrder.appendChild(spanOrder);
    divOrder.append(pOrder, total);
    orderContent.append(divOrder, checkoutButton);
}

function updateCart(product) {
    if(!shoppingCart.includes(product)) {
        product.added = true;
        shoppingCart.push(product);
    } else {
        product.added = false;
        shoppingCart = shoppingCart.filter(element => element !== product);
    }

    renderCart();
    renderProducts();
}