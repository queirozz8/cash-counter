import { useState, useEffect } from 'react'
import Input from './components/Input'
import { Coins } from 'lucide-react';

export default function App() {
  const [result, setResult] = useState(0)
  const [bills, setBills] = useState({
    nota200: "",
    nota100: "",
    nota50: "",
    nota20: "",
    nota10: "",
    nota5: "",
    nota2: "",
    moeda1: "",
    moeda50: "",
    moeda25: "",
    moeda10: "",
    moeda5: "",
  })
  const billValues = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05]
  const [totalBills, setTotalBills] = useState(0)
  const [totalCoins, setTotalCoins] = useState(0)


  function calculateValue(inputValue, billName) {
    if (inputValue === 0) {
      setBills((prevValues) => ({
        ...prevValues,
        [billName]: ''
      }))
    } else {
      setBills((prevValues) => ({
        ...prevValues,
        [billName]: inputValue
      }))
    }
  }

  useEffect(() => {
    let cashCounter = 0
    let totalBillsCounter = 0, totalCoinsCounter = 0
    let billValuesIndex = 0

    for (let bill in bills) {
      if (billValuesIndex < 12) {
        cashCounter += Number(bills[bill]) * billValues[billValuesIndex]
        if (bill.startsWith('nota')) totalBillsCounter += Number(bills[bill])
        else if (bill.startsWith('moeda')) totalCoinsCounter += Number(bills[bill])
        billValuesIndex++
      }
    }

    const formattedResult = new Intl.NumberFormat('pt-BR').format(cashCounter.toFixed(2))
    setResult(formattedResult)
    setTotalBills(totalBillsCounter)
    setTotalCoins(totalCoinsCounter)
  }, [bills])
  

  function handleClear() {
    for (let bill in bills) {
      setBills(prevValues => ({
        ...prevValues,
        [bill]: ''
      }))
    }
    setResult(0)
  }


  return (
    <div className='flex flex-col justify-center items-center lg:mt-14'>
      <h1 className='flex justify-center items-center lg:gap-4 font-bold text-4xl text-zinc-300'>Contador de Dinheiro Vivo <Coins size={48} color="#82ff4d" strokeWidth={0.8} /></h1>
      <p className='text-zinc-300'>Selecione a quantidade de cada cédula/moeda que possui.</p>
      <br />

      <form className='grid grid-cols-2 lg:gap-24 lg:w-[800px] lg:h-[700px] lg:mt-10'>
        <Input setBills={setBills} billValue={bills.nota200} billName="nota200" inputBill="200.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.nota100} billName="nota100" inputBill="100.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.nota50} billName="nota50" inputBill="50.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.nota20} billName="nota20" inputBill="20.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.nota10} billName="nota10" inputBill="10.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.nota5} billName="nota5"  inputBill="5.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.nota2} billName="nota2"  inputBill="2.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.moeda1} billName="moeda1" inputBill="1.00" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.moeda50} billName="moeda50" inputBill="0.50" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.moeda25} billName="moeda25" inputBill="0.25" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.moeda10} billName="moeda10" inputBill="0.10" setResult={setResult} calculateValue={calculateValue} />
        <Input setBills={setBills} billValue={bills.moeda5} billName="moeda5" inputBill="0.05" setResult={setResult} calculateValue={calculateValue} />
      </form>

      <div className='flex lg:gap-10 lg:mt-44 lg:mb-10'>
        <button className='lg:p-4 text-zinc-300 bg-red-800 border border-red-600 rounded-xl' onClick={handleClear}>Limpar</button>
        <p className='flex justify-center items-center relative lg:left-8 text-zinc-300'>R$</p>
        <input className='lg:w-96 lg:h-14 lg:p-2 text-zinc-300 border border-[#354942] bg-[#1D2623] rounded-xl placeholder:text-zinc-600' value={result} placeholder='Resultado' readOnly id="input" />
      </div>

      <div className='flex lg:gap-52'>
        <div className='flex flex-col justify-center lg:gap-3 lg:p-10'>
          <label className='text-xl text-zinc-300' htmlFor="bills">Número total de notas:</label>
          <input 
          className='flex justify-center items-center lg:p-3 border border-[#354942] rounded-xl text-zinc-300 bg-[#1D2623]' 
          value={totalBills} 
          type="number" 
          id='bills' 
          placeholder='Aqui fica a quantidade de notas que você possui'
          readOnly />
        </div>

        <div className='flex flex-col justify-center lg:gap-3 lg:p-10'>
          <label className='text-xl text-zinc-300' htmlFor="coins">Número total de moedas:</label>
          <input 
          className='flex justify-center items-center lg:p-3 border border-[#354942] rounded-xl text-zinc-300 bg-[#1D2623]' 
          value={totalCoins} 
          type="number" 
          id='coins' 
          placeholder='Aqui fica a quantidade de moedas que você possui'
          readOnly />
        </div>
      </div>
    </div>
  )
}
