let switchSliderToImage = function (siteImageSelector, imagesCollection, index) {
    let image = $(siteImageSelector);
    image.fadeTo(300, 0 ,function () {
        image.attr('src', "assets/images/companies/" + imagesSrcs[index]);
        image.fadeTo(200, 1);
    });
};

let goUpButton = document.querySelector('#go-up-button');

let checkButtonVisibility = function () {
    let scrolledYpx = window.scrollY;
    let needToScrollPx = document.documentElement.clientHeight;

    if (scrolledYpx >= needToScrollPx) {
        goUpButton.classList.add('go-up-button-show');
    }
    if (scrolledYpx < needToScrollPx) {
        goUpButton.classList.remove('go-up-button-show');
    }
};

let goToTop = function () {
    if (window.scrollY > 0) {
        window.scrollBy(0, -25);
        setTimeout(goToTop, 0);
    }
}

checkButtonVisibility();
window.addEventListener('scroll', checkButtonVisibility);
goUpButton.addEventListener('click', goToTop);

new WOW().init();


if (localStorage.getItem('cookies-popup') === null) {
    $('#cookies-popup').css('display', 'block');

    $('#accept-btn').on('click', function () {
        localStorage.setItem('cookies-popup', 'hehe');
        $('#cookies-popup').css('display', 'none');
    });
}

