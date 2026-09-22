import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { DocumentationPage } from "./pages/DocumentationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
