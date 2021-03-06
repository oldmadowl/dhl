$(function(){

  $('select').styler();

  $('.header__search').on('click', function(){
    $('.header__search-form').toggleClass('active');
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });


  $('.info__tabs-btn').on('click', function(e){
    e.preventDefault();

    $('.info__tabs-btn').removeClass('active');
    $('.info__tab').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.info__dropdown-header, .footer__col-title').on('click', function(){
    $(this).toggleClass('active');
    $(this).next('.info__dropdown-content, .footer__list').slideToggle();
  });

});