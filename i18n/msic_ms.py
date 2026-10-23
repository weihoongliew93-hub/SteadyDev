import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import FOOT
HEAD = {
    'title': 'Carian Kod MSIC untuk e-Invois LHDN | SteadyDevs',
    'description': 'Cari kesemua 1,175 kod MSIC yang diterima LHDN pada e-Invois, mengikut kod atau aktiviti perniagaan. Percuma, daripada senarai rasmi LHDN (Oktober 2026).',
}
ATTR = {'e.g. restaurant, software, 47111': 'cth. restaurant, software, 47111'}
SECTIONS = ['Pertanian, perhutanan dan perikanan', 'Perlombongan dan pengkuarian', 'Pembuatan',
    'Bekalan elektrik, gas, wap dan pendingin udara', 'Bekalan air; pembetungan, pengurusan sisa dan aktiviti pemulihan',
    'Pembinaan', 'Perdagangan borong dan runcit; pembaikan kenderaan bermotor dan motosikal', 'Pengangkutan dan penyimpanan',
    'Penginapan dan aktiviti perkhidmatan makanan dan minuman', 'Maklumat dan komunikasi', 'Aktiviti kewangan dan insurans/takaful',
    'Aktiviti hartanah', 'Aktiviti profesional, saintifik dan teknikal', 'Aktiviti pentadbiran dan khidmat sokongan',
    'Pentadbiran awam dan pertahanan; aktiviti keselamatan sosial wajib', 'Pendidikan', 'Aktiviti kesihatan kemanusiaan dan kerja sosial',
    'Kesenian, hiburan dan rekreasi', 'Aktiviti perkhidmatan lain', 'Aktiviti isi rumah sebagai majikan',
    'Aktiviti organisasi dan badan di luar wilayah']
FAQ = [
 ('What is an MSIC code?', 'Apakah kod MSIC?',
  'The Malaysia Standard Industrial Classification code: five digits describing a business activity. LHDN requires the seller\'s MSIC code on every e-invoice, and it must be one of the codes on LHDN\'s own list, which is what this page shows.',
  'Kod Piawaian Klasifikasi Industri Malaysia: lima digit yang menerangkan aktiviti perniagaan. LHDN mewajibkan kod MSIC penjual pada setiap e-Invois, dan ia mesti salah satu kod dalam senarai LHDN sendiri, iaitu senarai di halaman ini.'),
 ('Where do I find my business\'s MSIC code?', 'Di mana saya boleh mencari kod MSIC perniagaan saya?',
  'It is usually in your SSM registration details and in what you declared to LHDN. If you are not sure which applies, search this page for your main activity and confirm with your tax agent.',
  'Biasanya ia terdapat dalam butiran pendaftaran SSM anda dan dalam maklumat yang anda isytiharkan kepada LHDN. Jika tidak pasti, cari aktiviti utama anda di halaman ini dan sahkan dengan ejen cukai anda.'),
 ('Which code should I use if my business does several things?', 'Kod mana patut saya gunakan jika perniagaan saya menjalankan beberapa aktiviti?',
  'Use the code that describes the activity you mainly carry on. Your tax agent can confirm the right one for your registration.',
  'Gunakan kod yang menerangkan aktiviti utama yang anda jalankan. Ejen cukai anda boleh mengesahkan kod yang betul untuk pendaftaran anda.'),
 ('Why was my e-invoice rejected for its MSIC code?', 'Kenapa e-Invois saya ditolak kerana kod MSIC?',
  'Usually because the code is not on LHDN\'s list (some older lists and software contain codes LHDN does not accept) or the description does not match the code. Every code on this page is one LHDN accepts.',
  'Biasanya kerana kod itu tiada dalam senarai LHDN (sesetengah senarai dan perisian lama mengandungi kod yang tidak diterima LHDN) atau penerangannya tidak sepadan dengan kod. Setiap kod di halaman ini diterima oleh LHDN.'),
]
B = {
 'b0': 'Langkau ke kandungan',
 'b1': 'Alat percuma · e-Invois LHDN',
 'b2': 'Carian kod MSIC',
 'b3': 'Setiap e-Invois mesti mengandungi kod MSIC lima digit penjual, dan LHDN hanya menerima kod dalam senarainya sendiri. Cari kesemua 1,175 kod mengikut nombor kod atau aktiviti perniagaan anda. Penerangan aktiviti dipaparkan dalam Bahasa Inggeris, seperti yang diterbitkan oleh LHDN.',
 'b4': 'Cari', 'b5': 'Seksyen', 'b6': 'Semua seksyen',
 'b28': '1,175 kod', 'b29': 'Kod', 'b30': 'Aktiviti', 'b31': 'Seksyen',
 'b3557': 'Klik kod untuk menyalinnya. Sumber: <a href="https://sdk.myinvois.hasil.gov.my/codes/msic-codes/">LHDN MyInvois SDK, kod subkategori MSIC</a>, diperoleh pada 22 Oktober 2026.',
 'b3558': '<span class="f-callout__label">Disemak sebelum sampai ke LHDN</span> Platform e-Invois SteadyDevs menolak sebarang kod MSIC yang tiada dalam senarai ini, bersama peraturan LHDN yang lain, sebelum invois dihantar. <a href="einvoice.html">Lihat platform e-Invois →</a>',
 'b3559': 'Soalan lazim',
}
for i, s in enumerate(SECTIONS):
    B[f'b{7 + i}'] = f'{chr(65 + i)} · {s}'
for i, (_, q, _, a) in enumerate(FAQ):
    B[f'b{3560 + 2 * i}'] = q; B[f'b{3561 + 2 * i}'] = a
for i, v in enumerate(FOOT['ms']):
    B[f'b{3568 + i if i < 5 else 3569 + i}'] = v
SCRIPT = {"' code' : ' codes'": "' kod' : ' kod'", "'Copied'": "'Disalin'"}
for en_q, q, en_a, a in FAQ:
    SCRIPT[en_q] = q
    SCRIPT[en_a] = a
