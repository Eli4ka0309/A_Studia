$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.nav_burger,.navigation-list ul').toggleClass('active');
        $('body').toggleClass('look');
    });

});