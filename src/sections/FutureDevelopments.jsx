import Lottie from "lottie-react";
import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import mineCraft from "../assets/developments/Minecraft.json"
import {  itemVariants, textVariants, futureDevVariants } from "../variants";
import {motion} from "framer-motion"

const FutureDevelopments = () => {
  const images = ["1", "2","3", "4","5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

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
        <div
         
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-8 rounded-2xl bg-[var(--primary-accent-color)]">
            {images.map((src, index) => (
              <motion.div
      key={index}
      variants={futureDevVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="break-inside-avoid overflow-hidden rounded-xl shadow-lg bg-white/5"
    >
      <img
        src={`/developments/${src}.jpg`}
        alt={`House ${src}`}
        className="w-full h-auto object-cover block transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FutureDevelopments