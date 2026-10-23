import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import FOOT
HEAD = {
    'title': 'LHDN 电子发票 MSIC 代码查询 | SteadyDevs',
    'description': '按代码或业务活动，查询 LHDN 电子发票接受的全部 1,175 个 MSIC 代码。免费，数据来自 LHDN 官方列表（2026 年 10 月）。',
}
ATTR = {'e.g. restaurant, software, 47111': '例如：restaurant、software、47111'}
SECTIONS = ['农业、林业和渔业', '采矿和采石', '制造业', '电力、燃气、蒸汽和空调供应', '供水；污水处理、废物管理和修复活动',
    '建筑业', '批发和零售贸易；汽车和摩托车维修', '运输和仓储', '住宿和餐饮服务', '信息和通信', '金融和保险/保险（Takaful）活动',
    '房地产活动', '专业、科学和技术活动', '行政和支援服务活动', '公共行政和国防；强制性社会保障', '教育', '人类健康和社会工作活动',
    '艺术、娱乐和休闲', '其他服务活动', '家庭作为雇主的活动', '域外组织和机构的活动']
FAQ = [
 ('What is an MSIC code?', '什么是 MSIC 代码？',
  'The Malaysia Standard Industrial Classification code: five digits describing a business activity. LHDN requires the seller\'s MSIC code on every e-invoice, and it must be one of the codes on LHDN\'s own list, which is what this page shows.',
  'MSIC 即马来西亚标准行业分类代码，用五位数字描述一项业务活动。LHDN 要求每张电子发票都填写卖家的 MSIC 代码，而且必须是 LHDN 自己列表中的代码，也就是本页列出的代码。'),
 ('Where do I find my business\'s MSIC code?', '在哪里可以找到我企业的 MSIC 代码？',
  'It is usually in your SSM registration details and in what you declared to LHDN. If you are not sure which applies, search this page for your main activity and confirm with your tax agent.',
  '通常可以在您的 SSM 注册资料以及向 LHDN 申报的资料中找到。如果不确定，可以在本页搜索您的主要业务活动，再向您的税务代理确认。'),
 ('Which code should I use if my business does several things?', '如果我的企业经营多项业务，该用哪个代码？',
  'Use the code that describes the activity you mainly carry on. Your tax agent can confirm the right one for your registration.',
  '使用描述您主要业务活动的代码。您的税务代理可以确认哪个代码适合您的注册资料。'),
 ('Why was my e-invoice rejected for its MSIC code?', '为什么我的电子发票因 MSIC 代码被拒绝？',
  'Usually because the code is not on LHDN\'s list (some older lists and software contain codes LHDN does not accept) or the description does not match the code. Every code on this page is one LHDN accepts.',
  '通常是因为该代码不在 LHDN 的列表中（一些旧列表和软件包含 LHDN 不接受的代码），或描述与代码不符。本页的每个代码都是 LHDN 接受的。'),
]
B = {
 'b0': '跳至内容',
 'b1': '免费工具 · LHDN 电子发票',
 'b2': 'MSIC 代码查询',
 'b3': '每张电子发票都必须填写卖家的五位数 MSIC 代码，而 LHDN 只接受其官方列表中的代码。您可以按代码或业务活动搜索全部 1,175 个代码。活动说明按 LHDN 的发布保留英文。',
 'b4': '搜索', 'b5': '类别', 'b6': '全部类别',
 'b28': '1,175 个代码', 'b29': '代码', 'b30': '业务活动', 'b31': '类别',
 'b3557': '点击代码即可复制。来源：<a href="https://sdk.myinvois.hasil.gov.my/codes/msic-codes/">LHDN MyInvois SDK，MSIC 子类别代码</a>，于 2026 年 10 月 22 日获取。',
 'b3558': '<span class="f-callout__label">在送达 LHDN 之前就检查</span> SteadyDevs 电子发票平台会在发票发送前，拒绝任何不在此列表中的 MSIC 代码，并检查 LHDN 的其他规则。<a href="einvoice.html">了解电子发票平台 →</a>还不确定是否需要开电子发票？<a href="e-invoice-checker.html">三个问题帮您确认 →</a>',
 'b3559': '常见问题',
}
for i, s in enumerate(SECTIONS):
    B[f'b{7 + i}'] = f'{chr(65 + i)} · {s}'
for i, (_, q, _, a) in enumerate(FAQ):
    B[f'b{3560 + 2 * i}'] = q; B[f'b{3561 + 2 * i}'] = a
for i, v in enumerate(FOOT['zh']):
    B[f'b{3568 + i if i < 5 else 3569 + i}'] = v
SCRIPT = {"shown.toLocaleString() + (shown === 1 ? ' code' : ' codes')": "shown.toLocaleString() + ' 个代码'", "'Copied'": "'已复制'"}
for en_q, q, en_a, a in FAQ:
    SCRIPT[en_q] = q
    SCRIPT[en_a] = a
