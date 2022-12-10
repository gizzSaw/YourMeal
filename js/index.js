import { modalProduct,
    catalogList
} from './elements.js';

import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';

const burgerMax = {
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



catalogList.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('.product__detail') 
    || target.closest('.product__detail')) {
        openModal(burgerMax);
        
    };
});

modalProduct.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest('.modal__close') 
    || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }    
});

const init = () => {
    renderListProduct();
    navigationListController();
}

init();