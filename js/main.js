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

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Technologies', 'Out of 10'],
            ['Html', 7.5],
            ['Css', 7.5],
            ['Javascript', 7],
            ['Jquery', 7.5],
            ['Bootstrap', 8],
            ['React', 4],
            ['MUI', 4],
            ['Wordpress', 7.5],
            ['PHP', 7.5],
            ['Mysql', 6.5],
        ]);

        var options = {
            title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
});