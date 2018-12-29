//load sections
$(function(){
    $('#nav').load('./html/nav.html');
    $('#header').load('./html/header.html');
    $('#footer').load('./html/footer.html');
});

//todo convert to promise
setTimeout(function(){

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
                nav.slideDown();
            }else{
                nav.slideUp();
            }
        }
    });

    //inject gallery files

},200);

//gallery load
const gallery = $('.gallery-content');
if (gallery.length){
    console.log('yay');
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
});



// apply styles if re-sized/rotated
$( window ).resize(function() {

    if ($(window).width() <= 768) {
        $('#nav ul').hide();
    }else{
        $('#nav ul').show();
    }
});