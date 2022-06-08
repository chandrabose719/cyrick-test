$(document).ready(function(){

  // Initiate the wowjs
  new WOW().init();

  // preload
  var preloader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    preloader.style.display = "none";
  });

  // header on scroll
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 300 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

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
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: 'receiver@email_address.com',
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
  .then(function (message) {
    console.log("email message: ", message);
  });
}

