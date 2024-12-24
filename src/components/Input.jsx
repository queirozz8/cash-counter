export default function Input({ number, calculateResult }) {
  function verifyInput(e) { 
    if (e.target.length >= 8 || isNaN(e.key)) e.preventDefault()
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <label className="flex justify-center items-center text-xl text-zinc-300" htmlFor={number}>R$ {number.replace('.', ',')}</label>
        <input
          className="p-4 text-zinc-300 bg-[#1D2623] border border-[#354942] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="text"
          onKeyDown={verifyInput}
          onChange={calculateResult}
          id={number}
          maxLength={8}
        />
        <br />
    </div>
  )
}