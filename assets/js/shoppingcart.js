let shoppingcartContent = $('.cart-items');
let sessionData = Object.keys(sessionStorage);

if (sessionData.length === 0) {
    shoppingcartContent.append(`<div class="no-items-placeholder">Пока что тут пусто. Зайдите в каталог и выберите что-нибудь</div>`);
    $('.buy-button').css('display', 'none');
}

for (let curIndex of sessionData) {
    let item = sessionStorage.getItem(curIndex);
    let struct = JSON.parse(item);

    console.log(struct['imgName']);
    shoppingcartContent.append(`<div class="cart-item item-${curIndex}">
                                    <div class="cart-image"></div>
                                    <div class="cart-title">${struct['title']}</div>
                                    <div class="cart-price">${struct['price']}</div>
                                </div>`);
    shoppingcartContent.find(`.item-${curIndex}`).find('.cart-image').css('background-image', struct['imgName']);
}