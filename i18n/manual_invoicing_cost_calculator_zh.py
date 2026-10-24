# Generated from manual-invoicing-cost-calculator.html; edit the strings here. Block ids follow page order (i18n/README.md).
HEAD = {'title': '手动开票成本计算器（马来西亚）| SteadyDevs', 'description': '算出您的企业每月和每年在手动录入、检查、发送和更正发票上花费的员工工时和令吉。免费。'}
ATTR = {}
B = {
 'b0': '跳到内容',
 'b1': '免费工具 · 开票',
 'b2': '手动开票成本计算器',
 'b3': '“只要几分钟”累积起来就不少。输入您的企业目前的开票方式，看看每月和每年在录入、检查、发送、催款和更正发票上花费多少员工工时和令吉。',
 'b4': '每月发票数量',
 'b5': '预先填入的数字只是示例，并非平均值。请换成您自己的数字。',
 'b6': '每张发票所需分钟',
 'b7': '录入、检查、发送和记录，加上催收款项。为一张普通发票计时就能知道。',
 'b8': '每小时员工成本（RM）',
 'b9': '负责开票人员的每小时工资加雇主缴款。',
 'b10': '出错的发票比例（%）',
 'b11': '更正一次错误所需分钟',
 'b12': '手动花费的时间',
 'b13': '每月 <span data-o="hm">0</span> 小时，RM <span data-o="rm">0</span>',
 'b14': '每年 <span data-o="hy">0</span> 小时，RM <span data-o="ry">0</span>',
 'b15': '开票 = <span data-o="n">0</span> × <span data-o="min">0</span> 分钟 = <span data-o="h1">0</span> 小时',
 'b16': '更正错误 = <span data-o="n2">0</span> × <span data-o="err">0</span>% × <span data-o="fix">0</span> 分钟 = <span data-o="h2">0</span> 小时',
 'b17': '成本 = <span data-o="hm2">0</span> 小时 × RM <span data-o="pay">0</span>/小时，全年再 × 12',
 'b18': '根据您自己的数字所作的估算。不包括发票迟发导致的延迟收款，以及定价错误造成的收入损失。',
 'b19': 'LHDN 电子发票多了一个步骤：每张电子发票都必须先提交到 MyInvois 并通过验证，才能交给买方。',
 'b20': 'SteadyDevs 电子发票平台可直接从您现有的系统提交，或通过上传 Excel 或 CSV 提交。每月 <span data-o="n3">0</span> 张发票适用 <span data-o="plan"></span> 配套，<strong>每月 RM <span data-o="cost">0</span></strong>，已包括任何超额费用。<a href="einvoice.html">了解电子发票平台 →</a>',
 'b21': '每月超过 20,000 张发票，请<a href="contact.html">联系我们</a>洽谈电子发票平台的定制配套。',
 'b22': '计算方式：每月工时 = 发票数 × 每张发票分钟 ÷ 60 + 发票数 × 出错率 × 每次更正分钟 ÷ 60；成本 = 工时 × 每小时员工成本；一年按 12 个月计。仅为粗略估算，并非财务建议。电子发票步骤已于 2026 年 10 月 23 日对照 <a href="https://www.hasil.gov.my/media/0xqitc2t/lhdnm-e-invoice-general-faqs.pdf">LHDN 电子发票常见问题（2026 年 9 月 4 日更新）</a>核实；配套价格取自<a href="einvoice.html#pricing">电子发票平台的价格</a>。',
 'b23': '时间都花在哪里',
 'b24': '一张“简单”的发票很少只有一个步骤。有人要复制顾客资料、填写明细、核对金额、生成 PDF、写电邮、记入电子表格，之后还要催款。每一个错误都意味着一次更正、一次道歉和一笔迟到的款项。<a href="blog/hidden-cost-manual-invoicing-malaysian-smes.html">手动开票的隐藏成本</a>对此有详细分析，<a href="blog/manual-to-automated-invoice-real-business-impact.html">从手动到自动</a>则说明了步骤自动化后有哪些改变，以及哪些仍需要人手。',
 'b25': '常见问题',
 'b26': '手动开票实际要花多少时间？',
 'b27': '取决于您的流程。为一张普通发票从头到尾计时：查找顾客资料、录入明细、核对总额、生成 PDF、发送并记录。再加上催款的时间。大多数老板会发现实际数字比自己估计的高。',
 'b28': '为什么计算器要把错误单独计算？',
 'b29': '因为一张错误的发票，代价比录入它的时间更高。有人要发现错误、开立更正、回复顾客并核对账目，而这期间款项一直在等。请输入错误发生的频率，以及每次更正需要多久。',
 'b30': '计算器没有计算哪些？',
 'b31': '因发票迟发而延迟到账的款项、定价错误造成的收入损失，以及员工本可以用这些时间做的其他事。这些可能比工时更重要，但各企业差异太大，无法在这里估算。',
 'b32': 'LHDN 电子发票会改变这一点吗？',
 'b33': '会，它多了一个步骤。每张电子发票都必须通过 MyInvois 门户或 API 提交到 LHDN 的 MyInvois 系统，并在交给买方之前通过验证。如果您目前是手动录入发票，在 MyInvois 门户中输入可能意味着要再录入一次。',
 'b34': '自动化开票能省下全部这笔钱吗？',
 'b35': '不能。仍然需要有人审核和批准发票、处理例外情况，而自动化本身也有成本。这里的数字是手动流程目前的成本，也就是衡量任何改变时应该对照的数字。',
 'b36': '<span class="f-callout__label">下一步</span>\n          直接从您现有的系统向 LHDN 提交电子发票：<a href="einvoice.html">电子发票平台</a>每月 10 张发票以内免费。想让发票根据订单自动生成？请看<a href="solutions.html#automation">业务自动化 →</a>',
 'b37': '为马来西亚企业承受不起损失的系统，提供软件与工程服务。',
 'b38': '产品与服务',
 'b39': '<a href="solutions.html">工程服务</a>',
 'b40': '<a href="einvoice.html">EInvoice 平台</a>',
 'b41': '<a href="venue-booking.html">Venue Booking</a>',
 'b43': '公司',
 'b44': '<a href="about.html">关于我们</a>',
 'b45': '<a href="portfolio.html">案例研究</a>',
 'b46': '<a href="blog/index.html">博客</a>',
 'b47': '<a href="contact.html">联系我们</a>',
 'b48': '更多',
 'b49': '<a href="pricing-terms.html">价格条款</a>',
 'b50': '<a href="my-account.html">我的账户</a>',
}
SCRIPT = {'How much time does manual invoicing really take?': '手动开票实际要花多少时间？',
 "It depends on your process. Time one ordinary invoice from start to finish: finding the customer's details, keying the lines, checking the totals, making the PDF, sending it and recording it. Add the time spent chasing payment. Most owners find the real figure is higher than they guessed.": '取决于您的流程。为一张普通发票从头到尾计时：查找顾客资料、录入明细、核对总额、生成 '
                                                                                                                                                                                                                                                                                                      'PDF、发送并记录。再加上催款的时间。大多数老板会发现实际数字比自己估计的高。',
 'Why does the calculator count errors separately?': '为什么计算器要把错误单独计算？',
 'Because a wrong invoice costs more than the time to key it. Someone has to notice, issue a correction, reply to the customer and reconcile the accounts, and the payment waits meanwhile. Enter how often that happens and how long a fix takes.': '因为一张错误的发票，代价比录入它的时间更高。有人要发现错误、开立更正、回复顾客并核对账目，而这期间款项一直在等。请输入错误发生的频率，以及每次更正需要多久。',
 "What doesn't the calculator count?": '计算器没有计算哪些？',
 'Payments that arrive later because invoices go out late, revenue lost to pricing mistakes, and what your staff could have done with the time instead. These can matter more than the hours, but they vary too much between businesses to estimate here.': '因发票迟发而延迟到账的款项、定价错误造成的收入损失，以及员工本可以用这些时间做的其他事。这些可能比工时更重要，但各企业差异太大，无法在这里估算。',
 'Does LHDN e-invoicing change this?': 'LHDN 电子发票会改变这一点吗？',
 "Yes, it adds a step. Each e-invoice has to be sent to LHDN's MyInvois system, through the MyInvois Portal or an API, and validated before you share it with the buyer. If you key invoices by hand today, entering them in the MyInvois Portal can mean keying them a second time.": '会，它多了一个步骤。每张电子发票都必须通过 '
                                                                                                                                                                                                                                                                                       'MyInvois '
                                                                                                                                                                                                                                                                                       '门户或 '
                                                                                                                                                                                                                                                                                       'API '
                                                                                                                                                                                                                                                                                       '提交到 '
                                                                                                                                                                                                                                                                                       'LHDN '
                                                                                                                                                                                                                                                                                       '的 '
                                                                                                                                                                                                                                                                                       'MyInvois '
                                                                                                                                                                                                                                                                                       '系统，并在交给买方之前通过验证。如果您目前是手动录入发票，在 '
                                                                                                                                                                                                                                                                                       'MyInvois '
                                                                                                                                                                                                                                                                                       '门户中输入可能意味着要再录入一次。',
 'Will automating invoicing save me this whole amount?': '自动化开票能省下全部这笔钱吗？',
 'No. Someone still has to review and approve invoices and deal with exceptions, and automation has its own cost. The figure here is what the manual process costs today, which is the number to weigh any change against.': '不能。仍然需要有人审核和批准发票、处理例外情况，而自动化本身也有成本。这里的数字是手动流程目前的成本，也就是衡量任何改变时应该对照的数字。'}
