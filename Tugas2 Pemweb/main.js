$(document).ready(function(){


$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

$(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 470){
      $('.header').css({'background':'#800020','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
    }
});




});