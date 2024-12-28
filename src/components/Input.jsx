import { useState, useEffect } from "react";
export default function Input({ number, calculateResult, flagInput, setResult }) {
  const [inputValue, setInputValue] = useState('')

  function verifyInput(e) {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Ctrl', 'ArrowLeft', 'ArrowRight']
    const isCtrlPressed = e.ctrlKey
    if ((isCtrlPressed && e.key === 'c') || (isCtrlPressed && e.key === 'v')) return;
    if ((e.target.length >= 8) || (!allowedKeys.includes(e.key) && isNaN(e.key))) {
      e.preventDefault()
    }
  };

  useEffect(() => {
    setInputValue('')
    setResult('')
  }, [flagInput])

  return (
    <div className="flex justify-center items-center gap-3">
      <label className="flex justify-center items-center text-xl text-zinc-300" htmlFor={number}>R$ {number.replace('.', ',')}</label>
        <input
          className="p-4 text-zinc-300 bg-[#1D2623] border border-[#354942] rounded-xl"
          type="text"
          onKeyDown={verifyInput}
          onChange={() => calculateResult(inputValue)}
          id={number}
          maxLength={8}
          value={inputValue}
        />
        <br />
    </div>
  )
}
