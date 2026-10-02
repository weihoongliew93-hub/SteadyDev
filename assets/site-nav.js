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
  // Pages on the new design set <html data-design="f"> and load assets/f.css.
  var isF = document.documentElement.getAttribute('data-design') === 'f';

  // Which top-level nav item should be highlighted for the current page.
  var active = (function () {
    if (inBlog) return 'blog';
    if (file === '' || file === 'index.html') return 'home';
    if (file === 'about.html') return 'about';
    if (file === 'solutions.html' || file === 'pricing-terms.html' || file.indexOf('packages') === 0) return 'solutions';
    if (file === 'einvoice.html') return isF ? 'einvoice' : 'products';
    if (file === 'venue-booking.html') return isF ? 'venue' : 'products';
    if (file === 'portfolio.html' || file.indexOf('case-') === 0) return 'portfolio';
    if (file === 'contact.html') return 'contact';
    if (file === 'my-account.html') return 'account';
    return '';
  })();

  function link(href, label, key) {
    return '<a href="' + base + href + '"' + (active === key ? ' class="active"' : '') + '>' + label + '</a>';
  }

  function mount(markup) {
    var el = document.getElementById('sd-site-nav');
    if (el) {
      el.outerHTML = markup;
    } else {
      document.body.insertAdjacentHTML('afterbegin', markup);
    }
  }

  // ---- Design F header (styles live in assets/f.css) ----
  if (isF) {
    var fLink = function (href, label, key) {
      return '<a href="' + base + href + '"' + (active === key ? ' aria-current="page"' : '') + '>' + label + '</a>';
    };
    var icon = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
    };
    mount(
      '<header class="fh" id="fh">' +
        '<div class="fh__inner">' +
          '<a href="' + base + 'index.html" class="fh__logo"><svg class="fh__mark" viewBox="1 5 23 30" aria-hidden="true" focusable="false"><rect class="sd-b1" x="2" y="24" width="10" height="10" rx="2"/><rect class="sd-b2" x="13" y="18" width="10" height="16" rx="2"/><rect class="sd-b3" x="2" y="12" width="10" height="10" rx="2"/><rect class="sd-b4" x="13" y="6" width="10" height="10" rx="2"/></svg>SteadyDevs</a>' +
          '<nav class="fh__nav" id="fhNav" aria-label="Main">' +
            fLink('solutions.html', 'Engineering', 'solutions') +
            fLink('einvoice.html', 'EInvoice', 'einvoice') +
            fLink('venue-booking.html', 'Venue Booking', 'venue') +
            fLink('portfolio.html', 'Case studies', 'portfolio') +
            fLink('blog/index.html', 'Blog', 'blog') +
            fLink('about.html', 'About', 'about') +
            '<a href="' + base + 'contact.html" class="f-btn f-btn--primary fh__cta-mobile">Book a consultation</a>' +
          '</nav>' +
          '<div class="fh__tools">' +
            '<button type="button" class="fh__icon" id="fhTheme" aria-label="Switch to light theme">' +
              '<span class="fh__moon">' + icon('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>') + '</span>' +
              '<span class="fh__sun">' + icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>') + '</span>' +
            '</button>' +
            '<a href="' + base + 'my-account.html" class="fh__icon" aria-label="My account">' + icon('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>') + '</a>' +
            '<a href="' + base + 'contact.html" class="f-btn f-btn--primary fh__cta fh__cta-desktop">Book a consultation</a>' +
            '<button type="button" class="fh__icon fh__menu" id="fhMenu" aria-label="Open menu" aria-expanded="false" aria-controls="fhNav">' + icon('<path d="M4 7h16M4 12h16M4 17h16"/>') + '</button>' +
          '</div>' +
        '</div>' +
      '</header>'
    );

    var root = document.documentElement;
    var themeBtn = document.getElementById('fhTheme');
    var syncThemeLabel = function () {
      var light = root.getAttribute('data-theme') === 'light';
      themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    };
    syncThemeLabel();
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('sd-theme', next); } catch (e) { /* storage blocked: theme still switches */ }
      syncThemeLabel();
    });

    var header = document.getElementById('fh');
    var menuBtn = document.getElementById('fhMenu');
    menuBtn.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    return;
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
            '<a href="' + base + 'einvoice.html">E-Invoice Platform</a>' +
            '<a href="' + base + 'venue-booking.html">SteadyDevs Venue Booking — WordPress Plugin</a>' +
          '</div>' +
        '</div>' +
        link('portfolio.html', 'Portfolio', 'portfolio') +
        link('blog/index.html', 'Blog', 'blog') +
        link('contact.html', 'Contact', 'contact') +
        '<a href="' + base + 'my-account.html" class="nav-account' + (active === 'account' ? ' active' : '') + '" aria-label="My account" title="My account">👤<span class="nav-account-label"> Account</span></a>' +
        '<a href="' + base + 'contact.html" class="nav-cta">Book Free Assessment</a>' +
      '</nav>' +
    '</div></header>';

  mount(html);
})();
