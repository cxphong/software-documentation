document.addEventListener("DOMContentLoaded", function() {
    (function($) {
        var navTools = navTools || abTest('navTools');
        if (navTools === "T-B") {
            document.querySelector('#tools-li').style.display = 'inline-block';
            if (document.querySelector('.front')){
                document.getElementsByClassName('logo-link')[0].href = 'javascript:void(0)';
            }
        }            
    }(window.jQuery));
});
