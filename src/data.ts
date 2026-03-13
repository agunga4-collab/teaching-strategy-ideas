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
      r('See Think Wonder', 'see-think-wonder', 'Mendorong observasi cermat dan interpretasi mendalam berdasarkan bukti. Tujuan: Melatih siswa mengamati dengan saksama, menyusun interpretasi, dan memunculkan rasa ingin tahu yang autentik. Aplikasi: Cocok untuk awal unit (memotivasi eksplorasi), saat mengamati objek/karya/fenomena, atau akhir unit (menerapkan pengetahuan baru). Tips Memulai: Tampilkan gambar atau objek menarik, minta siswa diam dan amati sejenak, lalu tanyakan ketiga pertanyaan secara berurutan. Catat respons siswa di papan tulis untuk diskusi bersama.', ['Tampilkan gambar/objek kepada siswa', 'Tanyakan: Apa yang kamu LIHAT?', 'Tanyakan: Apa yang kamu PIKIRKAN tentang ini?', 'Tanyakan: Apa yang membuat kamu BERTANYA-TANYA?', 'Diskusikan jawaban bersama kelas']),
      r('Think Pair Share', 'think-pair-share', 'Melibatkan semua siswa dalam berpikir dan berbagi gagasan. Tujuan: Memastikan setiap siswa memproses materi secara mandiri sebelum berdiskusi, dan meningkatkan partisipasi aktif seluruh kelas. Aplikasi: Efektif untuk pertanyaan diskusi, refleksi atas bacaan, atau pemecahan masalah di tengah atau akhir pelajaran. Tips Memulai: Ajukan pertanyaan, beri waktu berpikir diam 1-2 menit, minta siswa diskusi berpasangan, lalu undang beberapa pasangan berbagi ke kelas.', ['Ajukan pertanyaan atau topik', 'Beri waktu siswa BERPIKIR sendiri (1-2 menit)', 'Siswa berdiskusi BERPASANGAN', 'Pasangan BERBAGI ke kelas', 'Guru merangkum temuan']),
      r('What Makes You Say That?', 'what-makes-you-say-that', 'Mendorong pemikiran berbasis bukti dan penalaran interpretatif. Tujuan: Membantu siswa mendukung observasi dan interpretasi dengan bukti nyata, serta membangun budaya berpikir yang tidak berhenti pada kesan pertama. Aplikasi: Gunakan saat siswa membuat klaim, menafsirkan teks/gambar, atau berdebat. Cocok di berbagai mata pelajaran. Tips Memulai: Saat siswa menyatakan pendapat atau interpretasi, tanyakan: Apa yang membuat kamu berkata demikian? Dorong siswa merujuk pada bukti spesifik dari materi.', ['Siswa menyatakan pendapat/interpretasi', 'Tanyakan: Apa yang membuat kamu berkata demikian?', 'Siswa mencari bukti pendukung', 'Diskusikan kualitas bukti yang diberikan']),
      r('Connect Extend Challenge', 'connect-extend-challenge', 'Menghubungkan pengetahuan baru dengan yang sudah ada dan mendorong refleksi kritis. Tujuan: Membantu siswa mengintegrasikan ide baru ke dalam pemahaman yang ada, memperluas pemikiran, dan mengidentifikasi kebingungan yang masih ada. Aplikasi: Ideal setelah membaca, menonton video, atau mendengarkan ceramah. Tips Memulai: Minta siswa menjawab tiga pertanyaan: Apa yang terhubung dengan yang sudah kamu ketahui? Ide apa yang memperluas pikiranmu? Apa yang masih membingungkan atau menantang?', ['CONNECT: Apa hubungannya dengan yang sudah kamu tahu?', 'EXTEND: Ide baru apa yang memperluas pikiranmu?', 'CHALLENGE: Apa yang masih menantang/membingungkan?', 'Diskusikan dalam kelompok']),
      r('I Used to Think Now I Think', 'i-used-to-think-now-i-think', 'Mendorong refleksi atas perubahan pemikiran akibat pembelajaran baru. Tujuan: Membantu siswa menyadari dan mengartikulasikan bagaimana dan mengapa pemikiran mereka berubah. Aplikasi: Cocok di akhir unit, setelah diskusi mendalam, atau pengalaman belajar yang mengubah perspektif. Tips Memulai: Di awal, minta siswa menulis kalimat dimulai dengan Dulu saya berpikir... Setelah pembelajaran selesai, minta mereka melengkapi Sekarang saya berpikir... dan merefleksikan apa yang menyebabkan perubahan tersebut.', ['Di awal, catat: Dulu saya berpikir...', 'Lakukan pembelajaran/aktivitas', 'Di akhir, catat: Sekarang saya berpikir...', 'Refleksikan: Apa yang mengubah pikiranmu?']),
      r('Claim Support Question', 'claim-support-question', 'Membangun kemampuan berpikir dengan bukti dan mengembangkan argumen yang kuat. Tujuan: Melatih siswa membuat klaim yang didukung bukti dan mengidentifikasi pertanyaan yang masih belum terjawab. Aplikasi: Cocok saat menganalisis teks, data, sejarah, atau isu ilmiah. Tips Memulai: Minta siswa membuat satu klaim tentang topik, mencari minimal dua bukti pendukung dari materi, lalu merumuskan pertanyaan lanjutan yang muncul dari klaim dan bukti tersebut.', ['Buat KLAIM tentang topik', 'Cari BUKTI yang mendukung klaim', 'Ajukan PERTANYAAN yang tersisa', 'Evaluasi kekuatan argumen bersama']),
      r('Think Puzzle Explore', 'think-puzzle-explore', 'Mengaktifkan rasa ingin tahu dan merencanakan eksplorasi topik baru. Tujuan: Menghubungkan pengetahuan awal siswa dengan topik, mengidentifikasi ketidakpastian, dan memotivasi penyelidikan lebih lanjut. Aplikasi: Sangat cocok di awal unit atau topik baru untuk membangkitkan minat siswa. Tips Memulai: Ajak siswa menjawab tiga pertanyaan: Apa yang sudah kamu pikirkan/ketahui tentang topik ini? Apa yang membuatmu bingung atau ingin kamu selidiki? Apa yang ingin kamu eksplorasi lebih jauh?', ['THINK: Apa yang sudah kamu ketahui tentang topik ini?', 'PUZZLE: Apa yang membuatmu bingung?', 'EXPLORE: Apa yang ingin kamu eksplorasi lebih lanjut?']),
      r('Compass Points', 'compass-points', 'Mengevaluasi ide atau rencana secara menyeluruh dari empat dimensi berbeda. Tujuan: Membantu siswa mempertimbangkan aspek positif, risiko, kebutuhan informasi, dan posisi mereka terhadap suatu gagasan atau rencana. Aplikasi: Ideal untuk mengevaluasi proposal, keputusan, atau topik kontroversial. Tips Memulai: Minta siswa merespons empat arah: E (Excited - hal yang membuat antusias), W (Worrisome - hal yang mengkhawatirkan), N (Need to know - informasi yang masih dibutuhkan), S (Stance/Steps - posisi dan langkah selanjutnya).', ['E (Excited): Apa yang membuatmu antusias?', 'W (Worrisome): Apa yang mengkhawatirkan?', 'N (Need to know): Apa yang perlu kamu ketahui?', 'S (Stance/Steps): Apa posisimu dan langkah selanjutnya?']),
      r('Circle of Viewpoints', 'circle-of-viewpoints', 'Mengembangkan empati dan pemahaman multiperspektif terhadap topik atau isu. Tujuan: Melatih siswa untuk dengan sengaja mengambil berbagai sudut pandang dan menyadari bahwa perspektif yang berbeda menghasilkan pemahaman yang berbeda pula. Aplikasi: Cocok untuk topik sejarah, sains, sastra, atau isu sosial. Tips Memulai: Identifikasi berbagai sudut pandang yang relevan dengan topik, minta setiap siswa memilih satu, lalu gunakan kerangka: Saya berpikir dari sudut pandang [pilihan]... Saya berpikir... karena... Pertanyaan dari sudut pandang ini adalah...', ['Identifikasi berbagai sudut pandang yang relevan', 'Pilih satu sudut pandang: Saya berpikir dari sudut pandang...', 'Saya berpikir... karena...', 'Pertanyaan dari sudut pandang ini adalah...', 'Ulangi untuk sudut pandang lain'])
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

