import { Link } from "react-router-dom";

import Banner1 from "src/assets/images/slider-1.png";
import Banner2 from "src/assets/images/slider-2.png";
import Banner3 from "src/assets/images/slider-3.png";
import Banner4 from "src/assets/images/slider-4.png";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "./Form/Button";
import DefaultBadge from "./Form/DefaultBadge";

const sliderData = [
  {
    title: "Trent Alexander-Arnold signs a new contract",
    image: Banner1,
    description:
      "Mohamed Salah and Virgil van Dijk remain key - but ensuring Trent Alexander-Arnold signs a new contract must be Liverpool's top priority",
    category: "Premier League",
  },
  {
    title: "Chelsea finally reach agreement with Napoli ",
    image: Banner2,
    description:
      "Transfer news & rumours LIVE: Chelsea finally reach agreement with Napoli over £30m deal for Romelu Lukakumelu",
    category: "Transfer News",
  },
  {
    title: "Team-mate convinced him to leave Chelsea",
    image: Banner3,
    description:
      "Conor Gallagher claimed he loves being at Atletico Madrid while revealing which English player convinced him to leave Chelsea.",
    category: "Premier League",
  },
  {
    title: "Napoli table €25m bid for McTominay ",
    image: Banner4,
    description:
      "Napoli test Man Utd's resolve by tabling €25m offer for Scott McTominay - but Red Devils holding out for more",
    category: "Manchester United",
  },
];
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },

  // Navigation 693*472
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
};
const HeroSlider = ({ sliderdata }) => {
  console.log(
    "firstSlider",
    sliderdata?.filter((post) => post?.feature === "slider")
  );
  const sliderPosts = sliderdata?.filter((post) => post?.feature === "slider");
  return (
    <div className=" ">
      <div className="flex flex-col lg:flex-row items-start gap-x-4 w-full">
        <div className=" w-full  pb-5 lg:pb-0">
          <div className="tp-slider-area relative">
            <div className="swiper-container slider-active">
              <Swiper {...swiperOptions}>
                {sliderPosts.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="tp-slide-item relative rounded">
                      <div className=" max-w-xs z-30 md:max-w-sm lg:max-w-md  absolute left-4 bottom-10 md:left-8 md:bottom-16 lg:left-10 xl:left-12 lg:bottom-20  ">
                        <div className="pb-3">
                          <DefaultBadge text={item?.category?.label} />
                        </div>
                        <h3 className="text-white text-xl lg:text-3xl font-bold line-clamp-2">
                          {item?.title}
                        </h3>
                        <p className="text-sm line-clamp-2  text-gray-300 pt-2">
                          {item?.short_content}
                        </p>
                        <Link className=" block pt-4" to="/shop">
                          <Button size="md">Continue Reading</Button>
                        </Link>
                      </div>
                      <div className="tp-slide-item__img rounded-lg">
                        {/* <div className=" relative"> */}
                        <img
                          src={item?.image}
                          className=" rounded-lg h-80 md:h-96  lg:h-[500px] w-full object-cover min-h-[250px]  "
                          alt=""
                        />
                        <div className=" absolute inset-0 bg-black/40 rounded-lg"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="slider-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
