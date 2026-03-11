import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { CATEGORIES, Routine, Category, ILS_CATEGORY } from './data';

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

const allRoutineNames = [
  ...CATEGORIES.flatMap(c => c.routines.map(r => `${r.name} (${c.name})`)),
  ...ILS_CATEGORY.routines.map(r => `${r.name} (${ILS_CATEGORY.name})`)
].join(', ');

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const goHome = () => { setView('home'); setSelectedCategory(null); setSelectedRoutine(null); window.scrollTo(0,0); };
  const goCategory = (cat: Category) => { setSelectedCategory(cat); setView('category'); window.scrollTo(0,0); };
  const goRoutine = (routine: Routine, cat?: Category) => { 
    if (cat) setSelectedCategory(cat);
    setSelectedRoutine(routine); 
    setView('routine'); 
    window.scrollTo(0,0); 
  };
  const goAsk = () => { setView('ask'); setSelectedCategory(null); setSelectedRoutine(null); window.scrollTo(0,0); };

  const handleAsk = async () => {
    if (!question.trim() || loading) return;
    setLoading(true); setAiAnswer('');
    try {
      const prompt = `Kamu adalah konsultan pendidikan ahli strategi pengajaran (Visible Thinking Routines dari Harvard Project Zero dan Interactive Learning Structures dari Responsive Classroom). Guru bertanya:\n\n"${question}"\n\nDaftar routine: ${allRoutineNames}\n\nRekomendasikan 2-3 routine PALING COCOK. Untuk setiap routine: 1) Nama, 2) Mengapa cocok (1-2 kalimat), 3) Contoh penerapan singkat. Jawab Bahasa Indonesia, singkat dan praktis.`;
      const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-lite', contents: prompt });
      setAiAnswer(response.text || 'Tidak ada jawaban.');
                    } catch (e: any) { console.error('AI Error:', e); setAiAnswer('Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.'); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="container mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
            <span className="text-2xl">✔️</span>
            <div>
              <h1 className="font-bold text-lg text-stone-800">Teaching Strategy Ideas</h1>
              <p className="text-xs text-stone-500">Explore teaching strategies for your classroom</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={goHome} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${view !== 'ask' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>📚 Jelajahi</button>
            <button onClick={goAsk} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${view === 'ask' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>🤖 Tanya AI</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-2 text-sm text-stone-500">
        <span className="cursor-pointer hover:text-stone-700" onClick={goHome}>Beranda</span>
        {view === 'ask' && <><span className="mx-1">&gt;</span><span className="text-stone-700">Tanya AI</span></>}
        {selectedCategory && <><span className="mx-1">&gt;</span><span className="cursor-pointer hover:text-stone-700" onClick={() => { setView('category'); setSelectedRoutine(null); window.scrollTo(0,0); }}>{selectedCategory.name}</span></>}
        {selectedRoutine && <><span className="mx-1">&gt;</span><span className="text-stone-700">{selectedRoutine.name}</span></>}
      </div>

      <main className="container mx-auto max-w-4xl px-4 pb-12">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <div className="mb-12">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-stone-800 mb-1">Jelajahi Rutinitas Berpikir</h2>
                  <p className="text-stone-500 text-sm">Visible Thinking Routines dari Harvard Project Zero</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {CATEGORIES.map(cat => (
                    <div key={cat.id} onClick={() => goCategory(cat)} className={`p-4 rounded-xl border-2 cursor-pointer hover:shadow-lg transition-all ${colorMap[cat.color] || 'bg-gray-50'}`}>
                      <span className="text-3xl">{cat.icon}</span>
                      <h3 className="font-bold mt-2 text-sm">{cat.name}</h3>
                      <p className="text-xs mt-1 opacity-70">{cat.routines.length} ROUTINES</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-stone-800 mb-1">Interactive Learning Structures</h2>
                  <p className="text-stone-500 text-sm">Pendekatan Responsive Classroom</p>
                </div>
                <div className="space-y-2">
                  {ILS_CATEGORY.routines.map(routine => (
                    <div key={routine.slug} onClick={() => goRoutine(routine, ILS_CATEGORY)} className="p-4 bg-white rounded-lg border border-stone-200 cursor-pointer hover:border-stone-400 hover:shadow transition-all flex justify-between items-center">
                      <span className="font-medium text-stone-700">{routine.name}</span>
                      <span className="text-stone-400">&gt;</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'ask' && (
            <motion.div key="ask" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-stone-800 mb-2">🤖 Tanya AI</h2>
                <p className="text-stone-600">Ceritakan kebutuhan mengajar Anda, AI akan merekomendasikan rutinitas berpikir yang paling cocok.</p>
              </div>
              <div className="bg-white rounded-xl border border-stone-200 p-6 mb-6">
                <label className="block text-sm font-bold text-stone-700 mb-2">Ceritakan situasi mengajar Anda:</label>
                <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Contoh: Saya mengajar IPA kelas 5 tentang ekosistem. Siswa sulit memahami hubungan antar makhluk hidup." className="w-full h-32 p-3 border border-stone-300 rounded-lg text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 resize-none" />
                <button onClick={handleAsk} disabled={loading || !question.trim()} className={`mt-3 px-6 py-2.5 rounded-lg font-medium text-sm transition ${loading || !question.trim() ? 'bg-stone-200 text-stone-400' : 'bg-stone-800 text-white hover:bg-stone-700'}`}>
                  {loading ? 'Sedang menganalisis...' : '🚀 Dapatkan Rekomendasi'}
                </button>
              </div>
              {aiAnswer && (
                <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="bg-white rounded-xl border border-stone-200 p-6">
                  <h3 className="font-bold text-stone-700 mb-3">✨ Rekomendasi AI</h3>
                  <div className="text-stone-600 whitespace-pre-wrap leading-relaxed">{aiAnswer}</div>
                </motion.div>
              )}
            </motion.div>
          )}

          {view === 'category' && selectedCategory && (
            <motion.div key="category" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <button onClick={goHome} className="mb-4 text-stone-500 hover:text-stone-700">← Kembali</button>
              <h2 className="text-2xl font-bold text-stone-800 mb-1">{selectedCategory.icon} {selectedCategory.name}</h2>
              <p className="text-stone-500 mb-6">{selectedCategory.routines.length} rutinitas tersedia</p>
              <div className="space-y-2">
                {selectedCategory.routines.map(routine => (
                  <div key={routine.slug} onClick={() => goRoutine(routine)} className="p-4 bg-white rounded-lg border border-stone-200 cursor-pointer hover:border-stone-400 hover:shadow transition-all flex justify-between items-center">
                    <span className="font-medium text-stone-700">{routine.name}</span>
                    <span className="text-stone-400">&gt;</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'routine' && selectedRoutine && selectedCategory && (
            <motion.div key="routine" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <button onClick={() => { 
                if (selectedCategory.id === 'interactive-learning') {
                  goHome();
                } else {
                  setView('category'); setSelectedRoutine(null); window.scrollTo(0,0); 
                }
              }} className="mb-4 text-stone-500 hover:text-stone-700">
                ← Kembali ke {selectedCategory.id === 'interactive-learning' ? 'Beranda' : selectedCategory.name}
              </button>
              <div className={`rounded-xl overflow-hidden border-2 ${colorMap[selectedCategory.color] || ''}`}>
                <div className={`p-1 ${headerColorMap[selectedCategory.color] || 'bg-gray-500'}`}></div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-stone-800 mb-4">{selectedRoutine.name}</h2>
                  <p className="text-stone-600 mb-6 leading-relaxed">{selectedRoutine.description}</p>
                  {selectedCategory.id !== 'interactive-learning' && (
                    <a href={`https://pz.harvard.edu/resources/${selectedRoutine.slug}`} target="_blank" rel="noopener noreferrer" className="inline-block mb-6 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 text-sm">Project Zero Source ↗</a>
                  )}
                  <h3 className="font-bold text-stone-700 mb-3 text-sm uppercase tracking-wider">Langkah Implementasi</h3>
                  <ol className="space-y-3">
                    {selectedRoutine.steps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold">{i+1}</span>
                        <span className="text-stone-600 pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <footer className="text-center py-4 text-xs text-stone-400">&copy; 2026 Teaching Strategy Ideas</footer>
    </div>
  );
}
