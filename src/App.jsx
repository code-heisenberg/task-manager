import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ExternalData from "./Pages/ExternalData";
import { ThemeContext } from "./context/ThemeContext.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

import "./App.css";

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <div className="topbar">
          <Link className ="topbar-link" to="/">Home</Link>
          <Link className ="topbar-link" to="/about">About</Link>
          <Link className="topbar-link" to="/posts">Posts</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<ExternalData />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
