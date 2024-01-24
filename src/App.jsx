// App.js
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import LoanCalculator from "./Pages/LoanCalculator"
import BMICalculator from "./Pages/BmiCalculator"
import PriceCalculator from "./Pages/PriceCalculator"
import NumberConverter from "./Pages/NumberConverter"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Use the Navbar component here */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/price-calculator" element={<PriceCalculator />} />
          <Route path="/number-converter" element={<NumberConverter />} />
        </Routes>
        <div className="App">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
