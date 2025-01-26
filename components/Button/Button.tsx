import React from 'react'

const Button = ({ text, id = 'btn', className = '' }: { text: string, id?: string, className?: string }) => {
  return (
    <button id={id} className={` font-montserrat border border-[#6D4C41] rounded-[10px] px-4 py-2 text-[#6D4C41] hover:bg-[#8A6C59] hover:text-white transition-all text-[30px] font-medium ${className} `}>
      {text}
    </button>
  )
}

export default Button