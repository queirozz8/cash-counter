import { useState, useRef, useEffect } from 'react'
import Input from './components/Input'
import { Coins } from 'lucide-react';

export default function App() {
  const form = useRef()
  const [result, setResult] = useState(0)
  const [billValues, setValues] = useState({
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
  
  useEffect(() => {
    const formattedResult = new Intl.NumberFormat('pt-BR').format(value.toFixed(2))
    setResult(formattedResult)
  }, [value])

  function calculateValue(inputValue, billValue) {
    let cashCounter = 0
    for (let value in billValues) {
      
    }
    setValue((prev) => (prev === 0 ? inputValue * billValue : prev + inputValue * billValue))
  }

  function handleClear() {
    for (let value in billValues) billValues[value] = '';
    setResult(0)
  }

  return (
    <div className='flex flex-col justify-center items-center mt-14'>
      <h1 className='flex justify-center items-center gap-4 font-bold text-4xl text-zinc-300'>Contador de Dinheiro Vivo <Coins size={48} color="#82ff4d" strokeWidth={0.8} /></h1>
      <p className='text-zinc-300'>Selecione a quantidade de cada cédula/moeda que possui.</p>
      <br />

      <form className='grid grid-cols-2 gap-24 w-[800px] h-[700px] mt-10' ref={form}>
        <Input billValue={billValues.nota200} bill="200.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.nota100} bill="100.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.nota50} bill="50.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.nota20} bill="20.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.nota10} bill="10.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.nota5} bill="5.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.nota2} bill="2.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.moeda1} bill="1.00" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.moeda50} bill="0.50" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.moeda25} bill="0.25" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.moeda10} bill="0.10" setResult={setResult} calculateValue={calculateValue} />
        <Input billValue={billValues.moeda5} bill="0.05" setResult={setResult} calculateValue={calculateValue} />
      </form>

      <div className='flex gap-10 mt-44 mb-10'>
        <button className='p-4 text-zinc-300 bg-red-800 border border-red-600 rounded-xl' onClick={handleClear}>Limpar</button>
        <p className='flex justify-center items-center relative left-8 text-zinc-300'>R$</p>
        <input className='w-96 h-14 p-2 text-zinc-300 border border-[#354942] bg-[#1D2623] rounded-xl placeholder:text-zinc-600' value={result} placeholder='Resultado' readOnly id="input" />
      </div>
    </div>
  )
}
