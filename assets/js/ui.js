$(function () {
  var $backToTop = $("#backToTop");

  $(window).on("scroll", function () {
    $backToTop.toggleClass("show", $(window).scrollTop() > 400);
  });

  $backToTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
