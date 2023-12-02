
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import Women from "./Women";
import Item from "./Item"
const App = () => {
  return (
    <main>
      <div>
        {/* Do not remove the main div */}
        <ul>
          <li> <Link to={'/'} >Home</Link> </li>
          <li> <Link to={'/women'} >Women</Link> </li>
        </ul>
        <div>Index</div>
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
