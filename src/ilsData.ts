export interface ILSStructure {
  name: string;
  slug: string;
  type: 'pairs' | 'small-group' | 'whole-class';
  description: string;
  steps: string[];
}

export interface ILSCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  structures: ILSStructure[];
}

export const ILS_CATEGORIES: ILSCategory[] = [
  {
    id: 'pairs',
    name: 'Pairs',
    icon: '👥',
    color: 'sky',
    description: 'Struktur berpasangan untuk membangun kepercayaan diri sebelum diskusi kelompok besar.',
    structures: [
      {
        name: 'Inside-Outside Circles',
        slug: 'inside-outside-circles',
        type: 'pairs',
        description: 'Siswa membentuk dua lingkaran (dalam dan luar) dan saling berhadapan. Mereka berdiskusi berpasangan, lalu lingkaran luar bergeser untuk bertemu partner baru.',
        steps: [
          'Sampaikan tujuan belajar kepada siswa.',
          'Bentuk kelas jadi 2 kelompok besar.',
          'Kelompok 1 membentuk lingkaran dalam, kelompok 2 lingkaran luar. Berdiri saling berhadapan.',
          'Berikan 1 pertanyaan, berikan waktu siswa berpikir.',
          'Siswa saling berbagi jawabannya ke siswa di hadapannya.',
          'Setelah timer berbunyi, siswa kelompok luar bergeser menghadap ke siswa selanjutnya (kelompok 1).',
          'Ulangi dengan pertanyaan baru.'
        ]
      },
      {
        name: 'Quiz Trade',
        slug: 'quiz-trade',
        type: 'pairs',
        description: 'Siswa membuat kartu pertanyaan sendiri, lalu berkeliling kelas untuk saling menguji dan bertukar kartu dengan teman.',
        steps: [
          'Sampaikan tujuan belajar.',
          'Bagikan siswa beberapa lembar kertas. Potong kertas menjadi setengah ukuran A4. Buat minimal 3 buah.',
          'Lipat 2, kertas ukuran setengah HVS tadi. Kita sebut sebagai kartu.',
          'Bagian luar tulis pertanyaan, bagian dalam adalah kunci jawabannya.',
          'Siswa berkeliling kelas, temukan 1 orang untuk diberikan pertanyaan yang kita miliki.',
          'Jika sudah saling bertanya, tukar kartu dan cari partner lain.'
        ]
      },
      {
        name: 'Swap Meet',
        slug: 'swap-meet',
        type: 'pairs',
        description: 'Siswa menuliskan jawaban individu, lalu berkeliling untuk mengumpulkan jawaban dari teman-teman dan berbagi dalam lingkaran.',
        steps: [
          'Sampaikan tujuan belajar.',
          "Berikan pertanyaan 'open-ended'. Berikan siswa waktu untuk menjawab secara individu.",
          'Tuliskan jawaban di selembar kertas. Tuliskan no 1 pada jawaban siswa tersebut.',
          'Sinyal siswa untuk mencari 1 partner dan dengarkan jawaban mereka.',
          'Tambahkan jawaban teman tersebut sebagai no 2, dapatkan partner lain dan tuliskan jawabannya sebagai no 3.',
          "Setelah selesai, berkumpul dalam lingkaran dan berbagi hasil 'swap meet'-nya."
        ]
      }
    ]
  },
  {
    id: 'whole-class',
    name: 'Whole Class',
    icon: '🏛️',
    color: 'emerald',
    description: 'Struktur untuk seluruh kelas yang mendorong partisipasi aktif semua siswa.',
    structures: [
      {
        name: 'Four Corners',
        slug: 'four-corners',
        type: 'whole-class',
        description: 'Guru memberikan pertanyaan dengan 4 pilihan jawaban. Setiap sudut ruangan mewakili satu pilihan. Siswa memilih dan berdiskusi dengan kelompok di sudut yang sama.',
        steps: [
          'Sampaikan tujuan belajar.',
          'Berikan pertanyaan yang memiliki 4 kemungkinan jawaban.',
          'Tentukan 4 sudut ruangan. Berikan nama sesuai 4 respon pada masing-masing pojok kelas.',
          'Berikan waktu berpikir. Sediakan waktu bagi siswa menjawab dan memilih pojok mana yang sesuai.',
          'Diskusi Pojokan: Siswa diskusi pertanyaan bersama teman-temannya yang memiliki respon sejenis.'
        ]
      }
    ]
  },
  {
    id: 'small-group',
    name: 'Small Groups',
    icon: '👨‍👩‍👧‍👦',
    color: 'purple',
    description: 'Struktur kelompok kecil untuk diskusi mendalam dan kolaborasi.',
    structures: [
      {
        name: 'The Last Word',
        slug: 'the-last-word',
        type: 'small-group',
        description: 'Kelompok kecil bekerja sama untuk menghasilkan kata-kata yang dimulai dari huruf-huruf tertentu, lalu mempresentasikan hasilnya.',
        steps: [
          'Sampaikan tujuan belajar.',
          'Bentuk kelompok kecil dan bagi tugas: ada yang sebagai perekam dan presenter.',
          'Tuliskan 1 contoh kata di papan tulis.',
          'Minta siswa tulis 1 kata pilihan mereka (atau ditentukan guru), tulis memanjang ke bawah.',
          'Berikan waktu berpikir. Tuliskan 1 kata yang diawali oleh setiap huruf di kata yang dipilih di awal. Recorder yang mencatat semua.',
          'Nyalakan Timer. Setelah selesai, presenter membagikan hasil diskusi kelompok di depan kelas dan menjelaskan masing-masing kata tersebut.'
        ]
      },
      {
        name: "Maitre D'",
        slug: 'maitre-d',
        type: 'small-group',
        description: "Guru memanggil ukuran kelompok yang berbeda-beda ('Table for three', 'Table for four') untuk mendorong siswa bergerak dan berdiskusi dalam komposisi yang berubah-ubah.",
        steps: [
          'Sampaikan tujuan belajar.',
          "Berikan 1 pertanyaan yang bersifat 'open-ended'.",
          'Call out: \"Table for three.\" Siswa berkelompok dengan 3 orang dan diskusi jawaban dengan grup kecil tersebut.',
          'Call out: \"Table for Four.\" Siswa bergerak lagi dan berikan pertanyaan lain untuk didiskusikan.',
          'Continue: Ulangi beberapa kali dengan angka yang berbeda-beda.'
        ]
      }
    ]
  }
];
