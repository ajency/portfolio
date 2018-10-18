
$('.mobile-slick').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows:false,
     adaptiveHeight: true
});

  $('.mobile-slick').on('setPosition', function () {
  jbResizeSlider();
});

//we need to maintain a set height when a resize event occurs.
//Some events will through a resize trigger: $(window).trigger('resize');
$(window).on('resize', function(e) {
  jbResizeSlider();
});

//since multiple events can trigger a slider adjustment, we will control that adjustment here
function jbResizeSlider(){
  $slickSlider = $('.mobile-slick');
  $slickSlider.find('.slick-slide').height('auto');

  var slickTrack = $slickSlider.find('.slick-track');
  var slickTrackHeight = $(slickTrack).height();

  $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
}

jQuery('.variable-width').slick({
      arrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      dots:false,
      initialSlide: 1,
       centerMode: true,
         variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
         centerPadding: '35px',
      }
    }
  ]
});


jQuery( ".our-work .items" ).hover(
  function() {
    $( '.aj-our-work' ).addClass( "invisible" );
  }, function() {
    $( '.aj-our-work' ).removeClass( "invisible" );
  }
);

$('.aj-team-member').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows:false,
  slidesToShow: 1,
  variableWidth: true
});



$(window).scroll(function(){
    if ($(window).scrollTop() >= 20) {
        $('nav').addClass('fixed-header');
        $('nav').addClass('position-fixed');
    }
    else {
        $('nav').removeClass('fixed-header');
         $('nav').removeClass('position-fixed');
    }
});

if ($(window).width() < 760) {

  $('.pf-healthkart').click(function() {
       $('.scroll-left').addClass('active');
      $('.mobile-slick').slick('slickGoTo', 0);
      $('body').css("overflow", "hidden");

        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?para=hello';
            window.history.pushState({path:newurl},'',newurl);
        }

       // var imgtag = $(this).closest('.items').find(".portfolio-mobile").clone();
       // $('.img-section').html(imgtag);
  });
  $('.pf-commonfloor').click(function() {
       $('.scroll-left').addClass('active');
      $('.mobile-slick').slick('slickGoTo', 1);
      $('body').css("overflow", "hidden");
  });
  $('.pf-growthinvest').click(function() {
       $('.scroll-left').addClass('active');
      $('.mobile-slick').slick('slickGoTo', 2);
      $('body').css("overflow", "hidden");
  });
  $('.pf-weddingz').click(function() {
       $('.scroll-left').addClass('active');
      $('.mobile-slick').slick('slickGoTo', 3);
      $('body').css("overflow", "hidden");
  });


  $('.back').click(function() {
       $('.scroll-left').removeClass('active');
       $('body').css("overflow", "scroll");
    $(".scroll-left").animate({ scrollTop: 0 }, "slow");
    return false;

  });
}

$(window).on("load", function() {
    jQuery.ready.then(function() {
      var imgDefer = document.getElementsByTagName('img');
      for (var i = 0; i < imgDefer.length; i++) {
          if (imgDefer[i].getAttribute('data-src')) {
              imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
              imgDefer[i].setAttribute('srcset', imgDefer[i].getAttribute('data-srcset'));
              imgDefer[i].setAttribute('sizes', imgDefer[i].getAttribute('data-sizes'));
              imgDefer[i].removeAttribute('data-src', 'data-srcset', 'data-sizes');
              imgDefer[i].removeAttribute('data-srcset');
              imgDefer[i].removeAttribute('data-sizes');
          }
      }
    });
})