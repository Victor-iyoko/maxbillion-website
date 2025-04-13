import { itemVariants } from "../variants"
import {motion} from 'framer-motion'

function SubHeadingText({text, align, light}) {
  return (
     <motion.div variants={itemVariants} className={`mt-4 text-neutral-${!light?'600':'100'} font-bold leading-12 text-4xl text-${align} mb-7`}>
          {text}
     </motion.div>
  )
}

export default SubHeadingText