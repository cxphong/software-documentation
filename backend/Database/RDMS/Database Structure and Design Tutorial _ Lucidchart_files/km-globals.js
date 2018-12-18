(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var contentType;
        var body = document.getElementsByTagName('body')[0];

        _kmProxy = window._kmProxy || [];
        
        for (var i = 0; i < body.classList.length; i++) {
            if (body.classList[i].indexOf('node-type') > -1) { 
                contentType = body.classList[i].split('node-type-')[1]; 
            }
        }
        
        if (contentType) {
            _kmProxy.push(['set', {'template': contentType} ]);
        }

        var language = Drupal.settings.language;

        if (language) {
            _kmProxy.push(['set', {'Drupal Language': language} ]);
        }
    });
}());