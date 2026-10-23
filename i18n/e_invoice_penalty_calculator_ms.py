import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import FOOT
HEAD = {
    'title': 'Kalkulator Penalti e-Invois Malaysia (LHDN) | SteadyDevs',
    'description': 'Lihat julat denda yang dibenarkan undang-undang bagi e-Invois yang tidak dikeluarkan kepada LHDN, RM200 hingga RM20,000 setiap satu, dan kos untuk mengeluarkannya. Percuma.',
}
FAQ = [
 ('What is the penalty for not issuing an e-invoice in Malaysia?',
  'Apakah penalti jika tidak mengeluarkan e-Invois di Malaysia?',
  'It is an offence under section 120(1)(d) of the Income Tax Act 1967: a fine of RM200 to RM20,000, up to 6 months\' imprisonment, or both, for each non-compliance.',
  'Ia satu kesalahan di bawah seksyen 120(1)(d) Akta Cukai Pendapatan 1967: denda RM200 hingga RM20,000, penjara sehingga 6 bulan, atau kedua-duanya, bagi setiap ketidakpatuhan.'),
 ('Is the fine charged per invoice?',
  'Adakah denda dikenakan bagi setiap invois?',
  'LHDN\'s FAQ says the penalty applies for each non-compliance. It hasn\'t published how it counts them, so this calculator treats every invoice not issued as one. That shows the size of the exposure rather than a likely bill.',
  'Soalan Lazim LHDN menyatakan penalti dikenakan bagi setiap ketidakpatuhan. LHDN belum menerbitkan cara ia mengiranya, jadi kalkulator ini mengira setiap invois yang tidak dikeluarkan sebagai satu. Ini menunjukkan saiz risiko, bukan jumlah yang mungkin dikenakan.'),
 ('Can I be fined during the relaxation period?',
  'Bolehkah saya didenda dalam tempoh kelonggaran?',
  'Businesses whose e-invoicing started on 1 January or 1 July 2026 won\'t be prosecuted under section 120 until 31 December 2027, as long as they issue a consolidated e-invoice every month within 7 days after the month ends. A business issuing nothing at all is outside that condition.',
  'Perniagaan yang mula mengeluarkan e-Invois pada 1 Januari atau 1 Julai 2026 tidak akan didakwa di bawah seksyen 120 sehingga 31 Disember 2027, selagi mereka mengeluarkan e-Invois disatukan setiap bulan dalam tempoh 7 hari selepas akhir bulan. Perniagaan yang tidak mengeluarkan apa-apa langsung berada di luar syarat itu.'),
 ('I have already missed some months. What now?',
  'Saya sudah terlepas beberapa bulan. Apa perlu dibuat?',
  'Start issuing e-invoices now, and put the missed months right through LHDN\'s Special Voluntary Disclosure Programme before 31 December 2027 by issuing the missing or corrected e-invoices. No registration is needed.',
  'Mula mengeluarkan e-Invois sekarang, dan betulkan bulan yang terlepas melalui Program Pengakuan Sukarela Khas LHDN sebelum 31 Disember 2027 dengan mengeluarkan e-Invois yang tertinggal atau yang telah diperbetulkan. Tiada pendaftaran diperlukan.'),
 ('Are businesses under RM3 million fined?',
  'Adakah perniagaan di bawah RM3 juta didenda?',
  'Not if they qualify for the exemption. LHDN takes no e-invoice compliance action against exempt businesses. Use our checker to see whether you are exempt.',
  'Tidak, jika layak untuk pengecualian. LHDN tidak mengambil tindakan pematuhan e-Invois terhadap perniagaan yang dikecualikan. Gunakan alat semakan kami untuk melihat sama ada anda dikecualikan.'),
]
B = {
 'b0': 'Langkau ke kandungan',
 'b1': 'Alat percuma · e-Invois LHDN',
 'b2': 'Kalkulator penalti e-Invois',
 'b3': 'Tidak mengeluarkan e-Invois apabila diwajibkan ialah satu kesalahan, bagi setiap ketidakpatuhan. Masukkan berapa banyak yang akan tertinggal untuk melihat julat denda yang dibenarkan undang-undang, dan kos untuk mengeluarkannya.',
 'b4': 'Invois sebulan yang sepatutnya dikeluarkan sebagai e-Invois',
 'b5': 'Setiap invois, nota kredit atau invois bil kendiri yang anda perlu keluarkan sebagai e-Invois.',
 'b6': 'Bulan tanpa e-Invois',
 'b7': 'Dikira dari tarikh anda sepatutnya bermula. Tidak pasti? <a href="e-invoice-checker.html">Semak tarikh anda</a>.',
 'b8': 'Semak tarikh anda',
 'b9': 'Jika tiada yang dikeluarkan',
 'b10': 'Denda RM <span data-o="min"></span> hingga RM <span data-o="max"></span>',
 'b11': 'Iaitu <span data-o="count"></span> e-Invois yang tertinggal, pada RM200 hingga RM20,000 setiap satu. Mahkamah juga boleh mengenakan penjara sehingga 6 bulan. Mahkamah menentukan jumlahnya dalam julat itu.',
 'b12': 'Mengeluarkannya melalui SteadyDevs berharga <strong>RM <span data-o="cost"></span> sebulan</strong> dengan pelan <span data-o="plan"></span>.',
 'b13': 'Melebihi 20,000 invois sebulan, <a href="contact.html">hubungi kami</a> untuk pelan khas.',
 'b14': '<a href="einvoice.html">Lihat platform e-Invois →</a>',
 'b15': 'Cara pengiraan: Soalan Lazim LHDN menyatakan denda dikenakan bagi setiap ketidakpatuhan, jadi kalkulator ini mengira setiap invois yang tidak dikeluarkan sebagai satu. LHDN belum menerbitkan cara ia mengiranya dalam amalan, jadi anggap ini sebagai saiz risiko, bukan jumlah yang mungkin dikenakan. Bukan nasihat undang-undang. Disemak pada 23 Oktober 2026 berdasarkan <a href="https://www.hasil.gov.my/media/0xqitc2t/lhdnm-e-invoice-general-faqs.pdf">Soalan Lazim e-Invois LHDN (dikemas kini 4 September 2026)</a>.',
 'b16': 'Sebelum anda bimbang',
 'b17': 'Fasa 4 ada masa sehingga 2028, jika mengeluarkan e-Invois disatukan',
 'b18': 'Perniagaan yang mula mengeluarkan e-Invois pada 1 Januari atau 1 Julai 2026 berada dalam tempoh kelonggaran sehingga 31 Disember 2027. Keluarkan satu e-Invois disatukan sebulan bagi semua jualan anda, dalam tempoh 7 hari selepas akhir bulan, dan LHDN tidak akan mendakwa di bawah seksyen 120.',
 'b19': 'Bulan yang terlepas masih boleh dibetulkan',
 'b20': 'Program Pengakuan Sukarela Khas LHDN dibuka sehingga 31 Disember 2027. Anda mengeluarkan e-Invois yang tertinggal atau yang telah diperbetulkan, dan tiada pendaftaran diperlukan. Bahagian e-Invois LHDN menyifatkannya sebagai pengecualian penalti penuh bagi pengakuan yang dibuat secara telus, tanpa manipulasi yang disengajakan (<a href="https://www.nst.com.my/amp/business/corporate/2026/10/1560756/lhdn-receives-over-209-billion-e-invoices-uses-data-analytics">Bernama, 21 Oktober 2026</a>).',
 'b21': 'Soalan lazim',
 'b32': '<span class="f-callout__label">Lagi alat percuma</span> Tidak pasti sama ada anda perlu mengeluarkan e-Invois? <a href="e-invoice-checker.html">Semak dengan tiga soalan →</a> Perlukan kod MSIC penjual? <a href="msic-code-lookup.html">Cari di sini →</a>',
}
for i, (_, q, _, a) in enumerate(FAQ):
    B[f'b{22 + 2 * i}'] = q; B[f'b{23 + 2 * i}'] = a
# This footer has a SteadyPost link (b38) that the shared footer lacks; the name stays as it is.
for i, v in enumerate(FOOT['ms']):
    B[f'b{33 + i if i < 5 else 34 + i}'] = v
SCRIPT = {}
for en_q, q, en_a, a in FAQ:
    SCRIPT[en_q] = q
    SCRIPT[en_a] = a
