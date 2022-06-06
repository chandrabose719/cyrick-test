$(document).ready(function(){

  // Initiate the wowjs
  new WOW().init();

  // preload
  var preloader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    preloader.style.display = "none";
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

