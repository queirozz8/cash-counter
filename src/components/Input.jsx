import { useRef, useEffect } from "react";
let value = 0
export default function Input({ number, flagInput, setResult }) {
  const input = useRef(null)
  
  function calculateResult() {
    let inputValue = input.current.value
      const billValue = input.current.id
      value += inputValue * billValue
      console.log(value)
    
    const formattedResult = new Intl.NumberFormat('pt-BR').format(value.toFixed(2))
    setResult(formattedResult)
  }
  
  function verifyInput(e) {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Ctrl', 'ArrowLeft', 'ArrowRight']
    const isCtrlPressed = e.ctrlKey

    if ((isCtrlPressed && e.key === 'c') || (isCtrlPressed && e.key === 'v')) return;
    if ((e.target.length >= 8) || (!allowedKeys.includes(e.key) && isNaN(e.key))) e.preventDefault()
  };
  
  useEffect(() => {
    let inputValue = input.current.value
    inputValue = ''
    setResult(0)
  }, [flagInput])

  return (
    <div className="flex justify-center items-center gap-3">
      <label className="flex justify-center items-center text-xl text-zinc-300" htmlFor={number}>R$ {number.replace('.', ',')}</label>
        <input
          className="p-4 text-zinc-300 bg-[#1D2623] border border-[#354942] rounded-xl placeholder:text-zinc-600"
          type="text"
          onKeyDown={verifyInput}
          onChange={calculateResult}
          id={number}
          maxLength={8}
          ref={input}
          placeholder="Digite aqui as unidades"
        />
        <br />
    </div>
  )
}
