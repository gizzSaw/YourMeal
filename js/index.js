const productDetail = document.querySelector('.product__detail');
const modalProduct = document.querySelector('.modal_product'); 

productDetail.addEventListener('click', () => {
    modalProduct.classList.add('modal_open');
});

modalProduct.addEventListener('click', (event) => {
    
    //const { target } = event;
    const target = event.target;
    


    if (target.closest('.modal__close') || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
        console.log('click оn ', target, modalProduct )
    }

    

    //modalProduct.classList.remove('modal_open');
    
});

