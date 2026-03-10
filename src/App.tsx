import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { CATEGORIES, Routine, Category } from './data';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

type View = 'home' | 'category' | 'routine' | 'ask';

const colorMap: Record<string, string> = {
  amber: 'bg-amber-50 border-amber-200 text-amber-800',
  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  rose: 'bg-rose-50 border-rose-200 text-rose-800',
  sky: 'bg-sky-50 border-sky-200 text-sky-800',
  orange: 'bg-orange-50 border-orange-200 text-orange-800',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  purple: 'bg-purple-50 border-purple-200 text-purple-800',
  lime: 'bg-lime-50 border-lime-200 text-lime-800',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-800',
};

const headerColorMap: Record<string, string> = {
  amber: 'bg-amber-500', yellow: 'bg-yellow-500', rose: 'bg-rose-500',
  sky: 'bg-sky-500', orange: 'bg-orange-500', emerald: 'bg-emerald-500',
  purple: 'bg-purple-500', lime: 'bg-lime-500', indigo: 'bg-indigo-500', cyan: 'bg-cyan-500',
};

const gradientMap: Record<string, string> = {
  amber: 'from-amber-500 to-orange-400',
  yellow: 'from-yellow-400 to-amber-400',
  rose: 'from-rose-500 to-pink-400',
  sky: 'from-sky-500 to-blue-400',
  orange: 'from-orange-500 to-red-400',
  emerald: 'from-emerald-500 to-teal-400',
  purple: 'from-purple-500 to-violet-400',
  lime: 'from-lime-500 to-green-400',
  indigo: 'from-indigo-500 to-blue-500',
  cyan: 'from-cyan-500 to-teal-400',
};

