$(document).ready(function () {
    $('#main .navigation-btns a').on('click', function () {
        $(this).addClass('bg-black text-light');
        $(this).siblings().removeClass('bg-black text-light');
    });
