import { useState } from 'react';
import {
  Cpu,
  Settings,
  Key,
  Languages,
  GraduationCap,
  Target,
  FileText,
  ChevronRight,
  Palette,
  RefreshCw,
  Edit3,
  Sparkles,
  Wand2,
  FileJson
} from 'lucide-react';
import { CATEGORIES, AGE_GROUPS, LANGUAGES, INFOGRAPHIC_STYLES } from '../constants.jsx';

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
  getLabel,
  selectedStyle,
  setSelectedStyle,
  topic,
  generateOutline,
  generateStandardPrompt,
  refineWithAI,
  loading,
  outline,
  prompts
}) {
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [hoveredStyle, setHoveredStyle] = useState(null);
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [ageDropdownOpen, setAgeDropdownOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [tmplDropdownOpen, setTmplDropdownOpen] = useState(false);

  return (
    <aside className="w-full md:w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col shrink-0 relative">
      <div className="p-6 border-b border-zinc-800 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-emerald-600">
          <Cpu className="w-5 h-5" />
          <span className="text-sm font-black uppercase tracking-tighter">Vizuál–Edu</span>
        </div>
      </div>

      <div className="p-4 border-b border-zinc-800 space-y-2">
        <button
          onClick={generateOutline}
          disabled={!topic || loading.outline}
          className={`w-full px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-wider flex items-center justify-between transition-all ${!topic || loading.outline ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-white text-black hover:bg-zinc-200 active:scale-95 shadow-lg'}`}
        >
          <div className="flex items-center gap-2">
            {loading.outline ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Edit3 className="w-3 h-3" />}
            <span>1. {getLabel('Összefoglaló', 'Summary', '摘要')}</span>
          </div>
        </button>

        <button
          onClick={generateStandardPrompt}
          disabled={!outline || loading.outline}
          className={`w-full px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-wider flex items-center justify-between transition-all ${!outline ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 shadow-lg'}`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            <span>2. {getLabel('Prompt', 'Prompt', '提示词')}</span>
          </div>
        </button>

        <button
          onClick={refineWithAI}
          disabled={!prompts.standard || prompts.ai || loading.ai}
          className={`w-full px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-wider flex items-center justify-between transition-all ${!prompts.standard || prompts.ai ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 active:scale-95 shadow-lg'}`}
        >
          <div className="flex items-center gap-2">
            {loading.ai ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />}
            <span>3. {getLabel('AI Finomítás', 'AI Refine', 'AI 细化')}</span>
          </div>
        </button>

      </div>

      {/* API Key Settings */}
      <div className="p-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-4 px-2">
          <div className="flex items-center gap-2 shrink-0">
            <Key className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">API</span>
          </div>
          <div className="relative group flex-1">
            <input
              type="password"
              placeholder="API kulcs..."
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              className="w-full bg-zinc-950/50 border border-zinc-800 text-[10px] rounded-lg py-1 px-3 focus:outline-none focus:border-emerald-600/50 focus:bg-zinc-950 transition-all placeholder:text-zinc-700"
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
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setAgeDropdownOpen(false);
                  setCatDropdownOpen(false);
                  setStyleDropdownOpen(false);
                  setTmplDropdownOpen(false);
                }}
                className="w-full bg-zinc-950 border border-zinc-800 text-[10px] font-bold text-zinc-400 rounded-xl py-1.5 px-3 focus:outline-none focus:border-emerald-600/50 transition-all cursor-pointer flex items-center justify-between group hover:border-zinc-700"
              >
                <span className="truncate">{LANGUAGES.find(l => l.id === language)?.flag} {LANGUAGES.find(l => l.id === language)?.label}</span>
                <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-90' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 py-1 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-70 animate-in fade-in zoom-in-95 duration-150">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.id}
                      onClick={() => {
                        setLanguage(l.id);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-[10px] transition-colors hover:bg-zinc-800 flex items-center justify-between ${language === l.id ? 'text-emerald-500 font-bold bg-zinc-800/50' : 'text-zinc-500'}`}
                    >
                      <span>{l.flag} {l.label}</span>
                      {language === l.id && <div className="w-1 h-1 rounded-full bg-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="space-y-1">
            <div className="flex items-center gap-2 px-2 text-zinc-500">
              <GraduationCap className="w-3 h-3" />
              <h2 className="text-xs font-bold uppercase tracking-widest">
                {getLabel('Korosztály', 'Age', '年龄')}
              </h2>
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  setAgeDropdownOpen(!ageDropdownOpen);
                  setLangDropdownOpen(false);
                  setCatDropdownOpen(false);
                  setStyleDropdownOpen(false);
                  setTmplDropdownOpen(false);
                }}
                className="w-full bg-zinc-950 border border-zinc-800 text-[10px] font-bold text-zinc-400 rounded-xl py-1.5 px-3 focus:outline-none focus:border-emerald-600/50 transition-all cursor-pointer flex items-center justify-between group hover:border-zinc-700"
              >
                <span className="truncate">{AGE_GROUPS.find(g => g.id === ageGroup)?.label}</span>
                <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${ageDropdownOpen ? 'rotate-90' : ''}`} />
              </button>

              {ageDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 py-1 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-70 animate-in fade-in zoom-in-95 duration-150">
                  {AGE_GROUPS.map(g => (
                    <button
                      key={g.id}
                      onClick={() => {
                        setAgeGroup(g.id);
                        setAgeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-[10px] transition-colors hover:bg-zinc-800 flex items-center justify-between ${ageGroup === g.id ? 'text-emerald-500 font-bold bg-zinc-800/50' : 'text-zinc-500'}`}
                    >
                      <span>{getLabel(g.label, g.label, g.label)}</span>
                      {ageGroup === g.id && <div className="w-1 h-1 rounded-full bg-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        <section className="space-y-1">
          <div className="flex items-center px-2 mb-4 text-zinc-500">
            <Target className="w-3 h-3" />
            <h2 className="text-xs font-bold uppercase tracking-widest">
              {getLabel('Kategóriák', 'Categories', '类别')}
            </h2>
          </div>
          <div className="relative px-2">
            <button
              onClick={() => {
                setCatDropdownOpen(!catDropdownOpen);
                setLangDropdownOpen(false);
                setAgeDropdownOpen(false);
                setStyleDropdownOpen(false);
                setTmplDropdownOpen(false);
              }}
              className="w-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl py-2 px-4 focus:outline-none focus:border-emerald-600/50 transition-all cursor-pointer flex items-center justify-between group hover:border-zinc-700"
            >
              <span className="truncate">{CATEGORIES[activeCat.toUpperCase()]?.label}</span>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${catDropdownOpen ? 'rotate-90' : ''}`} />
            </button>

            {catDropdownOpen && (
              <div className="absolute left-2 right-2 mt-2 py-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-70 animate-in fade-in zoom-in-95 duration-150">
                {Object.values(CATEGORIES).map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCat(cat.id);
                      setActiveTemplate(CATEGORIES[cat.id.toUpperCase()].templates[0]);
                      setCatDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-zinc-800 flex items-center justify-between ${activeCat === cat.id ? 'text-emerald-500 font-bold bg-zinc-800/50' : 'text-zinc-500'}`}
                  >
                    <span>{getLabel(cat.label, cat.label, cat.label)}</span>
                    {activeCat === cat.id && <div className="w-1 h-1 rounded-full bg-emerald-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="space-y-1">
          <div className="flex items-center gap-2 px-2 mb-4 text-zinc-500">
            <FileText className="w-3 h-3" />
            <h2 className="text-xs font-bold uppercase tracking-widest">
              {getLabel('Sablonok', 'Templates', '模板')}
            </h2>
          </div>
          <div className="relative px-2">
            <button
              onClick={() => {
                setTmplDropdownOpen(!tmplDropdownOpen);
                setLangDropdownOpen(false);
                setAgeDropdownOpen(false);
                setCatDropdownOpen(false);
                setStyleDropdownOpen(false);
              }}
              className="w-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl py-2 px-4 focus:outline-none focus:border-emerald-600/50 transition-all cursor-pointer flex items-center justify-between group hover:border-zinc-700"
            >
              <span className="truncate">{activeTemplate.name}</span>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${tmplDropdownOpen ? 'rotate-90' : ''}`} />
            </button>

            {tmplDropdownOpen && (
              <div className="absolute left-2 right-2 mt-2 py-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-70 max-h-64 overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-150">
                {sortedTemplates.map(tmpl => (
                  <button
                    key={tmpl.id}
                    onClick={() => {
                      setActiveTemplate(tmpl);
                      setTmplDropdownOpen(false);
                      setHoveredTemplate(null);
                    }}
                    onMouseEnter={() => setHoveredTemplate(tmpl)}
                    onMouseLeave={() => setHoveredTemplate(null)}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-zinc-800 flex items-center justify-between ${activeTemplate.id === tmpl.id ? 'text-emerald-500 font-bold bg-zinc-800/50' : 'text-zinc-500'}`}
                  >
                    <span className="truncate">{tmpl.name}</span>
                    {activeTemplate.id === tmpl.id && <div className="w-1 h-1 rounded-full bg-emerald-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="space-y-1">
          <div className="flex items-center px-2 mb-4 text-zinc-500">
            <Palette className="w-3 h-3" />
            <h2 className="text-xs font-bold uppercase tracking-widest ml-1.5">
              {getLabel('Stílus', 'Style', '风格')}
            </h2>
          </div>
          
          <div className="relative px-2">
            <button
              onClick={() => {
                setStyleDropdownOpen(!styleDropdownOpen);
                setLangDropdownOpen(false);
                setAgeDropdownOpen(false);
                setCatDropdownOpen(false);
                setTmplDropdownOpen(false);
              }}
              className="w-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl py-2 px-4 focus:outline-none focus:border-emerald-600/50 transition-all cursor-pointer flex items-center justify-between group hover:border-zinc-700"
            >
              <span className="truncate">{getLabel(selectedStyle.name.hu, selectedStyle.name.en, selectedStyle.name.zh)}</span>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${styleDropdownOpen ? 'rotate-90' : ''}`} />
            </button>

            {styleDropdownOpen && (
              <div className="absolute left-2 right-2 mt-2 py-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-60 max-h-64 overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-150">
                {INFOGRAPHIC_STYLES.map(style => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setSelectedStyle(style);
                      setStyleDropdownOpen(false);
                      setHoveredStyle(null);
                    }}
                    onMouseEnter={() => setHoveredStyle(style)}
                    onMouseLeave={() => setHoveredStyle(null)}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-zinc-800 flex items-center justify-between ${selectedStyle.id === style.id ? 'text-emerald-500 font-bold bg-zinc-800/50' : 'text-zinc-500'}`}
                  >
                    <span>{getLabel(style.name.hu, style.name.en, style.name.zh)}</span>
                    {selectedStyle.id === style.id && <div className="w-1 h-1 rounded-full bg-emerald-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Hover Preview Popup */}
        {hoveredTemplate && (
          <div className="hidden md:block absolute left-full top-0 ml-4 w-80 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-left-4 duration-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-tighter">Sablon leírás</span>
              </div>

              <h3 className="text-sm font-bold text-zinc-100">{hoveredTemplate.name}</h3>

              <div className="space-y-3">
                <section>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Feladat</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    "{hoveredTemplate.task.replace('[TOPIC]', '...')}"
                  </p>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Oktatási cél</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {hoveredTemplate.goal}
                  </p>
                </section>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-600/10 text-[10px] font-bold text-emerald-500 border border-emerald-600/20">
                    {hoveredTemplate.style}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-bold text-zinc-400 border border-zinc-700">
                    {hoveredTemplate.composition}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Style Hover Preview Popup */}
        {hoveredStyle && (
          <div className="hidden md:block absolute left-full top-0 ml-4 w-80 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-left-4 duration-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <Palette className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-tighter">Stílus leírás</span>
              </div>

              <h3 className="text-sm font-bold text-zinc-100">
                {getLabel(hoveredStyle.name.hu, hoveredStyle.name.en, hoveredStyle.name.zh)}
              </h3>

              <div className="space-y-3">
                <section>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Leírás</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    {getLabel(hoveredStyle.description.hu, hoveredStyle.description.en, hoveredStyle.description.zh)}
                  </p>
                </section>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-600/10 text-[10px] font-bold text-emerald-500 border border-emerald-600/20">
                    Prompt strictly in English
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
