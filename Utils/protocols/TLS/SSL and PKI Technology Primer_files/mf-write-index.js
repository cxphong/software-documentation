(function(){var i,n,a;n=!(i="undefined"!=typeof CONFIG)||CONFIG.index,a=!i||CONFIG.search,document.write('<header id="header">\n  <div id="hdr-company">\n    <a target="_blank" href="https://www.microfocus.com/">\n    </a>\n  </div>\n  <div id="hdr-nav">\n    <div id="tabs">'),document.write('<a id="toctab" class="tab str-contents" href="#" data-type="toc"></a>'),n&&document.write('<a id="termstab" class="tab str-terms" href="#" data-type="terms"></a>'),a&&document.write('<a id="searchtab" class="tab str-search" href="#" data-type="search"></a>'),document.write('<a id="topictab" class="tab str-topic selected" href="#" data-type="topic"></a>'),document.write('  </div>\n</div>\n</header>\n<main id="main">\n<div id="containers">\n  <div id="sidediv">\n    <div id="tocdiv" class="container">\n      <div class="iframe-holder">\n        <iframe id="tocwin" name="tocwin" src="mf-toc.html" title="TOC"></iframe>\n      </div>\n    </div>'),n&&document.write('<div id="termsdiv" class="container">\n  <div class="iframe-holder">\n    <iframe id="termswin" name="termswin" src="about:blank" title="Index Terms"></iframe>\n  </div>\n</div>'),a&&document.write('<div id="searchdiv" class="container">\n  <div class="iframe-holder">\n    <iframe id="searchwin" name="searchwin" src="about:blank" title="Search"></iframe>\n  </div>\n</div>'),document.write('  </div>\n  <div id="topicdiv" class="container selected">\n    <div id="topic-options">\n      <div id="options">\n        <span id="prev" class="btn"></span>\n        <span id="next" class="btn"></span>\n        <span id="home" class="btn"></span>\n        <span id="print" class="btn"></span>\n        <span id="pdf" class="btn"></span>\n        <span id="nav-toggle" class="btn open"></span>\n      </div>\n    </div>\n    <div id="topicholder" class="iframe-holder">\n      <iframe id="topicwin" name="topicwin" src="about:blank" title="Topic"></iframe>\n    </div>\n  </div>\n</div>\n</main>\n<footer></footer>')}).call(this);