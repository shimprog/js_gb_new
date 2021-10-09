const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (...product) => {

    return `<div class="product-item">
                <img class="img-product" src="img/img_product.jpg" alt="Avatar">
            <div class="container">
                <h3>${product[0]}</h3>
                <p>${product[1]}</p>
                <button class="buy-btn">Купить</button>
            </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price)).join('');
    console.log(productsList);
    productsList.r
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);