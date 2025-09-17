import NavBar from "./components/NavBar"
import { Routes, Route, Link } from "react-router-dom";
import SpellCheck from "./pages/SpellCheck";
import CompareText from "./pages/CompareText";
import VoiceToText from "./pages/VoictoText";
import TextToVoice from "./pages/TextToVoice";
import ToPDF from "./pages/ToPDF";

function App() {


  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/spellCheck" element={<SpellCheck />} />
        <Route path="/compare-Text" element={<CompareText />} />
        <Route path="/voice-to-text"  element={<VoiceToText />} />
        <Route path="/text-to-voice"  element={<TextToVoice />} />
        <Route path="/to-PDF" element={<ToPDF />} />
      </Routes>
    </div>
  )
}

export default App
