import React from 'react'
import HeadingText from '../components/HeadingText'
import SubHeadingText from '../components/SubHeadingText'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import data from '../data'

function Values() {
      const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate opacity and Y based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
     <motion.div ref={ref} style={{ opacity, y: translateY }}
  whileInView={{ translateY: "0" }} className='mt-24 flex flex-col items-center'>
          <HeadingText text="Core Values" align="center" />
          <SubHeadingText text="Why clients trusts us with their investments." align="center" />
          <div className="flex flex-wrap space-y-14 justify-around items-start max-w-4xl mx-auto mt-12">
            {data.values.map((value, i) => (
                 <div key={i} className="group relative bg-white overflow-hidden z-10 border border-neutral-200 p-4 min-w-60 max-w-60 min-h-[240px] rounded-3xl
                            hover:-translate-y-2.5 hover:border-transparent hover:drop-shadow-xl">
                <div className="relative rounded-2xl overflow-hidden w-full min-h-[216px] flex flex-col justify-between items-center">
                    <div className="p-2 relative mt-2 border border-[#03A360] rounded-full
                                group-hover:before:scale-400 group-hover:border-neutral-100
                                before:w-full before:h-full before:rounded-full before:-z-10 group-hover:before:bg-[var(--primary-color)] before:absolute before:top-0 before:start-0 before:transition origin-center">
                        <span className="absolute -bottom-3 -end-3 p-5 rounded-full bg-neutral-100 opacity-50
                                    group-hover:-translate-x-20">
                        </span>
                        <div className="p-4 bg-[var(--primary-accent-color)] rounded-full z-50">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-[#03A360]" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                            </svg> */}
                            {/* <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 8.5C8.5 6.56625 10.0663 5 12 5C13.9338 5 15.5 6.56625 15.5 8.5C15.5 10.4338 13.9338 12 12 12C10.0663 12 8.5 10.4338 8.5 8.5ZM12 6.75C12.9625 6.75 13.75 7.5375 13.75 8.5C13.75 9.4625 12.9625 10.25 12 10.25C11.0375 10.25 10.25 9.4625 10.25 8.5C10.25 7.5375 11.0375 6.75 12 6.75Z" fill="#345C3A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.75C9.66375 13.75 5 14.9225 5 17.25V19H19V17.25C19 14.9225 14.3363 13.75 12 13.75ZM12 15.5C14.3625 15.5 17.075 16.6287 17.25 17.25H6.75C6.95125 16.62 9.64625 15.5 12 15.5Z" fill="#345C3A"/>
<path d="M21.4025 8.58002L21.99 9.17168L18.6567 12.505L16.99 10.8425L17.5817 10.255L18.6567 11.3259L21.4025 8.58002Z" fill="#B08B57"/>
</svg> */}
                            <img src={value.icon} className="w-14 aspect-square" alt={value.mainText} />
                        </div>
                    </div>
                    <div className="absolute h-full rounded-2xl p-2 translate-y-[138px]
                                    group-hover:delay-700 group-hover:translate-y-0 group-hover:bg-[var(--secondary-color)]">
                        <h4 className="text-neutral-500 tracking-wide text-center font-bold text-md max-w-[80%] place-self-center
                                        group-hover:text-neutral-100 group-hover:font-medium capitalize">
                            {value.mainText}
                        </h4>
                        <div className="flex items-center justify-center mt-3 animate-bounce">
                            <span className="w-2.5 translate-x-0.5 rotate-45 border border-neutral-400 
                                             group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200"></span>
                            <span className="w-2.5 -translate-x-0.5 -rotate-45 border border-neutral-400
                                             group-hover:rotate-0 delay-500 group-hover:w-[50%] group-hover:border-neutral-200"></span>
                        </div>
                         <h6 className="text-xs mt-3 leading-5 text-center text-neutral-100 tracking-wide">
                              {value.subText}
                         </h6>
                    </div>
                </div>
            </div>
            ))}
          </div>
          
     </motion.div>
  )
}

export default Values