import Lottie from "lottie-react";
import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import mineCraft from "../assets/developments/Minecraft.json"
import { cardGroupVariants, itemVariants, textVariants, futureDevVariants } from "../variants";
import {motion} from "framer-motion"

const FutureDevelopments = () => {

  return (
    <div id="developments" className="relative mx-auto mt-36 flex flex-col items-center">
      <Lottie loop play animationData={mineCraft} className="absolute top-0 rotate-[30deg] start-30 w-40 -z-10" />
      <motion.div       
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center'>
              <HeadingText text="future developments" align="center" />
              <SubHeadingText text="Envisioning tomorrow's homes." align="center" />
              <motion.p variants={itemVariants} className='mb-12 text-neutral-400 leading-7 tracking-wide text-center text-[16px] max-w-5xl mx-auto'>
                  At Maxbillion we're passionate about crafting unique, modern housing solutions. 
                  Though we're still in our early stages, we're already dreaming up the communities of the future.
              </motion.p>
        </motion.div>
        <motion.div
          variants={cardGroupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 rounded-2xl bg-[var(--primary-accent-color)]">
            {Array.from({ length: 14 }).map((_, index) => (
              <motion.div
                key={index}
                variants={futureDevVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/developments/${index + 1}.jpg`}
                  alt={`House ${index + 1}`}
                  className="w-full h-auto block object-cover drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>
            ))}
      </motion.div>
    </div>
  )
}

export default FutureDevelopments