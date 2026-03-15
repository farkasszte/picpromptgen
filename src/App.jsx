import { useState, useEffect } from 'react';
import { CATEGORIES, AGE_GROUPS, LANGUAGES, INFOGRAPHIC_STYLES } from './constants';
import Sidebar from './components/Sidebar';
import GeneratorHeader from './components/GeneratorHeader';
import PromptResult from './components/PromptResult';

export default function App() {
  const [apiKeyInput, setApiKeyInput] = useState(() => localStorage.getItem('gemini_api_key') || import.meta.env.VITE_GEMINI_API_KEY || '');

  const [activeCat, setActiveCat] = useState('presentation');
  const [activeTemplate, setActiveTemplate] = useState(CATEGORIES.PRESENTATION.templates[0]);
  const [selectedStyle, setSelectedStyle] = useState(INFOGRAPHIC_STYLES[0]);
  const [ageGroup, setAgeGroup] = useState('14-18');
  const [language, setLanguage] = useState('hu');
  const [topic, setTopic] = useState('');
  const [outline, setOutline] = useState('');
  const [activeTab, setActiveTab] = useState('vázlat');
  const [prompts, setPrompts] = useState({
    standard: null,
    ai: null
  });

  const [loading, setLoading] = useState({
    outline: false,
    ai: false
  });

  const [copyStatus, setCopyStatus] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  // Persist API key to localStorage
  useEffect(() => {
    localStorage.setItem('gemini_api_key', apiKeyInput);
  }, [apiKeyInput]);


  const formatText = (text) => text.replace(/-/g, '–');

  const sortedTemplates = [...CATEGORIES[activeCat.toUpperCase()].templates].sort((a, b) =>
    a.name.localeCompare(b.name, language === 'hu' ? 'hu' : (language === 'zh' ? 'zh' : 'en'))
  );

  const getLabel = (hu, en, zh) => {
    if (language === 'hu') return hu;
    if (language === 'zh') return zh;
    return en;
  };

  const getPromptSet = (t, topicStr, outlineStr, langId, ageId, stylePrompt = '') => {
    const currentLang = LANGUAGES.find(l => l.id === langId);
    const ageInfo = AGE_GROUPS.find(g => g.id === ageId).label;

    const base = formatText(`${getLabel('Feladat', 'Task', '任务')}:
${t.task.replace(/\[TOPIC\]/g, topicStr)}

${getLabel('Tartalmi vázlat', 'Content Outline', '内容大纲')}:
${outlineStr}

Technical Specification:
– Style: ${t.style}
– Composition: ${t.composition}
– Visual Elements: ${t.elements}
– Color Palette: ${t.palette}
– Lighting: ${t.lighting}
${stylePrompt ? `– Visual Theme: ${stylePrompt}` : ''}

${getLabel('Oktatási cél', 'Educational Goal', '教育目标')}: ${t.goal}
${getLabel('Célnyelv', 'Target Language', '目标语言')}: ${currentLang.label} (${ageInfo})`);

    return base;
  };

  const generateOutline = async () => {
    if (!topic) return;
    setLoading(prev => ({ ...prev, outline: true }));
    setErrorMessage('');

    try {
      const isHu = language === 'hu';
      const isZh = language === 'zh';
      const systemInstruction = isHu
        ? `Te egy professzionális magyar oktatási szakértő és szövegszerkesztő vagy. Készíts egy részletes, 250-300 szavas szakmai vázlatot a megadott témáról. 
SZIGORÚAN TARTSD BE A KÖVETKEZŐ MAGYAR STÍLUS-SZABÁLYOKAT:
1. KERÜLD AZ AI-KLISÉKET: Soha ne használd ezeket: 'Fontos megjegyezni', 'Érdemes kiemelni', 'Összefoglalva elmondható', 'Mérföldkő', 'Végezetül'.
2. TERMÉSZETES SZÓREND: Alkalmazz fókusz-alapú szórendet (a legfontosabb szó vagy az új információ közvetlenül az ige előtt álljon).
3. MONDATRITMUS: Váltogasd a mondatok hosszát. Legyenek rövid, ütős mondatok is.
4. TÖMÖRSÉG: Kerüld a terpeszkedő kifejezéseket (pl. 'szerepet játszik' → 'hat', 'végrehajtásra kerül' → 'elvégzik'). Ne használj passzív szerkezeteket.
5. TIPOGRÁFIA: Használj magyar „alsó-felső” idézőjeleket és rövid - gondolatjeleket.`
        : "You are a professional educational expert. Create a detailed 250-300 word professional outline for the given topic.";

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKeyInput.trim()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Téma: ${topic}. Nyelv: ${language}` }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        })
      });

      if (!response.ok) throw new Error("API hiba.");
      const result = await response.json();
      const text = result.candidates[0].content.parts[0].text;
      setOutline(text);
      setActiveTab('vázlat');
    } catch (error) {
      setErrorMessage(getLabel("Hiba a vázlat készítésekor.", "Error generating outline.", "生成大纲时出错。"));
    } finally {
      setLoading(prev => ({ ...prev, outline: false }));
    }
  };

  const generateStandardPrompt = () => {
    if (!topic || !outline) return;
    const stylePrompt = selectedStyle.prompt;
    const standardPrompt = getPromptSet(activeTemplate, topic, outline, language, ageGroup, stylePrompt);
    setPrompts({ standard: standardPrompt, ai: null });
    setActiveTab('standard');
  };

  const refineWithAI = async () => {
    if (!topic || !prompts.standard) return;
    setLoading(prev => ({ ...prev, ai: true }));
    setErrorMessage('');

    try {
      const systemInstruction = `You are a professional educational technologist. Refine the visual prompt. Always replace dashes with the minus sign (–). Return JSON with these keys: task, style, composition, elements, palette, lighting, goal, language, age_group. Use English for visual parameters. Populate language and age_group with the provided values.`;
      const userMsg = `Topic: ${topic}. Outline: ${outline}. Template: ${activeTemplate.name}. Language: ${language}. Age Group: ${ageGroup}. Respond in JSON.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKeyInput.trim()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMsg }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      if (!response.ok) throw new Error("API error.");
      const result = await response.json();
      const refinedData = JSON.parse(result.candidates[0].content.parts[0].text);

      const aiPrompt = getPromptSet(refinedData, topic, outline, language, ageGroup, selectedStyle.prompt);
      setPrompts(prev => ({ 
        ...prev, 
        ai: aiPrompt,
        aiParams: JSON.stringify(refinedData, null, 2)
      }));
      setActiveTab('ai');
    } catch (error) {
      setErrorMessage(getLabel("Hiba az AI finomítás során.", "AI processing error.", "AI 细化错误。"));
    } finally {
      setLoading(prev => ({ ...prev, ai: false }));
    }
  };

  const copyToClipboard = (id, text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopyStatus(prev => ({ ...prev, [id]: true }));
    setTimeout(() => setCopyStatus(prev => ({ ...prev, [id]: false })), 2000);
  };


  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col md:flex-row">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
      `}</style>

      <Sidebar
        language={language}
        setLanguage={setLanguage}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
        sortedTemplates={sortedTemplates}
        apiKeyInput={apiKeyInput}
        setApiKeyInput={setApiKeyInput}
        getLabel={getLabel}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        topic={topic}
        generateOutline={generateOutline}
        generateStandardPrompt={generateStandardPrompt}
        refineWithAI={refineWithAI}
        loading={loading}
        outline={outline}
        prompts={prompts}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-zinc-950">
        <GeneratorHeader
          topic={topic}
          setTopic={setTopic}
          generateOutline={generateOutline}
          generateStandardPrompt={generateStandardPrompt}
          refineWithAI={refineWithAI}
          loading={loading}
          outline={outline}
          prompts={prompts}
          getLabel={getLabel}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-8">
            <PromptResult
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              outline={outline}
              setOutline={setOutline}
              prompts={prompts}
              setPrompts={setPrompts}
              copyStatus={copyStatus}
              copyToClipboard={copyToClipboard}
              getLabel={getLabel}
            />
          </div>
        </div>
      </main>
    </div>
  );
}