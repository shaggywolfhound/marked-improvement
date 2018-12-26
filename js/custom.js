//load sections
$(function(){
    $('#nav').load('./html/nav.html');
    $('#header').load('./html/header.html');
    $('#footer').load('./html/footer.html');
    $('#content').load('./html/pages/homepage.html');
});
//todo convert to promise
setTimeout(function(){

    $('#nav li.home').addClass('current');

    $('#nav li').on('click', function () {
        //todo add click on logo
        console.log('menu');
        let navClass = $(this).attr('class');
        let content = $('#content');

        content.addClass('animated fadeOutDown');
        $('#nav li').removeClass('current');
        $(this).addClass('current');


        setTimeout(function() {
            switch (navClass) {
                case 'reviews':
                    content.load('./html/pages/reviews.html');
                    break;
                case 'gallery':
                    content.load('./html/pages/gallery.html');
                    break;
                case 'contact-us':
                    content.load('./html/pages/contact-us.html');
                    break;
                case 'about-us':
                    content.load('./html/pages/about-us.html');
                    break;
                default:
                    content.load('./html/pages/homepage.html');
            }
            content.removeClass('fadeOutDown');
            content.addClass('fadeInUp');
        },100);
    });

    /*mobile navigation*/
    let navButton = $('#mobile-nav');
    let nav = $('#nav ul');

    if ($(window).width() <= 768) {
        nav.hide();
    }

    navButton.on('click', function () {
        //only apply to mobile view
        if ($(window).width() <= 768) {
            if(nav.is(":hidden")){
                console.log('hidden');
                nav.slideDown();
            }else{
                console.log('showing');
                nav.slideUp();
            }
        }
    });

},200);

// apply styles if re-sized/rotated
$( window ).resize(function() {

    if ($(window).width() <= 768) {
        $('#nav ul').hide();
    }else{
        $('#nav ul').show();
    }
});