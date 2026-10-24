# Generated from wordpress-csv-import-checker.html; edit the strings here. Block ids follow page order (i18n/README.md).
HEAD = {'title': 'WordPress CSV 导入检查（SteadyPost）| SteadyDevs',
 'description': '用 SteadyPost 导入 WordPress 之前先检查 CSV：标题、列、日期、状态、分隔符和编码。您的文件始终不会离开浏览器。'}
ATTR = {}
B = {
 'b0': '跳到内容',
 'b1': '免费工具 · WordPress 导入',
 'b2': 'WordPress CSV 导入检查',
 'b3': '用 SteadyPost 把电子表格转成 WordPress 文章之前，先检查一下。在任何东西接触您的网站之前，看看哪些行会被跳过、哪些日期会被读错、哪些列会被忽略。',
 'b4': '把 CSV 文件拖到这里',
 'b6': '选择文件',
 'b7': '您的文件由您自己的浏览器读取，始终不会离开此页面。不会上传或保存任何内容。',
 'b8': '从零开始？模板包含 SteadyPost 能识别的列名和两行示例。',
 'b9': '下载 CSV 模板',
 'b10': 'SteadyPost 会看到什么',
 'b11': '选择或拖入 CSV 文件即可检查。',
 'b12': '此检查工具只读取 CSV 文件。',
 'b13': 'SteadyPost 也能导入 .xlsx 文件的第一个工作表。Excel 文件请用插件自带的预览和试运行检查，或另存为 CSV UTF-8 后在这里检查。',
 'b14': 'SteadyPost 只导入 .csv 和 .xlsx 文件。',
 'b15': '请在 Excel 或 Google Sheets 中把工作表另存或下载为 CSV UTF-8，然后再试一次。',
 'b16': '此文件大于 20 MB。',
 'b17': 'SteadyPost 拒绝超过 20 MB 的上传，而您服务器本身的上传限制可能更低。请把文件拆分成较小的文件。',
 'b18': '文件中没有任何行。',
 'b19': 'SteadyPost 会拒绝空文件。请确认您保存的是正确的工作表。',
 'b20': '您的浏览器无法读取此文件。',
 'b21': '请重新保存，或选择另一个文件。',
 'b22': '没有发现问题。SteadyPost 应该能导入每一行。',
 'b23': '<span data-o="errs"></span> 项需修正，<span data-o="warns"></span> 项需核对。',
 'b24': '不会有任何内容被跳过，但有 <span data-o="warns2"></span> 项值得核对。',
 'b25': '行数',
 'b26': '列数',
 'b27': '已识别',
 'b28': '分隔符',
 'b29': '<span data-d="comma">逗号</span><span data-d="semicolon">分号</span>',
 'b30': '编码',
 'b31': '<span data-e="bom">UTF-8（带 BOM）</span><span data-e="utf8">UTF-8</span><span data-e="ansi">Windows-1252</span>',
 'b32': 'SteadyPost 将使用的列',
 'b33': '无。',
 'b34': '除非您在导入页面中映射，否则会被忽略：<span data-o="ignored"></span>',
 'b35': '需要留意的地方',
 'b36': '<span class="csv-k-err">会被跳过或出错</span><span class="csv-k-warn">值得核对</span>',
 'b37': '这里使用 SteadyPost 的自动列映射。如果您的网站已有包含此文件标题列的映射，插件会保留您的映射。最后请运行插件的试运行，它还会对照您的网站检查作者、图片和分类。',
 'b38': '<a href="steadypost.html">用 SteadyPost 免费导入 →</a>',
 'b39': 'SteadyPost 读取到的前几行',
 'b40': '行号与插件的预览一致。较长的单元格在这里会被截短。',
 'b41': '规则来自 SteadyPost 1.3.0 本身的代码：它的 CSV 读取器、自动列映射和导入器。日期已用 PHP 8.4（插件用它来读取日期）和 <a href="https://www.php.net/manual/en/datetime.formats.php">PHP 日期格式文档</a>测试。已于 2026 年 10 月 23 日核实。您网站的设置，例如已保存的列映射、默认状态或行筛选，可能改变结果，所以最终以插件的试运行为准。',
 'b61': '没有任何列被识别为文章标题，所以在您映射一列之前什么都无法导入。请把该列命名为 Title，或在 SteadyPost → Settings 中选择。',
 'b62': '行尾只有回车符，这是旧版 Mac Excel 保存 CSV 的方式。PHP 按换行符分行，所以 SteadyPost 会把整个文件读成一行。请重新另存为 CSV UTF-8。',
 'b63': '标题行有制表符，但没有逗号或分号，所以这看起来是以制表符分隔的文件。SteadyPost 只识别逗号和分号，所以每一行都会变成一个单元格。',
 'b64': '从第 <span data-f="row"></span> 行开始的带引号单元格一直没有闭合，所以之后的所有内容都会被读进那个单元格。请在该行查找多余的双引号（"）。',
 'b65': '此文件不是 UTF-8，所以 SteadyPost 会按 Windows-1252 读取，这是 Windows 上 Excel 保存普通 CSV 时使用的编码。西欧语言的重音字母能保留，但这样保存的中文、淡米尔文等文字会变成乱码：请改存为 CSV UTF-8。',
 'b66': '忽略大小写、空格和标点后，有两列都叫 <code data-f="value"></code>。SteadyPost 会重新命名第二列，所以只使用第一列。',
 'b67': '第 <span data-f="n"></span> 列没有标题。SteadyPost 把它叫作 <code data-f="value"></code>，除非您映射它，否则会忽略。',
 'b68': '列 <code data-f="value"></code> 不会被自动映射。请把它改名为 <code data-f="other"></code>，或在导入页面中映射，否则它的值会被忽略。',
 'b69': '列 <code data-f="value"></code> 指向一个受保护的自定义字段，也就是以下划线开头的字段。SteadyPost 会去掉列名开头的下划线，所以会改为写入自定义字段 <code data-f="other"></code>。',
 'b70': '第 <span data-f="row"></span> 行没有标题，所以 SteadyPost 会跳过它。',
 'b71': '第 <span data-f="row"></span> 行：状态 <code data-f="value"></code> 无法识别，所以会使用您的默认状态；除非您在 Settings 中改过，否则就是草稿。',
 'b72': '第 <span data-f="row"></span> 行设为定时发布，但没有可读取的发布日期，所以会保存为草稿。',
 'b73': '第 <span data-f="row"></span> 行定时在 <code data-f="value"></code> 发布，但这个时间已经过去。WordPress 会立即发布定时在过去的文章。',
 'b74': '第 <span data-f="row"></span> 行：日期 <code data-f="value"></code> 无法读取，所以文章日期会是导入的那一刻。请使用 YYYY-MM-DD HH:MM，例如 2026-11-01 09:00。',
 'b75': '第 <span data-f="row"></span> 行：<code data-f="value"></code> 会被按月份在前读取，即 <code data-f="other"></code>。如果您的意思是日期在前，请写成 YYYY-MM-DD。',
 'b76': '第 <span data-f="row"></span> 行：<code data-f="value"></code> 会被按年-月-日读取，得到 <code data-f="other"></code>。请写出完整年份。',
 'b77': '第 <span data-f="row"></span> 行：<code data-f="value"></code> 不是真实存在的日期，所以会顺延为 <code data-f="other"></code>。',
 'b78': '第 <span data-f="row"></span> 行：此检查工具无法识别日期 <code data-f="value"></code>。PHP 能读取很多格式，但不一定按您预期的方式。请使用 YYYY-MM-DD HH:MM 以确保无误，或查看试运行结果。',
 'b79': '第 <span data-f="row"></span> 行：特色图片 <code data-f="value"></code> 不是以 http:// 或 https:// 开头，所以 SteadyPost 不会下载它，而是在您的图片 zip 或媒体库中查找同名文件。',
 'b80': '第 <span data-f="row"></span> 行：<code data-f="value"></code> 不是 Google Docs 链接。试运行会报错，导入时文章会在没有内容的情况下创建。',
 'b81': '第 <span data-f="row"></span> 行：Post ID <code data-f="value"></code> 不是数字，所以会新建一篇文章，而不是更新现有文章。',
 'b82': '第 <span data-f="row"></span> 行：<code data-f="other"></code> 中的 <code data-f="value"></code> 使用了分号。词条只按逗号和竖线分隔，所以这会变成一个词条。',
 'b83': '第 <span data-f="row"></span> 行的单元格比标题行多。从第 <span data-f="n"></span> 列起多出来的单元格会被忽略。',
 'b84': '第 <span data-f="row"></span> 行有一个没有用引号包住的单元格里含有双引号。SteadyPost 会保留这些文字，但请检查该单元格读起来是否符合您的本意。',
 'b85': '第 <span data-f="row"></span> 行与第 <span data-f="n"></span> 行的<span data-by="ref">行 ID</span><span data-by="slug">slug</span><span data-by="title">标题</span>相同，所以两者是同一篇文章：第 <span data-f="n"></span> 行创建它，这一行更新它，以这一行的值为准。如果 Settings 中关闭了 "update existing"，这一行会被跳过。试运行不会在行与行之间比较，所以会把两者都显示为新文章。',
 'b86': '还有 <span data-f="n"></span> 条类似的。',
 'b103': 'SteadyPost 逐列检查的内容',
 'b104': '列',
 'b105': '也可识别为',
 'b106': 'SteadyPost 如何处理',
 'b109': '唯一必填的列。没有标题的行会被跳过。',
 'b112': '接受 draft、publish、published、live、pending、review、private、scheduled 和 future，不分大小写。其他值或留空，会使用 Settings 中的默认状态。',
 'b115': '按您网站的时区读取。定时发布的行必须有此值，否则会变成草稿。只叫 "Date" 的列不会被识别。',
 'b118': '按逗号或竖线分隔。尚不存在的词条会被创建。',
 'b121': '以 http:// 或 https:// 开头的网址会下载到媒体库。其他值会被当作图片 zip 或媒体库中的文件名。',
 'b124': '设定文章的网址，并在您再次导入该文件时用来识别这一行。',
 'b127': '更新那篇现有文章。由 SteadyPost 的导出功能写入，用于批量编辑。',
 'b130': '纯文本、Markdown 或 HTML，逐行自动识别。',
 'b133': '用户名、电邮地址或用户 ID。找不到匹配时使用默认作者。',
 'b136': '写入 Yoast SEO、Rank Math 或 SEOPress，以当前启用的为准。',
 'b138': '自定义字段和自定义分类法，像标签一样分隔。键名开头的下划线会被去掉，所以无法写入受保护的字段。',
 'b139': 'SteadyPost 在很多方面都很宽松，所以此检查工具不会对以下情况提出警告：',
 'b140': '列的顺序，以及标题名称中的大小写、空格和标点。',
 'b141': '空行、标题上方的空行，以及值前后的空格。',
 'b142': '以分号分隔的文件，即在使用小数逗号的国家里 Excel 保存的格式。',
 'b143': '以 Windows-1252 而不是 UTF-8 保存的文件，无论有没有字节顺序标记（BOM）。',
 'b144': '单元格比标题少的行：缺少的单元格视为空白。',
 'b145': '在 Excel 中输入、导出后变成天数编号的日期。',
 'b146': '常见问题',
 'b147': 'SteadyPost 需要哪些列？',
 'b148': '只需要标题。其他列都是可选的，无法识别的列除非您在导入页面中映射，否则会被忽略。标题名称的匹配不分大小写、空格或标点，所以 "Publish Date"、"publish_date" 和 "PUBLISH-DATE" 是同一列。',
 'b149': '应该用什么日期格式？',
 'b150': '请使用 YYYY-MM-DD HH:MM，例如 2026-11-01 09:00。SteadyPost 会按您网站的时区读取。带斜线的日期按月份在前读取，所以 03/11/2026 会变成 3 月 11 日，而 13/11/2026 完全无法读取。带连字符或点的日期，例如 03-11-2026，按日期在前读取。',
 'b151': '分类和标签怎么分隔？',
 'b152': '用逗号或竖线，例如 News, Events 或 News | Events。分号不是分隔符。尚不存在的分类和标签会在导入时创建。',
 'b153': '为什么重音字母或中文会变成乱码？',
 'b154': 'SteadyPost 按 UTF-8 读取 CSV。如果文件不是有效的 UTF-8，它会当作 Windows-1252，即 Windows 上 Excel 保存普通 CSV 时使用的编码。这样能保留西欧语言的重音字母，但中文、淡米尔文等文字会变成乱码。请在 Excel 中改存为 CSV UTF-8（逗号分隔）。',
 'b155': '同一个文件导入两次会产生重复文章吗？',
 'b156': '不会。每一行会依次按 Ref 列、slug、标题匹配到它之前创建的文章，并更新那篇文章。同一个文件内也一样：slug 或标题相同的两行会成为同一篇文章，以后面那一行的值为准。',
 'b157': '<span class="f-callout__label">SteadyPost</span>\n          一款免费的 WordPress 插件，把 CSV 或 Excel 文件的每一行变成一篇文章，提供预览、试运行和一键撤销。<a href="steadypost.html">了解它如何运作 →</a>',
 'b158': '为马来西亚企业承受不起损失的系统，提供软件与工程服务。',
 'b159': '产品与服务',
 'b160': '<a href="solutions.html">工程服务</a>',
 'b161': '<a href="einvoice.html">EInvoice 平台</a>',
 'b162': '<a href="venue-booking.html">Venue Booking</a>',
 'b164': '公司',
 'b165': '<a href="about.html">关于我们</a>',
 'b166': '<a href="portfolio.html">案例研究</a>',
 'b167': '<a href="blog/index.html">博客</a>',
 'b168': '<a href="contact.html">联系我们</a>',
 'b169': '更多',
 'b170': '<a href="pricing-terms.html">价格条款</a>',
 'b171': '<a href="my-account.html">我的账户</a>',
}
SCRIPT = {'Which columns does SteadyPost need?': 'SteadyPost 需要哪些列？',
 'Only a title. Every other column is optional, and columns it doesn\'t recognise are ignored unless you map them on the Import screen. Header names are matched without regard to case, spaces or punctuation, so \\"Publish Date\\", \\"publish_date\\" and \\"PUBLISH-DATE\\" are the same column.': '只需要标题。其他列都是可选的，无法识别的列除非您在导入页面中映射，否则会被忽略。标题名称的匹配不分大小写、空格或标点，所以 '
                                                                                                                                                                                                                                                                                                        '\\"Publish '
                                                                                                                                                                                                                                                                                                        'Date\\"、\\"publish_date\\" '
                                                                                                                                                                                                                                                                                                        '和 '
                                                                                                                                                                                                                                                                                                        '\\"PUBLISH-DATE\\" '
                                                                                                                                                                                                                                                                                                        '是同一列。',
 'What date format should I use?': '应该用什么日期格式？',
 "Use YYYY-MM-DD HH:MM, for example 2026-11-01 09:00. SteadyPost reads it in your site's timezone. Dates with slashes are read month first, so 03/11/2026 becomes 11 March, and 13/11/2026 can't be read at all. Dates with dashes or dots, such as 03-11-2026, are read day first.": '请使用 '
                                                                                                                                                                                                                                                                                      'YYYY-MM-DD '
                                                                                                                                                                                                                                                                                      'HH:MM，例如 '
                                                                                                                                                                                                                                                                                      '2026-11-01 '
                                                                                                                                                                                                                                                                                      '09:00。SteadyPost '
                                                                                                                                                                                                                                                                                      '会按您网站的时区读取。带斜线的日期按月份在前读取，所以 '
                                                                                                                                                                                                                                                                                      '03/11/2026 '
                                                                                                                                                                                                                                                                                      '会变成 '
                                                                                                                                                                                                                                                                                      '3 '
                                                                                                                                                                                                                                                                                      '月 '
                                                                                                                                                                                                                                                                                      '11 '
                                                                                                                                                                                                                                                                                      '日，而 '
                                                                                                                                                                                                                                                                                      '13/11/2026 '
                                                                                                                                                                                                                                                                                      '完全无法读取。带连字符或点的日期，例如 '
                                                                                                                                                                                                                                                                                      '03-11-2026，按日期在前读取。',
 'How do I separate categories and tags?': '分类和标签怎么分隔？',
 "With commas or vertical bars, such as News, Events or News | Events. Semicolons are not separators. Categories and tags that don't exist yet are created during the import.": '用逗号或竖线，例如 '
                                                                                                                                                                                'News, '
                                                                                                                                                                                'Events '
                                                                                                                                                                                '或 '
                                                                                                                                                                                'News '
                                                                                                                                                                                '| '
                                                                                                                                                                                'Events。分号不是分隔符。尚不存在的分类和标签会在导入时创建。',
 'Why do accents or Chinese characters come out wrong?': '为什么重音字母或中文会变成乱码？',
 "SteadyPost reads a CSV as UTF-8. If the file isn't valid UTF-8, it assumes Windows-1252, the encoding Excel uses for plain CSV on Windows. That keeps Western European accents but garbles Chinese, Tamil and other scripts. In Excel, save as CSV UTF-8 (Comma delimited) instead.": 'SteadyPost '
                                                                                                                                                                                                                                                                                        '按 '
                                                                                                                                                                                                                                                                                        'UTF-8 '
                                                                                                                                                                                                                                                                                        '读取 '
                                                                                                                                                                                                                                                                                        'CSV。如果文件不是有效的 '
                                                                                                                                                                                                                                                                                        'UTF-8，它会当作 '
                                                                                                                                                                                                                                                                                        'Windows-1252，即 '
                                                                                                                                                                                                                                                                                        'Windows '
                                                                                                                                                                                                                                                                                        '上 '
                                                                                                                                                                                                                                                                                        'Excel '
                                                                                                                                                                                                                                                                                        '保存普通 '
                                                                                                                                                                                                                                                                                        'CSV '
                                                                                                                                                                                                                                                                                        '时使用的编码。这样能保留西欧语言的重音字母，但中文、淡米尔文等文字会变成乱码。请在 '
                                                                                                                                                                                                                                                                                        'Excel '
                                                                                                                                                                                                                                                                                        '中改存为 '
                                                                                                                                                                                                                                                                                        'CSV '
                                                                                                                                                                                                                                                                                        'UTF-8（逗号分隔）。',
 'Will importing the same file twice create duplicate posts?': '同一个文件导入两次会产生重复文章吗？',
 "No. Each row is matched to the post it created, by a Ref column, then the slug, then the title, and that post is updated. The same applies inside one file: two rows with the same slug or title become one post, and the later row's values win.": '不会。每一行会依次按 '
                                                                                                                                                                                                                                                      'Ref '
                                                                                                                                                                                                                                                      '列、slug、标题匹配到它之前创建的文章，并更新那篇文章。同一个文件内也一样：slug '
                                                                                                                                                                                                                                                      '或标题相同的两行会成为同一篇文章，以后面那一行的值为准。'}
