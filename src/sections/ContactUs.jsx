import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import contact from '../assets/contact-us.jpg'
import Button from "../components/Button"
import { beforeAfterVariants, imageVariants, imageFadeIn, itemVariants, textVariants } from "../variants"
import {motion} from 'framer-motion'

function ContactUs() {
  return (
    <div className="flex gap-[62px] justify-between items-start max-w-6xl mx-auto mt-36">
         <motion.div
            className={`relative flex-1/2 rounded-2xl overflow-visible`}
            variants={imageVariants(true)}
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
              src={contact}
              alt="key house"
              className="w-full rounded-2xl object-cover h-auto z-20 drop-shadow-2xl"
              variants={imageFadeIn}
            />
          </motion.div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-1/2 flex-col items-start">
          <HeadingText text="contact us" />
          <SubHeadingText text="Reach out to us now." align="start" />            
            <form className="w-full max-w-md">
                <motion.div variants={itemVariants} className="flex flex-col mb-5">
                <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus-visible:outline-[var(--secondary-color)] block w-full ps-10 p-2.5 placeholder:text-neutral-300" placeholder="example@gmail.com" />
                </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col mb-5">
                <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-start pt-3.5 ps-3.5 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-gray-400" aria-hidden="true" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                        </svg>
                    </div>
                    <textarea rows="4" id="text-area" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus-visible:outline-[var(--secondary-color)] block w-full ps-10 p-2.5 placeholder:text-neutral-300" placeholder="Type your message here." />
                </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                 <Button text="Send now" dark />
                </motion.div>
            </form>

        </motion.div>
    </div>
  )
}

export default ContactUs