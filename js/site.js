// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

/*Alert for minimum password length from Stack Overflow
$('button[name="submit"]').click(function() {
    if($('input[name="password"]').val().length < 8) {
        alert('Minimum length = 8');
    } else {
        $('form').submit();
    }
});
*/

