import React, { useState } from "react"

const PriceCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("")
  const [taxRate, setTaxRate] = useState("")
  const [discount, setDiscount] = useState("")
  const [finalPrice, setFinalPrice] = useState(null)

  const calculateFinalPrice = () => {
    const purchasePriceNumeric = parseFloat(purchasePrice)
    const taxRateNumeric = parseFloat(taxRate)
    const discountNumeric = parseFloat(discount)

    if (Number.isNaN(purchasePriceNumeric) || purchasePriceNumeric <= 0) {
      alert("Enter a valid purchase price!")
      return
    }

    // Calculate final price
    let finalPriceValue =
      purchasePriceNumeric + (purchasePriceNumeric * taxRateNumeric) / 100

    if (!Number.isNaN(discountNumeric) && discountNumeric > 0) {
      finalPriceValue -= (finalPriceValue * discountNumeric) / 100
    }

    setFinalPrice(finalPriceValue.toFixed(2))
  }

  return (
    <div>
      <h1>Price Calculator</h1>
      <div>
        <label>Purchase Price:</label>
        <input
          type="number"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
      </div>
      <div>
        <label>Tax Rate (%):</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
        />
      </div>
      <div>
        <label>Discount (%):</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateFinalPrice}>Calculate Final Price</button>
      </div>
      {finalPrice !== null && (
        <div>
          <h2>Final Price:</h2>
          <p>Rp {finalPrice}</p>
        </div>
      )}
    </div>
  )
}

export default PriceCalculator
