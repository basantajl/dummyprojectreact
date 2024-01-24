import React, { useState } from "react"

const NumberConverter = () => {
  const [inputValue, setInputValue] = useState("")
  const [conversionType, setConversionType] = useState("decimal")
  const [outputValue, setOutputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value)
    setOutputValue("") // Reset output when conversion type changes
  }

  const handleConvertClick = () => {
    // Perform conversion based on the selected conversion type
    switch (conversionType) {
      case "decimal":
        setOutputValue(inputValue)
        break
      case "binary":
        setOutputValue(Number(inputValue).toString(2))
        break
      case "octal":
        setOutputValue(Number(inputValue).toString(8))
        break
      case "hexadecimal":
        setOutputValue(Number(inputValue).toString(16).toUpperCase())
        break
      default:
        setOutputValue(inputValue)
    }
  }

  return (
    <div>
      <h1>Number Converter</h1>
      <div>
        <label>Select Conversion Type:</label>
        <select value={conversionType} onChange={handleConversionTypeChange}>
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>
      <div>
        <label>Enter Value:</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={handleConvertClick}>Convert</button>
      </div>
      <div>
        <label>Conversion Result:</label>
        <input type="text" value={outputValue} readOnly />
      </div>
    </div>
  )
}

export default NumberConverter
