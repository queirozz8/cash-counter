import { Trash2 } from 'lucide-react'
export default function Input({ setBills, billValue, billName, inputBill, calculateValue }) {

  function verifyInput(e) {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Ctrl', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    const isCtrlPressed = e.ctrlKey

    if ((isCtrlPressed && e.key === 'c') || (isCtrlPressed && e.key === 'v')) return;
    if ((e.target.length >= 8) || (!allowedKeys.includes(e.key) && isNaN(e.key))) e.preventDefault()
  };
  
  function handleChange(e) { calculateValue(Number(e.target.value), billName) };

  function handleClick() {
    setBills(prevValues => ({
      ...prevValues,
      [billName]: ''
    }))
  }

  return (
    <div className="flex justify-center items-center lg:gap-3 lg:w-96">
      <label className="flex justify-center items-center text-xl text-zinc-300" htmlFor={inputBill}>R$ {inputBill.replace('.', ',')}</label>
        <input
          className="lg:p-4 text-zinc-300 bg-[#1D2623] border border-[#354942] rounded-xl placeholder:text-zinc-600"
          type="text"
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
