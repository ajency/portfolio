



jQuery('.variable-width').slick({
 dots: false,
      arrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
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
    