import Lottie from 'lottie-react'
import distance from '../assets/address/Distance.json'
import HeadingText from '../components/HeadingText'
import SubHeadingText from '../components/SubHeadingText'
import { itemVariants, textVariants } from '../variants'
import {motion} from 'framer-motion'

function Address() {
  return (
    <motion.section
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className='mt-36 relative flex flex-col items-center'>
          <Lottie loop play animationData={distance} className="-z-10 absolute top-0 rotate-[-30deg] end-0 lg:end-40 w-40" />
          <HeadingText text="Address" align="center" />
          <SubHeadingText text="Locate our main office now." align="center" />
          <motion.div variants={itemVariants} className="w-full overflow-hidden rounded-2xl mt-12 border-4 border-[var(--primary-accent-color)] h-[350px] sm:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=7.22625552100241, 8.146769372513585&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
          </motion.div>
    </motion.section>
  )
}

export default Address