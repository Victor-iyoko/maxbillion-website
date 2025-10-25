import React from 'react'
import HeadingText from '../components/HeadingText'
import SubHeadingText from '../components/SubHeadingText'
import data from '../data'
import { cardGroupVariants, cardVariants, textVariants } from '../variants'
import {motion} from 'framer-motion'

function Team() {
  return (
     <motion.section
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className='relative overflow-hidden mt-36 flex flex-col items-center pb-36'>
          <HeadingText text="Team Members" align="center" />
          <SubHeadingText text="Meet our property experts." align="center" />
          <motion.div variants={cardGroupVariants} className="flex flex-wrap gap-10 md:gap-28 justify-center items-center max-w-5xl mx-auto mt-12">
            {data.team.map((person, i) => (
                <motion.div variants={cardVariants} key={i} className="group relative bg-white overflow-hidden z-10 border border-neutral-200 p-4 min-w-60 max-w-60 min-h-[240px] rounded-3xl
                                hover:-translate-y-2.5 hover:border-transparent hover:drop-shadow-xl
                                active:-translate-y-2.5 active:border-transparent active:drop-shadow-xl">
                    <div className="relative rounded-2xl overflow-hidden w-full min-h-[216px] flex flex-col justify-between items-center">
                        <div className="p-1.5 relative mt-2 border rounded-full border-[var(--primary-color)]
                                        group-hover:before:scale-400 group-hover:border-neutral-100
                                        group-active:before:scale-400 group-active:border-neutral-100
                                        before:w-full before:h-full before:rounded-full before:-z-10 group-hover:before:bg-[var(--primary-color)] before:absolute before:top-0 before:start-0 before:transition origin-center">
                            <div className="rounded-full overflow-hidden w-[100px] aspect-square">
                            <img src={person.img} className="w-100" alt={person.name} />
                            </div>
                        </div>
                        <div className="absolute h-full rounded-2xl p-2 translate-y-[138px]
                                        group-hover:delay-700 group-hover:translate-y-0 group-hover:bg-[var(--secondary-color)]
                                        group-active:delay-700 group-active:translate-y-0 group-active:bg-[var(--secondary-color)]">
                            <h4 className="text-neutral-500 text-center font-bold text-md
                                            group-hover:text-white group-hover:font-medium
                                            group-active:text-white group-active:font-medium capitalize">
                                {person.name}
                            </h4>
                            <h4 className="text-[var(--secondary-color)] text-center font-bold text-sm tracking-wider
                                        group-hover:text-neutral-200 group-hover:font-medium
                                        group-active:text-neutral-200 group-active:font-medium uppercase">
                                {person.role}
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
                                <h6 className="text-xs text-neutral-100 leading-5 text-center tracking-wider">
                                    {person.bio}
                                </h6>
                                <div className="mt-2 flex items-center justify-between gap-5 self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook text-white cursor-pointer hover:text-[var(--secondary-accent-color)]" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp text-white cursor-pointer hover:text-[var(--secondary-accent-color)]" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google text-white cursor-pointer hover:text-[var(--secondary-accent-color)]" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
          </motion.div>
          <div className="absolute top-2/3 lg:top-1/2 bg-[var(--primary-accent-color)] w-[95%] sm:w-full h-[500px] sm:h-[700px] -z-0" style={{clipPath: 'ellipse(47% 47% at 50% 50%)'}}></div>
    </motion.section>
  )
}

export default Team