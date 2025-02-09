import React from "react";
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project1 from "./page/Project1";
import Project2 from "./page/Project2";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
       <ScrollToTop />
            <ScrollToTopButton />
      <Routes>
            <Route path="/project/1" element={<Project1 />} />
            <Route path="/project/2" element={<Project2 />} />
         
            <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;