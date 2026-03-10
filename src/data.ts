export interface Routine {
  name: string;
  slug: string;
  description: string;
  steps: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  routines: Routine[];
}

const r = (name: string, slug: string, description: string, steps: string[]): Routine => ({ name, slug, description, steps });

export const CATEGORIES: Category[] = [
  {
    id: 'core',
    name: 'Core Thinking Routines',
    icon: '🧠',
    color: 'amber',
    routines: [
      r('See Think Wonder', 'see-think-wonder', 'Rutinitas dasar untuk mengamati secara seksama, menafsirkan apa yang dilihat, dan mengajukan pertanyaan. Cocok untuk memulai topik baru dengan gambar atau objek.', ['Tampilkan gambar/objek kepada siswa', 'Tanyakan: Apa yang kamu LIHAT?', 'Tanyakan: Apa yang kamu PIKIRKAN tentang ini?', 'Tanyakan: Apa yang membuat kamu BERTANYA-TANYA?', 'Diskusikan jawaban bersama kelas']),
      r('Think Pair Share', 'think-pair-share', 'Siswa berpikir sendiri, lalu berdiskusi berpasangan, kemudian berbagi ke seluruh kelas. Mendorong partisipasi semua siswa.', ['Ajukan pertanyaan atau topik', 'Beri waktu siswa BERPIKIR sendiri (1-2 menit)', 'Siswa berdiskusi BERPASANGAN', 'Pasangan BERBAGI ke kelas', 'Guru merangkum temuan']),
      r('What Makes You Say That?', 'what-makes-you-say-that', 'Mendorong siswa memberikan bukti dan alasan atas pendapat mereka. Membangun budaya berpikir berbasis bukti.', ['Siswa menyatakan pendapat/interpretasi', 'Tanyakan: Apa yang membuat kamu berkata demikian?', 'Siswa mencari bukti pendukung', 'Diskusikan kualitas bukti yang diberikan']),
      r('Connect Extend Challenge', 'connect-extend-challenge', 'Menghubungkan materi baru dengan pengetahuan lama, memperluas pemikiran, dan mengidentifikasi tantangan.', ['CONNECT: Apa hubungannya dengan yang sudah kamu tahu?', 'EXTEND: Ide baru apa yang memperluas pikiranmu?', 'CHALLENGE: Apa yang masih menantang/membingungkan?', 'Diskusikan dalam kelompok']),
      r('I Used to Think Now I Think', 'i-used-to-think-now-i-think', 'Refleksi perubahan pemikiran sebelum dan sesudah pembelajaran. Membantu siswa menyadari proses belajar mereka.', ['Di awal, catat: Dulu saya berpikir...', 'Lakukan pembelajaran/aktivitas', 'Di akhir, catat: Sekarang saya berpikir...', 'Refleksikan: Apa yang mengubah pikiranmu?']),
      r('Claim Support Question', 'claim-support-question', 'Siswa membuat klaim, mendukung dengan bukti, dan mengajukan pertanyaan. Membangun kemampuan argumentasi.', ['Buat KLAIM tentang topik', 'Cari BUKTI yang mendukung klaim', 'Ajukan PERTANYAAN yang tersisa', 'Evaluasi kekuatan argumen bersama']),
      r('Think Puzzle Explore', 'think-puzzle-explore', 'Mengaktifkan pengetahuan awal, mengidentifikasi kebingungan, dan merencanakan eksplorasi. Cocok untuk awal unit.', ['THINK: Apa yang sudah kamu ketahui tentang topik ini?', 'PUZZLE: Apa yang membuatmu bingung?', 'EXPLORE: Apa yang ingin kamu eksplorasi lebih lanjut?']),
      r('Compass Points', 'compass-points', 'Menganalisis proposisi dari 4 arah: Excited, Worrisome, Need to know, dan Stance. Untuk evaluasi ide/rencana.', ['E (Excited): Apa yang membuatmu antusias?', 'W (Worrisome): Apa yang mengkhawatirkan?', 'N (Need to know): Apa yang perlu kamu ketahui?', 'S (Stance/Steps): Apa posisimu dan langkah selanjutnya?']),
      r('Circle of Viewpoints', 'circle-of-viewpoints', 'Melihat topik dari berbagai sudut pandang atau peran yang berbeda. Mengembangkan empati dan pemahaman multiperspektif.', ['Identifikasi berbagai sudut pandang yang relevan', 'Pilih satu sudut pandang: Saya berpikir dari sudut pandang...', 'Saya berpikir... karena...', 'Pertanyaan dari sudut pandang ini adalah...', 'Ulangi untuk sudut pandang lain'])
    ]
  },
  {
    id: 'introducing',
    name: 'Introducing & Exploring Ideas',
    icon: '💡',
    color: 'yellow',
    routines: [
      r('3-2-1 Bridge', '3-2-1-bridge', 'Siswa menulis 3 kata, 2 pertanyaan, 1 metafora sebelum dan sesudah belajar, lalu membuat jembatan antara keduanya.', ['Sebelum belajar: tulis 3 kata, 2 pertanyaan, 1 metafora', 'Lakukan pembelajaran', 'Sesudah belajar: ulangi 3-2-1', 'Buat JEMBATAN: bandingkan sebelum dan sesudah']),
      r('Chalk Talk', 'chalk-talk', 'Diskusi tertulis tanpa bicara. Siswa menulis dan merespons ide di kertas/papan secara diam-diam.', ['Tulis pertanyaan/topik di kertas besar', 'Siswa menulis respons tanpa bicara', 'Siswa membaca dan merespons tulisan teman', 'Diskusikan pola yang muncul']),
      r('Creative Question Starts', 'creative-question-starts', 'Membuat pertanyaan kreatif dengan awalan seperti Mengapa, Bagaimana jika, Apa yang berubah jika.', ['Perkenalkan awalan pertanyaan kreatif', 'Siswa membuat pertanyaan dengan awalan tersebut', 'Pilih pertanyaan paling menarik untuk dieksplorasi']),
      r('The Explanation Game', 'the-explanation-game', 'Siswa menjelaskan apa yang dilihat, memberi nama, menjelaskan lebih dalam, dan memberikan alasan.', ['BERI NAMA apa yang kamu lihat', 'JELASKAN apa itu', 'BERI ALASAN mengapa demikian', 'Diskusikan penjelasan alternatif']),
      r('Parts Purposes Complexities', 'parts-purposes-complexities', 'Menganalisis bagian-bagian, tujuan masing-masing, dan kompleksitas yang tersembunyi.', ['Identifikasi BAGIAN-BAGIAN dari topik/objek', 'Tentukan TUJUAN setiap bagian', 'Temukan KOMPLEKSITAS yang tersembunyi']),
      r('Peel the Fruit', 'peel-the-fruit', 'Mengupas lapisan makna seperti mengupas buah, dari permukaan ke inti.', ['Lapisan luar: Apa yang terlihat pertama kali?', 'Lapisan tengah: Apa makna yang lebih dalam?', 'Inti: Apa esensi/pesan utamanya?']),
      r('Step in Step out Step back', 'step-in-step-out-step-back', 'Masuk ke perspektif, keluar untuk melihat konteks, mundur untuk refleksi.', ['STEP IN: Masuk ke perspektif/situasi', 'STEP OUT: Keluar dan lihat dari luar', 'STEP BACK: Mundur dan refleksikan keseluruhan']),
      r('See Think Me We', 'see-think-me-we', 'Lihat, pikirkan, hubungkan ke diri sendiri, hubungkan ke kita semua.', ['SEE: Apa yang kamu lihat?', 'THINK: Apa yang kamu pikirkan?', 'ME: Apa hubungannya dengan dirimu?', 'WE: Apa hubungannya dengan kita semua?']),
      r('Outside In', 'outside-in', 'Mulai dari konteks luar lalu masuk ke detail dalam.', ['Mulai dari konteks besar/luar', 'Bergerak ke detail yang lebih spesifik', 'Sampai ke inti/detail terdalam', 'Refleksikan hubungan luar-dalam']),
      r('Lenses', 'lenses', 'Melihat topik melalui berbagai lensa atau perspektif.', ['Pilih beberapa lensa/perspektif berbeda', 'Lihat topik melalui setiap lensa', 'Bandingkan apa yang terlihat dari setiap lensa', 'Diskusikan insight baru yang didapat']),
      r('Name Describe Act', 'name-describe-act', 'Beri nama, deskripsikan, dan lakukan aksi.', ['NAMA: Beri nama apa yang kamu amati', 'DESKRIPSIKAN: Jelaskan secara detail', 'AKSI: Apa yang bisa dilakukan?']),
      r('Imagine if...', 'imagine-if', 'Bayangkan kemungkinan alternatif untuk mengeksplorasi ide baru.', ['Ajukan pertanyaan: Bayangkan jika...', 'Siswa mengeksplorasi kemungkinan', 'Diskusikan konsekuensi dan implikasi']),
      r('Parts Perspectives Me', 'parts-perspectives-me', 'Analisis bagian-bagian, perspektif yang berbeda, dan hubungan personal.', ['PARTS: Apa saja bagian-bagiannya?', 'PERSPECTIVES: Perspektif apa yang ada?', 'ME: Apa hubungannya dengan saya?']),
      r('Walk the Week', 'walk-the-week', 'Refleksi mingguan tentang perjalanan pembelajaran.', ['Setiap hari catat satu hal yang dipelajari', 'Di akhir minggu, review semua catatan', 'Refleksikan pola dan perkembangan', 'Rencanakan minggu berikutnya']),
      r('Compass Points', 'compass-points', 'Menganalisis proposisi dari 4 arah: Excited, Worrisome, Need to know, dan Stance.', ['E: Apa yang membuatmu antusias?', 'W: Apa yang mengkhawatirkan?', 'N: Apa yang perlu diketahui?', 'S: Apa posisi dan langkahmu?']),
      r('See Think Wonder', 'see-think-wonder', 'Rutinitas observasi dasar: lihat, pikirkan, dan bertanya-tanya.', ['Apa yang kamu LIHAT?', 'Apa yang kamu PIKIRKAN?', 'Apa yang kamu INGIN TAHU?']),
      r('Think Puzzle Explore', 'think-puzzle-explore', 'Aktivasi pengetahuan awal dan perencanaan eksplorasi.', ['THINK: Apa yang kamu tahu?', 'PUZZLE: Apa yang membuatmu bingung?', 'EXPLORE: Apa yang ingin dieksplorasi?'])
    ]
  },
  {
    id: 'digging',
    name: 'Digging Deeper into Ideas',
    icon: '🔍',
    color: 'rose',
    routines: [
      r('Beauty and Truth', 'beauty-and-truth', 'Mencari keindahan dan kebenaran dalam topik melalui dua lensa berbeda.', ['Amati topik/karya', 'Cari KEINDAHAN: Apa yang menarik/indah?', 'Cari KEBENARAN: Apa yang benar/akurat?', 'Diskusikan hubungan keduanya']),
      r('Circle of Viewpoints', 'circle-of-viewpoints', 'Melihat topik dari berbagai sudut pandang berbeda.', ['Identifikasi sudut pandang', 'Eksplorasi setiap perspektif', 'Bandingkan dan diskusikan']),
      r('Claim Support Question', 'claim-support-question', 'Buat klaim, dukung dengan bukti, ajukan pertanyaan.', ['Buat KLAIM', 'Cari BUKTI pendukung', 'Ajukan PERTANYAAN']),
      r('Creative Hunt', 'creative-hunt', 'Berburu contoh kreativitas di lingkungan sekitar.', ['Tentukan fokus pencarian', 'Cari contoh kreativitas', 'Dokumentasikan temuan', 'Diskusikan mengapa itu kreatif']),
      r('Creative Questions', 'creative-questions', 'Membuat pertanyaan kreatif tentang topik untuk mendalami pemahaman.', ['Amati topik dengan seksama', 'Buat pertanyaan kreatif', 'Pilih pertanyaan terbaik untuk dieksplorasi']),
      r('Facts or Fiction', 'facts-or-fiction', 'Evaluasi informasi: apakah fakta atau fiksi.', ['Baca/amati informasi', 'Kategorikan: fakta atau fiksi?', 'Cari bukti pendukung', 'Diskusikan temuan']),
      r('Hotspots', 'hotspots', 'Identifikasi bagian panas/kontroversial dari topik.', ['Baca/amati materi', 'Tandai bagian yang kontroversial', 'Diskusikan mengapa itu kontroversial']),
      r('Layers', 'layers', 'Menggali lapisan makna dari topik, dari permukaan ke kedalaman.', ['Identifikasi lapisan permukaan', 'Gali lapisan lebih dalam', 'Temukan makna terdalam']),
      r('Options Diamond', 'options-diamond', 'Evaluasi dan rangking opsi dalam bentuk diamond.', ['Kumpulkan semua opsi', 'Rangking dari paling penting ke kurang penting', 'Susun dalam bentuk diamond', 'Diskusikan alasan ranking']),
      r('Options Explosion', 'options-explosion', 'Ledakkan semua kemungkinan opsi yang ada.', ['Brainstorm semua opsi tanpa filter', 'Kelompokkan opsi yang mirip', 'Evaluasi setiap kelompok']),
      r('Red Light Yellow Light', 'red-light-yellow-light', 'Evaluasi informasi: merah=salah, kuning=perlu cek, hijau=benar.', ['Baca informasi', 'Beri lampu MERAH (salah), KUNING (ragu), HIJAU (benar)', 'Verifikasi yang kuning']),
      r('Reporters Notebook', 'reporters-notebook', 'Catat fakta, pertanyaan, dan ide seperti seorang reporter.', ['Catat FAKTA yang ditemukan', 'Tulis PERTANYAAN yang muncul', 'Catat IDE dan insight']),
      r('Step Inside', 'step-inside', 'Masuk ke perspektif karakter atau orang tertentu.', ['Pilih karakter/orang', 'Bayangkan dirimu sebagai mereka', 'Apa yang dipikirkan, dirasakan, dipedulikan?']),
      r('Take a Stand', 'take-a-stand', 'Ambil posisi dan pertahankan dengan argumen.', ['Pahami isu/topik', 'Ambil posisi/pendirian', 'Siapkan argumen pendukung', 'Pertahankan di diskusi']),
      r('Think Feel Care', 'think-feel-care', 'Eksplorasi apa yang dipikirkan, dirasakan, dan dipedulikan karakter.', ['Apa yang DIPIKIRKAN karakter?', 'Apa yang DIRASAKAN?', 'Apa yang DIPEDULIKAN?']),
      r('Tug for Truth', 'tug-for-truth', 'Tarik ulur mencari kebenaran dari dua sisi.', ['Identifikasi dua sisi argumen', 'Cari bukti untuk setiap sisi', 'Evaluasi mana yang lebih kuat']),
      r('Tug of War', 'tug-of-war', 'Eksplorasi ketegangan antara dua sisi argumen.', ['Identifikasi dua kutub/sisi', 'Kumpulkan alasan untuk setiap sisi', 'Diskusikan ketegangan yang ada']),
      r('Unveiling Stories', 'unveiling-stories', 'Mengungkap cerita tersembunyi di balik topik.', ['Amati topik/objek', 'Cerita apa yang tersembunyi?', 'Mengapa cerita itu penting?']),
      r('Values Identities Actions', 'values-identities-actions', 'Eksplorasi nilai, identitas, dan aksi yang terkait.', ['Identifikasi NILAI yang terlibat', 'Siapa IDENTITAS yang terpengaruh?', 'AKSI apa yang bisa dilakukan?']),
      r('What Can Be', 'what-can-be', 'Eksplorasi kemungkinan perubahan dan perbaikan.', ['Apa kondisi saat ini?', 'Apa yang BISA terjadi?', 'Bagaimana mewujudkannya?']),
      r('Who am I?', 'who-am-i', 'Eksplorasi identitas melalui refleksi mendalam.', ['Siapa saya dalam konteks ini?', 'Apa yang membentuk identitas saya?', 'Bagaimana identitas mempengaruhi perspektif?']),
      r('Creative Question Starts', 'creative-question-starts', 'Membuat pertanyaan dengan awalan kreatif.', ['Gunakan awalan: Mengapa, Bagaimana jika...', 'Buat pertanyaan kreatif', 'Eksplorasi jawaban']),
      r('Outside In', 'outside-in', 'Dari konteks luar ke detail dalam.', ['Mulai dari luar/konteks', 'Masuk ke detail', 'Sampai ke inti']),
      r('Parts People Interactions', 'parts-people-interactions', 'Analisis bagian, orang yang terlibat, dan interaksinya.', ['PARTS: Apa bagian-bagiannya?', 'PEOPLE: Siapa yang terlibat?', 'INTERACTIONS: Bagaimana mereka berinteraksi?']),
      r('Peel the Fruit', 'peel-the-fruit', 'Kupas lapisan makna dari luar ke dalam.', ['Lapisan luar: tampilan awal', 'Lapisan tengah: makna lebih dalam', 'Inti: esensi utama']),
      r('Projecting Across Distance', 'projecting-across-distance', 'Memproyeksikan perspektif ke lokasi yang berbeda.', ['Pilih lokasi/konteks berbeda', 'Bagaimana topik ini terlihat dari sana?', 'Apa yang berubah?']),
      r('Projecting Across Time', 'projecting-across-time', 'Memproyeksikan perspektif ke waktu yang berbeda.', ['Pilih periode waktu berbeda', 'Bagaimana topik ini di masa lalu/depan?', 'Apa yang berubah seiring waktu?']),
      r('See Think Me We', 'see-think-me-we', 'Lihat, pikirkan, hubungkan ke diri dan komunitas.', ['SEE: Lihat', 'THINK: Pikirkan', 'ME: Hubungkan ke diri', 'WE: Hubungkan ke kita']),
      r('What Makes You Say That?', 'what-makes-you-say-that', 'Minta bukti dan alasan atas pendapat.', ['Nyatakan pendapat', 'Apa buktinya?', 'Diskusikan'])
    ]
  },
  {
    id: 'synthesizing',
    name: 'Synthesizing & Organizing Ideas',
    icon: '🧩',
    color: 'sky',
    routines: [
      r('+1 Routine', '1-routine', 'Tambahkan satu ide baru ke diskusi yang sudah ada.', ['Review ide yang sudah ada', 'Tambahkan 1 ide baru', 'Jelaskan kontribusimu']),
      r('Circles of Action', 'circles-of-action', 'Lingkaran aksi dari kecil (personal) ke besar (global).', ['Lingkaran kecil: Apa yang bisa SAYA lakukan?', 'Lingkaran sedang: Apa yang bisa KITA lakukan?', 'Lingkaran besar: Apa yang bisa dilakukan KOMUNITAS?']),
      r('Color Symbol Image', 'color-symbol-image', 'Pilih warna, simbol, dan gambar untuk merangkum pemahaman.', ['Pilih WARNA yang merepresentasikan', 'Pilih SIMBOL yang menangkap esensi', 'Buat GAMBAR yang merangkum', 'Jelaskan pilihanmu']),
      r('Generate Sort Connect Elaborate', 'generate-sort-connect-elaborate', 'Hasilkan ide, sortir, hubungkan, dan elaborasi menjadi concept map.', ['GENERATE: Hasilkan ide-ide', 'SORT: Sortir dan kelompokkan', 'CONNECT: Hubungkan antar ide', 'ELABORATE: Elaborasi lebih detail']),
      r('Headlines', 'headlines', 'Buat headline/judul yang menangkap esensi pembelajaran.', ['Apa esensi dari yang dipelajari?', 'Buat HEADLINE yang menangkapnya', 'Bandingkan headline dengan teman']),
      r('How Else and Why?', 'how-else-and-why', 'Tanyakan bagaimana lagi dan mengapa untuk memperdalam pemahaman.', ['Bagaimana LAGI cara melihat ini?', 'MENGAPA penting?', 'Apa implikasinya?']),
      r('I Used to Think Now I Think', 'i-used-to-think-now-i-think', 'Refleksi perubahan pemikiran sebelum dan sesudah belajar.', ['Catat: Dulu saya berpikir...', 'Belajar materi baru', 'Catat: Sekarang saya berpikir...', 'Refleksikan perubahan']),
      r('Word Phrase Sentence', 'word-phrase-sentence', 'Pilih 1 kata, 1 frasa, 1 kalimat penting dari materi.', ['Pilih 1 KATA yang paling penting', 'Pilih 1 FRASA yang bermakna', 'Pilih 1 KALIMAT yang menangkap esensi', 'Jelaskan alasan pilihanmu']),
      r('The 4 Cs', 'the-4-cs', 'Connections, Challenges, Concepts, Changes.', ['CONNECTIONS: Hubungan apa yang kamu temukan?', 'CHALLENGES: Apa yang menantang?', 'CONCEPTS: Konsep kunci apa?', 'CHANGES: Perubahan apa dalam pikiranmu?']),
      r('Take Note', 'take-note', 'Catat hal-hal penting secara terstruktur.', ['Catat poin-poin kunci', 'Catat pertanyaan yang muncul', 'Catat koneksi dengan pengetahuan lama']),
      r('Portable Surprise', 'portable-surprise', 'Temukan kejutan yang bisa dibawa ke konteks lain.', ['Apa yang mengejutkanmu?', 'Mengapa itu mengejutkan?', 'Di mana lagi ide ini bisa diterapkan?']),
      r('Creating Space for Learning', 'creating-space-for-learning', 'Menciptakan ruang fisik dan mental untuk pembelajaran.', ['Atur lingkungan belajar', 'Ciptakan suasana terbuka', 'Berikan waktu untuk refleksi'])
    ]
  },
  {
    id: 'investigating',
    name: 'Investigating Objects & Systems',
    icon: '⚙️',
    color: 'orange',
    routines: [
      r('Creative Hunt', 'creative-hunt', 'Berburu contoh kreativitas di lingkungan.', ['Tentukan fokus', 'Cari contoh', 'Dokumentasikan', 'Diskusikan']),
      r('Imagine if...', 'imagine-if', 'Bayangkan kemungkinan alternatif.', ['Bayangkan jika...', 'Eksplorasi kemungkinan', 'Diskusikan implikasi']),
      r('Parts People Interactions', 'parts-people-interactions', 'Analisis bagian, orang, dan interaksi dalam sistem.', ['PARTS: Bagian-bagian', 'PEOPLE: Orang yang terlibat', 'INTERACTIONS: Interaksinya']),
      r('Parts Perspectives Me', 'parts-perspectives-me', 'Bagian, perspektif, dan hubungan personal.', ['PARTS', 'PERSPECTIVES', 'ME']),
      r('Parts Purposes Complexities', 'parts-purposes-complexities', 'Bagian, tujuan, dan kompleksitas.', ['PARTS: Bagian', 'PURPOSES: Tujuan', 'COMPLEXITIES: Kompleksitas']),
      r('Slow Complexity Capture', 'slow-complexity-capture', 'Menangkap kompleksitas secara perlahan dan mendalam.', ['Amati perlahan', 'Catat setiap detail', 'Identifikasi kompleksitas', 'Refleksikan']),
      r('Think Feel Care', 'think-feel-care', 'Pikirkan, rasakan, pedulikan.', ['THINK', 'FEEL', 'CARE']),
      r('Ways Things Can Be Complex', 'ways-things-can-be-complex', 'Eksplorasi berbagai cara sesuatu bisa menjadi kompleks.', ['Identifikasi aspek kompleks', 'Kategorikan jenis kompleksitas', 'Diskusikan implikasi'])
    ]
  },
  {
    id: 'perspective',
    name: 'Perspective-Taking',
    icon: '👁️',
    color: 'emerald',
    routines: [
      r('Circle of Viewpoints', 'circle-of-viewpoints', 'Lihat dari berbagai sudut pandang.', ['Identifikasi perspektif', 'Eksplorasi masing-masing', 'Bandingkan']),
      r('Compass Points', 'compass-points', 'E-W-N-S: Excited, Worrisome, Need, Stance.', ['E: Antusias', 'W: Khawatir', 'N: Perlu tahu', 'S: Posisi']),
      r('Creating Space for Learning', 'creating-space-for-learning', 'Ciptakan ruang untuk belajar.', ['Atur lingkungan', 'Buka pikiran', 'Refleksi']),
      r('Feelings and Options', 'feelings-and-options', 'Eksplorasi perasaan dan pilihan yang tersedia.', ['Apa yang dirasakan?', 'Apa saja pilihannya?', 'Pilihan mana yang terbaik?']),
      r('Lenses', 'lenses', 'Lihat melalui lensa berbeda.', ['Pilih lensa', 'Lihat melalui setiap lensa', 'Bandingkan']),
      r('Options Diamond', 'options-diamond', 'Rangking opsi dalam diamond.', ['Kumpulkan opsi', 'Rangking', 'Diskusikan']),
      r('Options Explosion', 'options-explosion', 'Ledakkan semua opsi.', ['Brainstorm', 'Kelompokkan', 'Evaluasi']),
      r('Pass the Parcel', 'pass-the-parcel', 'Giliran berbagi ide seperti meneruskan paket.', ['Mulai dengan satu ide', 'Teruskan ke orang berikutnya', 'Setiap orang menambahkan', 'Diskusikan hasil akhir']),
      r('Projecting Across Distance', 'projecting-across-distance', 'Proyeksikan ke lokasi berbeda.', ['Pilih lokasi', 'Bagaimana terlihat dari sana?', 'Apa yang berubah?']),
      r('Projecting Across Time', 'projecting-across-time', 'Proyeksikan ke waktu berbeda.', ['Pilih waktu', 'Bagaimana di masa itu?', 'Apa yang berubah?']),
      r('Same and Different', 'same-and-different', 'Identifikasi persamaan dan perbedaan.', ['Apa yang SAMA?', 'Apa yang BERBEDA?', 'Mengapa penting?']),
      r('Same Different Connect Engage', 'same-different-connect-engage', 'Sama, beda, hubungkan, dan libatkan.', ['SAME: Persamaan', 'DIFFERENT: Perbedaan', 'CONNECT: Hubungan', 'ENGAGE: Keterlibatan']),
      r('See Think Me We', 'see-think-me-we', 'Lihat, pikirkan, diri, kita.', ['SEE', 'THINK', 'ME', 'WE']),
      r('Seek to See', 'seek-to-see', 'Berusaha untuk melihat apa yang belum terlihat.', ['Apa yang terlihat jelas?', 'Apa yang belum terlihat?', 'Bagaimana cara melihatnya?']),
      r('Step in Step out Step back', 'step-in-step-out-step-back', 'Masuk, keluar, mundur.', ['STEP IN', 'STEP OUT', 'STEP BACK']),
      r('Step Inside', 'step-inside', 'Masuk ke perspektif orang lain.', ['Pilih perspektif', 'Masuk ke dalamnya', 'Rasakan dan pikirkan']),
      r('Stop Look Listen', 'stop-look-listen', 'Berhenti, lihat, dengarkan dengan seksama.', ['STOP: Berhenti sejenak', 'LOOK: Lihat dengan seksama', 'LISTEN: Dengarkan']),
      r('Stories', 'stories', 'Gunakan cerita untuk memahami perspektif.', ['Dengarkan cerita', 'Identifikasi perspektif', 'Hubungkan dengan pengalaman']),
      r('Take a Stand', 'take-a-stand', 'Ambil posisi dan pertahankan.', ['Pahami isu', 'Ambil posisi', 'Berargumen']),
      r('The 3 Whys', 'the-3-whys', 'Tanyakan mengapa 3 kali untuk mendalami.', ['Mengapa? (level 1)', 'Mengapa? (level 2)', 'Mengapa? (level 3 - akar)']),
      r('True for Who?', 'true-for-who', 'Benar menurut siapa? Perspektif siapa?', ['Pernyataan ini benar menurut siapa?', 'Siapa yang mungkin tidak setuju?', 'Mengapa berbeda?']),
      r('Values Identities Actions', 'values-identities-actions', 'Nilai, identitas, aksi.', ['VALUES', 'IDENTITIES', 'ACTIONS']),
      r('Ways Things Can Be Complex', 'ways-things-can-be-complex', 'Cara-cara sesuatu bisa kompleks.', ['Identifikasi kompleksitas', 'Kategorikan', 'Refleksikan']),
      r('What Can Be', 'what-can-be', 'Apa yang bisa terjadi/berubah.', ['Kondisi sekarang', 'Apa yang bisa?', 'Bagaimana?'])
    ]
  },
  {
    id: 'controversies',
    name: 'Considering Controversies',
    icon: '⚖️',
    color: 'purple',
    routines: [
      r('Circle of Viewpoints', 'circle-of-viewpoints', 'Lihat kontroversi dari berbagai sudut pandang.', ['Identifikasi perspektif', 'Eksplorasi masing-masing', 'Bandingkan']),
      r('Does it fit?', 'does-it-fit', 'Evaluasi apakah sesuatu cocok/sesuai.', ['Tentukan kriteria', 'Evaluasi kesesuaian', 'Diskusikan']),
      r('Facts or Fiction', 'facts-or-fiction', 'Fakta atau fiksi.', ['Baca informasi', 'Kategorikan', 'Verifikasi']),
      r('Feelings and Options', 'feelings-and-options', 'Perasaan dan pilihan.', ['Perasaan apa?', 'Pilihan apa?', 'Evaluasi']),
      r('Here Now There Then', 'here-now-there-then', 'Bandingkan di sini-sekarang dengan di sana-dulu.', ['HERE NOW: Di sini sekarang', 'THERE THEN: Di sana dulu', 'Apa yang berubah dan mengapa?']),
      r('Hotspots', 'hotspots', 'Bagian kontroversial.', ['Identifikasi hotspot', 'Mengapa kontroversial?', 'Diskusikan']),
      r('Options Diamond', 'options-diamond', 'Rangking opsi.', ['Kumpulkan', 'Rangking', 'Diskusikan']),
      r('Options Explosion', 'options-explosion', 'Ledakkan opsi.', ['Brainstorm', 'Kelompokkan', 'Evaluasi']),
      r('Same and Different', 'same-and-different', 'Sama dan berbeda.', ['SAMA', 'BERBEDA', 'Mengapa?']),
      r('See Feel Think Wonder', 'see-feel-think-wonder', 'Lihat, rasakan, pikirkan, bertanya.', ['SEE: Apa yang dilihat?', 'FEEL: Apa yang dirasakan?', 'THINK: Apa yang dipikirkan?', 'WONDER: Apa yang dipertanyakan?']),
      r('Step in Step out Step back', 'step-in-step-out-step-back', 'Masuk, keluar, mundur.', ['STEP IN', 'STEP OUT', 'STEP BACK']),
      r('Sticking Points', 'sticking-points', 'Titik-titik yang membuat macet/sulit.', ['Identifikasi sticking points', 'Mengapa macet?', 'Bagaimana mengatasinya?']),
      r('Stop Look Listen', 'stop-look-listen', 'Berhenti, lihat, dengar.', ['STOP', 'LOOK', 'LISTEN']),
      r('Take a Stand', 'take-a-stand', 'Ambil posisi.', ['Pahami', 'Ambil posisi', 'Pertahankan']),
      r('The 4 Cs', 'the-4-cs', 'Connections, Challenges, Concepts, Changes.', ['CONNECTIONS', 'CHALLENGES', 'CONCEPTS', 'CHANGES']),
      r('Think Pair Share', 'think-pair-share', 'Pikir, pasangan, berbagi.', ['THINK', 'PAIR', 'SHARE']),
      r('True for Who?', 'true-for-who', 'Benar menurut siapa?', ['Menurut siapa benar?', 'Siapa tidak setuju?', 'Mengapa?']),
      r('Tug for Truth', 'tug-for-truth', 'Tarik ulur kebenaran.', ['Dua sisi', 'Bukti masing-masing', 'Evaluasi']),
      r('Tug of War', 'tug-of-war', 'Ketegangan dua sisi.', ['Dua kutub', 'Alasan masing-masing', 'Diskusikan']),
      r('Values Identities Actions', 'values-identities-actions', 'Nilai, identitas, aksi.', ['VALUES', 'IDENTITIES', 'ACTIONS']),
      r('Who am I?', 'who-am-i', 'Siapa saya dalam konteks ini.', ['Siapa saya?', 'Apa yang membentuk saya?', 'Bagaimana pengaruhnya?'])
    ]
  },
  {
    id: 'generating',
    name: 'Generating Possibilities & Analogies',
    icon: '💡',
    color: 'lime',
    routines: [
      r('3-2-1 Bridge', '3-2-1-bridge', '3 kata, 2 pertanyaan, 1 metafora - sebelum dan sesudah.', ['3 kata, 2 pertanyaan, 1 metafora', 'Belajar', 'Ulangi', 'Buat jembatan']),
      r('Creative Comparisons', 'creative-comparisons', 'Buat perbandingan kreatif untuk memahami konsep.', ['Pilih konsep', 'Buat perbandingan kreatif', 'Jelaskan hubungannya']),
      r('Creative Question Starts', 'creative-question-starts', 'Pertanyaan dengan awalan kreatif.', ['Gunakan awalan kreatif', 'Buat pertanyaan', 'Eksplorasi']),
      r('Creative Questions', 'creative-questions', 'Pertanyaan kreatif tentang topik.', ['Amati topik', 'Buat pertanyaan kreatif', 'Pilih dan eksplorasi']),
      r('Digital Habits Checkup', 'digital-habits-checkup', 'Periksa kebiasaan digital secara kritis.', ['Review kebiasaan digital', 'Evaluasi dampaknya', 'Rencanakan perubahan']),
      r('Feelings and Options', 'feelings-and-options', 'Perasaan dan pilihan.', ['Perasaan', 'Pilihan', 'Evaluasi']),
      r('Options Diamond', 'options-diamond', 'Rangking opsi.', ['Kumpulkan', 'Rangking', 'Diskusikan']),
      r('Options Explosion', 'options-explosion', 'Ledakkan opsi.', ['Brainstorm', 'Kelompokkan', 'Evaluasi']),
      r('True for Who?', 'true-for-who', 'Benar menurut siapa?', ['Menurut siapa?', 'Siapa tidak setuju?', 'Mengapa?'])
    ]
  },
  {
    id: 'art',
    name: 'Exploring Art, Images & Objects',
    icon: '🎨',
    color: 'indigo',
    routines: [
      r('Beginning Middle End', 'beginning-middle-end', 'Identifikasi awal, tengah, dan akhir dalam karya.', ['BEGINNING: Apa awalnya?', 'MIDDLE: Apa yang terjadi di tengah?', 'END: Bagaimana akhirnya?']),
      r('Colors Shapes Lines', 'colors-shapes-lines', 'Amati warna, bentuk, dan garis dalam karya visual.', ['Amati WARNA', 'Amati BENTUK', 'Amati GARIS', 'Apa yang dikomunikasikan?']),
      r('Creative Comparisons', 'creative-comparisons', 'Perbandingan kreatif.', ['Bandingkan', 'Jelaskan hubungan', 'Diskusikan']),
      r('Creative Hunt', 'creative-hunt', 'Berburu kreativitas.', ['Cari', 'Dokumentasikan', 'Diskusikan']),
      r('Creative Questions', 'creative-questions', 'Pertanyaan kreatif.', ['Amati', 'Buat pertanyaan', 'Eksplorasi']),
      r('Elaboration Game', 'elaboration-game', 'Elaborasi penjelasan secara bertahap.', ['Jelaskan', 'Elaborasi lebih detail', 'Elaborasi lagi', 'Diskusikan']),
      r('Headlines', 'headlines', 'Buat headline.', ['Tangkap esensi', 'Buat headline', 'Bandingkan']),
      r('I Used to Think Now I Think', 'i-used-to-think-now-i-think', 'Refleksi perubahan pikiran.', ['Dulu saya berpikir...', 'Sekarang saya berpikir...']),
      r('Lenses', 'lenses', 'Lensa berbeda.', ['Pilih lensa', 'Lihat melaluinya', 'Bandingkan']),
      r('Listening Ten Times Two', 'listening-ten-times-two', 'Dengarkan 10 kali dengan fokus berbeda.', ['Dengarkan pertama kali: kesan umum', 'Dengarkan lagi: fokus detail', 'Catat perbedaan persepsi']),
      r('Looking Ten Times Two', 'looking-ten-times-two', 'Lihat 10 kali dengan fokus berbeda.', ['Lihat pertama: kesan umum', 'Lihat lagi: fokus detail', 'Catat temuan baru']),
      r('Parts Purposes Complexities', 'parts-purposes-complexities', 'Bagian, tujuan, kompleksitas.', ['PARTS', 'PURPOSES', 'COMPLEXITIES']),
      r('See Think Make Discuss', 'see-think-make-discuss', 'Lihat, pikirkan, buat, diskusikan.', ['SEE: Lihat', 'THINK: Pikirkan', 'MAKE: Buat sesuatu', 'DISCUSS: Diskusikan']),
      r('See Think Me We', 'see-think-me-we', 'Lihat, pikirkan, diri, kita.', ['SEE', 'THINK', 'ME', 'WE']),
      r('See Wonder Connect x2', 'see-wonder-connect-x2', 'Lihat, bertanya, hubungkan - dua kali.', ['SEE: Apa yang dilihat?', 'WONDER: Apa yang dipertanyakan?', 'CONNECT: Hubungkan', 'Ulangi sekali lagi']),
      r('See Think Wonder', 'see-think-wonder', 'Lihat, pikirkan, bertanya.', ['SEE', 'THINK', 'WONDER']),
      r('Slow Complexity Capture', 'slow-complexity-capture', 'Tangkap kompleksitas perlahan.', ['Amati perlahan', 'Catat detail', 'Refleksikan']),
      r('Step Inside', 'step-inside', 'Masuk ke perspektif.', ['Pilih perspektif', 'Masuk', 'Rasakan']),
      r('The Complexity Scale', 'the-complexity-scale', 'Ukur tingkat kompleksitas.', ['Tentukan skala', 'Ukur kompleksitas', 'Diskusikan']),
      r('The Explanation Game', 'the-explanation-game', 'Permainan penjelasan.', ['Beri nama', 'Jelaskan', 'Beri alasan']),
      r('Think Puzzle Explore', 'think-puzzle-explore', 'Pikir, bingung, eksplorasi.', ['THINK', 'PUZZLE', 'EXPLORE']),
      r('Thinking With Images', 'thinking-with-images', 'Berpikir menggunakan gambar/visual.', ['Pilih gambar', 'Apa yang dikomunikasikan?', 'Buat interpretasi visual']),
      r('Values Identities Actions', 'values-identities-actions', 'Nilai, identitas, aksi.', ['VALUES', 'IDENTITIES', 'ACTIONS']),
      r('What Makes You Say That?', 'what-makes-you-say-that', 'Apa buktinya?', ['Pendapat', 'Bukti', 'Diskusi'])
    ]
  },
  {
    id: 'global',
    name: 'Global Thinking',
    icon: '🌍',
    color: 'cyan',
    routines: [
      r('Beauty and Truth', 'beauty-and-truth', 'Keindahan dan kebenaran.', ['BEAUTY', 'TRUTH', 'Diskusikan']),
      r('Circles of Action', 'circles-of-action', 'Lingkaran aksi.', ['Saya', 'Kita', 'Komunitas']),
      r('How Else and Why?', 'how-else-and-why', 'Bagaimana lagi dan mengapa.', ['Bagaimana lagi?', 'Mengapa?', 'Implikasi']),
      r('Same Different Connect Engage', 'same-different-connect-engage', 'Sama, beda, hubungkan, libatkan.', ['SAME', 'DIFFERENT', 'CONNECT', 'ENGAGE']),
      r('See Feel Think Wonder', 'see-feel-think-wonder', 'Lihat, rasakan, pikirkan, bertanya.', ['SEE', 'FEEL', 'THINK', 'WONDER']),
      r('Seek to See', 'seek-to-see', 'Berusaha melihat.', ['Apa yang terlihat?', 'Apa yang belum terlihat?', 'Cara melihat']),
      r('Step in Step out Step back', 'step-in-step-out-step-back', 'Masuk, keluar, mundur.', ['STEP IN', 'STEP OUT', 'STEP BACK']),
      r('Sticking Points', 'sticking-points', 'Titik macet.', ['Identifikasi', 'Mengapa?', 'Solusi']),
      r('The 3 Whys', 'the-3-whys', 'Tiga kali mengapa.', ['Mengapa 1', 'Mengapa 2', 'Mengapa 3']),
      r('True for Who?', 'true-for-who', 'Benar menurut siapa?', ['Menurut siapa?', 'Siapa tidak setuju?', 'Mengapa?']),
      r('Unveiling Stories', 'unveiling-stories', 'Ungkap cerita tersembunyi.', ['Amati', 'Cerita apa?', 'Mengapa penting?']),
      r('Values Identities Actions', 'values-identities-actions', 'Nilai, identitas, aksi.', ['VALUES', 'IDENTITIES', 'ACTIONS'])
    ]
  }
];

export const getRoutineBySlug = (slug: string): { routine: Routine; category: Category } | null => {
  for (const cat of CATEGORIES) {
    const routine = cat.routines.find(r => r.slug === slug);
    if (routine) return { routine, category: cat };
  }
  return null;
};
