let buyButtons = document.querySelectorAll('.item-buy-button');
for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', function () {
        let card = $(buyButtons[i].parentElement);
        let img = card.find('.image-container').css('background-image');
        let title = card.find('.item-title').text();
        let price = card.find('.item-price').text();

        let leThingo = {
            'imgName':img,
            'title':title,
            'price':price
        };

        sessionStorage.setItem(i.toString(), JSON.stringify(leThingo));

        let popup = $('#addedToCart-popup');
        popup.fadeTo(300, 1, function () {
            popup.css('display', 'block');
            setTimeout(() => {
                popup.fadeTo(500, 0, function () {
                    popup.css('display', 'none');
                });
            }, 1000);
        });
    });
}
