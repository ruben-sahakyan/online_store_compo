const addToBasket = document.querySelector('.add_to_basket_btn');
const productQuantity = document.querySelector('.product_quantity');

const productQunatityMinus = document.querySelector('#product_quantity_minus');
const productQuantityPlus = document.querySelector('#product_quantity_plus');
const showProductQuantity = document.querySelector('#show_product_quantity');

const productPrice = document.querySelector('.body_main_info_top_section_left_section_first_section_base_price p span');

const basketPrice = document.querySelector('.header_basket span');
const addToLikeProduct = document.querySelector('.add_to_like_product_btn');

const likeProductActive = document.querySelector('.like_icon_deactive');
const likeProductDeactive = document.querySelector('.like_icon_active');



addToLikeProduct.addEventListener('click', () => {
    likeProductActive.classList.toggle('active');
    likeProductDeactive.classList.toggle('active');
});


addToBasket.addEventListener('click', () => {
    addToBasket.classList.toggle('active');
    productQuantity.classList.toggle('active');
});

let count = 0;

productQunatityMinus.addEventListener('click', () => {
    --count;
    if(count <= 0) {
        count = 0;
        showProductQuantity.textContent = `${count} штук`;
        basketPrice.textContent = count;
    } else {
        showProductQuantity.textContent = `${count} штуки`;
        basketPrice.textContent = count;
        basketPrice.textContent = count*productPrice.textContent;
    }
});

productQuantityPlus.addEventListener('click', () => {
    ++count;
    showProductQuantity.textContent = `${count} штуки`;
    basketPrice.textContent = count*productPrice.textContent;
});

showProductQuantity.textContent(count);
