(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var start = window.performance.now();
        var landed = false;
        var leaving = true;
        if (localStorage.getItem('landed') !== '1' && (document.referrer === '' || document.referrer.indexOf('lucidchart.com') === -1)) {
            landed = true;
            localStorage.setItem('landed', '1');
            lucid.kissMetrics.set({'generalLandedOnPage' : window.location.pathname});

            var allLinks = [].slice.call(document.querySelectorAll("a"));
            for (var i = 0; i < allLinks.length; i++) {
                var link = allLinks[i];
                link.addEventListener('click', function() {
                    if (this.href.indexOf('lucidchart.com') !== -1) {
                        leaving = false;
                    }
                });
            }

            var allForms = [].slice.call(document.querySelectorAll("form"));
            for (var i = 0; i < allForms.length; i++) {
                var form = allForms[i];
                form.addEventListener('submit', function() {
                    leaving = false;
                });
            }
        }

        window.addEventListener('beforeunload', function(evt) {
            var end = window.performance.now();
            var secondsOnPage = (end - start) / 1000;

            if (landed === true && leaving === true) {
                localStorage.setItem('landed', '0');
                lucid.kissMetrics.set({'generalUserBounce' : window.location.pathname});
            }

            lucid.kissMetrics.set({'generalSecondsOnPage': window.location.pathname + " " + secondsOnPage.toFixed(1) + "s"});
        });
    });

    window.addEventListener('load', function() {
        // Timing information is loaded AFTER the load event, so
        // we slap this in a setTimeout to make it run afterwards
        this.setTimeout(function() {
            var secondsToLoad;
            var timing = window.performance.getEntriesByType('navigation');
            // Safari is missing the navigation entry and stores data with
            // time since epoch strings
            if (timing.length === 0) {
                secondsToLoad = (new Date(window.performance.timing.loadEventEnd).getTime() - new Date(window.performance.timing.connectStart).getTime()) / 1000;
            }
            else {
                secondsToLoad = timing[0].duration / 1000
            }

            lucid.kissMetrics.set({'generalSecondsToLoad': window.location.pathname + " " + secondsToLoad.toFixed(1) + "s"});
        });
    });
}());