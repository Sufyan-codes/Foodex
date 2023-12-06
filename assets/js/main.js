let listProductsHTML = document.querySelector('.menu')
let listCartHTML = document.querySelector('.cart-items')
let iconCartHTML = document.querySelector('.cart-count')
let cardSwiper = document.querySelector('.swiper-wrapper')

let listProducts = []
let carts = []

const addDataToHTML = () => {
    listProductsHTML.innerHTML = '';
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
        <img class="menu__img" src="${product.img}" alt="">
        <h3 class="name">${product.name}</h3>
        <span class="rate">${product.time}mins </span> <br>
        <span class="rate"><i class="ri-star-fill star"></i> <i class="ri-star-fill star"></i> <i class="ri-star-fill star"></i> <i class="ri-star-fill star"></i>${product.rating}</span>
        <h2 class="price">$${product.price}</h2>
        <button class="addCart">Cart +</button>
        `;

            listProductsHTML.appendChild(newProduct)
        })
    }
    
}
listProductsHTML.addEventListener('click', (event) => {
    let positionClick = event.target
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id)
    }
})



const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((Value) => Value.product_id == product_id)
    if (carts.length <= 0) {
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    } else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1
    }
    addToCartHTML()
}

const addToCartHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div')
            newCart.classList.add('items')
            newCart.dataset.id = cart.product_id
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct]
            newCart.innerHTML = `
            <div class="cart-data">
            <img src="${info.img}">
            <div class="cart__data">
                <p>${info.name}</p>
            <span>$${info.price * cart.quantity}</span>
            </div>
            <div class="counter">
                <button class="add">+</button>
                <span class="counter-data">${cart.quantity}</span>
                <button class="sub">-</button>
            </div>
            </div>
            `
            listCartHTML.appendChild(newCart)
        })
    }
    iconCartHTML.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('add') || positionClick.classList.contains('sub')) {
        let product_id = positionClick.parentElement.dataset.id
        let type = 'sub'
        if (positionClick.classList.contains('add')) {
            type = 'sub'
        }
        changeQuantity(product_id, type)
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = carts[positionItemInCart];
        switch (type) {
            case 'add':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;

            default:
                let changeQuantity = carts[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    carts[positionItemInCart].quantity = changeQuantity;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }

    }
}
/*=========FETCH DATA=======*/
const initApp = () => {
    fetch('Data.json')
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            addDataToHTML()
        })
}

initApp()