import {
  Cpu,
  Settings,
  Key,
  Languages,
  GraduationCap,
  Target,
  FileText,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES, AGE_GROUPS, LANGUAGES } from '../constants.jsx';

export default function Sidebar({
  language,
  setLanguage,
  ageGroup,
  setAgeGroup,
  activeCat,
  setActiveCat,
  activeTemplate,
  setActiveTemplate,
  sortedTemplates,
  apiKeyInput,
  setApiKeyInput,
  getLabel
}) {
  return (
    <aside className="w-full md:w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col shrink-0">
      <div className="p-6 border-b border-zinc-800 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-blue-500">
          <Cpu className="w-5 h-5" />
          <span className="text-sm font-black uppercase tracking-tighter">Vizuál–Edu</span>
        </div>
      </div>

      {/* API Key Settings */}
      <div className="p-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2 mb-3 px-2">
          <Settings className="w-3 h-3 text-zinc-500" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Beállítások</span>
        </div>
        <div className="px-2">
          <div className="relative group">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="password"
              placeholder="Gemini API kulcs..."
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              className="w-full bg-zinc-950/50 border border-zinc-800 text-xs rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:border-blue-500/50 focus:bg-zinc-950 transition-all placeholder:text-zinc-700"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-4 custom-scrollbar">
        <div className="grid grid-cols-2 gap-4">
          <section className="space-y-1">
            <div className="flex items-center gap-2 px-2 text-zinc-500">
              <Languages className="w-3 h-3" />
              <h2 className="text-xs font-bold uppercase tracking-widest">
                {getLabel('Nyelv', 'Language', '语言')}
              </h2>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl py-1 px-3 focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer appearance-none"
            >
              {LANGUAGES.map(l => (
                <option key={l.id} value={l.id} className="bg-zinc-900">{l.flag} {l.label}</option>
              ))}
            </select>
          </section>

          <section className="space-y-1">
            <div className="flex items-center gap-2 px-2 text-zinc-500">
              <GraduationCap className="w-3 h-3" />
              <h2 className="text-xs font-bold uppercase tracking-widest">
                {getLabel('Korosztály', 'Age', '年龄')}
              </h2>
            </div>
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl py-1 px-3 focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer appearance-none"
            >
              {AGE_GROUPS.map(g => (
                <option key={g.id} value={g.id} className="bg-zinc-900">
                  {getLabel(g.label, g.label, g.label)}
                </option>
              ))}
            </select>
          </section>
        </div>

        <section className="space-y-1">
          <div className="flex items-center px-2 mb-4 text-zinc-500">
            <Target className="w-3 h-3" />
            <h2 className="text-xs font-bold uppercase tracking-widest">
              {getLabel('Kategóriák', 'Categories', '类别')}
            </h2>
          </div>
          <select
            value={activeCat}
            onChange={(e) => {
              const catId = e.target.value;
              setActiveCat(catId);
              setActiveTemplate(CATEGORIES[catId.toUpperCase()].templates[0]);
            }}
            className="w-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl py-1 px-4 focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer appearance-none"
          >
            {Object.values(CATEGORIES).map(cat => (
              <option key={cat.id} value={cat.id} className="bg-zinc-900">
                {getLabel(cat.label, cat.label, cat.label)}
              </option>
            ))}
          </select>
        </section>

        <section className="space-y-1">
          <div className="flex items-center gap-2 px-2 mb-4 text-zinc-500">
            <FileText className="w-3 h-3" />
            <h2 className="text-xs font-bold uppercase tracking-widest">
              {getLabel('Sablonok', 'Templates', '模板')}
            </h2>
          </div>
          <div className="space-y-1">
            {sortedTemplates.map(tmpl => (
              <button
                key={tmpl.id}
                onClick={() => setActiveTemplate(tmpl)}
                className={`w-full text-left px-4 py-1 rounded-lg text-xs transition-all flex items-center justify-between group ${activeTemplate.id === tmpl.id ? 'bg-zinc-800 text-blue-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <span className="truncate">{tmpl.name}</span>
                {activeTemplate.id === tmpl.id && <ChevronRight className="w-3 h-3" />}
              </button>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
