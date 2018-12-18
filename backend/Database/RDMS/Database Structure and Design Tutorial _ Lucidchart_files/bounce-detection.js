(function() {
    var userIdMatch = /(^|; )userId=(\d+)( |;)/.exec(document.cookie);
    var userId = userIdMatch && userIdMatch[2];

    if (!userId) {
        var bounceDetectionButtonText;
        Drupal.behaviors.BounceDetectionBehavior = {
            attach: function(context, settings) {
                if (Drupal.settings.bounceDetection && Drupal.settings.bounceDetection.bounceDetectionButtonText) {
                    bounceDetectionButtonText = Drupal.settings.bounceDetection.bounceDetectionButtonText;
                }
            }
        };

        Bounceback.init({
            onBounce: function() {
                var bounceDetectionContent = document.querySelector(".lucid-bounce-detection");
                bounceDetectionButtonText = bounceDetectionButtonText || bounceDetectionContent.dataset.ctaText;
                        
                if (document.querySelector('.node-type-fifteen-og')) {
                    var consBounceCTA = consBounceCTA || abTest('consBounceDiagramCTA');
                    if (consBounceCTA === "T-A") {
                        bounceDetectionButtonText = bounceDetectionContent.dataset.ctaText;
                    }
                    else {
                        bounceDetectionButtonText = bounceDetectionButtonText;
                    }
                }

                swal({
                    title: '',
                    html: bounceDetectionContent.innerHTML,
                    input: 'text',
                    inputPlaceholder: bounceDetectionContent.dataset.placeholder,
                    inputClass: 'email-input',
                    customClass: 'lucid lucidchart lucid-modal',
                    confirmButtonClass: 'primary-button',
                    showCloseButton: true,
                    confirmButtonText: bounceDetectionButtonText,
                    buttonsStyling: false,
                    inputValidator: function(email) {
                        var emailReg = /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                        return new Promise(function(resolve, reject) {
                            if (email.match(emailReg)) {
                                resolve();
                            } else {
                                reject(bounceDetectionContent.dataset.reject);
                            }
                        });
                    }
                }).then(function(email) {
                    swal.disableInput();
                    swal.disableButtons();

                    var emailOnlyData = {
                      email: email,
                      finalizeNow: true
                    };

                    if (document.querySelector('.node-type-long-text')) {
                        emailOnlyData = {
                            email: email,
                            finalizeNow: true,
                            discoveryPage: true
                        };
                    }

                    var request = new XMLHttpRequest();
                    request.onreadystatechange = function() {
                      if (request.readyState === XMLHttpRequest.DONE) {
                        if (request.status === 200) {
                          lucid.kissMetrics.recordEvent("Bounce registered");
                          var response = JSON.parse(request.responseText);
                          var queryString = bounceDetectionContent.dataset.queryString || '';
                          window.location = response.redirect + queryString;

                        } else {
                          window.location = bounceDetectionContent.dataset.redirect;
                        }
                      }
                    }

                    request.open('POST','/' + Drupal.settings.prefix + 'users/register/emailOnly', true);
                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                    request.send(JSON.stringify(emailOnlyData));
                });
            },
            cookieLife: 3,
            storeName: 'exit-intent-marketing'
        });
    }
})();
