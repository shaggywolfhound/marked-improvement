//load sections
$(function(){
    $('#nav').load('./html/nav.html');
    $('#header').load('./html/header.html');
    $('#footer').load('./html/footer.html');
});

//todo convert to promise
setTimeout(function(){

//navigation
    /*
    $('#nav li.home').addClass('current');

    $('#nav li').on('click', function () {
        //todo add click on logo
        let navClass = $(this).attr('class');
        let content = $('#content');

        content.addClass('animated fadeOutDown');
        $('#nav li').removeClass('current');
        $(this).addClass('current');

        setTimeout(function() {
            if (navClass.includes('reviews')){
                content.load('./html/pages/reviews.html');
            }else if(navClass.includes('gallery')){
                content.load('./html/pages/gallery.html');
            }else if(navClass.includes('contact-us')){
                content.load('./html/pages/contact-us.html');
            }else if(navClass.includes('\'about-us')){
                content.load('./html/pages/about-us.html');
            }else{
                content.load('./html/pages/homepage.html');
            }
            content.removeClass('fadeOutDown');
            content.addClass('fadeInUp');
        },100);
    });

    */
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

    //gallery load
    const gallery = $('.gallery-content');
    console.log(gallery);
    if (gallery.length){
        console.log('yay');
    };

},200);

// apply styles if re-sized/rotated
$( window ).resize(function() {

    if ($(window).width() <= 768) {
        $('#nav ul').hide();
    }else{
        $('#nav ul').show();
    }
});