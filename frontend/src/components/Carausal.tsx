import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import c1 from "../assets/c1.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";

export const Carousel = () => {
  return (
    <div className="w-full h-[500px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={c1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-center  p-4">
              <h1 className="text-4xl font-semibold mb-4">
                Find Millions Of Jobs And Achieve success
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, harum. Dolorum debitis fugit autem cumque ipsum
                voluptatibus odit, dolor itaque reiciendis unde quod ut culpa
                laudantium magni facere aliquam alias!.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={c3}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-center  p-4">
              <h1 className="text-4xl font-semibold mb-4">
                Find Your Favourite job immediete
              </h1>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                qui, quae voluptatem odio, ex unde ab eum dicta magnam enim
                quasi earum. Quidem, sapiente vel? Est quis natus reiciendis
                veritatis.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={c4}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-center  p-4">
              <h1 className="text-4xl font-semibold mb-4">
                Unlock New Career Opportunities
              </h1>
              <p className="text-sm">
                Discover thousands of jobs in your area and connect with top
                companies looking for talent like yours.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={c5}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-center p-4">
              <h1 className="text-4xl font-semibold mb-4">
                Your Dream Job Awaits
              </h1>
              <p className="text-sm">
                Browse, apply, and land your dream role today. Fast, easy, and
                tailored to your skills and goals
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
