MktoForm.extraStyles.push('https://d2slcw3kip6qmk.cloudfront.net/marketing/marketo/marketo-forms-classic-1.0.6.css');
MktoForm.forcedModalOptions['twoColumns'] = true;
MktoForm.forcedModalOptions['buttonAlign'] = 'center';
MktoForm.forcedOptions['terms'] = Drupal.settings.mktoTerms;
MktoForm.forcedOptions['failHtml'] = "<div style='padding:30px;background-color:white;border-radius:3px;max-width:450px;'><h3 style='margin-top:0;'>This Marketo form could not be loaded</h3><p>If you are using any ad blockers, please verify that this domain is trusted.</p><p>If this problem persists, please contact us at support@lucidchart.com.</p></div>";

MktoForm.forcedOptions['onSuccess'] = function(values) {
    var formId = values.formid;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'mktoFormSubmit',
        'marketo_formId': formId
    });
}

MktoForm.forcedModalOptions['onModalOpen'] = function() {
    var enterpriseForms = ['1055', '1309', '1126', '1128', '1127', '1120'];

    if (enterpriseForms.indexOf(this.id) > -1 ) {
        setCookie('opened_enterprise_form', 'true', 30);
    }

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function() {
  var didInit = false;
  function initMunchkin() {
    if(didInit === false) {
      didInit = true;
      Munchkin.init('805-PTZ-019');
    }
  }
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//munchkin.marketo.net/munchkin.js';
  s.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      initMunchkin();
    }
  };
  s.onload = initMunchkin;
  document.getElementsByTagName('head')[0].appendChild(s);
})();