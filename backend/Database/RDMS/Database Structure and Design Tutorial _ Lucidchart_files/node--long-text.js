/* ----------- Smooth Scroll (Discovery Pages) --------------- */
(function($) {
  function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  /* ---------- Discovery Scroll Nav JS ------------- */
  $(function() {
    $('.ds-menu a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target.length ) {
        event.preventDefault();
        // $(target)[0].scrollIntoView({behavior: 'smooth', block: 'start'});

        var nav = $('section.main-nav-bar');
        var nav_height = nav.outerHeight();
        $('html, body').animate({
          scrollTop: target.offset().top - nav_height - 18
        }, 300);

      }
    });

    //Underline on scroll
    var sections = $('.ds-content-section');
    var nav = $('section.main-nav-bar');
    var nav_height = nav.outerHeight();
    var stickyMenu = $('div.ds-menu');

    var onScrollThrottled = throttle(function() {
      var cur_pos = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - nav_height - 30;
        var bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          stickyMenu.find('a').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          stickyMenu.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    }, 100);

    window.addEventListener('scroll', onScrollThrottled);

    var scrollNav = document.getElementById('scroll-nav');
    var header = document.getElementsByClassName('ds-top')[0];
    var titlePosition = header.scrollHeight;
    var active = false;

    var onScrollDebounced = throttle(function() {
      var scrolled = window.scrollY;
      if (!active && scrolled > titlePosition) {
        $('.nav-wrapper').addClass('hideNav');
        scrollNav.classList.add('active');
        active = true;
      }
      else if (active && scrolled <= titlePosition) {
        $('.nav-wrapper').removeClass('hideNav');
        scrollNav.classList.remove('active');
        active = false;
      }
    }, 10);

    window.addEventListener('scroll', onScrollDebounced);
  });

}(window.jQuery));


// minutes read functionality
(function() {
  var strings = {
      'en': '{X} min read',
      'nl': '{X} minuten lezen',
      'fr': 'Durée de lecture: {X} min.',
      'de': 'Lesedauer: {X} Minuten',
      'ja': '{X}分読みました',
      'pt-br': 'Leitura de {X} min',
      'es': 'Lectura de {X} minutos'
  }

  document.addEventListener("DOMContentLoaded", function() {
      var language = Drupal.settings.language;
      var summary = document.querySelector('.discovery-content .discovery-summary');
      var body = document.querySelector('.discovery-content .discovery-content-body');
      var wordCount = body.textContent.trim().split(/\s+/).length;
      var minutes = Math.round(wordCount / 230);
      var minutesRead = document.createElement('div');
      minutesRead.className = 'discovery-progress';
      minutesRead.textContent = strings[language].replace('{X}', minutes);

      summary.insertBefore(minutesRead, summary.firstElementChild.nextSibling);
  });
}());
