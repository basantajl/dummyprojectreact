// Navbar.js
import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
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
  )
}

export default Navbar
