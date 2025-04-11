import React from 'react'

function SubHeadingText({text, align, light}) {
  return (
     <div className={`mt-4 text-neutral-${!light?'600':'200'} font-bold leading-12 text-4xl text-${align} mb-7`}>
          {text}
     </div>
  )
}

export default SubHeadingText