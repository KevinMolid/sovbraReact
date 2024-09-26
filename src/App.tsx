// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./assets/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Treatment from "./pages/Treatment";
import Prices from "./pages/Prices";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="behandling" element={<Treatment />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="priser" element={<Prices />} />
        <Route path="om" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
