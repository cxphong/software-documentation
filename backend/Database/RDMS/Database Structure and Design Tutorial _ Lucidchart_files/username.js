document.addEventListener("DOMContentLoaded", function() {
    function getCookie(name) {
        var result = null;
        document.cookie.split(/;\s*/).some(function(cookie) {
            var index = cookie.indexOf('=');
            if (cookie.slice(0, index) === name) {
                result = cookie.slice(index + 1);
                return true;
            }
        });
        return result;
    }
    var username = getCookie('username');
    if (username) {
        username = username.replace(/^"(.*)"$/, '$1');
        Array.prototype.forEach.call(document.getElementsByClassName('username'), function(element) {
            element.innerText = atob(username);
        });
        document.getElementById('user-logged-in').style.display = "inline-block";
    }
    else {
        document.getElementById('user-logged-out').style.display = "inline-block";
    }
    if (getCookie('showteam') === '1') {
        Array.prototype.forEach.call(document.getElementsByClassName('showteam'), function(element) {
            element.style.display = 'block';
        });
    }
});
