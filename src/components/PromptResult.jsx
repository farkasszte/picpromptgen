import {
  Zap,
  Edit3,
  Layout,
  Code2,
  CheckCircle2,
  Palette,
  BarChart3,
  Check,
  Copy
} from 'lucide-react';

export default function PromptResult({
  activeTab,
  setActiveTab,
  outline,
  setOutline,
  prompts,
  setPrompts,
  copyStatus,
  copyToClipboard,
  getLabel
}) {

  const renderPromptGrid = (set, isJson = false) => {
    if (!set) return null;
    const headers = {
      base: getLabel('1. Vizuális Rekonstrukció', '1. Visual Reconstruction', '1. 视觉重建'),
      infographic: getLabel('2. Infografika–változat', '2. Infographic Version', '2. 信息图版本'),
      slide: getLabel('3. Dia / Slide változat', '3. Slide Version', '3. 幻灯片版本')
    };

    return (
      <div className="space-y-10">
        {Object.keys(headers).map(key => (
          <div key={key} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-2 ${key === 'base' ? 'text-blue-400' : key === 'infographic' ? 'text-emerald-400' : 'text-orange-400'}`}>
                {key === 'base' ? <Palette className="w-4 h-4" /> : key === 'infographic' ? <BarChart3 className="w-4 h-4" /> : <Layout className="w-4 h-4" />}
                <h3 className="text-xs font-black uppercase tracking-widest">{headers[key]}</h3>
              </div>
              <button
                onClick={() => copyToClipboard(`${activeTab}-${key}`, set[key])}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${copyStatus[`${activeTab}-${key}`] ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'}`}
              >
                {copyStatus[`${activeTab}-${key}`] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copyStatus[`${activeTab}-${key}`] ? getLabel('MÁSOLVA', 'COPIED', '已复制') : getLabel('MÁSOLÁS', 'COPY', '复制')}
              </button>
            </div>
            <div className={`p-8 rounded-3xl border shadow-2xl transition-all ${isJson ? 'bg-zinc-900/80 border-zinc-700/50' : 'bg-zinc-900 border-zinc-800'}`}>
              <pre className={`font-mono leading-relaxed whitespace-pre-wrap ${isJson ? 'text-xs text-zinc-400' : 'text-sm text-zinc-300'}`}>{set[key]}</pre>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (!outline && !prompts.standard) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-zinc-800">
        <Zap className="w-24 h-24 mb-6 opacity-5 animate-pulse" />
        <p className="text-xl font-black uppercase tracking-widest opacity-20">
          {getLabel('Adja meg a témát a kezdéshez', 'Enter topic to start', '输入主题开始')}
        </p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="space-y-0">
        {activeTab === 'vázlat' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 px-2">
              <Edit3 className="w-4 h-4" />
              <h3 className="text-xs font-black uppercase tracking-widest">
                {getLabel('Szerkeszthető Tartalmi Összefoglaló', 'Editable Content Summary', '可编辑内容摘要')}
              </h3>
            </div>
            <div className="p-1 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
              <textarea
                value={outline}
                onChange={(e) => {
                  setOutline(e.target.value);
                  setPrompts({ standard: null, ai: null, json: null }); // Reset prompts if outline changes
                }}
                className="w-full h-64 p-8 bg-transparent text-zinc-300 font-mono text-sm focus:outline-none resize-none custom-scrollbar"
                placeholder="..."
              />
            </div>
            <div className="flex items-center gap-2 text-zinc-600 text-xs italic pl-4">
              <CheckCircle2 className="w-3 h-3" />
              {getLabel('Az összefoglaló módosítása után generálja újra a promptokat.', 'Regenerate prompts after modifying the summary.', '修改摘要后重新生成提示词。')}
            </div>
          </div>
        )}
        {activeTab === 'standard' && renderPromptGrid(prompts.standard)}
        {activeTab === 'ai' && renderPromptGrid(prompts.ai)}
        {activeTab === 'json' && renderPromptGrid(prompts.json, true)}
      </div>
    </div>
  );
}
