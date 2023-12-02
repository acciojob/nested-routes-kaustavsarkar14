
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import Women from "./Women";
import Item from "./Item"
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <ul>
        <li> <Link to={'/'} >Home</Link> </li>
        <li> <Link to={'/women'} >Women</Link> </li>
      </ul>
      <Routes>
        <Route path="/" element={<p>Index</p>} />
        <Route path="/women" element={<Women />} />
        <Route path='/women/:item' element={<Item />} />
      </Routes>
    </div>
  )
}

export default App
