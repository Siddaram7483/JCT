
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import Gallery from "./components/Gallery";
import Stories from "./components/Stories";
import Team from "./components/Team";
import Newsletter from "./components/Newsletter";
import DonationPage from "./components/DonationPage";
import "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/team" element={<Team />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/donate-page" element={<DonationPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
