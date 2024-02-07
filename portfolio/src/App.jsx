// import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
