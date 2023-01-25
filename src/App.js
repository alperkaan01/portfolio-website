import { Navbar } from "./Components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import ContactMe from "./Pages/ContactMe/ContactMe";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/portfolio-website">
            <Route path="/portfolio-website" element={<Homepage />} />
            <Route path="/portfolio-website/about" element={<About />} />
            <Route path="/portfolio-website/projects" element={<Projects />} />
            <Route path="/portfolio-website/education" element={<Education />} />
            <Route path="/portfolio-website/contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
