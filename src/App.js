import './App.css';
import BlogPage from './components/BlogPage';
import Skill from './components/Skill';
import Connect from './components/Connect'; 
import React from 'react';
import Headercomponents from './components/Headercomponents';
import Homepage from './components/Homepage';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Research from './components/Research';
// ★ 追加
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
<Router>
  <div className="App">
    {/* ★ 追加 */}
    <ScrollToTop />

    <Headercomponents />

    <Routes>
      <Route path="/"element={<Homepage />}/>
      <Route path="/Research"element={<Research />}/>
      <Route path="/Product"element={<BlogPage />}/>
      <Route path='/skills'element={<Skill />}/>
      <Route path="/Connect"element={<Connect />}/>
    </Routes>
  </div>

  
</Router>
  );
}

export default App;
