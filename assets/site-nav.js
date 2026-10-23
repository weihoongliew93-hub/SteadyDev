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
  // Translated pages live one folder down, in /ms/ (Bahasa Malaysia) and /zh/ (Chinese).
  var langMatch = path.match(/\/(ms|zh)\//);
  var lang = langMatch ? langMatch[1] : 'en';
  var base = (inBlog || lang !== 'en') ? '../' : '';
  var file = (path.split('/').pop() || 'index.html').toLowerCase();

  // Pages that exist in every language. A nav link to one of these goes to the visitor's
  // language; every other link goes to the English page. Add a page here once its /ms/ and
  // /zh/ copies are published.
  var TRANSLATED = ['index.html', 'einvoice.html', 'contact.html', 'msic-code-lookup.html', 'solutions.html',
    'pricing-terms.html', 'about.html', 'portfolio.html', 'cloud-cost-audit.html', 'venue-booking.html', 'steadypost.html',
    'e-invoice-checker.html'];
  var T = {
    en: { engineering: 'Engineering', plugins: 'WordPress Plugins', tools: 'Free tools', cases: 'Case studies', blog: 'Blog', about: 'About', cta: 'Book a consultation', language: 'Language',
          langNote: 'This page is in English only. Other languages open their home page.' },
    ms: { engineering: 'Kejuruteraan', plugins: 'Pemalam WordPress', tools: 'Alat percuma', cases: 'Kajian kes', blog: 'Blog', about: 'Tentang kami', cta: 'Tempah konsultasi', language: 'Bahasa',
          langNote: 'Halaman ini dalam Bahasa Inggeris sahaja. Bahasa lain membuka laman utamanya.' },
    zh: { engineering: '工程服务', plugins: 'WordPress 插件', tools: '免费工具', cases: '案例研究', blog: '博客', about: '关于我们', cta: '预约咨询', language: '语言',
          langNote: '此页面仅有英文版。选择其他语言将打开该语言的首页。' }
  }[lang];
  // Link to a page in the current language when it exists in that language.
  var page = function (href) {
    var f = href.split('#')[0].split('?')[0];
    return lang !== 'en' && TRANSLATED.indexOf(f) !== -1 ? href : base + href;
  };
  // Pages on the new design set <html data-design="f"> and load assets/f.css.
  var isF = document.documentElement.getAttribute('data-design') === 'f';

  // WordPress plugins, listed under one "WordPress Plugins" menu. A new plugin is one line here: the
  // menu, the mobile list, the highlight for its page and the older design's Products menu
  // all follow. `file` is the page; its URL may also be served without ".html".
  var PLUGINS = [
    { file: 'venue-booking.html', name: 'Venue Booking', tagline: {
        en: 'Bookings, approvals and reminders for courts, rooms and studios',
        ms: 'Tempahan, kelulusan dan peringatan untuk gelanggang, bilik dan studio',
        zh: '球场、房间和工作室的预约、审批与提醒' } },
    { file: 'steadypost.html', name: 'SteadyPost', tagline: {
        en: 'Bulk-import posts from Excel or CSV \u2014 free',
        ms: 'Import siaran secara pukal daripada Excel atau CSV \u2014 percuma',
        zh: '从 Excel 或 CSV 批量导入文章，免费' } }
  ];
  // The EInvoice menu: the platform, then the free tools that lead to it. A new tool is one
  // line here; the footer's "Free tools" column is static HTML on every page and needs it too.
  var EINVOICE = { file: 'einvoice.html', name: { en: 'EInvoice Platform', ms: 'Platform EInvoice', zh: 'EInvoice 平台' }, tagline: {
      en: 'Send e-invoices to LHDN from the system you already use',
      ms: 'Hantar e-Invois ke LHDN daripada sistem yang anda gunakan sekarang',
      zh: '直接从您现有的系统把电子发票提交给 LHDN' } };
  var TOOLS = [
    { file: 'e-invoice-checker.html', name: { en: 'Do I need to e-invoice?', ms: 'Perlukah saya e-Invois?', zh: '我需要开电子发票吗？' }, tagline: {
        en: 'Your start date and the RM3 million exemption, in three questions',
        ms: 'Tarikh mula dan pengecualian RM3 juta, dalam tiga soalan',
        zh: '三个问题，查清开始日期与 RM300 万豁免' } },
    { file: 'e-invoice-penalty-calculator.html', name: { en: 'Penalty calculator', ms: 'Kalkulator penalti', zh: '罚款计算器' }, tagline: {
        en: 'The fines the law allows for e-invoices not issued',
        ms: 'Denda yang dibenarkan undang-undang bagi e-Invois yang tidak dikeluarkan',
        zh: '漏开电子发票，法律允许的罚款范围' } },
    { file: 'msic-code-lookup.html', name: { en: 'MSIC code lookup', ms: 'Carian kod MSIC', zh: 'MSIC 代码查询' }, tagline: {
        en: 'All 1,175 codes LHDN accepts on e-invoices',
        ms: 'Kesemua 1,175 kod yang diterima LHDN pada e-Invois',
        zh: 'LHDN 接受的全部 1,175 个电子发票代码' } }
  ];
  var pageFile = /\.html$/.test(file) ? file : file + '.html';
  var currentPlugin = PLUGINS.filter(function (p) { return p.file === pageFile; })[0];
  var currentTool = TOOLS.filter(function (t) { return t.file === pageFile; })[0];

  // Which top-level nav item should be highlighted for the current page.
  var active = (function () {
    if (inBlog) return 'blog';
    if (file === '' || file === 'index.html') return 'home';
    if (file === 'about.html') return 'about';
    if (file === 'solutions.html' || file === 'pricing-terms.html' || file === 'cloud-cost-audit.html' || file.indexOf('packages') === 0) return 'solutions';
    if (file === 'einvoice.html' || currentTool) return isF ? 'einvoice' : 'products';
    if (currentPlugin) return isF ? 'plugins' : 'products';
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
      return '<a href="' + page(href) + '"' + (active === key ? ' aria-current="page"' : '') + '>' + label + '</a>';
    };
    // Language menu, on every page. It is built from TRANSLATED rather than the page's hreflang
    // tags so that English pages can offer it before the translations are indexable: hreflang
    // pointing at noindex drafts is an error to search engines, a menu link is not. A page
    // with no translation sends the visitor to the home page in that language, and says so.
    var LANGS = [['en', 'EN', 'English'], ['ms', 'BM', 'Bahasa Malaysia'], ['zh', '中文', '中文（简体）']];
    var hasCopy = !inBlog && TRANSLATED.indexOf(pageFile) !== -1;
    var langSwitch =
      '<div class="fh__lang" id="fhLang">' +
        '<button type="button" class="fh__lang-btn" id="fhLangBtn" aria-expanded="false" aria-controls="fhLangPanel" aria-label="' + T.language + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>' +
          '<span>' + LANGS.filter(function (l) { return l[0] === lang; })[0][1] + '</span>' +
          '<svg class="fh__caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<div class="fh__lang-panel" id="fhLangPanel">' +
          LANGS.map(function (l) {
            var code = l[0] === 'zh' ? 'zh-Hans' : l[0];
            var href = l[0] === lang ? '#' : base + (l[0] === 'en' ? '' : l[0] + '/') + (hasCopy ? pageFile : 'index.html');
            return '<a href="' + href + '" hreflang="' + code + '" lang="' + code + '"' +
              (l[0] === lang ? ' aria-current="true"' : '') + '>' + l[2] + '</a>';
          }).join('') +
          (hasCopy ? '' : '<p class="fh__lang-note">' + T.langNote + '</p>') +
        '</div>' +
      '</div>';
    var icon = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
    };
    // A button, not a link: it opens the list, it does not go anywhere. Opens on click (and
    // keyboard), closes on Escape or a click elsewhere; on phones the list sits open inside
    // the menu, so nothing has to be tapped twice.
    var caret = '<svg class="fh__caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var item = function (href, name, desc, current) {
      return '<a href="' + href + '"' + (current ? ' aria-current="page"' : '') + '>' +
        '<span class="fh__panel-name">' + name + '</span><span class="fh__panel-desc">' + desc + '</span></a>';
    };
    var group = function (id, label, key, body) {
      return '<div class="fh__group' + (active === key ? ' is-current' : '') + '">' +
        '<button type="button" class="fh__group-btn" aria-expanded="false" aria-controls="' + id + '">' + label + caret + '</button>' +
        '<div class="fh__panel" id="' + id + '">' + body + '</div>' +
      '</div>';
    };
    var pluginsMenu = group('fhPlugins', T.plugins, 'plugins', PLUGINS.map(function (p) {
      return item(base + p.file, p.name, p.tagline[lang], p === currentPlugin);
    }).join(''));
    var einvoiceMenu = group('fhEinvoice', 'EInvoice', 'einvoice',
      item(page(EINVOICE.file), EINVOICE.name[lang], EINVOICE.tagline[lang], pageFile === EINVOICE.file) +
      '<p class="fh__panel-label">' + T.tools + '</p>' +
      TOOLS.map(function (t) { return item(page(t.file), t.name[lang], t.tagline[lang], t === currentTool); }).join(''));
    mount(
      '<header class="fh" id="fh">' +
        '<div class="fh__inner">' +
          '<a href="' + page('index.html') + '" class="fh__logo"><svg class="fh__mark" viewBox="1 5 23 30" aria-hidden="true" focusable="false"><rect class="sd-b1" x="2" y="24" width="10" height="10" rx="2"/><rect class="sd-b2" x="13" y="18" width="10" height="16" rx="2"/><rect class="sd-b3" x="2" y="12" width="10" height="10" rx="2"/><rect class="sd-b4" x="13" y="6" width="10" height="10" rx="2"/></svg>SteadyDevs</a>' +
          '<nav class="fh__nav" id="fhNav" aria-label="Main">' +
            fLink('solutions.html', T.engineering, 'solutions') +
            einvoiceMenu +
            pluginsMenu +
            fLink('portfolio.html', T.cases, 'portfolio') +
            fLink('blog/index.html', T.blog, 'blog') +
            fLink('about.html', T.about, 'about') +
            '<a href="' + page('contact.html') + '" class="f-btn f-btn--primary fh__cta-mobile">' + T.cta + '</a>' +
          '</nav>' +
          '<div class="fh__tools">' + langSwitch +
            '<button type="button" class="fh__icon" id="fhTheme" aria-label="Switch to light theme">' +
              '<span class="fh__moon">' + icon('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>') + '</span>' +
              '<span class="fh__sun">' + icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>') + '</span>' +
            '</button>' +
            '<a href="' + base + 'my-account.html" class="fh__icon" aria-label="My account">' + icon('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>') + '</a>' +
            '<a href="' + page('contact.html') + '" class="f-btn f-btn--primary fh__cta fh__cta-desktop">' + T.cta + '</a>' +
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

    // Every menu (EInvoice, plugins, language) opens on click, closes on Escape or a click
    // elsewhere, and opening one closes the others.
    var menus = Array.prototype.map.call(document.querySelectorAll('.fh__group'), function (g) {
      return [g, g.querySelector('.fh__group-btn')];
    }).concat([[document.getElementById('fhLang'), document.getElementById('fhLangBtn')]]);
    var setMenu = function (m, open) {
      m[0].classList.toggle('is-open', open);
      m[1].setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menus.forEach(function (m) {
      m[1].addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !m[0].classList.contains('is-open');
        menus.forEach(function (o) { setMenu(o, false); });
        setMenu(m, open);
      });
    });
    document.addEventListener('click', function (e) {
      menus.forEach(function (m) { if (!m[0].contains(e.target)) setMenu(m, false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      menus.forEach(function (m) { if (m[0].classList.contains('is-open')) { setMenu(m, false); m[1].focus(); } });
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
            TOOLS.map(function (t) { return '<a href="' + base + t.file + '">' + t.name.en + '</a>'; }).join('') +
            PLUGINS.map(function (p) {
              return '<a href="' + base + p.file + '">' + p.name + ' \u2014 WordPress plugin</a>'; // older design: English only
            }).join('') +
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
