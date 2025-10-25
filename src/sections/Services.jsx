import Lottie from "lottie-react";
import HeadingText from "../components/HeadingText";
import SubHeadingText from "../components/SubHeadingText";
import data from "../data";
import { cardGroupVariants, cardVariants, textVariants } from "../variants"
import support from "../assets/services/Support.json"
import {motion} from 'framer-motion'

function Services() {
  
  return (
    <section id="services" className='mt-36 relative flex flex-col items-center'>
        <Lottie loop play animationData={support} className="-z-10 absolute top-0 rotate-[-30deg] end-0 lg:end-40 w-40" />
        <motion.div       
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center'>
                <HeadingText text="Services" align="center" />
                <SubHeadingText text="Our real estate services." align="center" />
        </motion.div>
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardGroupVariants}
            className="flex flex-wrap space-y-5 gap-4 justify-evenly items-center max-w-5xl mx-auto mt-12">
                {data.services.map((service, i) => (    
                    <motion.div variants={cardVariants} key={i} className={`group relative bg-white overflow-hidden z-10 border border-neutral-200 p-4 min-w-60 max-w-60 min-h-[240px] rounded-3xl
                                    hover:-translate-y-2.5 hover:border-transparent hover:drop-shadow-xl ${i === 7 ? 'mb-5' : ''}
                                    active:-translate-y-2.5 active:border-transparent active:drop-shadow-xl`}>
                        <div className="relative rounded-2xl overflow-hidden w-full min-h-[216px] flex flex-col justify-between items-center">
                            <div className="p-2 relative mt-2 border border-[#03A360] rounded-full
                                        group-hover:before:scale-400 group-hover:border-neutral-100
                                        group-active:before:scale-400 group-active:border-neutral-100
                                        before:w-full before:h-full before:rounded-full before:-z-10 group-hover:before:bg-[var(--primary-color)] group-active:before:bg-[var(--primary-color)] before:absolute before:top-0 before:start-0 before:transition origin-center">
                                <span className="absolute -bottom-3 -end-3 p-5 rounded-full bg-neutral-100 opacity-50
                                                 group-hover:-translate-x-20 group-active:-translate-x-20" />
                                <div className="p-5 bg-[var(--primary-accent-color)] rounded-full z-50">
                                    <img src={service.icon} className="w-12 aspect-square" alt={service.title} />
                                </div>
                            </div>
                            <div className="absolute h-full rounded-2xl p-2 translate-y-[138px]
                                            group-hover:delay-700 group-hover:translate-y-0 group-hover:bg-[var(--secondary-color)]
                                            group-active:delay-700 group-active:translate-y-0 group-active:bg-[var(--secondary-color)]">
                                <h4 className="text-neutral-500 text-center font-bold text-md
                                                group-hover:text-neutral-100 group-hover:font-medium
                                                group-active:text-neutral-100 group-active:font-medium capitalize">
                                    {service.title}
                                </h4>
                                <div className="flex items-center justify-center mt-3 animate-bounce">
                                    <span className="w-2.5 translate-x-0.5 rotate-45 border border-neutral-400 
                                                    group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200
                                                    group-active:rotate-0 group-active:w-[50%] group-active:border-neutral-200" />
                                    <span className="w-2.5 -translate-x-0.5 -rotate-45 border border-neutral-400
                                                    group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200
                                                    group-active:rotate-0 group-active:w-[50%] group-active:border-neutral-200" />
                                </div>
                                <div className="flex flex-col gap-3 mt-3">
                                    {service.description.map((desc, i) => (
                                        <div key={i} className="flex gap-2 w-full justify-start items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                                            </svg>
                                            <h6 className="text-xs text-neutral-100 tracking-wide">
                                            {desc}
                                            </h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
        </motion.div>
    </section>
  )
}

export default Services
