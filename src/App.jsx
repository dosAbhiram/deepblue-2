import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Work from "./pages/work";
import IntelCaseStudy from "./pages/caseStudies/intel";

function App() {
  return (
    <Router basename="/deepblue-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/intel" element={<IntelCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
