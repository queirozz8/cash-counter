import { useState, useRef } from 'react'
import Input from './components/Input'
import { Coins } from 'lucide-react';

export default function App() {
  const form = useRef()
  const [result, setResult] = useState(0)
  const [flagInput, setFlagInput] = useState('')

  function handleClear() {
    setFlagInput(1)
    setFlagInput('')
  }

  return (
    <div className='flex flex-col justify-center items-center mt-14'>
      <h1 className='flex justify-center items-center gap-4 font-bold text-4xl text-zinc-300'>Contador de Dinheiro Vivo <Coins size={48} color="#82ff4d" strokeWidth={0.8} /></h1>
      <p className='text-zinc-300'>Selecione a quantidade de cada cédula/moeda que possui.</p>
      <br />

      <form className='grid grid-cols-2 gap-24 w-[800px] h-[700px] mt-10' ref={form}>
        <Input number="200.00" flagInput={flagInput} setResult={setResult} />
        <Input number="100.00" flagInput={flagInput} setResult={setResult} />
        <Input number="50.00" flagInput={flagInput} setResult={setResult} />
        <Input number="20.00" flagInput={flagInput} setResult={setResult} />
        <Input number="10.00" flagInput={flagInput} setResult={setResult} />
        <Input number="5.00" flagInput={flagInput} setResult={setResult} />
        <Input number="2.00" flagInput={flagInput} setResult={setResult} />
        <Input number="1.00" flagInput={flagInput} setResult={setResult} />
        <Input number="0.50" flagInput={flagInput} setResult={setResult} />
        <Input number="0.25" flagInput={flagInput} setResult={setResult} />
        <Input number="0.10" flagInput={flagInput} setResult={setResult} />
        <Input number="0.05" flagInput={flagInput} setResult={setResult} />
      </form>

      <div className='flex gap-10 mt-56 mb-10'>
        <button className='p-4 text-zinc-300 bg-red-800 border border-red-600 rounded-xl' onClick={handleClear}>Limpar</button>
        <p className='flex justify-center items-center relative left-8 text-zinc-300'>R$</p>
        <input className='w-96 h-14 p-2 text-zinc-300 border border-[#354942] bg-[#1D2623] rounded-xl placeholder:text-zinc-600' value={result} placeholder='Resultado' readOnly id="input" />
      </div>
    </div>
  )
}
