import React from 'react';
import './App.css';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogNav from '../src/Components/BlogNav';
import Post from '../src/Components/Post';
import Post1 from '../src/Components/Post1';
import Post2 from '../src/Components/Post2';
import Post3 from '../src/Components/Post3';
import Post4 from '../src/Components/Post4';

function App() {
  return (
    <Router>
      <div className="App">
        <BlogNav/>
        <Routes>
          <Route path="/" element={<Post/>}/>
          <Route path="/Post1" element={<Post1/>}/>
          <Route path="/Post2" element={<Post2/>}/>
          <Route path="/Post3" element={<Post3/>}/>
          <Route path="/Post4" element={<Post4/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;