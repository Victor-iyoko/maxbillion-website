import React from 'react'

function HeadingText({text, align}) {
  return (
     <h2 className={`text-${align} text-[var(--secondary-color)] font-bold capitalize tracking-wider w-fit relative
                     before:absolute before:start-0 before:-bottom-0.5 before:w-[35%] before:h-[3px] before:rounded-2xl before:bg-[var(--secondary-color)]`}>
          {text}
     </h2>
  )
}

export default HeadingText