(function(){var n,e;self===parent?"yes"===function(n,e){var t;return(t=new RegExp("[?&]"+n+"=([^&#]*)").exec(window.location.href))&&t[1]||e||""}("p")?(window.document.documentElement.className="print",window.onload=function(){return window.print()}):(n="?t="+(e=location.pathname).substring(e.lastIndexOf("/")+1)+(location.hash?"&h="+location.hash.substring(1):""),self.location.replace("index.html"+n)):(window.addEventListener("message",function(n){switch(n.data||n){case"big":return document.documentElement.className="big";case"small":return document.documentElement.className="small"}}),parent.window.postMessage("getWidth","*"))}).call(this);