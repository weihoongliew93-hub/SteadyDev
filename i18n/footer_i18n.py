# Footer and shared strings, by language. Each page module maps its own footer block ids.
FOOT = {
 'ms': ['Perisian dan kejuruteraan untuk sistem yang tidak mampu dihilangkan oleh perniagaan Malaysia.',
        'Tawaran', '<a href="solutions.html">Perkhidmatan kejuruteraan</a>', '<a href="einvoice.html">Platform EInvoice</a>',
        '<a href="venue-booking.html">Venue Booking</a>', 'Syarikat', '<a href="about.html">Tentang kami</a>',
        '<a href="portfolio.html">Kajian kes</a>', '<a href="blog/index.html">Blog</a>', '<a href="contact.html">Hubungi</a>',
        'Lagi', '<a href="pricing-terms.html">Terma harga</a>', '<a href="my-account.html">Akaun saya</a>'],
 'zh': ['为马来西亚企业承受不起损失的系统，提供软件与工程服务。',
        '产品与服务', '<a href="solutions.html">工程服务</a>', '<a href="einvoice.html">EInvoice 平台</a>',
        '<a href="venue-booking.html">Venue Booking</a>', '公司', '<a href="about.html">关于我们</a>',
        '<a href="portfolio.html">案例研究</a>', '<a href="blog/index.html">博客</a>', '<a href="contact.html">联系我们</a>',
        '更多', '<a href="pricing-terms.html">价格条款</a>', '<a href="my-account.html">我的账户</a>'],
}

def footer(lang, first_id):
    return {f'b{first_id + i}': v for i, v in enumerate(FOOT[lang])}
