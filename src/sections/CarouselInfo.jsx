// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import data from '../data';

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
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper mt-36 rounded-2xl min-h-[400px]"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-[url('/carousel/three.jpg')]"
          data-swiper-parallax="-23%"
        ></div>
         <div className="absolute inset-0 bg-[var(--primary-color)] opacity-40"></div>
         {data.carouselInfo.map((info, i) => (
            <SwiperSlide key={i}>
              <div className="flex h-100 max-w-4xl px-16 flex-col justify-center items-start">

                <div className="text-white font-semibold text-3xl tracking-widest" data-swiper-parallax="-200">
                  {info.title}
                </div>
                <div className="pt-6 text-sm tracking-wider text-gray-100 leading-6 max-w-4xl" data-swiper-parallax="-100">
                  <p>
                    {info.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
         ))}
      </Swiper>
    </>
  );
}


export default CarouselInfo