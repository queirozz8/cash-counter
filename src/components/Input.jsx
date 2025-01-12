import { Trash2 } from 'lucide-react'
export default function Input({ setBills, billValue, billName, inputBill, calculateValue }) {

  function verifyInput(e) {
    const notAllowedKeys = ['e', 'E', '+', '-']
    if ((e.target.length >= 8) || (notAllowedKeys.includes(e.key)) || (isNaN(e.key))) e.preventDefault()
  };
  
  function handleChange(e) { 
    if (e.target.value.startsWith('-')) e.preventDefault()
    else calculateValue(Number(e.target.value), billName) 
  };

  function handleClick() {
    setBills(prevValues => ({
      ...prevValues,
      [billName]: ''
    }))
  }

  return (
    <div className="flex justify-center items-center md:gap-3 w-72 md:w-96">
      <label className="flex justify-center items-center text-sm md:text-xl text-zinc-300" htmlFor={inputBill}>R$ {inputBill.replace('.', ',')}</label>
        <input
          className="w-36 md:w-auto p-1 md:p-4 text-zinc-300 bg-[#1D2623] border border-[#354942] rounded-xl placeholder:text-sm placeholder:text-zinc-600"
          type="number"
          onKeyDown={verifyInput}
          onChange={handleChange}
          value={billValue}
          name={billName}
          id={inputBill}
          maxLength={8}
          placeholder="Digite aqui as unidades"
        />
      
      <button type='button' onClick={handleClick}><Trash2 color="#ff0f0f" strokeWidth={1.5} /></button>
      <br />
    </div>
  )
}
