import React, { useState } from "react"
import "../Style/LC.css"

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const calculateLoan = () => {
    // Parse input values
    const p = parseFloat(principal)
    const r = parseFloat(interestRate) / 100 / 12 // monthly interest rate
    const n = parseFloat(loanTerm) * 12 // total number of payments

    // Validate inputs
    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
      setErrorMessage(
        "Please enter valid positive values for Loan Amount, Annual Interest Rate, and Loan Term."
      )
      setMonthlyPayment(null)
      return
    }

    // Calculate monthly payment
    const monthlyPaymentValue = (p * r) / (1 - Math.pow(1 + r, -n))
    setMonthlyPayment(monthlyPaymentValue.toFixed(2))
    setErrorMessage("")
  }

  return (
    <div className="LoanCalculator">
      <h1>Loan Calculator</h1>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          min={0}
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          min={0}
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          min="0" // Provide a minimum value, adjust as needed
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateLoan}>Calculate</button>
      </div>
      {errorMessage && (
        <div className="errorMessage">
          <p>{errorMessage}</p>
        </div>
      )}
      {monthlyPayment !== null && !errorMessage && (
        <div>
          <h2>Monthly Payment:</h2>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
  )
}

export default LoanCalculator
