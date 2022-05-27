$(".card__body").hover(function () {
    $(this).children('.btn').addClass('btn-active');
}, function () {
    $(this).children('.btn').removeClass('btn-active');
});