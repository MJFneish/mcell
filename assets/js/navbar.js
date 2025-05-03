$(function () {
  $("nav a[go-to], button[go-to]").on("click", function (e) {
    e.preventDefault();

    var targetId = $(this).attr("go-to");

    $("html, body").animate(
      {
        scrollTop: $("#" + targetId).offset().top,
      },
      100
    );
  });

  function isSectionInNav(sectionId) {
    var isInNav = false;
    $("nav a[go-to]").each(function () {
      if ($(this).attr("go-to") == sectionId) {
        isInNav = true;
        return false;
      }
    });
    return isInNav;
  }

  function updateActiveNavLink() {
    var scrollPosition = $(window).scrollTop();

    $(".section").each(function () {
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

  $(document).scroll(function () {
    updateActiveNavLink();
  });

  updateActiveNavLink();
});
