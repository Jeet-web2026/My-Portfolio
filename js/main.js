$(document).ready(function () {
    $('#main .navigation-btns a').eq(0).addClass('bg-black text-light');
    $('#main .navigation-btns a').on('click', function () {
        $(this).addClass('bg-black text-light');
        $(this).siblings().removeClass('bg-black text-light');
    });
    $('#main .contact-info ul a').on('mouseenter', function(){
        $(this).removeClass('text-black') && $(this).addClass('text-secondary');
    });
    $('#main .contact-info ul a').on('mouseleave', function(){
        $(this).addClass('text-black') && $(this).removeClass('text-secondary');
    });
    
});