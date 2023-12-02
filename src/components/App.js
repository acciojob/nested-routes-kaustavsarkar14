
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import Women from "./Women";
import Item from "./Item"
import Hero from "./Hero";
const App = () => {
  return (
    <main>
      <div>
        {/* Do not remove the main div */}
       <Hero/>
        <Routes>
          <Route path="/" element={<div>Index</div>} />
          <Route path="/women" element={<Women />} />
          <Route path='/women/:item' element={<Item />} />
        </Routes>
      </div>
    </main>
  )
}

export default App


// {path === '/' && <div>Index</div>}
// {path === '/women' && <Women />}
