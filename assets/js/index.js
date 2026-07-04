$(function () {
  $(document).ready(function () {
    var currentYear = new Date().getFullYear();
    $("#copy-right-date").text(currentYear);

    $('#sendEmail').click(function() {
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const phone = $('#phone').val().trim();
      const message = $('#message').val().trim();
      
      const body = `Hello%0D%0A%0D%0A${message}%0D%0A%0D%0ABest regards,%0D%0A${name}%0D%0APhone: ${phone}`;
      const mailtoLink = `mailto:mohammadmahdi.cell@gmail.com?subject=Contact Form Submission&body=${body}`;
    
      window.location.href = mailtoLink;
    });
  });
});
