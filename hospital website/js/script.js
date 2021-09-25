    // for reviews 
    var swiper = new Swiper(".swiper-container", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// for docs 






    


 
 
 let menu = document.querySelector('#menu-btn');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
 }

 window.onscroll = () =>{
     menu.classList.remove('fa-times');
     navbar.classList.remove('active');
 }
