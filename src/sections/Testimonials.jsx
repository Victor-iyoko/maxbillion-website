import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import data from "../data"
import { cardGroupVariants, futureDevVariants, itemVariants, textVariants } from "../variants"
import {motion} from 'framer-motion'

function Testimonials() {
  return (
    <motion.section
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-36 flex flex-col items-center">
          <HeadingText text="Testimonials" align="center" />
          <SubHeadingText text="What property owners are saying." align="center" />
          <motion.div variants={itemVariants} className="flex flex-[5] items-start gap-6 max-w-5xl mx-auto mt-12">
              <motion.div
                variants={cardGroupVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-[1.8] justify-around items-start gap-2 space-y-4 flex-wrap">
                  {data.testimonials.map((testimonial, i) => (
                    <motion.div variants={futureDevVariants} key={i} className="group w-25 aspect-square overflow-hidden rounded-2xl cursor-pointer ring-4 ring-transparent hover:ring-[var(--primary-color)]">
                      <img src={testimonial.img} className="h-full w-full group-hover:scale-125" alt={testimonial.name} />
                    </motion.div>
                  ))}
              </motion.div>
              <div className="p-5 h-full flex flex-col flex-[3.2] justify-around items-center gap-2.5 flex-wrap rounded-2xl bg-neutral-100">
                  <div className="w-full flex justify-between border-b-2 border-white">
                    <div className="flex flex-col gap-2.5 pb-2">
                      <h6 className="text-[var(--primary-color)] text-lg capitalize tracking-wider font-extrabold">Ayominde Jalade</h6>
                      <span className="text-neutral-400 text-sm">Land-lord and property owner</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 text-[var(--primary-color)]" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                    </svg>
                  </div>
                  <div className="w-full flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-[var(--secondary-color)]" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-[var(--secondary-color)]" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-[var(--secondary-color)]" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-[var(--secondary-color)]" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-[var(--secondary-color)]" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-900 tracking-wide leading-7">
                    Using this platform have completely transformed how we 
                    approach real estate management. The versatile interface 
                    has allowed us to create an engaging user experience.
                  </p>
              </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex gap-4 justify-center mt-4">
             <div className="group p-3 aspect-square flex items-center justify-center bg-gray-200 rounded-xl cursor-pointer hover:bg-[var(--primary-color)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="1" stroke="currentColor" className="w-5 text-[var(--primary-color)] group-hover:text-white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                      </svg>
            </div>
            <div className="group p-3 aspect-square flex items-center justify-center bg-gray-200 rounded-xl cursor-pointer hover:bg-[var(--primary-color)]">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="1" stroke="currentColor" className="w-5 text-[var(--primary-color)] group-hover:text-white" viewBox="0 0 16 16">
                       <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                     </svg>
            </div>
          </motion.div>
    </motion.section>
  )
}

export default Testimonials