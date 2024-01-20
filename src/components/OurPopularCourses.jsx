import React from "react";
import GirlWithPen from "../assets/images/webp/GirlWithPen.webp";
import { RightArrow } from "./Icon";

const OurPopularCourses = () => {
  return (
    <>
      <div className="max-w-[1334px] px-3 mx-auto xl:py-40 lg:py-24 md:py-16 py-10">
        <div className="flex flex-row flex-wrap max-w-[1045px] mx-auto md:justify-between justify-center md:gap-0 gap-5 items-center">
          <div
            className="lg:w-[50%] md:w-[48%]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <img
              src={GirlWithPen}
              alt="GirlWithPen"
              className="max-w-[544px] w-full"
            />
          </div>
          <div className="lg:w-[35%] md:w-[45%] flex flex-col lg:gap-[35px] lg:gap-5 md:gap-4 gap-3">
            <p className="w-[94px] sm:h-[7px] h-[4px] bg-[#E74040]"data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="linear"></p>
            <h3
              className="text-[#252B42] sm:text-[40px] text-[32px] font-bold leading-[125%] tracking-[0.2px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Our Popular Courses
            </h3>
            <p
              className="text-[#737373] text-[14px] font-normal leading-[142%] tracking-[0.2px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <button
              className="flex items-center text-[#96BB7C] text-[14px] font-bold leading-[171.429%] tracking-[0.2px] gap-2.5"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Learn More
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPopularCourses;
