


    

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
        slidesToShow: 1
      }
    }
  ]
});
    
const slider = $(".variable-width");


slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  }
}));