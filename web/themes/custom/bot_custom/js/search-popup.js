(function ($, Drupal) {
    Drupal.behaviors.BOTCustomSearchPopup = {
        attach: function (context, settings) {
              $('#close-btn').click(function() {
    $('#block-exposedformsearch-contentpage-1').fadeOut();
    $('#close-btn').fadeOut();
    $('.region-navigation-collapsible').fadeIn();
    $('#search-btn').show();
  });
  $('#search-btn').click(function() {
    $(this).hide();
    $('#block-exposedformsearch-contentpage-1').fadeIn();
    $('#close-btn').fadeIn();
    $('.region-navigation-collapsible').hide();  
  });
        }
    };
})(jQuery, Drupal);