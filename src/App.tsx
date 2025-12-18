import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicosPage from "./pages/ServicosPage";
import PortfolioPage from "./pages/PortfolioPage";
import SobrePage from "./pages/SobrePage";
import ContatoPage from "./pages/ContatoPage";
import PrivacidadePage from "./pages/PrivacidadePage";
import TermosPage from "./pages/TermosPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicos" element={<ServicosPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/contato" element={<ContatoPage />} />
              <Route path="/privacidade" element={<PrivacidadePage />} />
              <Route path="/termos" element={<TermosPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