export const ILS_CATEGORY: Category = {
  id: 'interactive-learning',
  name: 'Interactive Learning Structures',
  icon: '🤝',
  color: 'teal',
  routines: [
    r(
      'Debate Duos',
      'debate-duos',
      'Siswa berdebat dua sisi argumen secara berpasangan untuk mempertimbangkan berbagai perspektif, lalu bertukar posisi dan berganti partner. Format: Berpasangan | Waktu: 10-15 menit | Keterampilan: Setuju dan tidak setuju dengan hormat, membuat inferensi, penalaran, berargumentasi | Variasi: Kelompok empat orang (2 posisi A, 2 posisi B).',
      [
        'Sampaikan tujuan belajar dan rumuskan isu debat yang jelas',
        'Ajarkan strategi tetap fokus dan pengendalian diri: mendengarkan dengan seksama dan menunggu giliran berbicara',
        'Pasangkan siswa dan tentukan peran: Posisi A (pro/mendukung) dan Posisi B (kontra/menentang)',
        'Beri siswa 3-5 menit untuk menyiapkan argumen dan bukti sesuai posisi masing-masing',
        'Posisi A berbicara 30 detik tanpa interupsi, lalu Posisi B berbicara 30 detik — ulangi minimal 2 kali bergantian',
        'Siswa memperbarui lembar kerja dengan informasi yang dipelajari, lalu bertukar posisi dan ulangi dengan partner baru'
      ]
    ),
    r(
      'Quiz Trade',
      'quiz-trade',
      'Setiap siswa membuat kartu kuis, lalu berkeliling untuk saling bertanya-jawab secara berpasangan, menukar kartu, dan mencari partner baru. Format: Berpasangan | Waktu: 10-15 menit | Keterampilan: Brainstorming, penalaran, merangkum, sintesis | Variasi: Siswa membuat pernyataan benar/salah atau pilihan ganda dengan jawaban dan alasannya di bagian belakang.',
      [
        'Sampaikan tujuan belajar',
        'Bagikan kertas kepada siswa — minta siswa membuat minimal 3 kartu kuis: bagian depan tulis pertanyaan, bagian belakang tulis kunci jawaban',
        'Ingatkan siswa tentang keterampilan komunikasi yang efektif: bagaimana mengajukan pertanyaan yang jelas dan ringkas',
        'Siswa berkeliling kelas dan menemukan 1 partner untuk berpasangan',
        'Partner A membacakan pertanyaan dari kartu, Partner B menjawab, lalu bergantian — beri waktu 1-2 menit per diskusi',
        'Ketika waktu habis, siswa bertukar kartu dan mencari partner baru — ulangi prosesnya',
        'Di akhir, ajak beberapa siswa berbagi satu hal menarik yang mereka pelajari dari diskusi'
      ]
    ),
    r(
      'Swap Meet',
      'swap-meet',
      'Siswa menjawab pertanyaan open-ended secara mandiri, lalu berkeliling mengumpulkan ide dari berbagai partner, dan berbagi hasilnya bersama kelas. Format: Berpasangan | Waktu: 10-15 menit | Keterampilan: Brainstorming, penalaran, tetap fokus, merangkum.',
      [
        'Sampaikan tujuan belajar',
        'Ajukan pertanyaan open-ended yang relevan dengan materi',
        'Siswa bekerja secara mandiri untuk menjawab pertanyaan dan menuliskan ide mereka di lembar kerja Swap Meet — beri nomor 1 pada jawaban pertama mereka',
        'Setelah beberapa menit, beri sinyal siswa untuk mencari 1 partner dan mendengarkan jawaban partner tersebut — catat sebagai nomor 2',
        'Siswa mencari partner lain dan menambahkan ide baru dari partner tersebut — tulis sebagai nomor 3 (dan seterusnya)',
        'Kumpulkan seluruh kelas dalam lingkaran besar dan ajak beberapa siswa berbagi satu solusi atau ide dari hasil Swap Meet'
      ]
    ),
    r(
      'Inside-Outside Circles / Parallel Lines',
      'inside-outside-circles',
      'Siswa membentuk 2 lingkaran konsentris (dalam dan luar) atau 2 barisan berhadapan, saling berbagi jawaban secara bergantian, lalu berrotasi ke partner baru. Format: Berpasangan | Waktu: 8-12 menit (3 atau 4 ronde) | Keterampilan: Penalaran, tetap fokus, merangkum, menyuarakan pendapat | Variasi: Siswa membuat pertanyaan atau topik sendiri untuk setiap ronde.',
      [
        'Sampaikan tujuan belajar',
        'Minta siswa berhitung 1 dan 2: kelompok 1 membentuk lingkaran dalam menghadap ke luar, kelompok 2 membentuk lingkaran luar menghadap ke dalam (atau berdiri dalam 2 barisan berhadapan) — setiap siswa harus berhadapan dengan 1 pasangan',
        'Ajukan pertanyaan atau topik diskusi dan beri siswa waktu berpikir sejenak',
        'Pasangan berbagi jawaban secara bergantian — batasi waktu 1-2 menit total untuk diskusi bolak-balik',
        'Siswa di lingkaran luar bergeser satu langkah ke kiri untuk membentuk pasangan baru (atau siswa di barisan bergeser satu posisi — ingatkan untuk menjaga ruang pribadi saat berpindah)',
        'Pasangan baru mendiskusikan pertanyaan yang sama atau pertanyaan baru yang diajukan guru — ulangi 3-4 ronde'
      ]
    ),
    r(
      'Maitre D',
      'maitre-d',
      'Guru mengajukan pertanyaan open-ended, lalu mengatur ukuran kelompok secara dinamis dengan memanggil ukuran meja, sehingga siswa berpindah-pindah kelompok dan mendiskusikan berbagai pertanyaan. Format: Kelompok Kecil | Waktu: 7-10 menit | Keterampilan: Penalaran, tetap fokus, menyuarakan pendapat | Variasi: Gunakan aktivitas ini untuk membangun komunitas dengan mendiskusikan favorit seperti buku, film, atau hobi.',
      [
        'Sampaikan tujuan belajar',
        'Ingatkan siswa tentang harapan saat membentuk kelompok baru: inklusif, ramah, dan penuh rasa hormat',
        'Panggil: Meja untuk dua (Table for two) — siswa dengan cepat berpasangan membentuk kelompok 2 orang pilihan sendiri (satu meja boleh 3 orang jika dibutuhkan)',
        'Ajukan pertanyaan untuk difokuskan dalam diskusi — beri siswa 1-2 menit berbagi (dengan peringatan 15 detik)',
        'Panggil: Meja untuk tiga (Table for three) — siswa membentuk kelompok baru dan diskusikan pertanyaan yang sama atau yang baru. Lanjutkan dengan Meja untuk empat (Table for four) dst.',
        'Akhiri dengan mengumpulkan seluruh kelas dan ajak beberapa siswa berbagi highlight dari diskusi mereka'
      ]
    ),
    r(
      'The Last Word',
      'the-last-word',
      'Kelompok kecil mengembangkan kata-kata atau frasa yang berasosiasi dengan setiap huruf dari sebuah kata kunci terkait topik, lalu mempresentasikan hasilnya ke kelas. Format: Kelompok Kecil | Waktu: 5-10 menit | Keterampilan: Brainstorming, berpikir kreatif, berbicara di depan umum, merangkum, sintesis | Variasi: Setiap kelompok memilih sendiri kata kunci untuk topik tersebut. Bisa dilakukan sebagai aktivitas kelas penuh.',
      [
        'Sampaikan tujuan belajar — contoh: kembangkan kata-kata terkait geometri dari sebuah kata kunci',
        'Bentuk kelompok kecil dan bagi peran: perekam (mencatat semua ide) dan presenter (mempresentasikan hasil)',
        'Tulis 1 contoh kata kunci di papan tulis — contoh: GEOMETRY',
        'Minta setiap kelompok memilih atau menerima kata kunci mereka, lalu tulis secara vertikal ke bawah di kertas atau papan interaktif',
        'Nyalakan timer: setiap kelompok menulis 1 kata atau frasa yang dimulai dengan setiap huruf dari kata kunci tersebut, yang berhubungan dengan topik. Perekam mencatat semua ide kelompok',
        'Setelah waktu habis, presenter masing-masing kelompok mempresentasikan hasilnya di depan kelas — diskusikan kata-kata terkait yang belum masuk dalam daftar'
      ]
    ),
    r(
      'Jigsaws',
      'jigsaws',
      'Untuk mendalami konten, siswa bekerja dalam kelompok ahli untuk mempelajari satu aspek topik secara mendalam, lalu berbagi pengetahuan mereka di kelompok jigsaw yang bercampur. Format: Kelompok Kecil | Waktu: 15-30 menit (tergantung konten) | Keterampilan: Bertukar pikiran, tetap fokus, merangkum, sintesis.',
      [
        'Sampaikan tujuan belajar — contoh: mengeksplorasi berbagai perspektif tentang formasi batuan',
        'Bagi siswa secara merata ke dalam kelompok ahli dan tentukan fasilitator per kelompok — setiap kelompok membaca artikel atau bagian konten yang berbeda. Ingatkan harapan: dengarkan ide satu sama lain dengan penuh rasa hormat',
        'Beri kelompok 5 menit untuk membaca artikel dan 5 menit lagi untuk menyepakati ide-ide kunci serta menuliskannya di lembar kerja Jigsaws',
        'Anggota setiap kelompok ahli berhitung: semua nomor satu membentuk kelompok jigsaw baru, semua nomor dua juga, dst. — setiap kelompok jigsaw memiliki ahli dari setiap artikel',
        'Dalam kelompok jigsaw, setiap siswa berbagi ide-ide kunci dari artikel mereka dan mencatat informasi baru di lembar kerja — guru mengingatkan: pastikan ada waktu untuk pertanyaan dan komentar',
        'Sebagai kelas, rangkum ide-ide kunci dari setiap artikel untuk memastikan semua siswa memahami keseluruhan konten'
      ]
    ),
    r(
      'Four Corners',
      'four-corners',
      'Guru mengajukan pertanyaan dengan 4 kemungkinan jawaban, setiap sudut ruangan mewakili satu jawaban. Siswa memilih sudut yang mewakili pendapat mereka, lalu berdiskusi dan berbagi alasan. Format: Kelompok Kecil | Waktu: 5-10 menit (3 atau 4 ronde) | Keterampilan: Setuju dan tidak setuju dengan hormat, penalaran, menyuarakan pendapat.',
      [
        'Sampaikan tujuan belajar',
        'Ajukan pertanyaan yang memiliki 4 kemungkinan jawaban atau respons',
        'Tentukan 4 sudut ruangan dan beri nama sesuai 4 respons pada masing-masing pojok',
        'Beri siswa waktu untuk merefleksikan pilihan mereka, lalu bergerak ke sudut yang sesuai dengan pilihan mereka',
        'Di sudut masing-masing, siswa mendiskusikan dalam kelompok kecil (atau berpasangan) mengapa mereka memilih jawaban tersebut dan memberikan alasan serta bukti',
        'Beri setiap orang sekitar 30 detik untuk berbagi, atau 1-2 menit untuk diskusi lebih bebas dengan peringatan 10 detik',
        'Ulangi dengan pertanyaan dan respons baru sesuai waktu yang tersedia'
      ]
    )
  ]
};

export const getRoutineBySlug = (slug: string): { routine: Routine; category: Category } | null => {
  // Search in VTR categories
  for (const cat of CATEGORIES) {
    const routine = cat.routines.find(r => r.slug === slug);
    if (routine) return { routine, category: cat };
  }
  // Search in ILS category
  const ilsRoutine = ILS_CATEGORY.routines.find(r => r.slug === slug);
  if (ilsRoutine) return { routine: ilsRoutine, category: ILS_CATEGORY };

  return null;
};
