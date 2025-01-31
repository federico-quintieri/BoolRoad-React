// Importo dipendenze
import { RubricaList } from "./pages/RubricaList";
import { ViaggiList } from "./pages/ViaggiList";
import { AppLayout } from "./pages/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main component app con le rotte
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ViaggiList />} />
          <Route path="/contatti/:viaggioId" element={<RubricaList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
