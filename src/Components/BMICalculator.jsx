import React, { useState } from "react"

const BMICalculator = () => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBMI] = useState(null)
  const [category, setCategory] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }

  const displayAlert = (message) => {
    setAlertMessage(message)
    setTimeout(() => {
      setAlertMessage("")
    }, 5000)
  }

  const calculateBMI = () => {
    const weightNumeric = parseFloat(weight)
    const heightNumeric = parseFloat(height) / 100 // Convert height from cm to meters

    if (
      Number.isNaN(weightNumeric) ||
      Number.isNaN(heightNumeric) ||
      heightNumeric <= 0 ||
      weightNumeric <= 0 ||
      weightNumeric > 1000 ||
      heightNumeric > 4
    ) {
      displayAlert("Enter valid weight and height!")
      return
    }

    const bmiValue = weightNumeric / Math.pow(heightNumeric, 2)

    let bmiCategory = ""
    if (bmiValue < 18.5) {
      bmiCategory = "Underweight"
    } else if (bmiValue < 24.9) {
      bmiCategory = "Normal Weight"
    } else {
      bmiCategory = "Overweight"
    }

    setBMI(bmiValue.toFixed(2))
    setCategory(bmiCategory)
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>Enter Weight (kg): </label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div>
        <label>Enter Height (cm): </label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      {bmi !== null && (
        <div>
          <h2>Result:</h2>
          <p>BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  )
}

export default BMICalculator
