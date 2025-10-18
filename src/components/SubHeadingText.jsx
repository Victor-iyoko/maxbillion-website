import { itemVariants } from "../variants"
import {motion} from 'framer-motion'

function SubHeadingText({text, align, light}) {
  return (
     <motion.div variants={itemVariants} className={`mt-2 md:mt-4 text-neutral-${!light?'600':'100'} font-bold leading-9 md:leading-12 text-2xl md:text-4xl text-center min-[1050px]:text-${align} mb-3 md:mb-7`}>
          {text}
     </motion.div>
  )
}

export default SubHeadingText