# Generated from e-invoice-tin-checker.html; edit the strings here. Block ids follow page order (i18n/README.md).
HEAD = {'title': '马来西亚电子发票 TIN 检查（LHDN）| SteadyDevs',
 'description': '提交前按照 LHDN 电子发票规则检查买方的 TIN、证件号码、电话和电邮，并解释各个通用 TIN。免费，在您的浏览器中运行。'}
ATTR = {'Optional': '选填'}
B = {
 'b0': '跳到内容',
 'b1': '免费工具 · LHDN 电子发票',
 'b2': '电子发票 TIN 与字段检查',
 'b3': '按照将填入电子发票的样子，输入买方的 TIN、证件号码、电话和电邮。看看哪些会被 LHDN 拒绝或标记为无效（Invalid），以及提交前如何逐一修正。全部在您的浏览器中运行；您输入的内容不会发送到任何地方。',
 'b4': '这是谁的资料？',
 'b5': '买方',
 'b6': '卖方（供应商）',
 'b8': 'LHDN 分配的税务识别号码，或下表中的其中一个通用 TIN。',
 'b9': '证件类型',
 'b11': 'MyTentera（军人）',
 'b12': '护照',
 'b13': '商业注册号码（BRN）',
 'b14': '未提供',
 'b15': '证件号码',
 'b16': '联系电话',
 'b17': '电邮',
 'b18': '这是一张合并电子发票（当月对公众的销售）',
 'b19': '<span data-l="single">发票总额（RM）</span><span data-l="cons" hidden="">其中最大单笔销售（RM）</span>',
 'b20': '我是处于 LHDN 宽限期内的第 4 阶段企业（2026 年 1 月 1 日或 7 月 1 日开始实施电子发票）',
 'b21': 'LHDN 会看到什么',
 'b22': '输入 TIN 开始检查。',
 'b23': '您输入的内容没有发现问题。',
 'b24': '需修正：<span data-o="fix">0</span> · 需核对：<span data-o="check">0</span>',
 'b25': '<span class="f-badge f-badge--crimson">需修正</span> <strong>缺少 TIN。</strong>每张电子发票都需要卖方和买方的 TIN。如果买方没有 TIN，请从下表中选用适合的通用 TIN。',
 'b26': '<span class="f-badge">需核对</span> <strong>去掉空格和连字符。</strong>请用大写字母输入 TIN，字符之间不要有任何东西。我们按 <span class="tin-code" data-o="clean"></span> 进行检查。',
 'b27': '<span class="f-badge f-badge--crimson">需修正</span> <strong>超出 TIN 的长度。</strong>LHDN 的 TIN 字段最多 14 个字符。请确认您没有贴上证件号码，或把两个值贴在一起。',
 'b28': '<span class="f-badge f-badge--crimson">需修正</span> <strong>不是 LHDN 的四个通用 TIN 之一。</strong>通用 TIN 是 EI 加 11 位数字：<span class="tin-code">EI00000000010</span>、<span class="tin-code">EI00000000020</span>、<span class="tin-code">EI00000000030</span> 或 <span class="tin-code">EI00000000040</span>。请数一数零的个数。',
 'b29': '<span class="f-badge f-badge--crimson">需修正</span> <strong>旧的个人前缀。</strong>SG 和 OG 是个人的旧前缀。LHDN 要求个人使用前缀为 IG 的 TIN。买方可在 MyTax 中查看。',
 'b30': '<span class="f-badge">需核对</span> <strong>这看起来不像 TIN。</strong>我们预期的是 IG（个人）或 C（公司）等前缀加 10 或 11 位数字，例如 IG12345678901 或 C25845632020。LHDN 没有公布完整格式，所以请把这当作打字错误检查，并向买方确认 TIN。',
 'b31': '<span class="f-badge f-badge--crimson">需修正</span> <strong>仅限买方使用的通用 TIN。</strong>EI00000000020 和 EI00000000040 是给买方用的。作为卖方，请使用您自己的 TIN。',
 'b32': '<span class="f-badge">需核对</span> <strong>只用于自开发票。</strong>只有在买方开立自开电子发票时，通用 TIN 才会出现在供应商一方：EI00000000010 用于只有 MyKad 或 MyTentera 号码的个人供应商，或用于合并自开电子发票；EI00000000030 用于外国供应商。在您自己的销售发票上，请使用您自己的 TIN。',
 'b33': '<span class="f-badge f-badge--crimson">需修正</span> <strong>通用 TIN 不能与 BRN 一起使用。</strong>企业买方有自己的 TIN，请向对方索取。LHDN 会接受提交，随后把电子发票标记为无效。',
 'b34': '<span class="f-badge f-badge--crimson">需修正</span> <strong>护照用错了通用 TIN。</strong>只提供护照号码的外国买方，LHDN 的通用 TIN 是 EI00000000020。EI00000000010 须搭配 MyKad、MyTentera、MyPR 或 MyKAS 号码。',
 'b35': '<span class="f-badge f-badge--crimson">需修正</span> <strong>这里的通用 TIN 需要证件号码。</strong>在普通发票上，EI00000000010 必须搭配买方的 MyKad 或 MyTentera 号码。没有证件号码时，只能用于合并电子发票。请索取买方的 IC 号码；如果金额在 RM10,000 或以下，也可以把这笔销售留作收据，纳入月底的合并电子发票。LHDN 会接受提交，随后把电子发票标记为无效。',
 'b36': '<span class="f-badge">需核对</span> <strong>合并电子发票上的买方证件。</strong>LHDN 的合并电子发票格式中，买方证件号码为 NA。如果这位买方提供了 IC 号码，可以改为给他单独开一张电子发票。',
 'b37': '<span class="f-badge f-badge--crimson">需修正</span> <strong>本地证件用错了通用 TIN。</strong>EI00000000020 是给外国买方用的。持有 MyKad、MyTentera、MyPR 或 MyKAS 号码的买方应使用 EI00000000010。',
 'b38': '<span class="f-badge">需核对</span> <strong>填入外国买方的证件号码。</strong>证件字段是必填的。请输入买方的护照号码，或对方提供的证件号码。',
 'b39': '<span class="f-badge f-badge--crimson">需修正</span> <strong>EI00000000030 是供应商的 TIN。</strong>它用于自开电子发票上的外国供应商。外国买方请使用 EI00000000020。',
 'b40': '<span class="f-badge">需核对</span> <strong>政府买方的 BRN 填 "NA"。</strong>LHDN 常见问题说明，政府、州属和地方当局以及法定机构，应填 EI00000000040，BRN 填 NA。请选择 BRN 作为证件类型并输入 NA。',
 'b41': '<span class="f-badge f-badge--crimson">需修正</span> <strong>合并电子发票使用 EI00000000010。</strong>在合并电子发票上，买方是 "General Public"，TIN 为 EI00000000010，证件号码为 NA。提供了自己 TIN 的买方应单独开立电子发票。',
 'b42': '<span class="f-badge">需核对</span> <strong>填入与此 TIN 对应的证件号码。</strong>企业的注册号码是必填字段，而 LHDN 的 Validate TIN 会核对 TIN 与证件号码是否相符。只有个人可以只提供 TIN。',
 'b43': '<span class="f-badge f-badge--crimson">需修正</span> <strong>写 NA，而不是 N/A。</strong>LHDN 的空值占位符是 NA。"N/A"、"-" 和 "nil" 都会被拒绝。',
 'b44': '<span class="f-badge f-badge--crimson">需修正</span> <strong>去掉连字符。</strong>NRIC 字段容纳 12 个字符，所以只输入 12 位数字，例如 770625015324。',
 'b45': '<span class="f-badge f-badge--crimson">需修正</span> <strong>不是 12 位的 IC 号码。</strong>MyKad、MyPR 和 MyKAS 号码都是 12 位数字，例如 770625015324。',
 'b46': '<span class="f-badge f-badge--crimson">需修正</span> <strong>太长了。</strong>LHDN 这种证件类型的字段最多 12 个字符。请检查是否有空格或多余的字符。',
 'b47': '<span class="f-badge f-badge--crimson">需修正</span> <strong>超出 BRN 的长度。</strong>LHDN 的 BRN 字段最多 20 个字符。',
 'b48': '<span class="f-badge">需核对</span> <strong>只能有字母和数字。</strong>请删除证件号码中的空格、连字符和其他符号。',
 'b49': '<span class="f-badge">需核对</span> <strong>请使用新的 12 位 BRN。</strong>在 SSM 注册的企业必须提供新的 12 位注册号码，例如 202001234567，而不是旧号码。在其他机构注册？使用该机构的号码即可。LHDN 自 2024 年 7 月 19 日起暂停了 BRN 验证，所以目前未必会被拒绝。',
 'b50': '<span class="f-badge f-badge--crimson">需修正</span> <strong>缺少联系电话。</strong>双方都必须填写。个人买方也应提供电话号码。',
 'b51': '<span class="f-badge">需核对</span> <strong>请输入 NA。</strong>此字段不能留空。在合并电子发票上，LHDN 允许买方联系电话填 NA。',
 'b52': '<span class="f-badge f-badge--crimson">需修正</span> <strong>LHDN 会拒绝这个占位符。</strong>填 "N/A" 的电子发票曾被拒绝，错误信息为 "Enter valid phone number and the minimum length is 8 characters"。请输入真实号码，或在合并电子发票上填 NA。',
 'b53': '<span class="f-badge">需核对</span> <strong>NA 是给合并电子发票用的。</strong>LHDN 的规则只为合并电子发票上的公众买方提供 NA。这里请索取真实号码。',
 'b54': '<span class="f-badge f-badge--crimson">需修正</span> <strong>太短了。</strong>LHDN 会拒绝少于 8 个字符的联系电话。请加上国家代码和区号，例如 +60123456789。',
 'b55': '<span class="f-badge f-badge--crimson">需修正</span> <strong>太长了。</strong>LHDN 的联系电话字段最多 20 个字符。请只输入一个号码。',
 'b56': '<span class="f-badge f-badge--crimson">需修正</span> <strong>不是电话号码。</strong>只能使用数字和开头的 +。分机号和备注请放在别处。',
 'b57': '<span class="f-badge">需核对</span> <strong>请使用国际格式。</strong>LHDN 要求 E.164 格式：+、国家代码，然后是号码，不留空格，开头不加 0。012-345 6789 应写成 +60123456789。',
 'b58': '<span class="f-badge f-badge--crimson">需修正</span> <strong>不如把电邮留空。</strong>电邮是选填的，但填 "N/A" 和 "-" 的电子发票曾被拒绝，错误信息为 "Enter valid e-mail address"。',
 'b59': '<span class="f-badge">需核对</span> <strong>NA 不是电邮地址。</strong>电邮是选填的，买方没有电邮时请留空。',
 'b60': '<span class="f-badge f-badge--crimson">需修正</span> <strong>太长了。</strong>LHDN 的电邮字段最多 320 个字符。',
 'b61': '<span class="f-badge f-badge--crimson">需修正</span> <strong>不是有效的电邮地址。</strong>请输入一个地址，例如 name@company.com，不要有空格。没有的话请留空。',
 'b62': '<span class="f-badge">需核对</span> <strong>请以数字输入金额。</strong>例如 12500.00。在此之前会跳过 RM10,000 相关检查。',
 'b63': '<span class="f-badge f-badge--crimson">需修正</span> <strong>超过 RM10,000：请从合并电子发票中移出。</strong>任何超过 RM10,000 的单笔销售都需要单独开立附有买方资料的电子发票。当月其余销售仍可合并。',
 'b64': '<span class="f-badge">需核对</span> <strong>超过 RM10,000 且使用通用 TIN。</strong>这笔销售需要单独的电子发票，而它已经是单独开立的。LHDN 指南允许 EI00000000010 搭配马来西亚个人的 MyKad 号码，但能取得买方自己的 TIN 时，请尽量取得。我们的平台在超过 RM10,000 时会要求填写。',
 'b65': '<span class="f-badge">需核对</span> <strong>2027 年 12 月 31 日前允许。</strong>在宽限期内，第 4 阶段企业可以合并所有销售，包括超过 RM10,000 的销售。从 2028 年 1 月 1 日起，这类销售需要单独开立附有买方资料的电子发票。',
 'b66': '在合并电子发票上，买方名称还要填 General Public，地址填 NA，州代码填 17，每一行的分类代码都填 004。',
 'b67': '这里只检查格式和 LHDN 的规则，无法判断 TIN 是否已注册或是否属于这位买方。买方可在 <a href="https://mytax.hasil.gov.my">MyTax</a> 中查看自己的 TIN，而连接到 MyInvois 的系统可以通过 LHDN 的 Validate TIN API 核对 TIN 与证件号码。',
 'b68': '<a href="einvoice.html">在每张发票送达 LHDN 之前都进行这些检查 →</a>',
 'b69': '这是格式检查，并非税务建议。规则来自 LHDN 的<a href="https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf">电子发票特定指南 v4.9</a>（2026 年 9 月 7 日：第 3.7 节、第 16.2 节、附录 1、2 和 4）、<a href="https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf">电子发票指南 v4.8</a>、<a href="https://www.hasil.gov.my/media/0xqitc2t/lhdnm-e-invoice-general-faqs.pdf">电子发票常见问题</a>（2026 年 9 月 4 日，第 32 至 36 题），以及 MyInvois SDK 的<a href="https://sdk.myinvois.hasil.gov.my/documents/invoice-v1-1/">发票字段规则</a>和 <a href="https://sdk.myinvois.hasil.gov.my/einvoicingapi/01-validate-taxpayer-tin/">Validate TIN API</a>。电话至少 8 个字符、"N/A" 被拒绝，以及 LHDN 在接受后把通用 TIN 错误标记为无效，这几点来自我们在 2026 年 10 月向 LHDN 测试环境的实际提交；SDK 并未说明。已于 2026 年 10 月 23 日核实。',
 'b70': '该用哪个通用 TIN',
 'b71': '当对方没有 TIN 时，LHDN 提供四个通用 TIN。每个都适用于特定情况，用错了电子发票就会被标记为无效。',
 'b72': '通用 TIN',
 'b73': '适用于',
 'b74': '搭配',
 'b76': '公众。只提供 MyKad 或 MyTentera 号码的马来西亚个人，或 MyPR、MyKAS 持有人。也用于合并电子发票上的买方，以及合并自开电子发票上的供应商。',
 'b77': 'MyKad、MyTentera、MyPR 或 MyKAS 号码。合并电子发票上证件号码为 NA。绝不能搭配 BRN。',
 'b79': '外国买方。只提供护照号码的外国个人、出口销售中没有马来西亚 TIN 的外国买方，或外国收货人。',
 'b80': '护照号码（如果买方只提供这个）。',
 'b82': '外国供应商，仅限自开电子发票。只有护照的外国个人供应商，或没有马来西亚 TIN 的进口供应商。',
 'b83': '供应商的护照号码（如果对方只提供这个）。绝不能用作买方。',
 'b85': '政府买方：政府、州政府和州当局、政府、地方和法定当局、法定机构，以及没有 TIN 的获豁免机构。',
 'b86': 'BRN 填 NA。',
 'b87': '为什么 LHDN 会先接受某些错误，再把电子发票标记为无效',
 'b88': 'LHDN 分两个阶段检查电子发票。提交时，它检查结构：必填字段、长度和格式。电话号码填 "N/A" 会在这一步失败，文件会被立即拒绝。',
 'b89': '通过的文件会被接受，然后再根据 LHDN 自己的记录和规则验证，包括哪个通用 TIN 可以搭配哪种证件。通用 TIN 搭配 BRN，或普通发票上使用 EI00000000010 却没有买方证件号码，都能通过第一阶段，但片刻之后就会被标记为无效。',
 'b90': '第二种才是危险的。如果您的系统只读取提交时的回应，它会显示电子发票已发送，而 LHDN 却把它记为无效。请务必读取文件的最终状态。我们的<a href="blog/einvoice-validation-errors-rejections-fix-guide.html">LHDN 验证错误指南</a>解释了每种结果的含义。',
 'b91': '常见问题',
 'b92': '买方没有 TIN 时该用什么？',
 'b93': '使用 LHDN 的其中一个通用 TIN。只提供 MyKad 或 MyTentera 号码的马来西亚个人，或 MyPR、MyKAS 持有人，使用 EI00000000010 并搭配该号码。只有护照的外国个人，或出口销售中的外国买方，使用 EI00000000020。政府或法定机构使用 EI00000000040。提供注册号码的马来西亚企业不能使用 EI00000000010：请向对方索取自己的 TIN。',
 'b94': 'EI00000000010 是什么？',
 'b95': 'LHDN 的公众通用 TIN。它用于开给只提供 MyKad 或 MyTentera 号码的马来西亚个人，或 MyPR、MyKAS 持有人的电子发票，也作为合并电子发票上的买方 TIN，买方证件号码填 "NA"。如果搭配商业注册号码，或用在没有买方证件号码的普通发票上，LHDN 会接受提交，随后把电子发票标记为无效。',
 'b96': '为什么我的电子发票因为电话号码被拒绝？',
 'b97': '联系电话是必填的，而 LHDN 会拒绝少于 8 个字符的号码。"N/A" 和 "-" 都无法通过这项检查。请连同国家代码填写，例如 +60123456789。在合并电子发票上，买方是公众，LHDN 的占位符是 "NA"，没有斜线。',
 'b98': '合并电子发票可以超过 RM10,000 吗？',
 'b99': '总额可以。RM10,000 规则针对的是单笔销售：任何一笔超过 RM10,000 的交易都需要单独的电子发票，不能纳入合并发票。处于宽限期（至 2027 年 12 月 31 日）的第 4 阶段企业可以合并所有销售，包括超过 RM10,000 的销售。',
 'b100': '这项检查能告诉我 TIN 是真的吗？',
 'b101': '不能。它只检查格式，以及 LHDN 关于哪个 TIN 搭配哪种证件的规则。只有 LHDN 能确认 TIN 已注册并与证件号码相符。买方可以在 MyTax 中找到自己的 TIN，而连接到 MyInvois 的系统可以在发送前通过 LHDN 的 Validate TIN API 核对 TIN 与证件号码。',
 'b102': '<span class="f-callout__label">每次提交之前</span>\n          我们的电子发票平台在每张发票送达 LHDN 之前都会检查通用 TIN 和 RM10,000 规则，把门市收据留到月底的合并电子发票，并在门市买方没有提供电话时填上 LHDN 的 NA。<a href="einvoice.html">了解电子发票平台 →</a> 还不确定是否需要开电子发票？<a href="e-invoice-checker.html">三个问题帮您确认 →</a> 需要卖方的 MSIC 代码？<a href="msic-code-lookup.html">在这里查找 →</a>',
 'b103': '为马来西亚企业承受不起损失的系统，提供软件与工程服务。',
 'b104': '产品与服务',
 'b105': '<a href="solutions.html">工程服务</a>',
 'b106': '<a href="einvoice.html">EInvoice 平台</a>',
 'b107': '<a href="venue-booking.html">Venue Booking</a>',
 'b109': '公司',
 'b110': '<a href="about.html">关于我们</a>',
 'b111': '<a href="portfolio.html">案例研究</a>',
 'b112': '<a href="blog/index.html">博客</a>',
 'b113': '<a href="contact.html">联系我们</a>',
 'b114': '更多',
 'b115': '<a href="pricing-terms.html">价格条款</a>',
 'b116': '<a href="my-account.html">我的账户</a>',
}
SCRIPT = {'What TIN do I use for a buyer who has none?': '买方没有 TIN 时该用什么？',
 "Use one of LHDN's general TINs. For a Malaysian individual who gives only a MyKad or MyTentera number, or a MyPR or MyKAS holder, use EI00000000010 with that number. For a foreign individual with only a passport, or a foreign buyer on an export sale, use EI00000000020. For a government or statutory body, use EI00000000040. A Malaysian business that gives you its registration number can't take EI00000000010: ask it for its own TIN.": '使用 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'LHDN '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       '的其中一个通用 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'TIN。只提供 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'MyKad '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       '或 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'MyTentera '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       '号码的马来西亚个人，或 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'MyPR、MyKAS '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       '持有人，使用 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'EI00000000010 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       '并搭配该号码。只有护照的外国个人，或出口销售中的外国买方，使用 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'EI00000000020。政府或法定机构使用 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'EI00000000040。提供注册号码的马来西亚企业不能使用 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'EI00000000010：请向对方索取自己的 '
                                                                                                                                                                                                                                                                                                                                                                                                                                                       'TIN。',
 'What is EI00000000010?': 'EI00000000010 是什么？',
 'LHDN\'s general public TIN. It goes on an e-invoice to a Malaysian individual who gives only a MyKad or MyTentera number, or a MyPR or MyKAS holder, and on a consolidated e-invoice as the buyer\'s TIN, with the buyer ID \\"NA\\". Beside a business registration number, or on an ordinary invoice with no buyer ID, LHDN takes the submission and then marks the e-invoice Invalid.': 'LHDN '
                                                                                                                                                                                                                                                                                                                                                                                             '的公众通用 '
                                                                                                                                                                                                                                                                                                                                                                                             'TIN。它用于开给只提供 '
                                                                                                                                                                                                                                                                                                                                                                                             'MyKad '
                                                                                                                                                                                                                                                                                                                                                                                             '或 '
                                                                                                                                                                                                                                                                                                                                                                                             'MyTentera '
                                                                                                                                                                                                                                                                                                                                                                                             '号码的马来西亚个人，或 '
                                                                                                                                                                                                                                                                                                                                                                                             'MyPR、MyKAS '
                                                                                                                                                                                                                                                                                                                                                                                             '持有人的电子发票，也作为合并电子发票上的买方 '
                                                                                                                                                                                                                                                                                                                                                                                             'TIN，买方证件号码填 '
                                                                                                                                                                                                                                                                                                                                                                                             '\\"NA\\"。如果搭配商业注册号码，或用在没有买方证件号码的普通发票上，LHDN '
                                                                                                                                                                                                                                                                                                                                                                                             '会接受提交，随后把电子发票标记为无效。',
 'Why was my e-invoice rejected for the phone number?': '为什么我的电子发票因为电话号码被拒绝？',
 'The contact number is mandatory, and LHDN refuses one shorter than 8 characters. \\"N/A\\" and \\"-\\" fail that check. Write the number with the country code, such as +60123456789. On a consolidated e-invoice, where the buyer is the general public, LHDN\'s placeholder is \\"NA\\", without the slash.': '联系电话是必填的，而 '
                                                                                                                                                                                                                                                                                                                  'LHDN '
                                                                                                                                                                                                                                                                                                                  '会拒绝少于 '
                                                                                                                                                                                                                                                                                                                  '8 '
                                                                                                                                                                                                                                                                                                                  '个字符的号码。\\"N/A\\" '
                                                                                                                                                                                                                                                                                                                  '和 '
                                                                                                                                                                                                                                                                                                                  '\\"-\\" '
                                                                                                                                                                                                                                                                                                                  '都无法通过这项检查。请连同国家代码填写，例如 '
                                                                                                                                                                                                                                                                                                                  '+60123456789。在合并电子发票上，买方是公众，LHDN '
                                                                                                                                                                                                                                                                                                                  '的占位符是 '
                                                                                                                                                                                                                                                                                                                  '\\"NA\\"，没有斜线。',
 'Can a consolidated e-invoice exceed RM10,000?': '合并电子发票可以超过 RM10,000 吗？',
 "Yes, in total. The RM10,000 rule is about a single sale: any one transaction above RM10,000 needs its own e-invoice and can't go into a consolidated one. Phase 4 businesses in the relaxation period, which runs to 31 December 2027, may consolidate all their sales, including those above RM10,000.": '总额可以。RM10,000 '
                                                                                                                                                                                                                                                                                                            '规则针对的是单笔销售：任何一笔超过 '
                                                                                                                                                                                                                                                                                                            'RM10,000 '
                                                                                                                                                                                                                                                                                                            '的交易都需要单独的电子发票，不能纳入合并发票。处于宽限期（至 '
                                                                                                                                                                                                                                                                                                            '2027 '
                                                                                                                                                                                                                                                                                                            '年 '
                                                                                                                                                                                                                                                                                                            '12 '
                                                                                                                                                                                                                                                                                                            '月 '
                                                                                                                                                                                                                                                                                                            '31 '
                                                                                                                                                                                                                                                                                                            '日）的第 '
                                                                                                                                                                                                                                                                                                            '4 '
                                                                                                                                                                                                                                                                                                            '阶段企业可以合并所有销售，包括超过 '
                                                                                                                                                                                                                                                                                                            'RM10,000 '
                                                                                                                                                                                                                                                                                                            '的销售。',
 'Does this check tell me the TIN is real?': '这项检查能告诉我 TIN 是真的吗？',
 "No. It checks the format and LHDN's rules on which TIN goes with which ID. Only LHDN can confirm that a TIN is registered and matches the ID number. The buyer can find their TIN in MyTax, and a system connected to MyInvois can check the TIN and ID pair with LHDN's Validate TIN API before sending.": '不能。它只检查格式，以及 '
                                                                                                                                                                                                                                                                                                              'LHDN '
                                                                                                                                                                                                                                                                                                              '关于哪个 '
                                                                                                                                                                                                                                                                                                              'TIN '
                                                                                                                                                                                                                                                                                                              '搭配哪种证件的规则。只有 '
                                                                                                                                                                                                                                                                                                              'LHDN '
                                                                                                                                                                                                                                                                                                              '能确认 '
                                                                                                                                                                                                                                                                                                              'TIN '
                                                                                                                                                                                                                                                                                                              '已注册并与证件号码相符。买方可以在 '
                                                                                                                                                                                                                                                                                                              'MyTax '
                                                                                                                                                                                                                                                                                                              '中找到自己的 '
                                                                                                                                                                                                                                                                                                              'TIN，而连接到 '
                                                                                                                                                                                                                                                                                                              'MyInvois '
                                                                                                                                                                                                                                                                                                              '的系统可以在发送前通过 '
                                                                                                                                                                                                                                                                                                              'LHDN '
                                                                                                                                                                                                                                                                                                              '的 '
                                                                                                                                                                                                                                                                                                              'Validate '
                                                                                                                                                                                                                                                                                                              'TIN '
                                                                                                                                                                                                                                                                                                              'API '
                                                                                                                                                                                                                                                                                                              '核对 '
                                                                                                                                                                                                                                                                                                              'TIN '
                                                                                                                                                                                                                                                                                                              '与证件号码。'}
