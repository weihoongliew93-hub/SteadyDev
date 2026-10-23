import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import footer
HEAD = {
    'title': '案例研究：旧版 .NET 系统修复实例 | SteadyDevs',
    'description': '真实项目：为零售、餐饮和大型企业客户修复关键错误、实现流程自动化、稳定旧版 .NET 系统。',
}
ATTR = {
    'Filter case studies': '筛选案例研究',
}
B = {
 'b0': '跳至内容',
 'b1': '作品集 · 案例研究',
 'b2': '真实项目。<span class="f-dim">真实成果。</span>',
 'b3': '<strong>11 年来专门解决代价高昂的问题</strong>，服务对象是承受不起停机的企业。从每天处理数千笔交易的企业级 POS 系统，到省去人工操作的自动化业务流程——以下是我们如何用整洁、易维护的代码解决复杂问题。',
 'b4': '精选项目',
 'b5': '解决高代价问题的案例研究',
 'b6': '<strong>行业：</strong>知名餐饮及零售品牌 · 机场免税店运营 · 管理数百万积分的会员计划 · 宠物服务企业。 <strong>规模：</strong>处理大量交易的正式运行系统、跨国部署，以及对合规要求极高的环境。',
 'b7': '全部',
 'b8': '网页系统',
 'b9': 'POS 与桌面应用',
 'b10': '性能',
 'b11': '自动化',
 'b12': '内部工具',
 'b13': '''<!-- Wallhub case study hidden per request. To restore, remove the comment wrapper below. -->
<!--
        <div class="sd-dcard" data-cat="web">
          <div class="sd-thumb"><span class="sd-thumb-icon">🧾</span></div>
          <div class="sd-cat">Web Application</div>
          <h3>Sales &amp; Inventory System — Wallhub</h3>
          <div class="sd-tags">
            <span class="sd-tag sd-tag--dark">★ Featured</span>
            <span class="sd-tag sd-tag--dark">.NET 8</span>
            <span class="sd-tag sd-tag--dark">Clean Architecture</span>
            <span class="sd-tag sd-tag--dark">Next.js / React</span>
            <span class="sd-tag sd-tag--dark">TypeScript</span>
          </div>
          <p class="sd-clamp-4">
            A ground-up, web-based sales and inventory platform built for how an interior-materials retailer actually works: measurement-based quotations with versioned revisions and approvals, sales orders that auto-reserve stock, staged deposit and balance payments, event-driven inventory, procurement and installation scheduling. Built on .NET&nbsp;8 Clean Architecture with a Next.js/React/TypeScript front end — <strong>now live and in daily use</strong>, with further modules on the roadmap.
          </p>
          <a href="case-wallhub-sales-inventory-system.html" class="sd-help-link">Read the full case study →</a>
        </div>
        -->
<a class="f-card f-card--link sd-dcard" data-cat="web performance" href="case-cloud-cost-reduction.html">
<span class="f-mono f-small pf-cat">云成本</span>
<span class="f-card__title">Google Cloud 账单削减三分之一，零停机</span>
<span class="f-tags"><span class="f-tag">Google Cloud</span><span class="f-tag">Cloud Run</span><span class="f-tag">Cloud SQL</span><span class="f-tag">成本优化</span></span>
<span class="f-card__text pf-clamp">一个投资研究平台沿用前任开发人员留下的架构，云账单每个月都在上涨。我们根据该账户自身的账单数据逐项核查成本，调整服务器规格，把 API 迁移到 Cloud Run，清理浪费，过程中还发现部署数量再过几周就会触及上限。<strong>云账单一个月内下降 33%，零停机。</strong></span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="performance" href="case-high-volume-performance-crisis.html">
<span class="f-mono f-small pf-cat">性能</span>
<span class="f-card__title">化解高交易量性能危机</span>
<span class="f-tags"><span class="f-tag">.NET Framework</span><span class="f-tag">SQL Server</span><span class="f-tag">性能优化</span><span class="f-tag">生产环境危机</span></span>
<span class="f-card__text pf-clamp">一套自动处理积分过期的系统多年来运行无误——直到一位新客户的超高交易量暴露出关键瓶颈，令正式运行的系统陷入风险。我们在压力下分析查询和数据访问模式，在不干扰正在运行的自动化流程的情况下进行针对性优化，并在非营业时间运行定制程序清理积压的数据。<strong>半天内化解危机</strong>，业务完全未受影响。</span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="web automation" href="case-pet-grooming-booking-automation.html">
<span class="f-mono f-small pf-cat">网页与自动化</span>
<span class="f-card__title">宠物美容预约与自动化系统</span>
<span class="f-tags"><span class="f-tag">.NET</span><span class="f-tag">Web API</span><span class="f-tag">SQL Server</span><span class="f-tag">电邮自动化</span></span>
<span class="f-card__text pf-clamp">把一套只有后台的旧预约系统改造成面向顾客的完整平台：智能预约自动化（美容师档期、宠物体型规则、按资历排班）、带地区代码限制的司机自动排班、自动发放积分的配套订阅，以及由 API 触发的确认、提醒和积分不足电邮。<strong>过去需要不断人工协调的工作，现在自动运行。</strong></span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="pos" href="case-payment-terminal-middleware.html">
<span class="f-mono f-small pf-cat">POS 与桌面应用</span>
<span class="f-card__title">支付终端集成中间件</span>
<span class="f-tags"><span class="f-tag">.NET</span><span class="f-tag">中间件架构</span><span class="f-tag">硬件集成</span><span class="f-tag">日志与诊断</span></span>
<span class="f-card__text pf-clamp">多台信用卡终端直接集成在 POS 代码里——全部混在一个文件中，调试极其困难，每接入一台新终端风险就更高。我们把终端逻辑抽离成独立的中间件程序，配备整洁的基础框架，开发人员只需实现终端专用的指令，无需改动连接逻辑，并有详尽的诊断日志支持。<strong>如今新的集成只需原来一小部分的时间。</strong></span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="pos performance" href="case-offline-pos-sync-optimization.html">
<span class="f-mono f-small pf-cat">POS 与性能</span>
<span class="f-card__title">离线 POS 同步优化与暂存数据库创新</span>
<span class="f-tags"><span class="f-tag">.NET</span><span class="f-tag">多线程</span><span class="f-tag">Entity Framework</span><span class="f-tag">Azure Blob Storage</span></span>
<span class="f-card__text pf-clamp">离线 POS 同步慢得令人头痛——数据表逐个下载，测试时把假数据写进了正式环境，图片下载还要绕经一个网络服务中转。我们通过现有的 EF 中间件动态复制数据表，引入本地暂存数据库，加入多线程并行下载，并让图片直接从 blob storage 下载。<strong>同步时间现在取决于最大的那张表，而不是逐个处理的累计时间。</strong></span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="pos" href="case-retail-pos-refactoring.html">
<span class="f-mono f-small pf-cat">POS 与桌面应用</span>
<span class="f-card__title">零售 POS 模块重构与架构全面改造</span>
<span class="f-tags"><span class="f-tag">.NET</span><span class="f-tag">MVVM 模式</span><span class="f-tag">架构重构</span><span class="f-tag">代码质量把关</span></span>
<span class="f-card__text pf-clamp">一套旧零售 POS 的销售模块中，界面与业务逻辑紧密耦合，没有任何结构化模式——代码臃肿成一团，每加一个新功能都可能弄坏现有功能。我们在原本没有架构的地方引入规范的 MVVM 模式；模式确立后，后续模块都照此实现关注点分离，并持续优化。<strong>基于 MVVM 的模块事实证明易于维护，没有出过问题。</strong></span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="tooling" href="case-developer-productivity-framework.html">
<span class="f-mono f-small pf-cat">内部工具</span>
<span class="f-card__title">开发人员效率框架改进</span>
<span class="f-tags"><span class="f-tag">.NET</span><span class="f-tag">框架设计</span><span class="f-tag">代码生成</span><span class="f-tag">开发者体验</span></span>
<span class="f-kpi"><span><span class="f-kpi__label">新增一份报表（改进前）</span><br/><span class="f-kpi__value" style="color: var(--muted)">4+ 个文件</span></span><span><span class="f-kpi__label">改进后（+1–2 行）</span><br/><span class="f-kpi__value" style="color: var(--ok)">1 个文件</span></span></span>
<span class="f-card__text pf-clamp">开发流程严重拖累效率：新增一份报表要改 4 个以上的文件，系统设置全挤在一个容易出错的文件里，枚举与字符串的对应关系靠人工维护，顺序很容易对不上。我们把打印功能重整为一个主文件，加上别处一两行代码；把设置拆分成各模块专用的文件，并用一个能根据数据模型自动生成界面的框架管理；还把脆弱的、依赖位置的枚举关系重构成结构化代码。</span>
<span class="f-card__foot">阅读案例 →</span>
</a>
<a class="f-card f-card--link sd-dcard" data-cat="pos" href="case-airport-retail-pos-compliance.html">
<span class="f-mono f-small pf-cat">POS 与合规</span>
<span class="f-card__title">机场零售 POS 合规与重大升级</span>
<span class="f-tags"><span class="f-tag">.NET Framework</span><span class="f-tag">SQL Server</span><span class="f-tag">POS 系统</span><span class="f-tag">合规与报表</span></span>
<span class="f-card__text pf-clamp">机场免税店运营面对严格的监管要求，而原系统无法满足——没有航班追踪、关税代码限制、按护照设定的购买限额，也没有完善的审计记录。我们开发了航班信息追踪模块、可按护照类型配置购买限额的关税代码系统、用于审计文件的库存总览报表，以及强制双重核查的对账流程。<strong>如今在对合规要求极高的环境中稳定可靠</strong>，顺利通过审计，并自动防止违规。</span>
<span class="f-card__foot">阅读案例 →</span>
</a>''',
 'b14': '能力范围',
 'b15': '技术专长',
 'b16': '自动化与集成',
 'b17': '自动化业务流程',
 'b18': '批处理与定时任务',
 'b19': '电邮通知自动化',
 'b20': '第三方系统集成',
 'b21': '支付终端集成',
 'b22': 'API 开发与集成',
 'b23': '数据库与性能',
 'b24': '数据库设计与结构建模',
 'b25': 'SQL Server 优化专家',
 'b26': '查询性能调优',
 'b27': '索引策略与实施',
 'b28': '复杂查询重写',
 'b29': '数据库故障排查',
 'b30': '大规模数据处理',
 'b31': '面向报表与分析的设计',
 'b32': '后端开发',
 'b33': '.NET Framework / .NET Core',
 'b34': 'C# 应用开发',
 'b35': 'Web API 设计与实现',
 'b36': 'Windows 服务',
 'b37': '中间件架构',
 'b38': 'POS 系统开发',
 'b39': '架构与重构',
 'b40': '旧系统现代化',
 'b41': '代码重构与重组',
 'b42': '关注点分离',
 'b43': '系统架构设计',
 'b44': '找出性能瓶颈',
 'b45': '减少技术债务',
 'b46': '旧系统出了问题，或者还在靠人工处理流程？',
 'b47': '无论您需要修复关键错误、把费时的流程自动化、优化性能，还是挽救一套快撑不住的系统——这样的专业能力都能彻底改善您的运营。',
 'b48': '<a class="f-btn f-btn--primary f-btn--glow" href="contact.html">预约免费咨询</a>\n<a class="f-btn f-btn--secondary" href="solutions.html">查看工程服务</a>',
}
B.update(footer('zh', 49))
