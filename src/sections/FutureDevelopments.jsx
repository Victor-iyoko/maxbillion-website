import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import { cardGroupVariants, itemVariants, textVariants, futureDevVariants } from "../variants";
import {motion} from "framer-motion"

const FutureDevelopments = () => {
  const images = ["1", "2","3", "4","5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

  return (
    <div className="mx-auto mt-36 flex flex-col items-center">
      <motion.div       
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center'>
              <HeadingText text="future developments" align="center" />
              <SubHeadingText text="Envisioning tomorrow's homes." align="center" />
              <motion.p variants={itemVariants} className='mb-16 text-neutral-400 leading-7 tracking-wide text-center text-[16px] max-w-5xl mx-auto'>
                  At Maxbillion we're passionate about crafting unique, modern housing solutions. 
                  Though we're still in our early stages, we're already dreaming up the communities of the future.
              </motion.p>
        </motion.div>
        <motion.div
          variants={cardGroupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, index) => (
              <motion.div variants={futureDevVariants} key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-lg">
                 <img src={`/developments/${src}.jpg`} alt={`House ${index}`} className="w-full drop-shadow-md" />
              </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default FutureDevelopments