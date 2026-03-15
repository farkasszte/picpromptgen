import {
  Search,
  RefreshCw,
  Edit3,
  Sparkles,
  Wand2,
  FileJson,
  Layout,
  Zap,
  Code2
} from 'lucide-react';

export default function GeneratorHeader({
  topic,
  setTopic,
  generateOutline,
  generateStandardPrompt,
  refineWithAI,
  loading,
  outline,
  prompts,
  getLabel,
  activeTab,
  setActiveTab
}) {
  return (
    <header className="p-4 bg-zinc-900/20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Tabs on the left */}
          {(outline || prompts.standard) && (
            <div className="flex gap-1 p-1 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl shrink-0">
              <button
                onClick={() => setActiveTab('vázlat')}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'vázlat' ? 'bg-zinc-800 text-amber-400 shadow-lg border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <Edit3 className="w-3 h-3" /> {getLabel('Összefoglaló', 'Summary', '摘要')}
              </button>
              <button
                onClick={() => setActiveTab('standard')}
                disabled={!prompts.standard}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'standard' ? 'bg-zinc-800 text-emerald-500 shadow-lg border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'} disabled:opacity-20`}
              >
                <Layout className="w-3 h-3" /> Standard
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                disabled={!prompts.ai}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'ai' ? 'bg-zinc-800 text-purple-400 shadow-lg border border-zinc-700' : 'text-zinc-600 hover:text-zinc-400'} disabled:opacity-20`}
              >
                <Zap className="w-3 h-3" /> AI {getLabel('Finomított', 'Refined', '优化')}
              </button>
            </div>
          )}

          {/* Topic Input on the right */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-zinc-700" />
            </div>
            <input
              type="text"
              placeholder={getLabel("Oktatási téma vagy fogalom...", "Educational topic or concept...", "教育主题或概念...")}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full pl-12 pr-6 py-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30 transition-all text-lg shadow-inner placeholder-zinc-700"
              onKeyDown={(e) => e.key === 'Enter' && generateOutline()}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
