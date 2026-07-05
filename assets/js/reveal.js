(function () {
  var targets = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-fade"));
  if (!targets.length) return;

  var groupCounts = new Map();
  targets.forEach(function (el) {
    var parent = el.parentElement;
    var idx = groupCounts.get(parent) || 0;
    groupCounts.set(parent, idx + 1);
    el.style.setProperty("--stagger", String(idx % 6));
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("in-view");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
