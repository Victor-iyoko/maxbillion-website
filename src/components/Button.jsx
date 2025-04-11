import React from 'react'

function Button({text, dark}) {
  return (
       <button className={`tracking-wider 
            cursor-pointer text-sm px-5 py-2.5 rounded-lg ring-2 ring-offset-2 ${dark ? 'bg-[var(--primary-color)] text-white font-medium ring-[var(--primary-color)]' : 'bg-white text-neutral-900 ring-gray-50 border'}
            hover:bg-[var(--secondary-color)] hover:drop-shadow-xl hover:ring-[var(--secondary-color)] ${dark ? '' : 'ring-offset-1 hover:text-white'}`}>
                {text}
       </button>
  )
}

export default Button