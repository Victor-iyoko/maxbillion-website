import { itemVariants } from "../variants"
import {motion} from 'framer-motion'

function HeadingText({text, align}) {
  return (
    <motion.div variants={itemVariants}>
      
     <h2 className={`text-${align} text-[var(--secondary-color)] font-bold capitalize tracking-wider w-fit relative
                     before:absolute before:start-0 before:-bottom-0.5 before:w-[35%] before:h-[3px] before:rounded-2xl before:bg-[var(--secondary-color)]`}>
          {text}
     </h2>
    </motion.div>
  )
}

export default HeadingText