# Vizuál–Edu

**Vizuál–Edu** is a professional educational workflow designer and image prompt generator. It helps educators create structured visual content for various educational topics, tailored to specific age groups and languages.

## 🚀 Features

- **Topic-Based Summary Generation:** Automatically generate a professional 250-300 word summary for any educational topic using the Gemini API.
- **Template-Based Prompting:** Choose from 50+ specialized templates across 5 categories (Presentation, Infographics, Spatial, Diagrams, Creative).
- **AI-Powered Refinement:** Enhance standard prompts with AI to get more cinematic and technically precise visual descriptions.
- **Multilingual Support:** Interface and prompt generation available in Hungarian, English, and Mandarin Chinese.
- **Age-Specific Content:** Tailor prompts for different age groups (10-14, 14-18, 18+).
- **JSON Specification:** Export prompt sets in JSON format for automated workflows.
- **API Key Management:** Securely store your Gemini API key in your browser's local storage.

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Vanilla CSS (with custom utility classes)
- **Icons:** Lucide React
- **AI Model:** Google Gemini API (`gemini-3-flash-preview`)

## 📦 Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📖 Usage

1. Open the application in your browser.
2. In the **Sidebar**, go to **Settings** and enter your **Gemini API Key**.
3. Select your preferred **Language** and **Age Group**.
4. Choose a **Category** and a **Template** that fits your educational goal.
5. Enter an **Educational topic** in the search bar.
6. Click **1. Create Summary** to generate the content summary.
7. Click **2. Generate Prompt** to create the standard visual prompts based on the summary.
8. (Optional) Click **3. AI Refine** for enhanced results or **4. JSON Spec** for data export.
9. Use the **Tabs** to switch between results and the **COPY** button to copy prompts to your clipboard.

## 💡 Suggestions for Future Development

### 1. Model Selection
- Add a dropdown in the settings to allow users to switch between different Gemini models (e.g., Flash for speed, Pro for higher quality).

### 2. Batch Generation
- Implement a feature to generate prompts for an entire lesson plan (multiple topics) at once.

### 3. Integrated Image Preview
- Integrate with image generation APIs (like DALL-E 3 or Midjourney API) to provide a "Generate Image" button directly within the app, showing a preview of the result.

### 4. Template Editor
- Allow users to create, save, and export their own custom prompt templates.

### 5. Export to PDF/Markdown
- Add an option to export the entire educational workflow (outline + prompts) into a formatted PDF or Markdown document for easier sharing.

### 6. Voice Input
- Add voice-to-text functionality for entering topics, making it more accessible for educators on the go.

### 7. Historical Logs
- Implement a local history feature where users can see and reuse their previously generated prompts.
