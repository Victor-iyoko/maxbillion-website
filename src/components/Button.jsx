import loaderLight from "../assets/loading-light.svg"
import loaderDark from "../assets/loading-dark.svg"

function Button({text, dark, isLoading}) {
  return (
       <button disabled={isLoading ? true : false} className={`relative overflow-hidden flex items-center justify-center tracking-wider 
            cursor-pointer text-xs md:text-sm px-3.5 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-lg ring-2 ring-offset-2 ${dark ? 'bg-[var(--primary-color)] text-white font-medium ring-[var(--primary-color)]' : 'bg-white text-neutral-900 ring-gray-50 border'}
            hover:bg-[var(--secondary-color)] hover:drop-shadow-xl hover:ring-[var(--secondary-color)] ${dark ? '' : 'ring-offset-1 hover:text-white'} ${isLoading ? "pointer-events-none" : "pointer-events-auto"}`}>
              <img src={dark ? loaderLight : loaderDark} alt={text} className={`${isLoading ? "opacity-100" : "opacity-0"} absolute w-11 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2`} />
              <span className={`${isLoading ? "opacity-0" : "opacity-100"}`}>{text}</span> 
                
       </button>
  )
}

export default Button