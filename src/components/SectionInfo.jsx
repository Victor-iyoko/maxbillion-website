import SubHeadingText from "./SubHeadingText"
import Button from "./Button"
import InfoSnips from "./InfoSnips"
import HeadingText from "./HeadingText"
import { itemVariants, imageFadeIn, imageVariants, textVariants, beforeAfterVariants } from "../variants"
import {motion} from 'framer-motion'

function SectionInfo({section}) {
 
  return (
       <section className="flex gap-[62px] justify-between items-start max-w-6xl mx-auto mt-36">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-1/2 flex-col items-start ${section.imgPos === 2 ? 'order-1' : 'order-2'}`}>
               { section.title && <HeadingText text={section.title} align="start" /> }
               <SubHeadingText text={section.heading} align="start" />
               <motion.p
                  variants={itemVariants}
                  className='mb-7 text-neutral-400 leading-7 tracking-wide text-start text-[16px] max-w-lg'>
                  {section.description}
               </motion.p>
               <motion.div variants={itemVariants}>
                  <Button dark={true} text="Get in touch"/>
               </motion.div>
               <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-7">
                {section.infoSnips.map((info, i) => <InfoSnips key={i} title={info.title} subText={info.subText} icon={info.icon} /> )}
               </motion.div>
          </motion.div>
          <motion.div
            className={`relative flex-1/2 rounded-2xl overflow-visible ${section.imgPos === 1 ? 'order-1' : 'order-2'}`}
            variants={imageVariants(section.imgPos === 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {/* Simulated before element */}
            <motion.div
              variants={beforeAfterVariants(true)}
              className="absolute w-full h-full border-3 border-white rounded-2xl bg-[var(--primary-color)] scale-90 -start-14 -bottom-12 -z-10"
            />
            
            {/* Simulated after element */}
            <motion.div
              variants={beforeAfterVariants(false)}
              className="absolute w-full h-full border-4 border-white rounded-2xl bg-[var(--secondary-color)] scale-90 -start-11 -bottom-9 -z-10"
            />

            {/* Main image */}
            <motion.img
              src={section.img}
              alt="key house"
              className="w-full rounded-2xl object-cover h-auto z-20 drop-shadow-2xl"
              variants={imageFadeIn}
            />
          </motion.div>
       </section>
  )
}

export default SectionInfo