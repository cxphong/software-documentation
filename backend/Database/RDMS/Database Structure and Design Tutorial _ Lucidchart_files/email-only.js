(function() {
    var emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    function submitEmailOnly(e) {
        // use preventDefault() to stop the forms default submit behavior
        e.preventDefault();
        var form = e.target;
        var button = form.querySelector('button');
        var emailInput = form.querySelector('input');
        var email = emailInput.value.trim();
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

        if (email.length === 0) {
            emailInput.setAttribute("style", "border: #ED6058 1px solid !important; background-color: #fef8f6 !important;");
        }

        if (email.match(emailReg)) {
            button.textContent = button.dataset.register;
            emailInput.disabled = true;

            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        var response = JSON.parse(request.responseText);
                        var queryString = form.dataset.queryString || '';

                        window.location = response.redirect + queryString;

                    } else {
                        window.location = button.dataset.redirect;
                    }
                }
            };

            request.open('POST', '/' + Drupal.settings.prefix + 'users/register/emailOnly', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.send(JSON.stringify(emailOnlyData));
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        var forms = document.querySelectorAll('form.email-only-form');
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener('submit', submitEmailOnly);
        }
    });
})();
