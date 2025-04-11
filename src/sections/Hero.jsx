import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Button from '../components/Button';

// import images
// import firstSlideImage from '../assets/carousel/one.jpg'
// import secondSlideImage from '../assets/carousel/two.jpg'
// import thirdSlideImage from '../assets/carousel/three.jpg'

export default function Hero() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
        className="mySwiper rounded-4xl"
      >
        <SwiperSlide>
            <div className="flex flex-col justify-center items-center bg-neutral-400 round bg-[url('/carousel/one.jpg')] bg-cover bg-center bg-blend-multiply h-screen max-h-[600px] w-full">
                <h2 className='font-extrabold text-white text-6xl capitalize mb-7'>
                    journey to your perfect home.
                </h2>
                <p className='text-gray-100 mb-5'>
                    Let our expert team guide you through the magic of real estate and helping you find the
                    perfect home where your dreams take flight. 
                </p>
                <Button text="Explore our services" dark={false}></Button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col justify-center items-center bg-neutral-400 round bg-[url('/carousel/two.jpg')] bg-cover bg-center bg-blend-multiply h-screen max-h-[600px] w-full">
                <h2 className='font-extrabold text-white text-6xl capitalize mb-7'>
                    journey to your perfect home.
                </h2>
                <p className='text-gray-100 mb-5'>
                    Let our expert team guide you through the magic of real estate and helping you find the
                    perfect home where your dreams take flight. 
                </p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="flex flex-col justify-center items-center bg-neutral-400 round bg-[url('/carousel/three.jpg')] bg-cover bg-center bg-blend-multiply h-screen max-h-[600px] w-full">
                <h2 className='font-extrabold text-white text-6xl capitalize mb-7'>
                    journey to your perfect home.
                </h2>
                <p className='text-gray-100 mb-5'>
                    Let our expert team guide you through the magic of real estate and helping you find the
                    perfect home where your dreams take flight. 
                </p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
