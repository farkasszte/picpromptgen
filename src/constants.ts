import React from 'react';
import {
  Presentation,
  BarChart3,
  Map as MapIcon,
  Network,
  Palette
} from 'lucide-react';

export interface Template {
  id: string;
  name: string;
  task: string;
  style: string;
  composition: string;
  elements: string;
  palette: string;
  lighting: string;
  goal: string;
}

export interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  templates: Template[];
}

export interface Language {
  id: string;
  label: string;
  flag: string;
}

export interface AgeGroup {
  id: string;
  label: string;
}

export interface AspectRatio {
  id: string;
  label: string;
  value: string;
}

export interface LocalizedString {
  hu: string;
  en: string;
  zh: string;
}

export interface InfographicStyle {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  prompt: string;
}

export const CATEGORIES: Record<string, Category> = {
  PRESENTATION: {
    id: 'presentation',
    label: 'Prezentáció és Diák',
    icon: React.createElement(Presentation, { className: "w-4 h-4" }),
    templates: [
      { id: 'p1', name: 'Általános prezentációs dia', task: 'Képalkotási feladat: Prezentációs dia készítése a(z) [TOPIC] témáról. A központi vizuális elem a téma lényegét ragadja meg professzionális prezentációs stílusban.', style: 'Clean Presentation Aesthetic', composition: 'Central hero visual with supporting icons', elements: 'Title placeholder, focus icons, labels', palette: 'Corporate blue and clean white', lighting: 'Soft studio lighting', goal: 'Átfogó vizuális útmutatás.' },
      { id: 'p2', name: 'Nagy kép metafora', task: 'Készítsen képet egy "Nagy kép" dia leírásáról, amely egy központi metaforát használ a(z) [TOPIC] elmagyarázására.', style: 'Conceptual Metaphor Illustration', composition: 'Single dominant central icon with surrounding nodes', elements: 'Visual analogy, symbolic objects, simplified labels', palette: 'High-contrast symbolic colors', lighting: 'Dramatic focal light', goal: 'Kognitív horgony kialakítása.' },
      { id: 'p3', name: 'Tévhit - Korrekció', task: 'Készítsen képet a gyakori tévhitekről, amely három mítoszt és azok bizonyítékokon alapuló korrekcióit sorolja fel a(z) [TOPIC] témában.', style: 'Informational Educational Graphic', composition: 'Split screen: Myth vs. Reality', elements: 'Alert icons, checkmarks, evidence bubbles', palette: 'Red and green accents on white', lighting: 'Clarity-focused studio lighting', goal: 'Kritikai gondolkodás fejlesztése.' },
      { id: 'p4', name: 'Hármas üsszefoglalás', task: 'Készítsen képet egy összefoglaló diáról a(z) [TOPIC] témában 3 fő pontban (key takeaways), mindegyikhez 1-1 támogató részlettel.', style: 'Minimalist Summary Slide', composition: 'Three vertical columns or blocks', elements: 'Clear numbering, focus icons, concise text', palette: 'Neutral with one accent color', lighting: 'Even flat lighting', goal: 'Lényeglátás segítése.' },
      { id: 'p5', name: 'Probléma-Megoldás-Hatás', task: 'Készítsen képet egy Probléma-Megoldás-Hatás elrendezésről a(z) [TOPIC] számára.', style: 'Strategic Narrative Slide', composition: 'Three-stage horizontal progression', elements: 'Problem icon, solution gears, impact spark', palette: 'Gradient from cool to warm tones', lighting: 'Directional stage lighting', goal: 'Folyamat és eredmény láttatása.' },
      { id: 'p6', name: 'Flash Talk script', task: 'Készítsen képet egy 60 másodperces villámelőadás forgatókönyvéről, amely csak a(z) [TOPIC] legkritikusabb aspektusára fókuszál.', style: 'Dynamic Script Layout', composition: 'Timed segments with visual cues', elements: 'Hook, main argument, call to action', palette: 'High energy colors', lighting: 'Spotlight focus', goal: 'Hatékony kommunikáció.' },
      { id: 'p7', name: 'Vizuális szókincs', task: 'Készítsen képet egy vizuális szókincs diáról: soroljon fel 5 kulcsfogalmat a(z) [TOPIC] témában, és rendeljen mindegyikhez egy egyszerű ikont.', style: 'Iconographic Dictionary', composition: 'Grid of 5 circular nodes', elements: 'Simple vector icons, bold labels', palette: 'Distinctive categorical colors', lighting: 'Shadowless flat design', goal: 'Fogalmi rögzítés.' },
      { id: 'p8', name: 'Híd-dia (Átvezetés)', task: 'Készítsen képet egy híd-diáról, amely logikus átmenetet képez egy korábbi témáról a(z) [TOPIC] témára.', style: 'Relational Transition Graphic', composition: 'Two large areas connected by a central bridge', elements: 'Previous topic anchor, [TOPIC] focus, logic arrows', palette: 'Analogous colors', lighting: 'Connecting glow effect', goal: 'Asszociációs háló építése.' },
      { id: 'p9', name: 'Lépésről lépésre folyamat', task: 'Készítsen képet egy folyamatlebontásról a(z) [TOPIC] számára, legfeljebb 5 világos és cselekvésközpontú szakaszra osztva.', style: 'Step-by-Step Educational Path', composition: 'Numbered sequence track', elements: 'Numbered badges, action verbs, small illustrations', palette: 'Sequential blue shades', lighting: 'Top-down clarity', goal: 'Procedurális tudás.' },
      { id: 'p10', name: 'Összehasonlító táblázat', task: 'Készítsen képet egy összehasonlító táblázatról a(z) [TOPIC] különböző aspektusaihoz négy konkrét változó mentén.', style: 'Technical Comparison Matrix', composition: 'Grid-based structured layout', elements: 'Checkmarks, variable labels, differentiation icons', palette: 'Muted neutral tones', lighting: 'Even flat lighting', goal: 'Differenciált szemléletmód.' }
    ]
  },
  INFOGRAPHICS: {
    id: 'infographics',
    label: 'Infografika és Adat',
    icon: React.createElement(BarChart3, { className: "w-4 h-4" }),
    templates: [
      { id: 'i1', name: 'Anatómia vizualizáció', task: 'Készítsen képet egy "A(z) [TOPIC] anatómiája" típusú infografikáról, amely alkotórészeire bontja a fogalmat/tárgyat.', style: 'Exploded view technical illustration', composition: 'Central object with radial callouts', elements: 'Leader lines, detailed textures, component labels', palette: 'Naturalistic or technical colors', lighting: 'Ambient occlusion, detailed shadows', goal: 'Szerkezeti elemzés.' },
      { id: 'i2', name: 'Fejlődési idővonal', task: 'Készítsen képet egy "fejlődési idővonalról" a(z) [TOPIC] témához, kiemelve az 5 legfontosabb fordulópontot.', style: 'Clean Linear Timeline', composition: 'Horizontal or zig-zag path', elements: 'Chronological markers, event icons, short descriptions', palette: 'Sequential color gradient', lighting: 'Even daylight', goal: 'Történeti kontextus megértése.' },
      { id: 'i3', name: 'Hatásfolyamat ábra', task: 'Készítsen képet egy "hatásfolyamat" ábráról, amely bemutatja, hogyan befolyásolja a(z) [TOPIC] a rendszerszintű eredményeket.', style: 'Flowchart with depth', composition: 'Cause-to-effect directional flow', elements: 'Impact nodes, weighted arrows, feedback loops', palette: 'Professional corporate palette', lighting: 'Top-down diffused lighting', goal: 'Okozati összefüggések feltárása.' },
      { id: 'i4', name: 'Számok tükrében', task: 'Készítsen képet egy "a számok tükrében" típusú infografikáról, amely a(z) [TOPIC] statisztikai jelentőségére fókuszál.', style: 'Data-Driven Dashboard', composition: 'Collection of distinct metric cards', elements: 'Pie charts, bar graphs, large hero numbers', palette: 'Monochromatic with high-contrast text', lighting: 'Crisp digital display', goal: 'Kvantitatív összefüggések.' },
      { id: 'i5', name: 'Érvek és ellenérvek', task: 'Készítsen képet egy vizuális mérlegről az érvek és ellenérvek bemutatására a(z) [TOPIC] kapcsán.', style: 'Balanced Comparison Sheet', composition: 'Symmetrical split layout', elements: 'Weights, scale icons, contrasting bullet points', palette: 'Cool blue vs warm amber', lighting: 'Neutral studio light', goal: 'Objektív elemzés.' },
      { id: 'i6', name: 'Fontossági hierarchia', task: 'Készítsen képet egy fontossági hierarchia listáról a(z) [TOPIC] számára egy piramis struktúra használatával.', style: 'Hierarchical Pyramid Structure', composition: 'Triangular layered sections', elements: 'Foundational blocks, peak achievement, layer labels', palette: 'Gradated saturation from bottom up', lighting: 'Uplighting effect', goal: 'Strukturális prioritások.' },
      { id: 'i7', name: 'Globális vs. lokális', task: 'Készítsen képet egy összehasonlító elrendezésről, amely bemutatja a(z) [TOPIC] hatásait globális és lokális léptékben.', style: 'Multi-scale Spatial Comparison', composition: 'Macro-view globe beside Micro-view map', elements: 'Scale markers, localized icons, global trends', palette: 'Earth tones', lighting: 'Dual-source illumination', goal: 'Léptékváltó gondolkodás.' },
      { id: 'i8', name: 'Siker-ellenőrzőlista', task: 'Készítsen képet egy "Út a sikerhez" infografika ellenőrzőlistáról a(z) [TOPIC] elsajátításához.', style: 'Gamified Checklist Graphic', composition: 'Winding path with checkboxes', elements: 'Milestone flags, progress bar, success trophy', palette: 'Vibrant achievement colors', lighting: 'Bright optimistic lighting', goal: 'Tanulási útmutatás.' },
      { id: 'i9', name: 'Folyamatciklusa', task: 'Készítsen képet egy folyamatciklus leírásról, biztosítva, hogy a(z) [TOPIC] utolsó és első fázisa közötti hurok világosan látható legyen.', style: 'Circular Iterative Model', composition: 'Closed loop ring', elements: 'Recycling arrows, continuous flow nodes', palette: 'Harmonious circular palette', lighting: 'Even internal glow', goal: 'Ciklikus folyamatok megértése.' },
      { id: 'i10', name: 'Puska-módszer (Cheat Sheet)', task: 'Készítsen képet egy Cheat Sheet elrendezésről, amely komplex információkat sűrít egyetlen vizuális útmutatóba a(z) [TOPIC] kapcsán.', style: 'Condensed Information Density', composition: 'Multimodal grid (text, icon, chart)', elements: 'Quick-reference boxes, mnemonic icons', palette: 'High-readability contrast', lighting: 'Office/Desk lighting clarity', goal: 'Hatékony összegzés.' },
      { id: 'i11', name: 'Rendszerszemléletű infografika', task: 'Rendszerszemléletű oktatási infografika a(z) [TOPIC] témáról. A vizualizáció tartalmazza az alapfogalmakat, a struktúrát, a folyamati hatásokat és a jelentőséget.', style: 'Comprehensive Systems Infographic', composition: 'Four-quadrant educational layout', elements: 'Educational icons, process arrows, structured text blocks', palette: 'Vibrant educational color coding', lighting: 'Bright, high-clarity lighting', goal: 'Komplex rendszerek átlátható bemutatása.' },
      { id: 'i12', name: 'Így készül folyamatábra', task: 'Készítsen egy "így készül" típusú vizuális folyamatleírást a(z) [TOPIC] előálllításáról. A vizualizáció mutassa be a gyártás/létrehozás fázisait a nyersanyagoktól a késztermékig.', style: 'Industrial Engineering Notebook fusion with Photorealism: Realistic images of materials and final product mixed with hand-drawn black ink technical sketches.', composition: 'Organic flowing arrangement (not a rigid grid) on a pure white background. Each stage varies in size based on importance; final product is largest and most photorealistic.', elements: 'Hand-drawn arrows connecting stages, annotations in black technical pen (hand-written style), cross-section sketches mixed with realistic equipment photos, small explanatory diagrams (cutaway views, physical changes).', palette: 'Black ink for all lines, sketches, and annotations; white background. Realistic color is used ONLY in the photorealistic product and material images.', lighting: 'Focus on clarity, mix of natural studio lighting for 3D elements and flat graphic lighting for technical sketches.', goal: 'Technológiai folyamatok és gyártási fázisok szemléletes bemutatása.' }
    ]
  },
  SPATIAL: {
    id: 'spatial',
    label: 'Térbeli és Kapcsolati',
    icon: React.createElement(MapIcon, { className: "w-4 h-4" }),
    templates: [
      { id: 's1', name: 'Tudástérkép', task: 'Készítsen képet egy "tudástérkép" leírásról, amely bemutatja a(z) [TOPIC] interdiszciplináris kapcsolatait.', style: 'Cartographic Knowledge Map', composition: 'Island or network cluster view', elements: 'Bridge icons, terrain of concepts, connection lines', palette: 'Vintage map aesthetic', lighting: 'Warm parchment glow', goal: 'Rendszerszemléletű integráció.' },
      { id: 's2', name: 'Venn-diagram', task: 'Készítsen képet egy Venn-diagram leírásáról, azonosítva a(z) [TOPIC] egyedi és közös vonásait más releváns fogalmakkal.', style: 'Minimalist Overlap Diagram', composition: 'Intersecting circles with clear central labels', elements: 'Shaded intersection, distinct node icons', palette: 'Translucent primary colors', lighting: 'Flat graphic lighting', goal: 'Hasonlóságok és különbségek elemzése.' },
      { id: 's3', name: 'Hálózati diagram', task: 'Készítsen képet egy hálózati diagramról, amely bemutatja az 5 legfontosabb érintett közötti kapcsolatot a(z) [TOPIC] területén.', style: 'Social Network Graph', composition: 'Node-and-link constellation', elements: 'Stakeholder avatars, relational arrows, weight indicators', palette: 'Divergent categorical colors', lighting: 'Subtle neon glow for nodes', goal: 'Társadalmi/rendszeri dinamika.' },
      { id: 's4', name: 'Térbeli eloszlás', task: 'Készítsen képet egy térbeli eloszlás összefoglalóról: magyarázza el, hol a legjellemzőbb a(z) [TOPIC] és miért.', style: 'Heatmap Distribution View', composition: 'Geographic map with intensity gradients', elements: 'Density markers, regional labels, trend lines', palette: 'Color intensity scale (blue to red)', lighting: 'Geographic overlay lighting', goal: 'Térbeli mintázatok felismerése.' },
      { id: 's5', name: 'Mozgás és áramlás', task: 'Készítsen képet egy "mozgás és áramlás" leírásról, amely bemutatja az információk áramlását a(z) [TOPIC] rendszerén binnen.', style: 'Kinetic Flow Diagram', composition: 'Dynamic directional streams', elements: 'Flow velocity arrows, bottleneck icons, source/sink nodes', palette: 'Fluid gradients', lighting: 'Motion blur effect', goal: 'Dinamikai elemzés.' },
      { id: 's6', name: 'Zónázott elemzés', task: 'Készítsen képet egy belső és külső tényezőkre osztott zónázott elemzésről a(z) [TOPIC] számára.', style: 'Concentric Zonal Layout', composition: 'Inside-out partitioned circles', elements: 'Internal core factors, external environmental influences', palette: 'Warm interior, cool exterior', lighting: 'Focal center light', goal: 'Környezeti analízis.' },
      { id: 's7', name: 'Koncentrikus körök', task: 'Készítsen képet egy koncentrikus körmodellről: helyezze a(z) [TOPIC] magját a középpontba, a kapcsolódó rétegeket pedig kívülre.', style: 'Onion-Skin Model', composition: 'Multiple nested rings', elements: 'Core essence, secondary attributes, tertiary links', palette: 'Monochromatic saturation layers', lighting: 'Layered transparency shadows', goal: 'Mélységi struktúra.' },
      { id: 's8', name: 'Előtte és utána', task: 'Készítsen képet egy vizuális összehasonlításról, amely bemutatja a(z) [TOPIC] hatását egy esemény előtt és után.', style: 'Temporal Split Comparison', composition: 'Vertical or horizontal side-by-side', elements: 'Transformation markers, growth indicators', palette: 'Desaturated "Before", vibrant "After"', lighting: 'Time-of-day progression', goal: 'Változáskövetés.' },
      { id: 's9', name: 'Ránagyítás (Drill-Down)', task: 'Készítsen képet egy "drill-down" struktúráról: induljon a(z) [TOPIC] széles áttekintésétől, majd "zoomoljon" egy konkrét esettanulmányra.', style: 'Telescopic View Illustration', composition: 'Series of increasingly detailed panels', elements: 'Overview map, focused lens, microscopic details', palette: 'Contextual blues and greys', lighting: 'Focus-pull effect', goal: 'Általánostól az egyediig.' },
      { id: 's10', name: 'Szórásdiagram logika', task: 'Készítsen képet egy szórásdiagram logikai vázlatáról: írja le, mely változók korrelálnak a(z) [TOPIC] kapcsán.', style: 'Analytical Scatter Plot', composition: 'Coordinate axis with clustered data points', elements: 'X/Y axis labels, outlier callouts, trend line', palette: 'Scientific muted tones', lighting: 'Even digital grid light', goal: 'Statisztikai mintázatkeresés.' }
    ]
  },
  DIAGRAMS: {
    id: 'diagrams',
    label: 'Modellek és Diagramok',
    icon: React.createElement(Network, { className: "w-4 h-4" }),
    templates: [
      { id: 'd1', name: 'Input-Process-Output', task: 'Készítsen képet egy Input-Process-Output rendszerdiagramról a(z) [TOPIC] folyamatához.', style: 'System Engineering Diagram', composition: 'Linear three-stage block layout', elements: 'Data stream icons, gear symbols, output result', palette: 'Industrial blue and orange', lighting: 'Clean tech lighting', goal: 'Folyamatoptimalizálás megértése.' },
      { id: 'd2', name: 'Hagyma-modell', task: 'Készítsen képet egy "hagyma-modellről" a(z) [TOPIC] komplexitásának és rétegeinek elmagyarázására.', style: 'Concentric Circle Model', composition: 'Layered spheres with a core center', elements: 'Cutaway view, layer labels, depth indicators', palette: 'Monochromatic shades of blue', lighting: 'Internal core glow', goal: 'Mélységi elemzés.' },
      { id: 'd3', name: 'SWOT Analízis', task: 'Készítsen képet egy SWOT analízisről (Erősségek, Gyengeségek, Lehetőségek, Veszélyek) a(z) [TOPIC] stratégiájához.', style: 'Quadrant Matrix Style', composition: 'Four-cell balanced grid', elements: 'SWOT icons, bulleted lists, header icons', palette: 'Standard SWOT color coding (Green, Red, Blue, Yellow)', lighting: 'Neutral flat lighting', goal: 'Stratégiai értékelés.' },
      { id: 'd4', name: 'Halszálka (Ishikawa)', task: 'Készítsen képet egy halszálka diagram vázlatáról a(z) [TOPIC] gyökérokainak azonosítására.', style: 'Root Cause Analysis Framework', composition: 'Skeleton-style horizontal flow', elements: 'Problem head, category ribs (People, Process, etc.)', palette: 'Technical grey and steel', lighting: 'Precision studio lighting', goal: 'Problémamegoldó elemzés.' },
      { id: 'd5', name: 'Döntési fa', task: 'Készítsen képet egy döntési fáról a(z) [TOPIC] számára, hogy segítsd a tanulóknak navigálni egy választási helyzetben.', style: 'Algorithmic Flow Layout', composition: 'Branching tree structure', elements: 'Decision nodes, branch paths, outcomes', palette: 'Binary contrast colors', lighting: 'Pathway illumination', goal: 'Logikai döntéshozatal.' },
      { id: 'd6', name: 'Visszacsatolási hurok', task: 'Készítsen képet egy visszacsatolási hurok diagramról a(z) [TOPIC] témában: mutassa be a folyamatok egymásra hatását.', style: 'Self-Regulating System Model', composition: 'Interconnected cyclic nodes', elements: 'Positive/negative signs, reinforcement arrows', palette: 'System dynamics palette', lighting: 'Dynamic energy glow', goal: 'Rendszerdinamika megértése.' },
      { id: 'd7', name: 'Gondolattérkép (Mind map)', task: 'Készítsen képet egy gondolattérkép vázáról a(z) [TOPIC] központi témájával és 4 fő ággal.', style: 'Organic Mind Map Style', composition: 'Radial branching structure', elements: 'Central trunk, sub-topic branches, keyword icons', palette: 'Multi-colored semantic branches', lighting: 'Soft ambient clarity', goal: 'Asszociatív rögzítés.' },
      { id: 'd8', name: 'Spektrum / Kontinuum', task: 'Készítsen képet egy spektrum vagy kontinuum vizualizációról a(z) [TOPIC] számára, szélsőséges nézőpontokkal.', style: 'Linear Scale Visualization', composition: 'Horizontal line with pointer nodes', elements: 'Extreme labels, midpoint balance, variation markers', palette: 'Gradient from cold to warm', lighting: 'Balanced even spread', goal: 'Árnyalt szemléletmód.' },
      { id: 'd9', name: 'Híd-modell (Fejlődés)', task: 'Készítsen képet egy "híd-modellről": mutassa be az elmozdulást az "A" állapotból a "B" állapotba a(z) [TOPIC] kapcsán.', style: 'Developmental Transition Bridge', composition: 'Two cliffs connected by a modular bridge', elements: 'Start state, end state, required tools/steps', palette: 'Growth greens and browns', lighting: 'Future-focused morning sun', goal: 'Fejlődési folyamat tervezése.' },
      { id: 'd10', name: 'Mérleg vizualizáció', task: 'Készítsen képet egy mérleg vizualizációról: mely tényezők emelik fel vagy húzzák le a(z) [TOPIC] helyzetét.', style: 'Equilibrium Metaphor', composition: 'Classical balance scale', elements: 'Weight blocks, lifting balloons, central fulcrum', palette: 'Heavy greys vs light yellows', lighting: 'Gravity-focused lighting', goal: 'Tényező-elemzés.' }
    ]
  },
  CREATIVE: {
    id: 'creative',
    label: 'Kreatív Tananyagok',
    icon: React.createElement(Palette, { className: "w-4 h-4" }),
    templates: [
      { id: 'c1', name: 'Múzeumi tábla', task: 'Készítsen képet egy "múzeumi tábláról": foglalja össze a(z) [TOPIC] lényegét nagyközönség számára.', style: 'Museum Exhibit Plaque', composition: 'Elegant typography-focused layout', elements: 'Artifact silhouette, timeline snippet, key fact box', palette: 'Museum grey and gold accents', lighting: 'High-end gallery spotlight', goal: 'Közérthető ismeretterjesztés.' },
      { id: 'c2', name: 'Esettanulmány pillanatkép', task: 'Készítsen képet egy "esettanulmány pillanatképet" a(z) [TOPIC] témában.', style: 'Editorial Case Study Layout', composition: 'Vertical card style with sidebar', elements: 'Statistical graphs, quote marks, focus icon', palette: 'Academic journal aesthetic', lighting: 'Soft window light', goal: 'Gyakorlati alkalmazás.' },
      { id: 'c3', name: 'Vizuális metafora prompt', task: 'Készítsen képet egy vizuális metaforáról: "Ha a(z) [TOPIC] egy gép/organizmus/épület lenne, hogyan működne?".', style: 'Surreal Educational Metaphor', composition: 'Detailed biomechanical or architectural cutaway', elements: 'Internal mechanisms, organic structures, functional labels', palette: 'Rich detailed textures', lighting: 'Dramatic cinematic lighting', goal: 'Absztrakt fogalmak konkretizálása.' },
      { id: 'c4', name: 'Szituáció-alapú kártya', task: 'Készítsen képet egy "szituáció-alapú" tanulókártyáról: probléma és megoldás a(z) [TOPIC] alapján.', style: 'Flashcard Minimalist Style', composition: 'Front/Back mirrored layout', elements: 'Challenge icon, solution key, mnemonic aid', palette: 'High-contrast black and white', lighting: 'Flat studio lighting', goal: 'Problémamegoldás gyakorlása.' },
      { id: 'c5', name: 'Terepkalauz bejegyzés', task: 'Készítsen képet egy "terepkalauz" bejegyzésről a(z) [TOPIC] számára, bemutatva a típusokat és funkciókat.', style: 'Naturalist Field Guide Illustration', composition: 'Botanical/Scientific sketch layout', elements: 'Annotated drawings, scale reference, habitat icons', palette: 'Watercolor and ink wash', lighting: 'Natural diffused daylight', goal: 'Rendszertani tudás.' },
      { id: 'c6', name: 'Social media feed', task: 'Készítsen képet egy social media feed összefoglalóról: magyarázza el a(z) [TOPIC] lényegét 5 tömör posztban.', style: 'Modern Social Media Feed', composition: 'Sequence of mobile-style card frames', elements: 'Profile avatars, engagement icons, hashtags', palette: 'UI-standard vibrant blues/greys', lighting: 'Smartphone screen glow', goal: 'Tartalomszintézis.' },
      { id: 'c7', name: 'Értékelési rubrika', task: 'Készítsen képet egy strukturált értékelési rubrikáról a(z) [TOPIC] témakörű projektek osztályozásához.', style: 'Structured Grading Table', composition: 'Checklist matrix with criteria nodes', elements: 'Performance levels, specific criteria, visual symbols', palette: 'Neutral with status colors', lighting: 'Flat office clarity', goal: 'Objektív értékelés.' },
      { id: 'c8', name: 'Mítosz-vadász poszter', task: 'Készítsen képet egy "mítosz-vadász" poszterről: hibák és igazságok bemutatása a(z) [TOPIC] kapcsán.', style: 'Propaganda/Alert Poster Style', composition: 'Striking duo-tone split', elements: 'Large "X" and "Check" symbols, bold fonts', palette: 'Stark Red and Green', lighting: 'Harsh high-contrast lighting', goal: 'Tévhit-mentesítés.' },
      { id: 'c9', name: 'Sketch-note útmutató', task: 'Készítsen képet egy "sketch-note" utasításkészletről a(z) [TOPIC] lényegének lerajzolásához.', style: 'Hand-Drawn Instructional Style', composition: 'Doodle-style step guide', elements: 'Simplified sketches, arrow connectors, bubble text', palette: 'Marker and paper aesthetic', lighting: 'Soft desk lamp glow', goal: 'Vizuális jegyzetelés.' },
      { id: 'c10', name: 'Összefoglaló táblázat', task: 'Készítsen képet egy összefoglaló táblázatról a(z) [TOPIC] rendszerezéséhez.', style: 'Executive Knowledge Matrix', composition: 'High-level structured spreadsheet', elements: 'Summary icons, evidence links, action steps', palette: 'Deep professional corporate tones', lighting: 'High-key studio clarity', goal: 'Komplex szintézis.' }
    ]
  }
};

