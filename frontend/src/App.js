import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExplorationProvider } from "@/context/ExplorationContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Adas from "@/pages/Adas";
import Sistemi from "@/pages/Sistemi";
import Confronto from "@/pages/Confronto";
import SystemDetail from "@/pages/SystemDetail";
import Sensori from "@/pages/Sensori";
import Automazione from "@/pages/Automazione";
import Sicurezza from "@/pages/Sicurezza";
import Futuro from "@/pages/Futuro";
import Quiz from "@/pages/Quiz";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App">
      <ExplorationProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/adas" element={<Adas />} />
              <Route path="/sistemi" element={<Sistemi />} />
              <Route path="/confronto" element={<Confronto />} />
              <Route path="/sistemi/:id" element={<SystemDetail />} />
              <Route path="/sensori" element={<Sensori />} />
              <Route path="/automazione" element={<Automazione />} />
              <Route path="/sicurezza" element={<Sicurezza />} />
              <Route path="/futuro" element={<Futuro />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ExplorationProvider>
    </div>
  );
}

export default App;
