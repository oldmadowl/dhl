$(function(){

  $('select').styler();

  $('.header__search').on('click', function(){
    $('.header__search-form').toggleClass('active');
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });


});