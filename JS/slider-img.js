let slider = document.querySelector(".slider-box");
let slides = document.querySelectorAll(".content-slider");
let slideWidth = slides[0].clientWidth;
let slideIndex = 0;

export default function sliderImagenes(){
    function showSlide(index) {
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
      }
    
      function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      }
    
      setInterval(nextSlide, 3000);
    
    
      showSlide(slideIndex);


}

