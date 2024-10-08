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
import Booking from "./pages/Booking";
import Problems from "./pages/Problems";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="sovnproblemer" element={<Problems />} />
        <Route path="behandling" element={<Treatment />} />
        <Route path="priser" element={<Prices />} />
        <Route path="timebestilling" element={<Booking />} />
        <Route path="omoss" element={<About />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
