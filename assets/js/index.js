let imagesSrcs = ["nornikel.jpg", "neftehim.jpg", "rosteh.jpg", "severstal.png", "skolkovo.png", "magnit.jpg", "Azovstal_logo.svg.png"];
let prevIndex = -1;
let curIndex = -1;

for (let i = 0; i < imagesSrcs.length; i++) {
    $('.companies-slider').append('<a></a>');
}

let buttons = $('.companies-slider a');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        curIndex = i;

        switchSliderToImage('.companies-images-item', imagesSrcs, curIndex);
        $(buttons[curIndex]).toggleClass('slider-selected');
        $(buttons[prevIndex]).toggleClass('slider-selected');

        prevIndex = curIndex;
    });
}

setInterval(function () {
    curIndex++;
    if (curIndex > imagesSrcs.length - 1)
        curIndex = 0;

    switchSliderToImage('.companies-images-item', imagesSrcs, curIndex);
    $(buttons[curIndex]).toggleClass('slider-selected');
    $(buttons[prevIndex]).toggleClass('slider-selected');

    prevIndex = curIndex;
}, 2500);