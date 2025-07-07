"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";

import { EffectCube, Autoplay } from "swiper/modules";
import Image from "next/image";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { ReactNode } from "react";

interface Slider {
  text: {
    content: string;
    color: string;
  };
  icon: any;
  mode: "dark" | "light";
}

type DecorPosition = {
  x: string;
  y: string;
};

const sliders: Slider[] = [
  {
    text: {
      content: "أجمل بداية لأجمل اتنين",
      color: "white",
    },
    icon: <FaHeart />,
    mode: "dark",
  },

  {
    text: {
      content: "الفرحة بتكبر لما بنشاركها مع اللي بنحبهم... ربنا يديم اللمة الحلوة ويتمم علي خير",
      color: "black",
    },
    icon: <FaHeart />,
    mode: "light",
  },

  {
    text: {
      content:
        "فرحتنا بيكم كبيرة, ربنا يديم المحبة ويكتب لكم سعادة ما تنتهيش باذن الله",
      color: "black",
    },
    icon: <FaHeart />,
    mode: "light",
  },

  {
    text: {
      content: "ربنا يتمم لكم علي خير ويجمع بينكم في سعادة وحب",
      color: "black",
    },
    icon: <FaHeart />,
    mode: "light",
  },

  {
    text: {
      content:
        "ألف مبروك لأجمل اتنين, ربنا يجعلها بداية لحياة كلها حب وراحة وسكينة",
      color: "white",
    },
    icon: <FaHeart />,
    mode: "dark",
  },

  {
    text: {
      content: "لما الحب يتبارك بحضور الأحباب... تبقي الفرحة فرحتين",
      color: "white",
    },
    icon: <FaHeart />,
    mode: "dark",
  },
];

const decorPositions: DecorPosition[] = [
  { x: "left-5", y: "top-5" },
  { x: "right-5", y: "top-10" },
  { x: "left-[45%]", y: "top-0" },
  { x: "right-[30%]", y: "top-20" },
  { x: "left-10", y: "bottom-5" },
  { x: "right-10", y: "bottom-10" },
  { x: "left-[50%]", y: "bottom-[5%]" },
  { x: "right-[45%]", y: "top-[50%]" },
  { x: "left-[2%]", y: "top-[50%]" },
  { x: "right-[2%]", y: "bottom-[45%]" },
];

export default function MySwiper() {
  return (
    <div className="overflow-hidden">
      <div
        className="relative w-full sm:max-w-2xl sm:mx-auto sm:my-[100px]"
        data-aos="zoom-out"
      >
        <StartSwiper>
          {sliders.map((slider, i) => (
            <SwiperSlide>
              <Title slider={slider} />
              {/* <AnimatedStar /> */}
              <AnimatedHeartLeft />
              <AnimatedHeartRight />
              {decorPositions.map((d, i) => (
                <div key={i}>
                  <Decor position={d} />
                </div>
              ))}
              <Content slider={slider} />
              <Image
                src={`/images/${i + 1}.jpg`}
                alt={`Slide ${i + 1}`}
                width={500}
                height={500}
                className="w-full sm:aspect-square object-cover"
              />
            </SwiperSlide>
          ))}
        </StartSwiper>
      </div>
    </div>
  );
}

function Title({ slider }: { slider: Slider }) {
  return (
    <div className="absolute top-[0%] left-[0%] text-white w-full box-border z-100 animate-gradient-move">
      <div className="flex justify-around p-3">
        <div className="relative font-bold">
          <p className="animate-gradient-text">M</p>
          <CiHeart className="absolute top-[50%] left-[50%] -translate-[50%] text-5xl text-cyan-400" />
        </div>
        <p>&</p>
        <div className="relative font-bold">
          <p className="animate-gradient-text">F</p>
          <CiHeart className="absolute top-[50%] left-[50%] -translate-[50%] text-5xl text-white " />
        </div>
      </div>
    </div>
  );
}

const AnimatedStar = () => {
  return (
    <div className="absolute top-16 left-[50%] -translate-[50%] w-8 h-8 clip-path-star animate-gradient-move"></div>
  );
};

const AnimatedHeartLeft = () => {
  return (
    <div className="absolute top-16 left-10 animate-decor-rotate-heart w-2 h-2 outline-1 outline-offset-3 rounded-full bg-red-200 shadow-md shadow-white ">
      <div className="absolute top-3 left-[50%] -translate-x-[50%] w-0.5 h-14 bg-gray-300">
        <div className="absolute -bottom-5 left-[50%] -translate-x-[50%] w-10 h-10">
          <svg viewBox="0 0 32 29.6" className="w-full h-full fill-red-500">
            <path
              d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
           c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
          <span className="absolute top-[50%] left-[50%] -translate-[50%] font-bold text-xl">
            F
          </span>
        </div>
      </div>
    </div>
  );
};

const AnimatedHeartRight = () => {
  return (
    <div className="absolute top-16 right-10 animate-decor-rotate-heart w-2 h-2 outline-1 outline-offset-3 rounded-full bg-red-200 shadow-md shadow-white ">
      <div className="absolute top-3 left-[50%] -translate-x-[50%] w-0.5 h-14 bg-white">
        <div className="absolute -bottom-5 left-[50%] -translate-x-[50%] w-10 h-10">
          <svg viewBox="0 0 32 29.6" className="w-full h-full fill-red-500">
            <path
              d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
           c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
          <span className="absolute top-[50%] left-[50%] -translate-[50%] font-bold text-xl">
            M
          </span>
        </div>
      </div>
    </div>
  );
};

const Decor = ({ position }: { position: DecorPosition }) => {
  return (
    <div
      className={`absolute ${position.y} ${position.x} w-4 h-4 clip-path-stare bg-gradient-to-l from-red-500 via-white to-amber-500 animate-clip-path-star z-100`}
    ></div>
  );
};

function Content({ slider }: { slider: Slider }) {
  return (
    <div className="backdrop-blur-3xl w-full p-2 bg-[rgba(0,0,0,0.2)] text-lg absolute bottom-[0%] left-[50%] -translate-x-[50%]">
      <p className="text-center">{slider.text.content}</p>
    </div>
  );
}

const StartSwiper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      effect="cube"
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      grabCursor={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCube, Autoplay]} //! <<---->>
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
