$(function () {
  const swiperEl = /** @type {any} */ (document.querySelector(".mySwiper"));
  const swiper = swiperEl.swiper;
  swiper.init = false;
  const resetSliderContentStyles = () => {
    $("swiper-slide .content").css({
      opacity: 0,
      top: "60%",
    });
  };
  const contentTransition = (init = false) => {
    if (
      init ||
      swiper.slides[swiper.activeIndex].classList.contains(
        "swiper-slide-active"
      )
    ) {
      // Apply styles to the .content div
      $(".swiper-slide-active .content").css({
        opacity: 1,
        top: "50%",
        transition: "1s",
      });
    } else {
      // Reset styles for other slides
      resetSliderContentStyles();
    }
  };
  swiper.on("transitionStart", resetSliderContentStyles);
  swiper.on("transitionEnd", contentTransition);
  swiper.on("init", contentTransition(true));
});
