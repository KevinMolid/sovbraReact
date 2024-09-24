// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./assets/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Treatment from "./pages/Treatment";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="behandling" element={<Treatment />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
