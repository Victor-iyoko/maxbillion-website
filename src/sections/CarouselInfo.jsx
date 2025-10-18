// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination } from 'swiper/modules';
import data from '../data';
import { itemVariants, textVariants } from '../variants';
import {motion} from 'framer-motion'

function CarouselInfo() {
return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Parallax, Pagination]}
        className="mySwiper mt-36 rounded-2xl max-h-[320px] md:min-h-[400px] overflow-hidden"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-[url('/carousel/three.jpg')]"
          data-swiper-parallax="-23%"
        ></div>
         <div className="absolute inset-0 bg-[var(--primary-color)] opacity-40"></div>
         {data.carouselInfo.map((info, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex h-100 max-w-4xl px-8 md:px-16 flex-col justify-center items-start">
                  <motion.div variants={itemVariants} className="text-white font-semibold text-2xl md:text-3xl tracking-widest" data-swiper-parallax="-200">
                    {info.title}
                  </motion.div>
                  <motion.div variants={itemVariants} className="pt-6 text-xs md:text-sm tracking-wider text-gray-100 leading-6 max-w-4xl" data-swiper-parallax="-100">
                    <p>
                      {info.description}
                    </p>
                  </motion.div>
              </motion.div>
            </SwiperSlide>
         ))}
      </Swiper>
    </>
  );
}


export default CarouselInfo