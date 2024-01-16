import React, { useState } from "react"
import "./App.css"

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

const BMICalculator = () => {
  const [berat, setBerat] = useState("")
  const [tinggi, setTinggi] = useState("")
  const [bmi, setBmi] = useState(null)
  const [kategori, setKategori] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  const handleChangeBerat = (e) => {
    setBerat(e.target.value)
  }

  const handleChangeTinggi = (e) => {
    setTinggi(e.target.value)
  }

  const displayAlert = (message) => {
    setAlertMessage(message)
    setTimeout(() => {
      setAlertMessage("")
    }, 5000)
  }

  const hitungBMI = () => {
    const beratNumerik = parseFloat(berat)
    const tinggiNumerik = parseFloat(tinggi) / 100 // Konversi tinggi dari cm ke m

    if (
      Number.isNaN(beratNumerik) ||
      Number.isNaN(tinggiNumerik) ||
      tinggiNumerik <= 0 ||
      beratNumerik <= 0 ||
      beratNumerik > 10000 ||
      tinggiNumerik > 4
    ) {
      displayAlert("Masukkan berat dan tinggi yang valid!")
      return
    }

    const hasilBMI = beratNumerik / Math.pow(tinggiNumerik, 2)

    let hasilKategori = ""
    if (hasilBMI < 18.5) {
      hasilKategori = "Kurus" // Kategori untuk BMI kurang dari 18.5
      console.log("Anda kurus!")
    } else if (hasilBMI < 24.9) {
      hasilKategori = "Hebat" // Kategori untuk BMI antara 18.5 dan 24.9
      console.log("Anda hebat!")
    } else {
      hasilKategori = "Obesitas" // Kategori untuk BMI 25 atau lebih
      console.log("Anda obesitas!")
    }

    setBmi(hasilBMI.toFixed(2))
    setKategori(hasilKategori)
  }

  return (
    <div>
      <h1>Program Menghitung BMI (Body Mass Index)</h1>
      <div>
        <label>Masukkan berat badan (kg): </label>
        <input type="number" value={berat} onChange={handleChangeBerat} />
      </div>
      <div>
        <label>Masukkan tinggi badan (cm): </label>
        <input type="number" value={tinggi} onChange={handleChangeTinggi} />
      </div>
      <button onClick={hitungBMI}>Hitung BMI</button>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      {bmi !== null && (
        <div>
          <h2>Hasil:</h2>
          <p>BMI Anda: {bmi}</p>
          <p>Kategori BMI: {kategori}</p>
        </div>
      )}
    </div>
  )
}

const PriceCalculator = () => {
  const [hargaPembelian, setHargaPembelian] = useState("")
  const [ppn, setPpn] = useState("")
  const [diskon, setDiskon] = useState("")
  const [hargaAkhir, setHargaAkhir] = useState(null)

  const calculatePrice = () => {
    const hargaNumerik = parseFloat(hargaPembelian)
    const ppnNumerik = parseFloat(ppn)
    const diskonNumerik = parseFloat(diskon)

    if (Number.isNaN(hargaNumerik) || hargaNumerik <= 0) {
      alert("Masukkan harga pembelian yang valid!")
      return
    }

    // Hitung harga akhir
    let hargaAkhirValue = hargaNumerik + (hargaNumerik * ppnNumerik) / 100
    if (!Number.isNaN(diskonNumerik) && diskonNumerik > 0) {
      hargaAkhirValue -= (hargaAkhirValue * diskonNumerik) / 100
    }

    setHargaAkhir(hargaAkhirValue.toFixed(2))
  }

  return (
    <div>
      <h1>Price Calculator</h1>
      <div>
        <label>Harga Pembelian:</label>
        <input
          type="number"
          value={hargaPembelian}
          onChange={(e) => setHargaPembelian(e.target.value)}
        />
      </div>
      <div>
        <label>PPN (%):</label>
        <input
          type="number"
          value={ppn}
          onChange={(e) => setPpn(e.target.value)}
        />
      </div>
      <div>
        <label>Diskon (%):</label>
        <input
          type="number"
          value={diskon}
          onChange={(e) => setDiskon(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculatePrice}>Hitung Harga Akhir</button>
      </div>
      {hargaAkhir !== null && (
        <div>
          <h2>Harga Akhir:</h2>
          <p>Rp {hargaAkhir}</p>
        </div>
      )}
    </div>
  )
}

const NumberConverter = () => {
  const [inputValue, setInputValue] = useState("")
  const [conversionType, setConversionType] = useState("decimal")
  const [outputValue, setOutputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value)
    setOutputValue("") // Reset output ketika jenis konversi diubah
  }

  const handleConvertClick = () => {
    // Lakukan konversi sesuai dengan jenis konversi yang dipilih
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
      <h1>Bilangan Converter</h1>
      <div>
        <label>Pilih Jenis Konversi:</label>
        <select value={conversionType} onChange={handleConversionTypeChange}>
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>
      <div>
        <label>Masukkan Nilai:</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={handleConvertClick}>Convert</button>
      </div>
      <div>
        <label>Hasil Konversi:</label>
        <input type="text" value={outputValue} readOnly />
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <LoanCalculator />
      <BMICalculator />
      <PriceCalculator />
      <NumberConverter />
    </div>
  )
}

export default App
