$(function () {
  $("[go-to]").on("click", /** @this {HTMLElement} @param {Event} e */ function (e) {
    e.preventDefault();

    var targetId = $(this).attr("go-to");

    $("html, body").animate(
      {
        scrollTop: $("#" + targetId).offset().top,
      },
      100
    );
  });

  /** @param {string} sectionId */
  function isSectionInNav(sectionId) {
    var isInNav = false;
    $("nav a[go-to]").each(/** @this {HTMLElement} */ function () {
      if ($(this).attr("go-to") == sectionId) {
        isInNav = true;
        return false;
      }
    });
    return isInNav;
  }

  function updateActiveNavLink() {
    var scrollPosition = $(window).scrollTop();

    $(".section").each(/** @this {HTMLElement} */ function () {
      var sectionId = $(this).attr("id");
      if (!sectionId || !isSectionInNav(sectionId)) {
        return;
      }
      var sectionOffset = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
        $("nav a[go-to]").removeClass("active");
        $('a[go-to="' + sectionId + '"]').addClass("active");
      }
    });
  }

  function updateNavbarScrolled() {
    $("nav.navbar").toggleClass("scrolled", $(window).scrollTop() > 40);
  }

  $(document).scroll(function () {
    updateActiveNavLink();
    updateNavbarScrolled();
  });

  updateActiveNavLink();
  updateNavbarScrolled();
});
