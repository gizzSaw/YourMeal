const modalProduct = document.querySelector('.modal_product'); 
const catalogList = document.querySelector('.catalog__list'); 

const product = {
    title: "Burger Max",
    weight: 10000,
    price: 5000,
    calories: 15000,
    description: "Огромный бургер, съешь сам или поделись с компанией",
    image: 'img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка', 
        'Мега котлета из говядины', 
        'Много сыра', 
        'Листья салата', 
        'Чипотл'   
    ]
};

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');


modalProductTitle.textContent = product.title; 
modalProductImage.src = product.image;

ingredientsList.textContent = '';

// for (let i = 0; i < product.ingredients.length; i++) {
//     const li = document.createElement('li');
//     li.classList.add('ingredients__item');
//     li.textContent = product.ingredients[i];
//     ingredientsList.append(li);
// }

const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');
    li.textContent = item;
    return li
});

ingredientsList.append(ingredientsListItems);

catalogList.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('.product__detail') 
    || target.closest('.product__detail')) {
        modalProduct.classList.add('modal_open');
    };
});

// добавить 
        // modalProductDescription
        // ingredientsCalories
        // modalProductPriceCount

modalProduct.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest('.modal__close') 
    || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }    
});