const allRoutineNames = CATEGORIES.flatMap(c => c.routines.map(r => `${r.name} (${c.name})`)).join(', ');

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const goHome = () => { setView('home'); setSelectedCategory(null); setSelectedRoutine(null); window.scrollTo(0,0); };
  const goCategory = (cat: Category) => { setSelectedCategory(cat); setView('category'); setSelectedRoutine(null); window.scrollTo(0,0); };
  const goRoutine = (routine: Routine) => { setSelectedRoutine(routine); setView('routine'); window.scrollTo(0,0); };
  const goAsk = () => { setView('ask'); setSelectedCategory(null); setSelectedRoutine(null); window.scrollTo(0,0); };

  const handleAsk = async () => {
    if (!question.trim() || loading) return;
    setLoading(true); setAiAnswer('');
    try {
      const prompt = `Kamu adalah konsultan pendidikan ahli Visible Thinking Routines dari Harvard Project Zero. Guru bertanya:\n\n"${question}"\n\nDaftar routine: ${allRoutineNames}\n\nRekomendasikan 2-3 routine PALING COCOK. Untuk setiap routine: 1) Nama, 2) Mengapa cocok (1-2 kalimat), 3) Contoh penerapan singkat. Jawab Bahasa Indonesia, singkat dan praktis.`;
      const response = await ai.models.generateContent({ model: 'gemini-2.0-flash', contents: prompt });
      setAiAnswer(response.text || 'Tidak ada jawaban.');
    } catch (e) { setAiAnswer('Maaf, terjadi kesalahan. Silakan coba lagi.'); }
    setLoading(false);
  };

  const isHome = view === 'home';
  const isAsk = view === 'ask';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* === HEADER / NAVBAR === */}
      <header className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 shadow-lg shadow-indigo-200/50 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={goHome} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center group-hover:bg-white/30 transition">
                <span className="text-white text-lg">💡</span>
              </div>
              <div className="text-left">
                <h1 className="text-white font-bold text-base leading-tight">Teaching Strategy Ideas</h1>
                <p className="text-indigo-200 text-[11px] leading-tight">Visible Thinking Routines</p>
              </div>
            </button>
            {/* Nav Buttons */}
            <nav className="flex items-center gap-1">
              <button onClick={goHome} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isHome ? 'bg-white text-indigo-700 shadow-md' : 'text-indigo-100 hover:bg-white/15'}`}>
                🏠 Beranda
              </button>
              <button onClick={goAsk} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isAsk ? 'bg-white text-indigo-700 shadow-md' : 'text-indigo-100 hover:bg-white/15'}`}>
                🤖 Tanya AI
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* === BREADCRUMB === */}
      {(view !== 'home') && (
        <div className="bg-white/80 backdrop-blur border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-2 text-sm">
            <button onClick={goHome} className="text-indigo-600 hover:text-indigo-800 font-medium transition">🏠 Beranda</button>
            {view === 'ask' && (
              <><span className="text-slate-300">›</span><span className="text-slate-500 font-medium">🤖 Tanya AI</span></>
            )}
            {selectedCategory && (
              <><span className="text-slate-300">›</span>
              {view === 'routine' ? (
                <button onClick={() => { setView('category'); setSelectedRoutine(null); window.scrollTo(0,0); }} className="text-indigo-600 hover:text-indigo-800 font-medium transition">{selectedCategory.icon} {selectedCategory.name}</button>
              ) : (
                <span className="text-slate-500 font-medium">{selectedCategory.icon} {selectedCategory.name}</span>
              )}</>
            )}
            {selectedRoutine && (
              <><span className="text-slate-300">›</span><span className="text-slate-500 font-medium">{selectedRoutine.name}</span></>
            )}
          </div>
        </div>
      )}

      {/* === MAIN CONTENT === */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">

        {/* HOME VIEW */}
        {view === 'home' && (
          <motion.div key="home" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Jelajahi Rutinitas Berpikir</h2>
              <p className="text-slate-500">Pilih kategori atau gunakan <button onClick={goAsk} className="text-indigo-600 font-semibold hover:underline">🤖 Tanya AI</button> untuk rekomendasi.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORIES.map(cat => (
                <motion.div key={cat.id} whileHover={{scale:1.03,y:-4}} whileTap={{scale:0.98}} onClick={() => goCategory(cat)}
                  className={`relative overflow-hidden p-5 rounded-2xl border cursor-pointer transition-shadow hover:shadow-xl ${colorMap[cat.color] || 'bg-gray-50 border-gray-200'}`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 bg-gradient-to-br ${gradientMap[cat.color] || ''}`} />
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-base mb-1">{cat.name}</h3>
                  <p className="text-xs opacity-70 font-semibold uppercase tracking-wider">{cat.routines.length} rutinitas</p>
                  <div className="mt-3 text-xs font-medium opacity-60">Klik untuk melihat →</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ASK AI VIEW */}
        {view === 'ask' && (
          <motion.div key="ask" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">🤖 Tanya AI</h2>
              <p className="text-slate-500 mb-6 text-sm">Ceritakan kebutuhan mengajar Anda, AI akan merekomendasikan rutinitas berpikir yang paling cocok.</p>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Ceritakan situasi mengajar Anda:</label>
              <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Contoh: Saya mengajar IPA kelas 5 tentang ekosistem. Siswa sulit memahami hubungan antar makhluk hidup."
                className="w-full h-32 p-4 border border-indigo-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none bg-white" />
              <button onClick={handleAsk} disabled={loading || !question.trim()}
                className={`mt-4 px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${loading || !question.trim() ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'}`}>
                {loading ? '⏳ Sedang menganalisis...' : '🚀 Dapatkan Rekomendasi'}
              </button>
            </div>
            {aiAnswer && (
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-indigo-700 mb-3">✨ Rekomendasi AI</h3>
                <div className="text-slate-600 whitespace-pre-wrap leading-relaxed text-sm">{aiAnswer}</div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* CATEGORY VIEW */}
        {view === 'category' && selectedCategory && (
          <motion.div key="category" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}>
            <button onClick={goHome} className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all text-sm font-medium shadow-sm">
              <span>←</span> Kembali ke Beranda
            </button>
            <div className={`rounded-2xl overflow-hidden border ${colorMap[selectedCategory.color] || ''} mb-6`}>
              <div className={`bg-gradient-to-r ${gradientMap[selectedCategory.color] || 'from-gray-400 to-gray-500'} px-6 py-4`}>
                <h2 className="text-xl font-bold text-white">{selectedCategory.icon} {selectedCategory.name}</h2>
                <p className="text-white/80 text-sm">{selectedCategory.routines.length} rutinitas tersedia</p>
              </div>
            </div>
            <div className="space-y-2">
              {selectedCategory.routines.map(routine => (
                <motion.div key={routine.slug} whileHover={{x:4}} onClick={() => goRoutine(routine)}
                  className="p-4 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all flex justify-between items-center group">
                  <span className="font-medium text-slate-700 group-hover:text-indigo-700 transition">{routine.name}</span>
                  <span className="text-slate-300 group-hover:text-indigo-500 transition text-lg">›</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ROUTINE VIEW */}
        {view === 'routine' && selectedRoutine && selectedCategory && (
          <motion.div key="routine" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}>
            <button onClick={() => { setView('category'); setSelectedRoutine(null); window.scrollTo(0,0); }}
              className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all text-sm font-medium shadow-sm">
              <span>←</span> Kembali ke {selectedCategory.name}
            </button>
            <div className={`rounded-2xl overflow-hidden border-2 ${colorMap[selectedCategory.color] || ''}`}>
              <div className={`bg-gradient-to-r ${gradientMap[selectedCategory.color] || 'from-gray-400 to-gray-500'} px-6 py-4`}>
                <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">{selectedCategory.icon} {selectedCategory.name}</p>
                <h2 className="text-2xl font-bold text-white">{selectedRoutine.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">{selectedRoutine.description}</p>
                <a href={`https://pz.harvard.edu/resources/${selectedRoutine.slug}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 text-sm font-medium transition shadow-md">
                  Project Zero Source <span>↗</span>
                </a>
                <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs">📝</span>
                  Langkah Implementasi
                </h3>
                <ol className="space-y-3">
                  {selectedRoutine.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">{i+1}</span>
                      <span className="text-slate-600 pt-0.5 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        )}

        </AnimatePresence>
      </main>

      {/* === FOOTER === */}
      <footer className="text-center py-6 border-t border-slate-100">
        <p className="text-xs text-slate-400">© 2026 Teaching Strategy Ideas</p>
      </footer>
    </div>
  );
}
