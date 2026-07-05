function buildWhatsappLinks() {
  // Charges
  $('.charges a').each(/** @this {HTMLElement} */ function () {
    const title = $(this).find('.name').text().trim();
    const msg = `Hello, I need to make a charge in ${title}. I need to know more about it. Let me know when you're available.`;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappURL = `https://wa.me/71632553?text=${encodedMsg}`;

    $(this).attr('href', whatsappURL);
  });

  // Apps
  $('.apps .app').each(/** @this {HTMLElement} */ function () {
    const title = $(this).find('p').text().trim();
    const msg = `Hello, I need to make a purchase in ${title}. I need to know more about it. Let me know when you're available.`;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappURL = `https://wa.me/71632553?text=${encodedMsg}`;

    $(this).find('a').attr('href', whatsappURL);
  });

  // Games
  $('.games .card').each(/** @this {HTMLElement} */ function () {
    const title = $(this).find('.card-title').text().trim();
    const msg = `Hello, I need to make a purchase in ${title}. I need to know more about it. Let me know when you're available.`;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappURL = `https://wa.me/71632553?text=${encodedMsg}`;

    $(this).find('.btn').attr('href', whatsappURL);
  });
}

// Exposed so i18n.js can rebuild these links (with the new-language titles)
// when the user switches language without reloading the page.
/** @type {any} */ (window).buildWhatsappLinks = buildWhatsappLinks;

$(function() {
  buildWhatsappLinks();
});