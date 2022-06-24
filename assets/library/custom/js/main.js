$(document).ready(function(){

  // Initiate the wowjs
  new WOW().init();

  // preload
  var preloader = document.getElementById("preloader-section");
  if (preloader) {
    window.addEventListener("load", function(){
      preloader.style.display = "none";
    });
  }  

  // header on scroll
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 300 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  // quick links on click
  $('.scrollto').bind('click', function(event) {
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({				
        scrollTop: $($anchor.attr('href')).offset().top				
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    }
  });

  // images lightbox popup
  var $gallery = new SimpleLightbox('.soln-gallery a', {});
  var $gallery = new SimpleLightbox('.testi-gallery a', {});

  // testimonials carousel
  $(".testimonial-carousell").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>'
      
    ],
    responsive: {
      0:{
          items:1
      },
      768:{
          items:2
      }
    }
  });

  // scroll to top  
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    $('.scroll-top').click(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return false;
    });
  }

});
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chandrabose719.videos@gmail.com",
    Password: "9DA54DC90FFB2018B1F51AB896E6345C61D8",
    To: 'chandrabose719@gmail.com',
    From: "chandrabose719.videos@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
  .then(function (message) {
    console.log("email message: ", message);
  });
}

