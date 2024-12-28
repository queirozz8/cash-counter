import { useRef, useState } from 'react'
import Input from './components/Input'

export default function App() {
  const form = useRef()
  const [result, setResult] = useState('')
  const [flagInput, setFlagInput] = useState('')
  
  function calculateResult(inputValue) {
    let value = null
    if (inputValue) {
      const billValue = input.id
      value += inputValue * billValue
    }

    const formattedResult = new Intl.NumberFormat('pt-BR').format(value.toFixed(2))
    setResult(formattedResult)
  }

  function handleClear() {
    setFlagInput(1)
    setFlagInput('')
  }

  return (
    <div className='flex flex-col justify-center items-center mt-14'>
      <h1 className='font-bold text-4xl text-zinc-300'>Contador de Dinheiro Vivo</h1>
      <p className='text-zinc-300'>Selecione a quantidade de cada cédula/moeda que possui.</p>
      <br />

      <form className='grid grid-cols-2 gap-24 w-[800px] h-[700px] mt-10' ref={form}>
        <Input number="200.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="100.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="50.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="20.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="10.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="5.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="2.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="1.00" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="0.50" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="0.25" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="0.10" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
        <Input number="0.05" calculateResult={calculateResult} flagInput={flagInput} setResult={setResult} />
      </form>

      <div className='flex gap-10 mt-56 mb-10'>
        <button className='p-4 text-zinc-300 bg-red-800 border border-red-600 rounded-xl' onClick={handleClear}>Limpar</button>
        <p className='flex justify-center items-center relative left-8 text-zinc-300'>R$</p>
        <input className='w-96 h-14 p-2 text-zinc-300 border border-[#354942] bg-[#1D2623] rounded-xl placeholder:text-zinc-600' value={result.replace('.', '.')} placeholder='Resultado' readOnly id="input" />
      </div>
    </div>
  )
}
