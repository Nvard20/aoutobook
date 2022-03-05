$(document).ready(function() {
$('.burger').click(function(){
    $('.mobile-container').toggle(200);
});

    $('#check').click(function() {
        if($(this).is(":checked")) {
            $('.reg-servise').addClass('red');
            $('.search-servise').removeClass('red');  
            $('.row-confirm-box').show();
            $('.row-confirm').hide();
        }
        else if($(this).is(":not(:checked)")) {
            $('.reg-servise').removeClass('red');  
            $('.search-servise').addClass('red');  
            $('.row-confirm-box').hide();
            $('.row-confirm').show()
          }
    });
  });
  if (window.matchMedia("(max-width: 767px)").matches) {
      $('.reg-servise').click(function(){
            $('.slider-1').hide();
            $('.slider-2').show();
            $('.reg-servise').addClass('red');
            $('.search-servise').removeClass('red');  
      });
      $('.search-servise').click(function(){
        $('.slider-1').show();
        $('.slider-2').hide();
        $('.reg-servise').removeClass('red');  
        $('.search-servise').addClass('red');  
     });
  }