import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import FOOT
HEAD = {
    'title': '马来西亚电子发票罚款计算器（LHDN）| SteadyDevs',
    'description': '算一算没有向 LHDN 开立电子发票，法律允许的罚款范围（每张 RM200 至 RM20,000），以及照规定开立需要多少费用。免费。',
}
FAQ = [
 ('What is the penalty for not issuing an e-invoice in Malaysia?',
  '在马来西亚不开电子发票有什么罚则？',
  'It is an offence under section 120(1)(d) of the Income Tax Act 1967: a fine of RM200 to RM20,000, up to 6 months\' imprisonment, or both, for each non-compliance.',
  '这是《1967 年所得税法令》第 120(1)(d) 条下的罪行：每一次违规可被罚款 RM200 至 RM20,000，或监禁最多 6 个月，或两者兼施。'),
 ('Is the fine charged per invoice?',
  '罚款是按每张发票计算吗？',
  'LHDN\'s FAQ says the penalty applies for each non-compliance. It hasn\'t published how it counts them, so this calculator treats every invoice not issued as one. That shows the size of the exposure rather than a likely bill.',
  'LHDN 常见问题说明，罚款按每一次违规计算，但 LHDN 尚未公布实际如何计算次数，因此本计算器把每一张没有开立的发票算作一次。结果反映的是风险规模，而不是可能收到的罚单。'),
 ('Can I be fined during the relaxation period?',
  '宽松期内会被罚款吗？',
  'Businesses whose e-invoicing started on 1 January or 1 July 2026 won\'t be prosecuted under section 120 until 31 December 2027, as long as they issue a consolidated e-invoice every month within 7 days after the month ends. A business issuing nothing at all is outside that condition.',
  '电子发票实施日期为 2026 年 1 月 1 日或 7 月 1 日的企业，只要每月在月底后 7 天内开立合并电子发票，在 2027 年 12 月 31 日前不会依第 120 条被起诉。完全没有开立的企业不符合这个条件。'),
 ('I have already missed some months. What now?',
  '我已经漏了几个月，怎么办？',
  'Start issuing e-invoices now, and put the missed months right through LHDN\'s Special Voluntary Disclosure Programme before 31 December 2027 by issuing the missing or corrected e-invoices. No registration is needed.',
  '现在就开始开立电子发票，并在 2027 年 12 月 31 日前通过 LHDN 的特别自愿披露计划，补开漏开或更正后的电子发票，补正漏掉的月份。无需登记。'),
 ('Are businesses under RM3 million fined?',
  '营业额低于 RM300 万的企业会被罚款吗？',
  'Not if they qualify for the exemption. LHDN takes no e-invoice compliance action against exempt businesses. Use our checker to see whether you are exempt.',
  '如果符合豁免条件就不会。LHDN 不会对获豁免的企业采取电子发票合规行动。可以用我们的自查工具确认您是否获得豁免。'),
]
B = {
 'b0': '跳到内容',
 'b1': '免费工具 · LHDN 电子发票',
 'b2': '电子发票罚款计算器',
 'b3': '在必须开立电子发票时没有开立是一项罪行，按每一次违规计算。输入您可能漏开的数量，看看法律允许的罚款范围，以及照规定开立需要多少费用。',
 'b4': '每月应开立为电子发票的发票数量',
 'b5': '每一张您须以电子发票形式开立的发票、贷记单或自开发票。',
 'b6': '没有开立电子发票的月数',
 'b7': '从您必须开始的日期算起。不确定？<a href="e-invoice-checker.html">查一查您的日期</a>。',
 'b8': '查一查您的日期',
 'b9': '如果全部没有开立',
 'b10': '罚款 RM <span data-o="min"></span> 至 RM <span data-o="max"></span>',
 'b11': '即 <span data-o="count"></span> 张漏开的电子发票，每张 RM200 至 RM20,000。法庭还可判处最多 6 个月监禁，并在此范围内决定罚款金额。',
 'b12': '通过 SteadyDevs 开立这些发票，<span data-o="plan"></span> 配套<strong>每月 RM <span data-o="cost"></span></strong>。',
 'b13': '每月超过 20,000 张发票，请<a href="contact.html">联系我们</a>了解定制配套。',
 'b14': '<a href="einvoice.html">了解电子发票平台 →</a>',
 'b15': '计算方式：LHDN 常见问题说明，罚款按每一次违规计算，因此本计算器把每一张没有开立的发票算作一次。LHDN 尚未公布实际如何计算次数，请把结果视为风险规模，而不是可能收到的罚单。并非法律建议。已于 2026 年 10 月 23 日对照 <a href="https://www.hasil.gov.my/media/0xqitc2t/lhdnm-e-invoice-general-faqs.pdf">LHDN 电子发票常见问题（2026 年 9 月 4 日更新）</a>核对。',
 'b16': '先别担心',
 'b17': '第四阶段开立合并电子发票，可以到 2028 年',
 'b18': '电子发票实施日期为 2026 年 1 月 1 日或 7 月 1 日的企业，处于至 2027 年 12 月 31 日的宽松期。每月为所有销售开立一张合并电子发票，在月底后 7 天内提交，LHDN 就不会依第 120 条起诉。',
 'b19': '漏掉的月份仍可补正',
 'b20': 'LHDN 的特别自愿披露计划开放至 2027 年 12 月 31 日。您只需补开漏开或更正后的电子发票，无需登记。LHDN 电子发票部门表示，对于公开透明、没有蓄意操纵的披露，将全面豁免罚款（<a href="https://www.nst.com.my/amp/business/corporate/2026/10/1560756/lhdn-receives-over-209-billion-e-invoices-uses-data-analytics">Bernama，2026 年 10 月 21 日</a>）。',
 'b21': '常见问题',
 'b32': '<span class="f-callout__label">更多免费工具</span>还不确定是否需要开电子发票？<a href="e-invoice-checker.html">三个问题帮您确认 →</a>需要卖方的 MSIC 代码？<a href="msic-code-lookup.html">在这里查找 →</a>',
}
for i, (_, q, _, a) in enumerate(FAQ):
    B[f'b{22 + 2 * i}'] = q; B[f'b{23 + 2 * i}'] = a
# This footer has a SteadyPost link (b38) that the shared footer lacks; the name stays as it is.
for i, v in enumerate(FOOT['zh']):
    B[f'b{33 + i if i < 5 else 34 + i}'] = v
SCRIPT = {}
for en_q, q, en_a, a in FAQ:
    SCRIPT[en_q] = q
    SCRIPT[en_a] = a
