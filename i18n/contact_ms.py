import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from footer_i18n import footer
HEAD = {
    'title': 'Hubungi SteadyDevs: Bantuan Sistem Lama & e-Invois',
    'description': 'Konsultasi percuma 30 minit dan penilaian bertulis untuk sistem atau e-Invois anda. Jurutera kanan di Malaysia; kami membalas dalam satu hari bekerja.',
}
ATTR = {
    'e.g., Bug fix needed': 'cth. Perlu membaiki pepijat',
    'Tell us about your problem or project...': 'Ceritakan tentang masalah atau projek anda...',
    'Not sure yet': 'Belum pasti',
    'Projects (fixed price)': 'Projek (harga tetap)',
    'Hire an engineer (monthly)': 'Upah jurutera (bulanan)',
    'Cloud cost': 'Kos awan',
    'E-invoicing': 'e-Invois',
}
B = {
 'b0': 'Langkau ke kandungan',
 'b1': 'Hubungi',
 'b2': 'Mari bincang tentang <span class="f-dim">sistem anda.</span>',
 'b3': 'Ceritakan apa yang berlaku. Anda akan mendapat sesi strategi percuma dan penilaian bertulis dengan cadangan yang jelas dan realistik, tanpa tekanan untuk meneruskan. Anda boleh menulis dalam Bahasa Malaysia.',
 'b4': 'Hantar mesej kepada kami',
 'b5': 'Bukan orang teknikal? Terangkan sahaja apa yang berlaku dan kesannya kepada perniagaan anda.',
 'b6': '✅ Terima kasih! Mesej anda telah dihantar. Kami akan membalas dalam 1–2 hari bekerja.',
 'b7': '❌ Maaf, berlaku ralat. Sila cuba lagi atau e-mel terus kepada kami di contact@steadydevs.com',
 'b8': 'Nama anda *',
 'b9': 'E-mel anda *',
 'b10': 'Subjek',
 'b11': 'Pakej yang diminati (pilihan)',
 'b12': 'Pilih pakej...',
 'b13': 'Sesi strategi percuma (tanpa caj)',
 'b14': 'Belum pasti / perlukan panduan',
 'b16': 'Penyelamatan Sistem Lama (dari RM3,860)',
 'b17': 'Pemahaman Sistem &amp; Pelan Hala Tuju (dari RM6,840)',
 'b18': 'Projek Penstabilan Sistem (dari RM10,760)',
 'b19': 'Automasi Perniagaan (dari RM6,840)',
 'b20': 'Automasi Tunggal (dari RM2,940)',
 'b21': 'Pemeriksaan Kesihatan Sistem (RM387, diagnostik sekali)',
 'b22': 'Penasihat (RM497 sebulan)',
 'b23': 'Jurutera separuh masa (RM1,476 sebulan)',
 'b24': 'Jurutera pasukan (RM2,476 sebulan)',
 'b25': 'Ketua kejuruteraan (RM4,452 sebulan)',
 'b26': 'Belum pasti pelan mana',
 'b27': 'Triage percuma',
 'b28': 'Penalaan (RM1,976)',
 'b29': 'Audit penuh (dari RM5,860)',
 'b30': 'Pelaksanaan (dari RM2,940)',
 'b31': 'Platform EInvoice - Akses Awal (beta)',
 'b43': 'Mesej *',
 'b44': 'Hantar mesej',
 'b45': 'Atau e-mel terus: <a href="mailto:contact@steadydevs.com">contact@steadydevs.com</a>',
 'b46': '<span class="f-sys__title">NOTIS</span><span class="f-sys__tag">LANGKAH SETERUSNYA</span>',
 'b47': '<span>1. Kami membaca mesej anda dan membalas</span><span>1–2 hari bekerja</span>',
 'b48': '<span>2. Sesi strategi percuma 30 minit</span><span class="f-sys__note">Percuma</span>',
 'b49': '<span>3. Penilaian bertulis dengan sebut harga tetap</span><span class="f-sys__note">Percuma</span>',
 'b50': 'Tiada kewajipan untuk meneruskan',
 'b51': 'E-mel',
 'b53': 'Masa respons',
 'b54': 'Dalam 1–2 hari bekerja, dengan keutamaan untuk pertanyaan yang terperinci',
 'b55': 'Waktu tersedia',
 'b56': 'Setiap hari, waktu Malaysia (GMT+8). Paling sesuai untuk penambahbaikan yang dirancang, bukan kecemasan segera.',
 'b57': 'Lokasi',
 'b58': 'Berpangkalan di Malaysia, berkhidmat untuk pelanggan di seluruh dunia',
 'b59': 'Apa yang perlu disertakan',
 'b60': 'Penerangan ringkas tentang sistem anda dan masalahnya',
 'b61': 'Apa yang telah anda cuba setakat ini, jika ada',
 'b62': 'Jadual masa anda dan tahap kesegeraannya',
 'b63': 'Julat bajet yang anda pertimbangkan, supaya kami boleh mencadangkan pilihan yang sesuai',
 'b64': 'Sebarang kekangan atau keperluan',
}
B.update(footer('ms', 65))
SCRIPT = {"'Send Message'": "'Hantar mesej'", "'Sending...'": "'Menghantar...'"}

# Setup service section (and contact options), added 16 Nov 2026.
B.update({
 "b32": "Persediaan berpandu (RM490 sekali sahaja)",
 "b33": "Sambungan sistem (dari RM1,490)"
})
# Single Fix tier (Nov 2026).
B.update({
 "b15": "Pembetulan Tunggal (dari RM590)"
})

# "How did you hear about us?" box (lead-source tracking), added 22 Nov 2026.
B.update({
 'b34': 'Bagaimana anda mengetahui tentang kami? (pilihan)',
 'b35': 'Pilih satu...',
 'b36': 'Instagram',
 'b37': 'LinkedIn',
 'b38': 'Carian Google',
 'b39': 'Facebook',
 'b40': 'Rakan atau rakan sekerja',
 'b41': 'Pembantu AI (ChatGPT dll.)',
 'b42': 'Lain-lain'
})
