/*
 * SteadyDevs — shared site navigation.
 * Edit the nav in ONE place (here) and it updates across every page.
 *
 * How it works: each page has a `<div id="sd-site-nav"></div>` placeholder
 * followed by `<script src=".../assets/site-nav.js"></script>`. This script
 * runs synchronously at that point and replaces the placeholder with the
 * header markup BEFORE each page's own end-of-body script binds the menu,
 * so the existing toggle/dropdown handlers keep working untouched.
 *
 * Paths auto-adjust for pages inside /blog/ (they need a `../` prefix).
 */
(function () {
  var path = location.pathname;
  var inBlog = /\/blog\//.test(path);
  var base = inBlog ? '../' : '';
  var file = (path.split('/').pop() || 'index.html').toLowerCase();

  // Which top-level nav item should be highlighted for the current page.
  var active = (function () {
    if (inBlog) return 'blog';
    if (file === '' || file === 'index.html') return 'home';
    if (file === 'about.html') return 'about';
    if (file === 'solutions.html' || file === 'pricing-terms.html' || file.indexOf('packages') === 0) return 'solutions';
    if (file === 'einvoice.html' || file === 'steadybook.html') return 'products';
    if (file === 'portfolio.html' || file.indexOf('case-') === 0) return 'portfolio';
    if (file === 'contact.html') return 'contact';
    if (file === 'my-account.html') return 'account';
    return '';
  })();

  function link(href, label, key) {
    return '<a href="' + base + href + '"' + (active === key ? ' class="active"' : '') + '>' + label + '</a>';
  }

  // Self-contained styles for the Products dropdown toggle. The toggle is a
  // <span> (not a link) so it never navigates, and it opens on hover (desktop)
  // and on focus (mobile) with pure CSS — so it works on every page regardless
  // of that page's own inline scripts. Injected once.
  if (!document.getElementById('sd-nav-style')) {
    var css =
      "#mainNav .nav-toggle{color:#9CA3AF;margin-left:35px;font-weight:500;font-size:.95em;cursor:pointer;transition:color .2s ease;-webkit-user-select:none;user-select:none}" +
      "#mainNav .nav-toggle:hover,#mainNav .nav-toggle.active,.nav-dropdown:hover>.nav-toggle{color:#60A5FA}" +
      ".nav-dropdown>.nav-toggle::after{content:' \\25BE';font-size:.8em;margin-left:4px;display:inline-block;transition:transform .2s}" +
      ".nav-dropdown:hover>.nav-toggle::after{transform:rotate(-180deg)}" +
      "#mainNav .nav-account{color:#9CA3AF;margin-left:26px;font-size:1.1em;line-height:1;display:inline-flex;align-items:center;opacity:.85;transition:opacity .2s ease}" +
      "#mainNav .nav-account:hover,#mainNav .nav-account.active{opacity:1}" +
      "#mainNav .nav-account-label{display:none}" +
      "@media (max-width:768px){#mainNav .nav-toggle{display:block;margin:0;padding:18px 20px;border-bottom:1px solid #1F2937}.nav-dropdown>.nav-toggle::after{float:right}.nav-dropdown:focus-within .dropdown-content{display:block}#mainNav .nav-account{margin:0;padding:18px 20px;border-bottom:1px solid #1F2937;display:flex;font-size:1em;opacity:1}#mainNav .nav-account-label{display:inline}}";
    var style = document.createElement('style');
    style.id = 'sd-nav-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  var html =
    '<div class="nav-overlay" id="navOverlay"></div>' +
    '<header><div class="header-content">' +
      '<a href="' + base + 'index.html" class="logo-link">' +
        '<img src="' + base + 'images/SteadyDevsLogo.svg" alt="SteadyDevs - Legacy .NET System Specialist Malaysia" class="site-logo">' +
      '</a>' +
      '<button class="menu-toggle" id="menuToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>' +
      '<nav id="mainNav">' +
        link('index.html', 'Home', 'home') +
        link('about.html', 'About', 'about') +
        link('solutions.html', 'Solutions', 'solutions') +
        '<div class="nav-dropdown">' +
          '<span class="nav-toggle' + (active === 'products' ? ' active' : '') + '" tabindex="0" role="button" aria-haspopup="true">Products</span>' +
          '<div class="dropdown-content">' +
            // E-Invoice hidden from the nav for now — uncomment the next line to restore it.
            // '<a href="' + base + 'einvoice.html">E-Invoice Platform</a>' +
            '<a href="' + base + 'steadybook.html">SteadyBook — Booking Plugin</a>' +
          '</div>' +
        '</div>' +
        link('portfolio.html', 'Portfolio', 'portfolio') +
        link('blog/index.html', 'Blog', 'blog') +
        link('contact.html', 'Contact', 'contact') +
        '<a href="' + base + 'my-account.html" class="nav-account' + (active === 'account' ? ' active' : '') + '" aria-label="My account" title="My account">👤<span class="nav-account-label"> Account</span></a>' +
        '<a href="' + base + 'contact.html" class="nav-cta">Book Free Assessment</a>' +
      '</nav>' +
    '</div></header>';

  var mount = document.getElementById('sd-site-nav');
  if (mount) {
    mount.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }
})();
