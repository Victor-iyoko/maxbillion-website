import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import data from "../data"
import { cardGroupVariants, cardVariants, textVariants } from "../variants"
import {motion} from 'framer-motion'

function Certification() {
  return (
    <div className='mt-36 flex flex-col items-center'>
        <motion.div       
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center'>
                <HeadingText text="Certifications" align="center" />
                <SubHeadingText text="Our business certifications & compliance" align="center" />
          </motion.div>
          <motion.div 
            variants={cardGroupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-28 items-center max-w-5xl mx-auto mt-12">
              {data.certfications.map((cert, i) => (
                <motion.div variants={cardVariants} key={i} className="group relative bg-white overflow-hidden z-10 border border-neutral-200 p-4 min-w-60 max-w-60 min-h-[240px] rounded-3xl
                                hover:-translate-y-2.5 hover:border-transparent hover:drop-shadow-xl">
                    <div className="relative rounded-2xl overflow-hidden w-full min-h-[216px] flex flex-col justify-between items-center">
                        <div className="p-2 relative mt-2">
                            <div className="p-4 rounded-full z-50">
                            <img src={cert.img} className="max-h-16" alt={cert.title} />
                            </div>
                        </div>
                        <div className="absolute h-full rounded-2xl p-2 translate-y-[138px]
                                        group-hover:delay-700 group-hover:translate-y-0 group-hover:bg-[var(--secondary-color)]">
                            <h4 className="text-neutral-500 text-center font-bold text-md
                                            delay-500 group-hover:text-neutral-100 group-hover:font-medium capitalize">
                                {cert.title}
                            </h4>
                            <div className="flex items-center justify-center mt-3 animate-bounce">
                                <span className="w-3 translate-x-0.5 rotate-45 border border-neutral-400 
                                                group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200"></span>
                                <span className="w-3 -translate-x-0.5 -rotate-45 border border-neutral-400
                                                group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200"></span>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <h6 className="text-xs text-neutral-100 tracking-wide text-center">
                                    {cert.description}
                                </h6>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
          </motion.div>
          
    </div>
  )
}

export default Certification