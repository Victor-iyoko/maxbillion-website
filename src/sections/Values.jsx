import React from 'react'
import HeadingText from '../components/HeadingText'
import SubHeadingText from '../components/SubHeadingText'
import data from '../data'
import { cardGroupVariants, cardVariants, textVariants } from "../variants"
import currency from "../assets/values/Currency.json"
import {motion} from 'framer-motion'
import Lottie from 'lottie-react'
function Values() {


  return (
     <section className='relative mt-20 md:mt-24 flex flex-col items-center'>
          <Lottie loop play animationData={currency} className="-z-10 absolute top-0 rotate-[30deg] start-10 w-40" />
          <motion.div       
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center'>
            <HeadingText text="Core Values" align="center" />
            <SubHeadingText text="Why clients trusts us with their investments." align="center" />
          </motion.div>
          <motion.div
            variants={cardGroupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
           className="flex flex-wrap space-y-7 gap-4 justify-evenly items-start max-w-4xl mx-auto mt-6 md:mt-12">
            {data.values.map((value, i) => (
                <motion.div variants={cardVariants} key={i} 
                            className={`group relative bg-white overflow-hidden z-10 border border-neutral-200 p-4 min-w-60 max-w-60 min-h-[240px] rounded-3xl
                            hover:-translate-y-2.5 hover:border-transparent hover:drop-shadow-xl
                            active:-translate-y-2.5 active:border-transparent active:drop-shadow-xl
                            `}>
                  <div className="relative rounded-2xl overflow-hidden w-full min-h-[216px] flex flex-col justify-between items-center">
                      <div className="p-2 relative mt-2 border border-[#03A360] rounded-full
                                  group-hover:before:scale-400 group-hover:border-neutral-100
                                  group-active:before:scale-400 group-active:border-neutral-100
                                  before:w-full before:h-full before:rounded-full before:-z-10 before:absolute before:top-0 before:start-0 before:transition origin-center
                                  group-hover:before:bg-[var(--primary-color)]
                                  group-active:before:bg-[var(--primary-color)]">
                          <span className="absolute -bottom-3 -end-3 p-5 rounded-full bg-neutral-100 opacity-50
                                          group-hover:-translate-x-20
                                          group-active:-translate-x-20">
                          </span>
                          <div className="p-4 bg-[var(--primary-accent-color)] rounded-full z-50">
                              <img src={value.icon} className="w-14 aspect-square" alt={value.mainText} />
                          </div>
                      </div>
                      <div className="absolute h-full flex flex-col justify-center rounded-2xl p-2 translate-y-[130px]
                                      group-hover:delay-700 group-hover:translate-y-0 group-hover:bg-[var(--secondary-color)]
                                      group-active:delay-700 group-active:translate-y-0 group-active:bg-[var(--secondary-color)]">
                          <h4 className="text-neutral-500 tracking-wide text-center font-bold text-md max-w-[80%] place-self-center capitalize
                                          group-hover:text-neutral-100 group-hover:font-medium
                                          group-active:text-neutral-100 group-active:font-medium">
                              {value.mainText}
                          </h4>
                          <div className="flex items-center justify-center mt-3 animate-bounce">
                              <span className="w-2.5 translate-x-0.5 rotate-45 border border-neutral-400 
                                              group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200
                                              group-active:rotate-0 group-active:w-[50%] group-active:border-neutral-200"></span>
                              <span className="w-2.5 -translate-x-0.5 -rotate-45 border border-neutral-400
                                              group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200
                                              group-active:rotate-0 group-active:w-[50%] group-active:border-neutral-200"></span>
                          </div>
                          <h6 className="text-xs mt-3 leading-5 text-center text-neutral-100 tracking-wide">
                                {value.subText}
                          </h6>
                      </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        {/* </ScrollReveal> */}
     </section>
  )
}

export default Values