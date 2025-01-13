$(document).ready(function () {
    $('#main .navigation-btns a').eq(0).addClass('bg-black text-light');
    $('#main .navigation-btns a').on('click', function () {
        $(this).addClass('bg-black text-light');
        $(this).siblings().removeClass('bg-black text-light');
    });
    $('#main .contact-info ul a').on('mouseenter', function () {
        $(this).removeClass('text-black') && $(this).addClass('text-secondary');
    });
    $('#main .contact-info ul a').on('mouseleave', function () {
        $(this).addClass('text-black') && $(this).removeClass('text-secondary');
    });

    $('#main .col-md-11 #about-section').siblings().hide();

    $('#main .navigation-work #about-enter').on('click', function () {
        $('#main .col-md-11 #about-section').siblings().hide();
        $('#main .col-md-11 #about-section').slideDown('slow');
    });

    $('#main .navigation-work #skills-enter').on('click', function () {
        $('#main .col-md-11 #skills-section').siblings().hide();
        $('#main .col-md-11 #skills-section').slideDown('slow');
    });

    $('#main .navigation-work #experience-enter').on('click', function () {
        $('#main .col-md-11 #experience-section').siblings().hide();
        $('#main .col-md-11 #experience-section').slideDown('slow');
    });

    $('#main .navigation-work #projects-enter').on('click', function () {
        $('#main .col-md-11 #projects-section').siblings().hide();
        $('#main .col-md-11 #projects-section').slideDown('slow');
    });

    let HideContactInfo = $('#skills-enter, #experience-enter, #projects-enter, #education-enter');
    let ShowContactInfo = $('#about-enter');
    HideContactInfo.on('click', function(){
        $('main .contact-info').hide();
    });
    ShowContactInfo.on('click', function(){
        $('main .contact-info').fadeIn();
    });
});