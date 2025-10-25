import SubHeadingText from "./SubHeadingText"
import Button from "./Button"
import InfoSnips from "./InfoSnips"
import HeadingText from "./HeadingText"
import { itemVariants, imageFadeIn, imageVariants, textVariants, beforeAfterVariants } from "../variants"
import {motion} from 'framer-motion'
import AnimatedBlobs from "./AnimatedBlobs"

function SectionInfo({section}) {
  return (
       <section className="relative flex flex-col min-[1050px]:flex-row gap-[62px] justify-between items-center min-[1050px]:items-start max-w-6xl mx-auto mt-36">     
          <AnimatedBlobs left={section.imgPos !== 1} />
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex min-[1050px]:flex-1/2 max-[1049px]:w-full flex-col items-center min-[1050px]:items-start z-1 ${section.imgPos === 2 && window.innerWidth >= 1050 ? 'order-1' : 'order-2'}`}>
               { section.title && <HeadingText text={section.title} align="start" /> }
               <SubHeadingText text={section.heading} align="start" />
               <motion.p
                  variants={itemVariants}
                  className='mb-5 md:mb-7 text-sm md:text-md text-center min-[1050px]:text-start text-neutral-500 leading-7 tracking-tight text-[16px] min-[1050px]:max-w-lg'>
                  {section.description}
               </motion.p>
               <motion.div variants={itemVariants}>
                  <Button link={section.button.link} dark={true} text={section.button.text} />
               </motion.div>
               <motion.div variants={itemVariants} className="flex justify-start flex-wrap gap-3 mt-7">
                {section.infoSnips.map((info, i) => <InfoSnips key={i} title={info.title} subText={info.subText} icon={info.icon} /> )}
               </motion.div>
          </motion.div>
          <motion.div
            className={`relative min-[1050px]:flex-1/2 flex justify-center rounded-2xl overflow-visible z-1 ${section.imgPos === 1 && window.innerWidth >= 1050 ? 'order-1' : 'order-2'}`}
            variants={imageVariants(section.imgPos === 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {/* Simulated before element */}
            <motion.div
              variants={beforeAfterVariants(true)}
              className="absolute w-full h-full border-3 border-white rounded-2xl bg-[var(--primary-color)] scale-90 -start-9 sm:-start-14 -bottom-11 sm:-bottom-16 min-[1050px]:-bottom-12 -z-10"
            />
            
            {/* Simulated after element */}
            <motion.div
              variants={beforeAfterVariants(false)}
              className="absolute w-full h-full border-4 border-white rounded-2xl bg-[var(--secondary-color)] scale-90 -start-6 sm:-start-10 min-[1050px]:-start-11 -bottom-8 sm:-bottom-12 -z-10"
            />

            {/* Main image */}
            <motion.img
              src={section.img}
              alt="key house"
              className="w-[95%] min-[1050px]:w-full rounded-2xl object-cover h-auto z-20 drop-shadow-2xl"
              variants={imageFadeIn}
            />
          </motion.div>
       </section>
  )
}

export default SectionInfo