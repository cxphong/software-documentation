(function ($) {
  $(document).ready(function(){
      var $currentLanguage = $('.current-language');
      var $languageDrop = $('.language-drop');

      $currentLanguage.click(function(e){
          e.stopPropagation();
          $currentLanguage.toggleClass('open');
          $languageDrop.toggleClass('open');
      });

      $('html').click(function(){
          $languageDrop.removeClass('open');
          $currentLanguage.removeClass('open');
      });
  });
}(window.jQuery));