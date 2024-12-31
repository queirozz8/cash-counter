export default function Input({ billValue, bill, calculateValue }) {
  function verifyInput(e) {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Ctrl', 'ArrowLeft', 'ArrowRight']
    const isCtrlPressed = e.ctrlKey

    if ((isCtrlPressed && e.key === 'c') || (isCtrlPressed && e.key === 'v')) return;
    if ((e.target.length >= 8) || (!allowedKeys.includes(e.key) && isNaN(e.key))) e.preventDefault()
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <label className="flex justify-center items-center text-xl text-zinc-300" htmlFor={bill}>R$ {bill.replace('.', ',')}</label>
        <input
          className="p-4 text-zinc-300 bg-[#1D2623] border border-[#354942] rounded-xl placeholder:text-zinc-600"
          type="text"
          onKeyDown={verifyInput}
          onChange={calculateValue}
          value={billValue}
          id={bill}
          maxLength={8}
          placeholder="Digite aqui as unidades"
        />
        <br />
    </div>
  )
}
