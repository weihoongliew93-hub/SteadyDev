import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import footer
HEAD = {
    'title': '联系 SteadyDevs：旧系统与电子发票咨询',
    'description': '免费 30 分钟咨询，并为您的系统或电子发票需求提供书面评估。马来西亚资深工程师，一个工作日内回复。',
}
ATTR = {
    'e.g., Bug fix needed': '例如：需要修复错误',
    'Tell us about your problem or project...': '请描述您遇到的问题或项目……',
    'Not sure yet': '还不确定',
    'Projects (fixed price)': '项目（固定价格）',
    'Hire an engineer (monthly)': '按月聘请工程师',
    'Cloud cost': '云成本',
    'E-invoicing': '电子发票',
}
B = {
 'b0': '跳至内容',
 'b1': '联系我们',
 'b2': '一起来谈谈<span class="f-dim">您的系统。</span>',
 'b3': '告诉我们发生了什么。您将获得一次免费的策略咨询，以及一份建议清晰、切合实际的书面评估，不会给您任何压力。欢迎用中文留言。',
 'b4': '给我们留言',
 'b5': '不懂技术？只需描述发生了什么，以及对生意的影响。',
 'b6': '✅ 谢谢！您的留言已成功发送。我们会在 1–2 个工作日内回复。',
 'b7': '❌ 抱歉，发送失败。请重试，或直接发电邮至 contact@steadydevs.com',
 'b8': '您的姓名 *',
 'b9': '您的电邮 *',
 'b10': '主题',
 'b11': '感兴趣的配套（可选）',
 'b12': '请选择配套……',
 'b13': '免费策略会谈（不收费）',
 'b14': '还不确定 / 需要建议',
 'b16': '旧系统抢救（RM3,860 起）',
 'b17': '系统梳理与路线图（RM6,840 起）',
 'b18': '系统稳定项目（RM10,760 起）',
 'b19': '业务自动化（RM6,840 起）',
 'b20': '单项自动化（RM2,940 起）',
 'b21': '系统健康检查（RM387，一次性诊断）',
 'b22': '顾问（每月 RM497）',
 'b23': '兼职工程师（每月 RM1,476）',
 'b24': '团队工程师（每月 RM2,476）',
 'b25': '工程主管（每月 RM4,452）',
 'b26': '还不确定选哪个方案',
 'b27': '免费初步诊断',
 'b28': '优化调整（RM1,976）',
 'b29': '全面审计（RM5,860 起）',
 'b30': '实施（RM2,940 起）',
 'b31': 'EInvoice 平台 - 抢先体验（测试版）',
 'b43': '留言内容 *',
 'b44': '发送留言',
 'b45': '或直接发电邮：<a href="mailto:contact@steadydevs.com">contact@steadydevs.com</a>',
 'b46': '<span class="f-sys__title">通知</span><span class="f-sys__tag">接下来会怎样</span>',
 'b47': '<span>1. 我们阅读您的留言并回复</span><span>1–2 个工作日</span>',
 'b48': '<span>2. 免费 30 分钟策略咨询</span><span class="f-sys__note">免费</span>',
 'b49': '<span>3. 附固定报价的书面评估</span><span class="f-sys__note">免费</span>',
 'b50': '没有义务继续合作',
 'b51': '电邮',
 'b53': '回复时间',
 'b54': '1–2 个工作日内，内容详细的咨询优先处理',
 'b55': '服务时间',
 'b56': '每天，马来西亚时间（GMT+8）。适合有计划的改进工作，不适合即时紧急事故。',
 'b57': '所在地',
 'b58': '立足马来西亚，服务全球客户',
 'b59': '留言时请附上',
 'b60': '系统和问题的简要说明',
 'b61': '目前为止尝试过的方法（如有）',
 'b62': '您的时间安排和紧急程度',
 'b63': '您考虑的预算范围，方便我们推荐合适的方案',
 'b64': '任何限制或特殊要求',
}
B.update(footer('zh', 65))
SCRIPT = {"'Send Message'": "'发送留言'", "'Sending...'": "'发送中……'"}

# Setup service section (and contact options), added 16 Nov 2026.
B.update({
 "b32": "陪同开通（RM490 一次性）",
 "b33": "系统对接（RM1,490 起）"
})
# Single Fix tier (Nov 2026).
B.update({
 "b15": "单项修复（RM590 起）"
})

# "How did you hear about us?" box (lead-source tracking), added 22 Nov 2026.
B.update({
 'b34': '您是如何得知我们的？（选填）',
 'b35': '请选择...',
 'b36': 'Instagram',
 'b37': 'LinkedIn',
 'b38': 'Google 搜索',
 'b39': 'Facebook',
 'b40': '朋友或同事推荐',
 'b41': 'AI 助手（ChatGPT 等）',
 'b42': '其他'
})
