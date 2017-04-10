$(document).ready(function() {

  $('.menu').on('click', function(event) {

    $('.menu').each(function() {
      $('.x-label').remove();
      console.log($(this));
    })

    $(this).append('<span class="x-label">X</span>');

  });

});
