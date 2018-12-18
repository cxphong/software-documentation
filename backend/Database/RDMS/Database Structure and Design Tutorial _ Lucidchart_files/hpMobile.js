document.addEventListener("DOMContentLoaded", function() {
    (function($) {
        function hpMobile() {
            var hpMobile = hpMobile || abTest('hpMobile');
            if (hpMobile === "T-B") {
                var topbar = document.querySelector('#hpMobile');
                topbar.classList.add('show');
        
                var orange = document.querySelector('.nav-wrapper');
                orange.classList.add('pushed');
        
                var dark = document.querySelector('.navigation .primary-links');
                dark.classList.add('pushed');
        
                var image = document.querySelector('#hpLayoutC');
                image.classList.add('pushed');
                createCookie('seenAppBanner', 'True', 365);
            }
        }
    
        function createCookie(name, value, days) {
            var date, expires;
            if (days) {
                date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = name+"="+value+expires+"; path=/";
        }
    
        function test_qualifier() {
            var windowSize = window.innerWidth;
            if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && windowSize <= 768 && document.querySelector('.page-node-8355') && !$.cookie('seenAppBanner')) {
                hpMobile();
            }
        }
    
        function closeMobile(){
            var topbar = document.querySelector('#hpMobile');
            topbar.classList.remove('show');
    
            var orange = document.querySelector('.nav-wrapper');
            orange.classList.remove('pushed');
    
            var dark = document.querySelector('.navigation .primary-links');
            dark.classList.remove('pushed');
    
            var image = document.querySelector('#hpLayoutC');
            image.classList.remove('pushed');
        }
    
        document.querySelector('#mobile-banner-exit').addEventListener("click", closeMobile);
    
        test_qualifier();        
    }(window.jQuery));
});