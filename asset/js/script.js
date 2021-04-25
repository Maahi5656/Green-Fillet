$(document).ready(function(){
    $('.slider-section-image').owlCarousel({
         loop:true,
         margin:1,
         nav:false,
         dots:true,
         responsive:{
             0:{
                items:1
             },
             600:{
                items:1
             },
             1000:{
                items:1
             }
         }

    });

    $('.product-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
           breakpoint: 991,
           settings: {
            slidesToShow: 3,
            slidesToScroll: 3
           }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })
  });



