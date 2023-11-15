import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
    </main>
  );
};

export default App;
