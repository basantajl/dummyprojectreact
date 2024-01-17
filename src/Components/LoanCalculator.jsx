import React, { useState } from "react"

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState(null)

  const calculateLoan = () => {
    const p = parseFloat(principal)
    const r = parseFloat(interestRate) / 100 / 12 // monthly interest rate
    const n = parseFloat(loanTerm) * 12 // total number of payments

    const monthlyPaymentValue = (p * r) / (1 - Math.pow(1 + r, -n))
    setMonthlyPayment(monthlyPaymentValue.toFixed(2))
  }

  return (
    <div>
      <h1>Loan Calculator</h1>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateLoan}>Calculate</button>
      </div>
      {monthlyPayment !== null && (
        <div>
          <h2>Monthly Payment:</h2>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
  )
}

export default LoanCalculator
