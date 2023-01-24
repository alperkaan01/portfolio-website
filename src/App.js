import { Navbar } from "./Components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/">
            <Route path="/portfolio-website" element={<Homepage />} />
            {/* <Route path="/" element={<Homepage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
