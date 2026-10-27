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
    en: { engineering: 'Engineering', plugins: 'WordPress Plugins', tools: 'Free tools', allTools: 'All free tools', cases: 'Case studies', blog: 'Blog', about: 'About', cta: 'Book a consultation', language: 'Language',
          langNote: 'This page is in English only. Other languages open their home page.' },
    ms: { engineering: 'Kejuruteraan', plugins: 'Pemalam WordPress', tools: 'Alat percuma', allTools: 'Semua alat percuma', cases: 'Kajian kes', blog: 'Blog', about: 'Tentang kami', cta: 'Tempah konsultasi', language: 'Bahasa',
          langNote: 'Halaman ini dalam Bahasa Inggeris sahaja. Bahasa lain membuka laman utamanya.' },
    zh: { engineering: '工程服务', plugins: 'WordPress 插件', tools: '免费工具', allTools: '全部免费工具', cases: '案例研究', blog: '博客', about: '关于我们', cta: '预约咨询', language: '语言',
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
        zh: '从 Excel 或 CSV 批量导入文章，免费' } },
    { file: 'upkeep-check.html', name: 'Upkeep Check', tagline: {
        en: 'Find closed, abandoned and outdated plugins — free',
        ms: 'Cari pemalam yang ditutup, terbiar dan lapuk — percuma',
        zh: '找出已下架、无人维护和过时的插件，免费' } }
  ];
  // The EInvoice menu: the platform, then the e-invoice tools.
  var EINVOICE = { file: 'einvoice.html', name: { en: 'EInvoice Platform', ms: 'Platform EInvoice', zh: 'EInvoice 平台' }, tagline: {
      en: 'Send e-invoices to LHDN from the system you already use',
      ms: 'Hantar e-Invois ke LHDN daripada sistem yang anda gunakan sekarang',
      zh: '直接从您现有的系统把电子发票提交给 LHDN' } };
  // Free tools, by topic. They make up the "Free tools" menu; the first group is also listed
  // under EInvoice. A new tool is one line here, plus a card on free-tools.html. The footer's
  // "Free tools" column is static HTML on every page and lists only a few, then the hub.
  var tool = function (file, en, ms, zh, ten, tms, tzh) { return { file: file, name: { en: en, ms: ms, zh: zh }, tagline: { en: ten, ms: tms, zh: tzh } }; };
  var TOOL_GROUPS = [
    { label: { en: 'e-Invoice', ms: 'e-Invois', zh: '电子发票' }, tools: [
      tool('e-invoice-checker.html', 'Do I need to e-invoice?', 'Perlukah saya e-Invois?', '我需要开电子发票吗？',
        'Your start date and the RM3 million exemption, in three questions', 'Tarikh mula dan pengecualian RM3 juta, dalam tiga soalan', '三个问题，查清开始日期与 RM300 万豁免'),
      tool('e-invoice-penalty-calculator.html', 'Penalty calculator', 'Kalkulator penalti', '罚款计算器',
        'The fines the law allows for e-invoices not issued', 'Denda yang dibenarkan undang-undang bagi e-Invois yang tidak dikeluarkan', '漏开电子发票，法律允许的罚款范围'),
      tool('e-invoice-tin-checker.html', 'TIN and field checker', 'Semakan TIN dan medan', 'TIN 与字段检查',
        'Catch the buyer details LHDN rejects, before you submit', 'Kesan butiran pembeli yang ditolak LHDN, sebelum dihantar', '提交前找出会被 LHDN 退回的买家资料'),
      tool('msic-code-lookup.html', 'MSIC code lookup', 'Carian kod MSIC', 'MSIC 代码查询',
        'All 1,175 codes LHDN accepts on e-invoices', 'Kesemua 1,175 kod yang diterima LHDN pada e-Invois', 'LHDN 接受的全部 1,175 个电子发票代码')
    ] },
    { label: { en: 'Business systems', ms: 'Sistem perniagaan', zh: '业务系统' }, tools: [
      tool('microsoft-end-of-support-lookup.html', 'Microsoft end-of-support lookup', 'Semakan tamat sokongan Microsoft', '微软支持终止日期查询',
        'Windows Server, SQL Server and .NET support dates', 'Tarikh sokongan Windows Server, SQL Server dan .NET', 'Windows Server、SQL Server 与 .NET 的支持日期'),
      tool('legacy-system-risk-scorecard.html', 'Legacy system risk scorecard', 'Kad skor risiko sistem lama', '旧系统风险评分',
        'Ten questions on how exposed your core system is', 'Sepuluh soalan tentang tahap risiko sistem teras anda', '十个问题，看看核心系统的风险有多高'),
      tool('downtime-cost-calculator.html', 'Downtime cost calculator', 'Kalkulator kos gangguan sistem', '停机成本计算器',
        'What an hour of your system being down costs', 'Kos setiap jam sistem anda tergendala', '系统停机一小时的损失'),
      tool('manual-invoicing-cost-calculator.html', 'Manual invoicing cost calculator', 'Kalkulator kos invois manual', '手工开票成本计算器',
        'Staff hours and money spent keying invoices by hand', 'Jam kerja dan kos menaip invois secara manual', '手工录入发票耗费的工时与成本')
    ] },
    { label: { en: 'WordPress', ms: 'WordPress', zh: 'WordPress' }, tools: [
      tool('wordpress-csv-import-checker.html', 'CSV import checker', 'Semakan import CSV', 'CSV 导入检查',
        'Check a CSV before importing posts with SteadyPost', 'Semak CSV sebelum mengimport siaran dengan SteadyPost', '用 SteadyPost 导入文章前先检查 CSV'),
      tool('venue-no-show-calculator.html', 'Venue no-show calculator', 'Kalkulator tidak hadir venue', '场地爽约损失计算器',
        'Revenue lost to no-shows at courts, rooms and studios', 'Hasil yang hilang akibat pelanggan tidak hadir di gelanggang, bilik dan studio', '球场、房间与工作室因爽约损失的收入')
    ] }
  ];
  var TOOLS = TOOL_GROUPS.reduce(function (all, g) { return all.concat(g.tools); }, []);
  var pageFile = /\.html$/.test(file) ? file : file + '.html';
  var currentPlugin = PLUGINS.filter(function (p) { return p.file === pageFile; })[0];
  var currentTool = TOOLS.filter(function (t) { return t.file === pageFile; })[0];

  // Which top-level nav item should be highlighted for the current page.
  var active = (function () {
    if (inBlog) return 'blog';
    if (file === '' || file === 'index.html') return 'home';
    if (file === 'about.html') return 'about';
    if (file === 'solutions.html' || file === 'pricing-terms.html' || file === 'cloud-cost-audit.html' || file.indexOf('packages') === 0) return 'solutions';
    if (file === 'einvoice.html') return isF ? 'einvoice' : 'products';
    if (currentTool || pageFile === 'free-tools.html') return 'tools';
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
      return '<div class="fh__group fh__group--' + key + (active === key ? ' is-current' : '') + '">' +
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
      TOOL_GROUPS[0].tools.map(function (t) { return item(page(t.file), t.name[lang], t.tagline[lang], t === currentTool); }).join(''));
    // Every tool, in its group; two columns on desktop. The hub page has them all with more detail.
    var toolsMenu = group('fhTools', T.tools, 'tools',
      '<div class="fh__panel-cols">' + TOOL_GROUPS.map(function (g) {
        return '<div><p class="fh__panel-label">' + g.label[lang] + '</p>' +
          g.tools.map(function (t) { return item(page(t.file), t.name[lang], t.tagline[lang], t === currentTool); }).join('') + '</div>';
      }).join('') + '</div>' +
      '<a class="fh__panel-all" href="' + page('free-tools.html') + '"' + (pageFile === 'free-tools.html' ? ' aria-current="page"' : '') + '>' + T.allTools + ' &rarr;</a>');
    mount(
      '<header class="fh" id="fh">' +
        '<div class="fh__inner">' +
          '<a href="' + page('index.html') + '" class="fh__logo"><svg class="fh__mark" viewBox="1 5 23 30" aria-hidden="true" focusable="false"><rect class="sd-b1" x="2" y="24" width="10" height="10" rx="2"/><rect class="sd-b2" x="13" y="18" width="10" height="16" rx="2"/><rect class="sd-b3" x="2" y="12" width="10" height="10" rx="2"/><rect class="sd-b4" x="13" y="6" width="10" height="10" rx="2"/></svg>SteadyDevs</a>' +
          '<nav class="fh__nav" id="fhNav" aria-label="Main">' +
            fLink('solutions.html', T.engineering, 'solutions') +
            einvoiceMenu +
            pluginsMenu +
            toolsMenu +
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

/*
 * Conversion events for Google Analytics. One delegated listener on every page that loads
 * this file, so a new button needs no tagging: what counts is where the link goes.
 * Mark these as key events in GA (Admin > Events) to see which pages lead to enquiries.
 */
(function () {
  function linkEvent(href) {
    if (/^mailto:/i.test(href)) return ['contact_email_click', { method: 'email' }];
    if (/^https:\/\/checkout\.freemius\.com\//i.test(href)) return ['checkout_click', { product: 'venue_booking' }];
    var plugin = href.match(/^https:\/\/wordpress\.org\/plugins\/([a-z0-9-]+)\/?$/i);
    if (plugin) return ['plugin_download_click', { product: plugin[1] }];
    var zip = href.match(/([a-z0-9-]+?)(?:-\d[\d.]*)?\.zip$/i);
    if (zip) return ['plugin_download_click', { product: zip[1] }];
    if (/(^|\/)contact\.html([?#]|$)/i.test(href)) return ['contact_cta_click', {}];
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || typeof gtag !== 'function') return;
    var ev = linkEvent(a.getAttribute('href'));
    if (!ev) return;
    ev[1].link_text = (a.textContent || '').trim().slice(0, 100);
    gtag('event', ev[0], ev[1]);
  }, true);
})();
