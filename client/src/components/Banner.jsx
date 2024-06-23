import bgImage1 from "../assets/banner/cbanner1.png";
import bgImage2 from "../assets/banner/cbanner2.png";
import bgImage3 from "../assets/banner/cbanner3.png";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="h-[70vh] lg:h-[65vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-full rounded-md -z-10"
      >
        <SwiperSlide>
          <div style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
            }} className="h-full bg-center bg-cover">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Explore Alternative Gadget Choices
                </h1>
                <p className="mt-3 text-lg text-white dark:text-neutral-400">
                Navigate through a curated selection of eco-conscious gadgets. Find sustainable, innovative alternatives to mainstream technology products.
                </p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex"></div>
              </div>

              <div className="relative ms-4">
                <img
                  className="w-full rounded-md"
                  src="https://i.ibb.co/Zcn01NG/eco-4th-gen-removebg-preview.png"
                  alt="Image Description"
                />
                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
            }} className="h-full bg-center bg-cover">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Uncover Unique Gadget Alternatives
                </h1>
                <p className="mt-3 text-lg text-white dark:text-neutral-400">
                Dive into a curated selection of innovative gadget alternatives. Find unique, eco-friendly tech solutions tailored to your lifestyle needs.
                </p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex"></div>
              </div>

              <div className="relative ms-4">
                <img
                  className="w-full rounded-md"
                  src="https://i.ibb.co/tZ0nCm0/s22ultra-removebg-preview.png"
                  alt="Image Description"
                />
                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
            }} className="h-full bg-center bg-cover">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Discover Better Alternatives for Your Tech Needs
                </h1>
                <p className="mt-3 text-lg text-white dark:text-neutral-400">
                Uncover superior tech options tailored to enhance efficiency and sustainability. Ideal for tech enthusiasts seeking smart, eco-conscious choices.
                </p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex"></div>
              </div>

              <div className="relative ms-4">
                <img
                  className="w-full rounded-md"
                  src="https://i.ibb.co/dDfKpqG/xbox-removebg-preview.png"
                  alt="Image Description"
                />
                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
