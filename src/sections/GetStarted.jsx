import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from '../components/Button';
import SubHeadingText from "../components/SubHeadingText"
import HeadingText from "../components/HeadingText"
import data from '../data';
import { imageVariants, itemVariants, textVariants } from '../variants';
import {motion} from 'framer-motion'
import AnimatedBlobs from '../components/AnimatedBlobs';

function GetStarted() {
  return (
       <section className="relative flex flex-col min-[1050px]:flex-row gap-[50px] justify-between items-start max-w-6xl mx-auto mt-36">
            <AnimatedBlobs left={true} />
            <motion.div 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex max-[1049px]:w-full w-[40%] flex-col items-center min-[1050px]:items-start">
                <HeadingText text="how to get started" />
                <SubHeadingText text="Know how we operate." align="start" />
                <motion.p variants={itemVariants} className='mb-7 text-neutral-400 leading-7 tracking-wide text-center min-[1050px]:text-start text-[16px] min-[1050px]:max-w-lg'>
                    These steps guide new clients through the 
                    entire process from initial contact to final 
                    payment, so they know exactly what to 
                    expect when starting with your service.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Button dark={true} text="Get in touch"/>
                </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(false)}
              className="w-full min-[1050px]:w-[60%]">
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={20} // Space between slides
                  slidesPerView={window.innerWidth > 630 ? 2.5 : window.innerWidth < 490 ? 1 : 2} // Show 2 full slides + a half one
                  pagination={{ clickable: true }}
                  centeredSlides={false} // Ensure normal alignment
                  className="pb-10 relative"
                >
                  {data.getStarted.map((step, index) => (
                    <SwiperSlide key={index} className="relative">
                      <div className="relative overflow-hidden p-6 flex flex-col items-center bg-white rounded-2xl border border-gray-200 text-center h-[300px] sm:h-[330px] md:h-[380px]">
                        <span className={`absolute top-0 end-0 flex items-center justify-center w-8 md:w-10 aspect-square rounded-bl-2xl text-sm md:text-md text-white bg-[var(--${index % 2 == 0 ? 'primary' : 'secondary'}-color)]`}>
                          {index + 1}
                        </span>
                        <img src={step.img} className='w-28 sm:w-32 md:w-44 aspect-square mb-3'  alt={step.title} />
                        <h3 className="text-md md:text-lg text-gray-500 font-semibold mb-2.5">{step.title}</h3>
                        <p className="text-neutral-300 tracking-wide leading-6 text-xs md:text-sm">{step.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* Fade Effect at the End */}
                  <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </Swiper>
            </motion.div>
        </section>
  )
}

export default GetStarted