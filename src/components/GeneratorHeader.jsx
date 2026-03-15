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
  generateJsonSpec,
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
        {/* Top Row: Topic Input + Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 w-full relative">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-zinc-700" />
            </div>
            <input
              type="text"
              placeholder={getLabel("Oktatási téma vagy fogalom...", "Educational topic or concept...", "教育主题或概念...")}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full pl-12 pr-6 py-0 bg-zinc-900/50 border border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-lg shadow-inner placeholder-zinc-700"
              onKeyDown={(e) => e.key === 'Enter' && generateOutline()}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 shrink-0">
            <button
              onClick={generateOutline}
              disabled={!topic || loading.outline}
              className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${!topic || loading.outline ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-white text-black hover:bg-zinc-200 active:scale-95 shadow-lg'}`}
            >
              {loading.outline ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Edit3 className="w-3 h-3" />}
              1. {getLabel('Összefoglaló', 'Summary', '摘要')}
            </button>

            <button
              onClick={generateStandardPrompt}
              disabled={!outline || loading.outline}
              className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${!outline ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500 active:scale-95 shadow-lg'}`}
            >
              <Sparkles className="w-3 h-3" />
              2. {getLabel('Prompt generálás', 'Generate Prompt', '生成提示词')}
            </button>

            <button
              onClick={refineWithAI}
              disabled={!prompts.standard || prompts.ai || loading.ai}
              className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${!prompts.standard || prompts.ai ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 active:scale-95 shadow-lg'}`}
            >
              {loading.ai ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />}
              3. {getLabel('AI Finomítás', 'AI Refine', 'AI 细化')}
            </button>

            <button
              onClick={generateJsonSpec}
              disabled={!prompts.standard || prompts.json || loading.json}
              className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${!prompts.standard || prompts.json ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 active:scale-95 shadow-lg'}`}
            >
              {loading.json ? <RefreshCw className="w-3 h-3 animate-spin" /> : <FileJson className="w-3 h-3" />}
              4. {getLabel('JSON Spec', 'JSON Spec', 'JSON 规范')}
            </button>
          </div>
        </div>

        {/* Bottom Row: Tabs (Centered) */}
        {(outline || prompts.standard) && (
          <div className="flex justify-center">
            <div className="flex gap-1 p-1 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl">
              <button
                onClick={() => setActiveTab('vázlat')}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'vázlat' ? 'bg-zinc-800 text-amber-400 shadow-lg border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <Edit3 className="w-3.5 h-3.5" /> {getLabel('Összefoglaló', 'Summary', '摘要')}
              </button>
              <button
                onClick={() => setActiveTab('standard')}
                disabled={!prompts.standard}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'standard' ? 'bg-zinc-800 text-blue-400 shadow-lg border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'} disabled:opacity-20`}
              >
                <Layout className="w-3.5 h-3.5" /> Standard
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                disabled={!prompts.ai}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'ai' ? 'bg-zinc-800 text-purple-400 shadow-lg border border-zinc-700' : 'text-zinc-600 hover:text-zinc-400'} disabled:opacity-20`}
              >
                <Zap className="w-3.5 h-3.5" /> AI {getLabel('Finomított', 'Refined', '优化')}
              </button>
              <button
                onClick={() => setActiveTab('json')}
                disabled={!prompts.json}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'json' ? 'bg-zinc-800 text-emerald-400 shadow-lg border border-zinc-700' : 'text-zinc-600 hover:text-zinc-400'} disabled:opacity-20`}
              >
                <Code2 className="w-3.5 h-3.5" /> JSON {getLabel('Struktúra', 'Structure', '结构')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
