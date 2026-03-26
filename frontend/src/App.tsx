import { BrowserRouter, Routes, Route } from "react-router-dom";
import LegacyHome from "./pages/LegacyHome";
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import AccountForm from "./pages/AccountForm";
import Producto from "./pages/Producto";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegacyHome />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/cuenta" element={<AccountForm />} />
        <Route path="/producto/:id" element={<Producto />} />
      </Routes>

      <Chatbot />
    </BrowserRouter>
  );
}

export default App;