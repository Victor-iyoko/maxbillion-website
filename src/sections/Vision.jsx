import InfoSnips from "../components/InfoSnips"
import SubHeadingText from "../components/SubHeadingText"
import data from "../data"
import {motion} from "framer-motion"
import { itemVariants, textVariants } from "../variants"

function DarkSectionInfoOne() {
  const {vision} = data

  return (
    <section className="bg-[var(--primary-color)] mt-36 rounded-4xl relative  overflow-hidden h-[500px] ring-3 ring-offset-3 ring-[var(--primary-color)]">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute text-white rounded-3xl w-full h-full -translate-y-10 flex flex-col items-center justify-center z-50">
                  <motion.div variants={itemVariants}>
                      <SubHeadingText text={vision.heading} light align="center"/>
                  </motion.div>
                  <motion.p variants={itemVariants} className='mb-6 mx-auto text-neutral-200 leading-7 tracking-wide text-center text-[16px] max-w-4xl'>
                     {vision.text}
                  </motion.p>
                  <motion.div variants={itemVariants} className="mb-8 flex gap-6 justify-center items-center">
                      {vision.infoSnips.map((info, i) => <InfoSnips key={i} title={info.title} subText={info.subText} icon={info.icon} /> )}
                  </motion.div>
          </motion.div>
          <video className="w-full drop-shadow-xl place-self-center inset-0 opacity-20" autoPlay muted loop playsInline>
              <source src="/videos/vision.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
    </section>
  )
}

export default DarkSectionInfoOne