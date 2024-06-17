import React, {createContext} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Header from "./Components/Header.jsx"

import "./App.css"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<LearnCallback />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div>
        <button onClick={passValueFunction(3)}>click to pass the value</button>
      </div> */}
    </Router>
  )
}

export default App