export const AGE_GROUPS: AgeGroup[] = [
  { id: '10-14', label: '10-14 év' },
  { id: '14-18', label: '14-18 év' },
  { id: '18+', label: '18+ év' }
];

export const ASPECT_RATIOS: AspectRatio[] = [
  { id: '1:1', label: '1:1 (Négyzet)', value: '1:1' },
  { id: '16:9', label: '16:9 (Fekvő)', value: '16:9' },
  { id: '9:16', label: '9:16 (Álló)', value: '9:16' },
  { id: '4:5', label: '4:5 (Portré)', value: '4:5' },
  { id: '3:2', label: '3:2 (Klasszikus)', value: '3:2' }
];

export const LANGUAGES: Language[] = [
  { id: 'hu', label: 'Magyar', flag: 'HU' },
  { id: 'en', label: 'Angol', flag: 'EN' },
  { id: 'zh', label: 'Mandarin', flag: 'CN' }
];

export const INFOGRAPHIC_STYLES: InfographicStyle[] = [
  {
    id: 'default',
    name: { hu: 'Alapértelmezett', en: 'Default', zh: '默认' },
    description: { hu: 'Nincs extra stílus alkalmazva.', en: 'No extra style applied.', zh: '未应用额外样式。' },
    prompt: ''
  },
  {
    id: 'brutalist',
    name: { hu: 'Brutalista', en: 'Brutalist', zh: '野兽派' },
    description: { hu: 'Ultra-modern szerkesztő plakát stílus, brutalista grafikai design, magas kontrasztú skicc illusztrációk.', en: 'Ultra-modern editorial poster style, brutalist graphic design, high-contrast sketch illustrations.', zh: '超现代编辑海报风格，野兽派图形设计，高对比度素描插图。' },
    prompt: 'Ultra-modern editorial poster style, brutalist graphic design, high-contrast neo-noir black and white sketch illustrations, bold red accent blocks, Swiss typography meets experimental grunge layouts, layered collage compositions, fragmented geometric shapes, overlapping text blocks and truncated titles, worn ink textures, grainy xerox noise, asymmetric grid systems, abstract architectural lines, stencil typography, journal-cover aesthetic, contemporary avant-garde design, sharp lighting with deep shadows, high detail, dramatic contrast, minimal color palette (black, white, red), chaotic yet structured compositions, urban underground feel, premium poster print.'
  },
  {
    id: 'neo-noir',
    name: { hu: 'Sötét neo-noir', en: 'Dark Neo-Noir', zh: '黑暗新黑色' },
    description: { hu: 'Sötét neo-noir expresszionista festmény, brutális filmszerű atmoszféra, drámai megvilágítás.', en: 'Dark neo-noir expressionist painting, brutal cinematic atmosphere, dramatic lighting.', zh: '黑暗新黑色表现主义绘画，残酷的电影氛围，戏剧性的灯光。' },
    prompt: 'Dark neo-noir expressionist painting, brutal cinematic atmosphere, bold red and deep black dominant palette with muted grey undertones, dramatic high-contrast lighting, sharp chiaroscuro shadows, aggressive painterly brushstrokes, oil paint effect, abstract splash and smear overlays, rough palette knife strokes, urban crime poster aesthetic, somber and intense tone, subtle grunge texture, layered paint depth, strong focal contrast, modern graphic novel realism, slightly desaturated skin tones against vivid red highlights, raw and powerful composition, high detail, dramatic editorial style.'
  },
  {
    id: 'manga',
    name: { hu: 'Manga Képregény', en: 'Manga Comic', zh: '漫画风格' },
    description: { hu: 'Klasszikus japán képregény-esztétika, fekete-fehér tintarajz, panel elrendezés.', en: 'Classic Japanese comic aesthetic, black and white ink drawing, panel layout.', zh: '经典日本漫画审美，黑白墨水画，面板布局。' },
    prompt: 'Manga comic style educational infographic, classic Japanese comic aesthetic. Black and white ink drawing style, thick outlines, subtle grayscale screen tone shading. Panel layout (koma-wari): asymmetric, dynamic panels. Thick black panel borders, white gutters (panel dividers). Ambiance: epic, dramatic, engaging.'
  },
  {
    id: 'cyberpunk',
    name: { hu: 'Cyberpunk / Tech', en: 'Cyberpunk / Tech', zh: '赛博朋克 / 科技' },
    description: { hu: 'Futurisztikus sötét téma neon fényekkel, ragyogó effektekkel.', en: 'Futuristic dark theme with neon lights and glowing effects.', zh: '带有霓虹灯和发光效果的未来主义黑暗主题。' },
    prompt: 'Tech trend infographic, cyberpunk-inspired dark theme. Dark background with neon turquoise and magenta highlights. A strong statistic or prediction displayed prominently. Glowing effects on key elements, futuristic sans-serif font. Designed for instant understanding, optimized for social media.'
  },
  {
    id: 'architecture',
    name: { hu: 'Architektúra / Adat', en: 'Architecture / Data', zh: '建筑 / 数据' },
    description: { hu: 'Izometrikus diagram, tervrajz-stílus, kék-szürke duotón.', en: 'Isometric diagram, blueprint style, blue-grey duotone.', zh: '轴测图，蓝图风格，蓝灰双色调。' },
    prompt: 'Isometric diagram, blueprint-style, blue-gray duotone. Components represented as nodes, arrows indicating the direction of data flow. Minimal text, icons only.'
  },
  {
    id: 'comparison',
    name: { hu: 'Összehasonlítás', en: 'Comparison', zh: '比较' },
    description: { hu: 'Osztott képernyős elrendezés, kontrasztos színekkel a különbségek szemléltetésére.', en: 'Split-screen layout with contrasting colors to illustrate differences.', zh: '分屏布局，使用对比色来说明差异。' },
    prompt: 'Split-screen comparison layout, high-contrast duotone palette. Left side: cool blue tones. Right side: warm orange tones. Clean grid alignment, sans-serif font, minimal ornamentation. Icons to represent individual features, checkmarks for capabilities.'
  },
  {
    id: 'executive',
    name: { hu: 'Minimalista', en: 'Minimalist', zh: '极简主义' },
    description: { hu: 'Svájci minimalizmus, professzionális vezetői esztétika, letisztult rácsrendszer.', en: 'Swiss minimalism, professional executive aesthetic, clean grid system.', zh: '瑞士极简主义，专业的高管审美，干净的网格系统。' },
    prompt: 'Swiss minimalism style infographic, strict grid alignment, high-contrast layout. Navy blue base with gold accents for key metrics, off-white background. Prominently displayed main statistic with supporting data points. Clean sans-serif font, professional executive aesthetic.'
  },
  {
    id: 'cubist',
    name: { hu: 'Expresszív kubista', en: 'Expressive Cubist', zh: '表现主义立体派' },
    description: { hu: 'Geometriai fragmentáció, kubista ihletésű absztrakt kompozíció.', en: 'Geometric fragmentation, cubist-inspired abstract composition.', zh: '几何碎片化，受立体主义启发的抽象构图。' },
    prompt: 'Expressive abstract style, bold geometric fragmentation, cubist-inspired composition, dynamic angular planes overlapping, vibrant saturated color palette (magenta, cyan, violet, coral, turquoise), watercolor and acrylic mixed media effect, visible canvas texture, painterly distortion, gallery-quality modern art finish.'
  },
  {
    id: 'mosaic',
    name: { hu: 'Geometriai mozaik', en: 'Geometric Mosaic', zh: '几何马赛克' },
    description: { hu: 'Töredezett sokszögű formák, ólomüveg hatás, élénk színek.', en: 'Fragmented polygonal shapes, stained glass effect, vibrant colors.', zh: '碎片化的多边形形状，彩色玻璃效果，鲜艳的色彩。' },
    prompt: 'Modern geometric mosaic style with cubist influence, fragmented polygonal shapes arranged in a stained glass composition. Strong emphasis on sharp edges, angular facets, and layered geometry. Rich, saturated color palette dominated by deep blue, warm orange, amber. Painterly acrylic or oil paint effect.'
  },
  {
    id: 'collage',
    name: { hu: 'Hibrid kollázs', en: 'Hybrid Collage', zh: '混合拼贴' },
    description: { hu: 'Hibrid konceptuális kollázs, papír textúra, technikai vonalak.', en: 'Hybrid conceptual collage, paper texture, technical lines.', zh: '混合概念拼贴，纸张纹理，技术线条。' },
    prompt: 'Hybrid conceptual collage illustration, double exposure composition, editorial poster aesthetic, fusion of realistic grayscale portrait rendering and urban architectural montage, geometric grid overlays and technical blueprint lines, layered cut-and-paste paper texture, bold orange and charcoal black highlights.'
  },
  {
    id: 'expressionist',
    name: { hu: 'Vegyes média', en: 'Mixed Media', zh: '混合媒体' },
    description: { hu: 'Dinamikus expresszionista festmény, érzelmes ecsetvonásokkal.', en: 'Dynamic expressionist painting with emotional brushstrokes.', zh: '充满情感笔触的动态表现主义绘画。' },
    prompt: 'Dynamic mixed media expressionist painting with strong emotions. Chaotic mix of bold brushstrokes, paint splatters, and collage elements. Color palette rich in warm oranges, deep yellows, and earthy browns, with electric turquoise highlights.'
  },
  {
    id: 'timeline',
    name: { hu: 'Folyamat / Idővonal', en: 'Process / Timeline', zh: '过程 / 时间表' },
    description: { hu: 'Izometrikus utazásillusztráció, kanyargó ösvénnyel és mérföldkövekkel.', en: 'Isometric journey illustration with a winding path and milestones.', zh: '带有蜿蜒路径 és mérföldkövekkel rendelkező izometrikus utazásillusztráció.' },
    prompt: 'Isometric journey illustration, top-down view with a winding path. Soft blue and turquoise palette with warm accent-colored milestone markers. Every step is an independent station on the path, with numbered icons. Visual storytelling through icons and spatial arrangement.'
  },
  {
    id: 'vulgarisation',
    name: { hu: 'Ismeretterjesztés', en: 'Educational Explainer', zh: '知识普及' },
    description: { hu: 'Flat design illusztráció, Kurzgesagt-stílus, barátságos ikonok.', en: 'Flat design illustration, Kurzgesagt-style, friendly icons.', zh: '扁平化设计插图，Kurzgesagt 风格，友好的图标。' },
    prompt: 'Flat design illustration, Kurzgesagt-style, soft pastel colors with warm highlights. Simplified rounded shapes, friendly icons, clean visual flow. Top-down structure: concept → mechanism → outcome.'
  },
  {
    id: 'mini-world',
    name: { hu: 'Mini világ (izometrikus)', en: 'Mini World (Isometric)', zh: '微缩世界（轴测）' },
    description: { hu: 'Miniatűr világ, geometrikus formák, játékos környezet.', en: 'Miniature world look, geometric shapes, toy-like environment.', zh: '缩微世界外观，几何形状，玩具般的环境。' },
    prompt: 'Miniature World Look with Geometric shapes, "blocky" characters, and a clear sense of depth without using true 3D perspective. Isometric projection, simplified toy-like environment, tilt-shift photography effect, clean geometric primitives.'
  },
  {
    id: 'chalkboard',
    name: { hu: 'Kréta és tábla', en: 'Chalkboard', zh: '粉笔板' },
    description: { hu: 'Klasszikus iskolai tábla stílus, kréta textúrával.', en: 'Classic chalkboard style with chalk texture.', zh: '带有粉笔纹理s classic aschool board stílus.' },
    prompt: 'Classic chalkboard style, white and colored chalk texture on a dark slate background. Hand-drawn diagrams, dusty textures, smudged erasures, educational classroom aesthetic.'
  },
  {
    id: 'anime-battle',
    name: { hu: 'Anime csata', en: 'Anime Battle', zh: '动漫战斗' },
    description: { hu: 'Dinamikus anime akció, energikus effektekkel.', en: 'Dynamic anime action with energetic effects.', zh: '带有活力效果的动态动漫动作。' },
    prompt: 'High-octane Anime Battle Style. Dynamic action lines, intense energy effects (shōnen style), dramatic freeze-frames, vibrant saturated colors, expressive character poses, cinematic combat framing.'
  },
  {
    id: 'tactile-3d',
    name: { hu: 'Taktilis 3D (Neumorphism)', en: 'Tactile 3D (Neumorphism)', zh: '触觉 3D (新拟物化)' },
    description: { hu: 'Taktilis 3D stílus lágy árnyékokkal, fényes felületekkel.', en: 'Tactile 3D style with soft shadows, glossy finishes.', zh: '带有软阴影 és fényes felületekkel rendelkező taktilis 3D stílus.' },
    prompt: 'Tactile 3D style with Neumorphism: soft shadows that make shapes look extruded from the background, glossy finishes, and inflated 3D shapes. High-end UI aesthetic, plastic/clay textures, soft diffused lighting, rounded corners.'
  },
  {
    id: '90s-retro',
    name: { hu: '90-es évek / Y2K', en: '90s / Y2K Retro', zh: '90 年代 / Y2K 复古' },
    description: { hu: '90-es évek/Y2K stílus pixel art ikonokkal, neon színekkel.', en: '90s/Y2K style with pixel art icons and neon colors.', zh: '带有像素艺术 ikonokkal és neon színekkel rendelkező 90-es évek/Y2K stílus.' },
    prompt: '90s/Y2K Retro style with pixel art icons, bright neon or "bubblegum" colors (hot pink, lime green, electric blue). Chunky, rounded typography, vaporwave elements, lo-fi digital textures, sticker-bomb aesthetic.'
  },
  {
    id: 'whiteboard',
    name: { hu: 'Whiteboard rajz', en: 'Whiteboard Drawing', zh: '白板画' },
    description: { hu: 'Professzionális whiteboard rajz filctollal.', en: 'Professional whiteboard drawing with markers.', zh: '使用马克笔的专业白板画。' },
    prompt: 'Professional whiteboard style using felt-tip markers (black, blue, red). Hand-drawn look, slight whiteboard reflections, clean academic or business brainstorming aesthetic, simple line art.'
  },
  {
    id: 'kawaii',
    name: { hu: 'Kawaii doodle', en: 'Kawaii Doodle', zh: '可爱涂鸦' },
    description: { hu: 'Szupercuki Kawaii doodle stílus, pasztell színekkel.', en: 'Super-cute Kawaii doodle style with pastel colors.', zh: '带有柔和色彩的超级可爱涂鸦风格。' },
    prompt: 'Kawaii Doodle Art style. Super-cute characters with simple faces, soft pastel palette, thick friendly outlines, cluttered but organized compositions, joyful and "sparkly" elements.'
  },
  {
    id: 'oregon-trail',
    name: { hu: 'Retro 8-bit', en: 'Retro 8-bit', zh: '复古 8 位' },
    description: { hu: 'Klasszikus 8-bites retro stílus, pixel art esztétika.', en: 'Classic 8-bit retro style, pixel art aesthetic.', zh: '经典 8 位复古风格，像素艺术审美。' },
    prompt: 'Classic 8-bit Oregon Trail retro style. Pixelated pixel art, limited color palette, jagged edges, 1980s computer game aesthetic, rustic western themes, blocky status text.'
  }
];
