const sliders = document.querySelectorAll(".swiper-container");
sliders.forEach((slider) => {


let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 730 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      width: null,
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 730) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}


mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

})
