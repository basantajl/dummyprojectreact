import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LoanCalculator from "./Components/LoanCalculator"
import BMICalculator from "./Components/BMICalculator"
import PriceCalculator from "./Components/PriceCalculator"
import NumberConverter from "./Components/NumberConverter"
import Home from "./Components/Home"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/loan-calculator">Loan Calculator</Link>
            </li>
            <li>
              <Link to="/bmi-calculator">BMI Calculator</Link>
            </li>
            <li>
              <Link to="/price-calculator">Price Calculator</Link>
            </li>
            <li>
              <Link to="/number-converter">Number Converter</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/price-calculator" element={<PriceCalculator />} />
          <Route path="/number-converter" element={<NumberConverter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
