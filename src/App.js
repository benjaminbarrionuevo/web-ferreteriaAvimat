import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/public/Footer";
import Navbar from "./components/public/Navbar";
import Main from "./components/public/Main";
import Carousel from "./components/public/Carousel";
import Cotizacion from "./components/public/Cotizacion";
import Contacto from "./components/public/Contacto";
import Blog from "./components/public/Blog";
import ConfCotizacion from "./components/public/ConfCotizacion";
import MensajeCotizacion from "./components/public/MensajeCotizacion";
import TableMat from "./components/public/TableMat";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Carousel />} />
        <Route path="/Cotizacion" element={<Cotizacion />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ConfCotizacion" element={<ConfCotizacion />} />
        <Route path="/MensajeCotizacion" element={<MensajeCotizacion />} />
        <Route path="/api/materiales" element={<TableMat />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
