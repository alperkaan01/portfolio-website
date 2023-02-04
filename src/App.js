import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Skills from "./Pages/Skills/Skills";
import { Navbar } from "./Components/Navbar/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar> 
      <Routes>
        <Route path="/">
            <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
