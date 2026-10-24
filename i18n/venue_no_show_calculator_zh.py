# Generated from venue-no-show-calculator.html; edit the strings here. Block ids follow page order (i18n/README.md).
HEAD = {'title': '场馆爽约计算器：球场、房间、工作室 | SteadyDevs',
 'description': '估算顾客爽约每月让您的球场、房间或工作室损失多少，以及把爽约率降低几个百分点能挽回多少。免费，并显示公式。'}
ATTR = {}
B = {
 'b0': '跳到内容',
 'b1': '免费工具 · 场馆预约',
 'b2': '场馆爽约计算器',
 'b3': '一个已被预约却没人来的球场毫无收入，而且它还曾拒绝了别人。输入您场馆的数字，看看爽约每月让您损失多少，以及减少爽约能挽回多少。',
 'b4': '球场、房间或打位数量',
 'b5': '每小时价格（RM）',
 'b6': '每日营业小时',
 'b7': '每周营业天数',
 'b8': '使用率（%）',
 'b9': '营业时间中被预约的比例。爽约也算作已预约。',
 'b10': '爽约率（%）',
 'b11': '在已预约的小时中，没人到场或没付款的比例。不确定？统计四个星期。',
 'b12': '爽约率降低（百分点）',
 'b13': '您自己的目标。从 8% 降到 5% 就是 3 个百分点。我们不承诺任何降幅。',
 'b14': '每月',
 'b15': '没有预约，所以没有损失。',
 'b16': '输入场地数量、营业时间、价格和使用率即可看到估算。',
 'b17': '没有爽约，没有损失。',
 'b18': '您每月的预约额约 RM <span data-o="booked2"></span>。如果您还没有统计过几个星期的爽约情况，在相信“零”之前值得先统计一下。',
 'b19': '约 RM <span data-o="lost"></span> 因爽约而损失',
 'b20': '占已预约的 RM <span data-o="booked"></span>。也就是 <span data-o="nshours"></span> 个已预约却没人使用的小时，一年约 RM <span data-o="lostyear"></span>。',
 'b21': '把爽约率降低 <span data-o="cut"></span> 个百分点，降到 <span data-o="newrate"></span>%，每月可挽回约 <strong>RM <span data-o="back"></span></strong>，一年 RM <span data-o="backyear"></span>。',
 'b22': '爽约率不能低于零，所以这里按您全部的 <span data-o="rate"></span> 个百分点计算。',
 'b23': '输入想把爽约率降低多少个百分点，看看能挽回多少。',
 'b24': '<a href="venue-booking.html">了解 Venue Booking 如何处理提醒和批准 →</a>',
 'b25': '根据您自己的数字所作的估算，并非预测。假设爽约者不付任何费用、该小时也没有转卖，并按每月 52 ÷ 12 周计算。产品细节已于 2026 年 10 月 23 日对照 Venue Booking 插件代码（免费版 1.11.3，以及我们网站所售版本 1.16.2）和我们的 <a href="venue-booking.html">Venue Booking 页面</a>核实。',
 'b26': '估算如何计算',
 'b27': '每月可售小时 = 场地数量 × 每日营业小时 × 每周天数 × 52 ÷ 12 = <span data-o="sellable"></span>',
 'b28': '已预约小时 = 可售小时 × 使用率 = <span data-o="bookedhours"></span>',
 'b29': '预约收入 = 已预约小时 × 每小时价格 = RM <span data-o="booked3"></span>',
 'b30': '爽约小时 = 已预约小时 × 爽约率 = <span data-o="nshours2"></span>',
 'b31': '爽约损失 = 爽约小时 × 每小时价格 = RM <span data-o="lost2"></span>',
 'b32': '挽回金额 = 已预约小时 × 降低的百分点 × 每小时价格 = RM <span data-o="back2"></span>',
 'b33': '统一的每小时价格只是简化。爽约往往集中在高峰时段，那时价格最高、时段也最难订到，所以如果您的高峰价格更高，实际数字很可能也更高。',
 'b34': 'Venue Booking 如何应对爽约',
 'b35': '提醒电邮',
 'b36': '每个已批准的预约之前发送一封电邮，发送时间由您选择，可提前 1 至 168 小时。待批准、已拒绝和已取消的预约不会收到提醒。提醒功能随我们 Venue Booking 页面所售的版本提供，WordPress.org 上的免费插件没有此功能。',
 'b37': '每个预约都需批准',
 'b38': '每个预约送达时都是待批准状态。您批准或拒绝，两种情况都会电邮通知顾客。待批准的申请会一直占用时段直到您决定，所以请尽快处理。在线付款的预约在付款确认后会立即获批。',
 'b39': '取消的时段重新开放预约',
 'b40': '当您取消或拒绝一个预约，该时段可以立即被重新预约。顾客无法自行在线取消按小时的预约：他们需要联系您，由您在后台取消。',
 'b41': '在线付款：全额付款，没有订金',
 'b42': '开启在线付款后，顾客在预约时通过 HitPay、Stripe 或 2C2P 支付全额，未付款的预约在 30 分钟后释放时段。目前还没有订金选项。在线付款随我们 Venue Booking 页面所售的版本提供，WordPress.org 上的免费插件没有此功能。',
 'b43': '为您的输入提供报表',
 'b44': '任何期间的使用率、每可用小时收入，以及按状态统计的预约。这就是上面所需的使用率数字。按小时的预约不会记录爽约，所以请自行统计。',
 'b45': '常见问题',
 'b46': '爽约造成的收入损失如何计算？',
 'b47': '每月可售小时 = 场地数量 × 每日营业小时 × 每周天数 × 52 ÷ 12。已预约小时 = 可售小时 × 使用率。爽约小时 = 已预约小时 × 爽约率，每小时按您的每小时价格计算。',
 'b48': '这里什么算作爽约？',
 'b49': '顾客没有到场、没有付款，而且该小时也没有卖给别人的预约。提前到足以让您转卖时段的取消不算爽约。如果您预先收款，爽约不会让您损失那笔钱，但那个小时仍然空着。',
 'b50': '在哪里找到我的使用率？',
 'b51': '把一个月内售出的小时除以可以售出的小时。Venue Booking 的报表页面可显示任何期间的使用率，按已批准的预约对比资源的营业小时计算。',
 'b52': '如何得知我的爽约率？',
 'b53': '自己统计。连续四个星期，把每个预约标记为已使用、提前取消或爽约，然后把爽约数除以全部预约数。如果可以，按高峰和非高峰时段分开统计，因为高峰时段的爽约代价最大。',
 'b54': 'Venue Booking 能收订金吗？',
 'b55': '不能收订金。我们 Venue Booking 页面所售的版本可以在顾客预约时在线收取全额，可设为可选或每个预约都必须付款。它也会在已批准的预约之前发送提醒电邮，没有在线付款的预约则等待您批准。',
 'b56': '<span class="f-callout__label">延伸阅读</span>\n          顾客为什么不来，以及如何减少：<a href="blog/reduce-no-shows-venue-booking-deposits-reminders.html">如何减少爽约又不惹恼顾客 →</a> 这个计算器背后的数字，以及另外三个：<a href="blog/venue-booking-numbers-owners-should-track.html">每位场馆老板都该关注的 5 个数字 →</a> 准备好接受在线预约了吗？<a href="venue-booking.html">了解 Venue Booking →</a>',
 'b57': '为马来西亚企业承受不起损失的系统，提供软件与工程服务。',
 'b58': '产品与服务',
 'b59': '<a href="solutions.html">工程服务</a>',
 'b60': '<a href="einvoice.html">EInvoice 平台</a>',
 'b61': '<a href="venue-booking.html">Venue Booking</a>',
 'b63': '公司',
 'b64': '<a href="about.html">关于我们</a>',
 'b65': '<a href="portfolio.html">案例研究</a>',
 'b66': '<a href="blog/index.html">博客</a>',
 'b67': '<a href="contact.html">联系我们</a>',
 'b68': '更多',
 'b69': '<a href="pricing-terms.html">价格条款</a>',
 'b70': '<a href="my-account.html">我的账户</a>',
}
SCRIPT = {'How is the revenue lost to no-shows worked out?': '爽约造成的收入损失如何计算？',
 'Sellable hours a month are your units times open hours a day times days a week, times 52 and divided by 12. Booked hours are that times your utilisation. No-show hours are booked hours times your no-show rate, and each one is valued at your hourly price.': '每月可售小时 '
                                                                                                                                                                                                                                                                   '= '
                                                                                                                                                                                                                                                                   '场地数量 '
                                                                                                                                                                                                                                                                   '× '
                                                                                                                                                                                                                                                                   '每日营业小时 '
                                                                                                                                                                                                                                                                   '× '
                                                                                                                                                                                                                                                                   '每周天数 '
                                                                                                                                                                                                                                                                   '× '
                                                                                                                                                                                                                                                                   '52 '
                                                                                                                                                                                                                                                                   '÷ '
                                                                                                                                                                                                                                                                   '12。已预约小时 '
                                                                                                                                                                                                                                                                   '= '
                                                                                                                                                                                                                                                                   '可售小时 '
                                                                                                                                                                                                                                                                   '× '
                                                                                                                                                                                                                                                                   '使用率。爽约小时 '
                                                                                                                                                                                                                                                                   '= '
                                                                                                                                                                                                                                                                   '已预约小时 '
                                                                                                                                                                                                                                                                   '× '
                                                                                                                                                                                                                                                                   '爽约率，每小时按您的每小时价格计算。',
 'What counts as a no-show here?': '这里什么算作爽约？',
 "A booking where the customer didn't turn up, didn't pay, and the hour wasn't sold to anyone else. A cancellation early enough for you to resell the slot isn't a no-show. If you take payment upfront, a no-show doesn't cost you that money, but the hour still sits empty.": '顾客没有到场、没有付款，而且该小时也没有卖给别人的预约。提前到足以让您转卖时段的取消不算爽约。如果您预先收款，爽约不会让您损失那笔钱，但那个小时仍然空着。',
 'Where do I find my utilisation?': '在哪里找到我的使用率？',
 "Divide the hours you sold in a month by the hours you could have sold. Venue Booking's Reports screen shows this for any period, counting approved bookings against the hours your resources are open.": '把一个月内售出的小时除以可以售出的小时。Venue '
                                                                                                                                                                                                           'Booking '
                                                                                                                                                                                                           '的报表页面可显示任何期间的使用率，按已批准的预约对比资源的营业小时计算。',
 'How do I find my no-show rate?': '如何得知我的爽约率？',
 'Count it. For four weeks, mark every booking as used, cancelled in advance, or a no-show, then divide the no-shows by all bookings. Split it by peak and off-peak hours if you can, because no-shows at peak times cost the most.': '自己统计。连续四个星期，把每个预约标记为已使用、提前取消或爽约，然后把爽约数除以全部预约数。如果可以，按高峰和非高峰时段分开统计，因为高峰时段的爽约代价最大。',
 'Does Venue Booking take deposits?': 'Venue Booking 能收订金吗？',
 'Not as a deposit. The edition sold on our Venue Booking page can take the full price online when the customer books, as an option or for every booking. It also sends reminder emails before approved bookings, and a booking not paid online waits for your approval.': '不能收订金。我们 '
                                                                                                                                                                                                                                                                           'Venue '
                                                                                                                                                                                                                                                                           'Booking '
                                                                                                                                                                                                                                                                           '页面所售的版本可以在顾客预约时在线收取全额，可设为可选或每个预约都必须付款。它也会在已批准的预约之前发送提醒电邮，没有在线付款的预约则等待您批准。'}
