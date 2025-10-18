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
          <Lottie loop play animationData={distance} className="-z-10 absolute top-0 rotate-[-30deg] end-40 w-40" />
          <HeadingText text="Address" align="center" />
          <SubHeadingText text="Locate our main office now." align="center" />
          <motion.div variants={itemVariants} className="w-full overflow-hidden rounded-2xl mt-12 border-4 border-[var(--primary-accent-color)] h-[350px] sm:h-[500px]">
            <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=NO%2030,%20OTADA%20ROAD%20,%20OTUKPO,%20BENUE%20STATE,%20NIGERIA+(Maxbillion)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">drones ireland</a></iframe>
          </motion.div>
    </motion.section>
  )
}

export default Address