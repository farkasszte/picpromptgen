import {
  Zap,
  Edit3,
  Layout,
  Code2,
  CheckCircle2,
  Palette,
  BarChart3,
  Check,
  Copy,
  Key,
  ExternalLink,
  Settings,
  ShieldCheck
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
      <div className="flex flex-col items-center py-12 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="w-20 h-20 bg-zinc-900/50 rounded-full flex items-center justify-center mb-8 border border-zinc-800 shadow-2xl text-zinc-600">
          <Key className="w-10 h-10" />
        </div>
        
        <h2 className="text-2xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-100 to-zinc-500 mb-12 text-center">
          {getLabel('Saját API Kulcs Beszerzése', 'Get Your Own API Key', '获取你自己的 API 密钥')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {/* Step 1 */}
          <div className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all">
              <ExternalLink className="w-12 h-12" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs font-black mb-4 shadow-lg shadow-blue-500/20">1</div>
            <h3 className="font-bold text-zinc-200 mb-2">Google AI Studio</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              {getLabel('Látogass el a hivatalos Google AI Studio oldalra.', 'Visit the official Google AI Studio website.', '访问官方 Google AI Studio 网站。')}
            </p>
            <a 
              href="https://aistudio.google.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest hover:text-blue-300 transition-colors"
            >
              aistudio.google.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all">
              <Key className="w-12 h-12" />
            </div>
            <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center text-xs font-black mb-4">2</div>
            <h3 className="font-bold text-zinc-200 mb-2">
              {getLabel('Kulcs Létrehozása', 'Create API Key', '创建 API 密钥')}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {getLabel('Kattints a "Get API Key" gombra, majd generálj egy új kulcsot.', 'Click on "Get API Key" and generate a new secret key.', '点击 "Get API Key" 并生成一个新的密钥。')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900/60 transition-all group relative overflow-hidden text-zinc-100">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all text-blue-500">
              <Settings className="w-12 h-12" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs font-black mb-4 shadow-lg shadow-blue-500/20">3</div>
            <h3 className="font-bold text-zinc-200 mb-2">
              {getLabel('Beállítás', 'Setup', '设置')}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {getLabel('Másold a kulcsot az oldalsáv "Beállítások" részébe.', 'Paste the key into the "Settings" section in the sidebar.', '将密钥粘贴到侧边栏的“设置”部分。')}
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 px-6 py-3 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
          {getLabel('A kulcsot biztonságban, helyileg tároljuk.', 'The key is stored safely and locally.', '密钥安全地存储在本地。')}
        </div>
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
                className="w-full h-[500px] p-8 bg-transparent text-zinc-300 font-mono text-sm focus:outline-none resize-none custom-scrollbar"
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
