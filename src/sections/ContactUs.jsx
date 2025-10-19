import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import contact from '../assets/contact-us.jpg'
import Button from "../components/Button"
import emailjs from "@emailjs/browser";
import { beforeAfterVariants, imageVariants, imageFadeIn, itemVariants, textVariants } from "../variants"
import {motion} from 'framer-motion'
import { useRef, useState } from "react";
import data from "../data";
import Alert from "../components/Alert";
import AnimatedBlobs from "../components/AnimatedBlobs";

function ContactUs() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });


  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        data.emailServiceId,    // Replace with your EmailJS Service ID
        data.contactEmailTempId,   // Replace with your EmailJS Template ID
        form.current,
        data.emailPublicId     // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsLoading(false);
          form.current.reset();
          setAlert({
            show: true,
            type: "success",
            message: "Your message has been sent successfully!",
          });

          setTimeout(() => setAlert({ ...alert, show: false }), 5000);
        },
        (error) => {
          console.log(error)
          setIsLoading(false);
          setAlert({
            show: true,
            type: "error",
            message: "Sorry, there seems to be a problem. Try again later!",
          });

          setTimeout(() => setAlert({ ...alert, show: false }), 5000);
        }
      );
  };
  return (
    <div id="contact" className="relative flex flex-col min-[1050px]:flex-row gap-[62px] justify-between items-start max-w-6xl mx-auto mt-36">
        <Alert
          type={alert.type}
          message={alert.message}
          show={alert.show}
          onClose={() => setAlert({ ...alert, show: false })}
        />
        <motion.div
          className="relative min-[1050px]:flex-1/2 flex justify-center rounded-2xl overflow-visible"
          variants={imageVariants(true)}
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
            className="absolute w-full h-full border-4 border-white rounded-2xl bg-[var(--secondary-color)] scale-90 -start-6 sm:-start-10 min-[1050px]:-start-11 -bottom-8 sm:-bottom-10 -z-10"
          />

          {/* Main image */}
          <motion.img
            src={contact}
            alt="key house"
            className="w-[95%] min-[1050px]:w-full rounded-2xl object-cover h-auto z-20 drop-shadow-2xl"
            variants={imageFadeIn}
          />
        </motion.div>
         <AnimatedBlobs left={false} />
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex w-full min-[1050px]:w-[50%] flex-col items-center min-[1050px]:items-start">
          <HeadingText text="contact us" />
          <SubHeadingText text="Reach out to us now." align="start" />            
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
                <motion.div variants={itemVariants} className="flex flex-col mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 text-gray-400" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg>
                    </div>
                    <input type="text" name="name" required className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus-visible:outline-[var(--secondary-color)] block w-full ps-10 p-2.5 placeholder:text-neutral-300" placeholder="John Doe" />
                </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col mb-5">
                <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input type="text" name="email" required className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus-visible:outline-[var(--secondary-color)] block w-full ps-10 p-2.5 placeholder:text-neutral-300" placeholder="example@gmail.com" />
                </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-start pt-3.5 ps-3.5 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-gray-400" aria-hidden="true" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                        </svg>
                    </div>
                    <textarea rows="3" name="message" required className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus-visible:outline-[var(--secondary-color)] block w-full ps-10 p-2.5 placeholder:text-neutral-300" placeholder="Type your message here." />
                </div>
                </motion.div>
                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                 <Button text="Send now" isLoading={isLoading} dark />
                </motion.div>
            </form>
        </motion.div>
    </div>
  )
}

export default ContactUs