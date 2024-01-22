import React from "react";
import { PCIcon, PencileIcon } from "./Icon";

const MostPopular = () => {
  return (
    <>
      <div className="max-w-[1334px] px-3 mx-auto xl:py-40 lg:py-24 md:py-16 py-10 xl:mb-[61px]">
        <h5
          className="text-[14px] text-[#96BB7C] font-bold leading-[171.429%] tracking-[0.2px] text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Practice Advice
        </h5>
        <h4
          className="sm:text-[40px] text-[30px] font-bold text-center text-[#252B42] leading-[134%] tracking-[0.1px] my-2.5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Most Popular Courses
        </h4>
        <p
          className="text-[#737373] text-[14px] font-normal text-center leading-[143%] tracking-[0.2px] max-w-[469px] mx-auto xl:mb-20 lg:mb-10 md:mb-7 mb-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-row flex-wrap max-w-[688px] mx-auto justify-between gap-7">
          <div
            className="sm:w-[47.7%] w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <div className="lg:py-[35px] lg:px-[40px] p-5 gap-5 shadow-[0px_13px_19px_0px_rgba(0,_0,_0,_0.07)] flex flex-col justify-center items-center hover:shadow-[0px_20px_25px_3px_rgba(0,_0,_0,_0.07)] transition-all duration-300 ease-linear cursor-pointer">
              <PCIcon />
              <h2 className="text-[#252B42] text-[16px] font-bold leading-[150%] tracking-[0.1px]">
                training Courses
              </h2>
              <p className="w-[50px] h-[3px] bg-[#E74040]"></p>
              <p className="text-[14px] max-w-[136px] text-[#737373] font-normal leading-[142.857%] tracking-[0.2px] text-center">
                The gradual accumulation and small-scale..
              </p>
            </div>
          </div>
          <div
            className="sm:w-[47.7%] w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <div className="lg:py-[35px] lg:px-[40px] p-5 gap-5 shadow-[0px_13px_19px_0px_rgba(0,_0,_0,_0.07)] flex flex-col justify-center items-center hover:shadow-[0px_20px_25px_3px_rgba(0,_0,_0,_0.07)] transition-all duration-300 ease-linear cursor-pointer">
              <PencileIcon />
              <h2 className="text-[#252B42] text-[16px] font-bold leading-[150%] tracking-[0.1px]">
                2,769 online courses
              </h2>
              <p className="w-[50px] h-[2px] bg-[#E74040]"></p>
              <p className="text-[14px] max-w-[136px] text-[#737373] font-normal leading-[142.857%] tracking-[0.2px] text-center">
                The gradual accumulation and small-scale..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
