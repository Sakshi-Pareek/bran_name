import React, { useState } from "react";
import VideoCard from "../assets/images/webp/Videocard.webp";
import { PlayIcon } from "./Icon";

const OurCourses = () => {
  const [modal, setModal] = useState(false);
  if (modal === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="max-w-[1334px] px-3 mx-auto xl:py-40 lg:py-24 md:py-16 py-10">
        <h5
          className="text-[14px] text-[#96BB7C] font-bold leading-[171.429%] tracking-[0.2px] text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Practice Advice
        </h5>
        <h4
          className="text-[24px] font-bold text-center text-[#252B42] leading-[134%] tracking-[0.1px] my-2.5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Our Popular Courses
        </h4>
        <p
          className="text-[#737373] text-[14px] font-normal text-center leading-[143%] tracking-[0.2px] max-w-[469px] mx-auto xl:mb-20 lg:mb-10 md:mb-7 mb-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="relative">
          <img
            src={VideoCard}
            alt="VideoCard"
            className="rounded-[20px] max-w-[644px] mx-auto w-full"
          />
          <div
            onClick={() => setModal(true)}
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer"
          >
            <PlayIcon />
          </div>
          {modal ? (
            <>
              <div className="fixed bg-[#ffffffd9] backdrop-blur-sm top-0 left-0 h-full w-full overflow-hidden flex items-center justify-center z-20">
                <div className="bg-[#96BB7C] rounded-[10px] relative sm:p-2 p-1">
                  <div
                    onClick={() => setModal(false)}
                    className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 sm:mr-3 sm:mt-3 mr-1 mt-1 bg-[#96BB7C] rounded-[100%] sm:p-2 p-1 flex justify-center items-center font-bold text-[#ffffff] cursor-pointer max-sm:text-sm"
                  >
                    X
                  </div>
                  <iframe
                    className="rounded-lg xl:w-[992px] lg:w-[700px] md:w-[600px] sm:w-[480px] w-[350px] xl:h-[480px] lg:h-[380px] md:h-[330px] sm:h-[280px] h-[200px]"
                    src="https://www.youtube.com/embed/iY7MQb4fMB4?si=FpXWNPO50rSMqRUT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default OurCourses;
