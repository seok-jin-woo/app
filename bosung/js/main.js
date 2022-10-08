$(function() {
  // header bg
  if($(window).scrollTop() > 50) {
    $('header').addClass('bg_on')
  }
  if($(window).scrollTop() < 50) {
    $('header').removeClass('bg_on')
  }
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('header').addClass('bg_on')
      $('.')
    }
    if($(window).scrollTop() < 50) {
      $('header').removeClass('bg_on')
    }
  });

  //gnb
  
  $('.gnb .g1>li').hover(function() {
    $(this).children(".g2").stop().slideToggle(300);
    $('nav').append('<div class="gnb_bg"></div>')
    $('header nav .gnb_bg').slideShow()
  }, function() {
    $('.gnb .g2').hide();
    $('.gnb_bg').remove()
  })
  

  // $('.gnb .g1>li>a').off() 모바일 디바이스에서는 hover 액션을 사용하지 않음


  //mobile gnb
  $('.mo_gnb_btn').click(function() {
    $('header nav').toggle()
  })

  $('.family_site button').click(function() {
    
    $('.family_site ul').slideToggle();

    console.log()
    if($('.family_site button').css('background-color') === "rgb(0, 0, 0)") {
      $('.family_site button').css({background : '#fff', color : '#000'})
    }else {
      $('.family_site button').css({background : '#000', color : '#fff'})
    }
   
  })
  var num = 1;
  var string = '1'
})//ready()