import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-[#2D4059]">
        <div className="max-w-[1334px] px-3 mx-auto xl:py-40 lg:py-24 md:py-16 py-10">
          <h5 className="text-[14px] text-[#96BB7C] font-bold leading-[171.429%] tracking-[0.2px] text-center"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
            Newsletter
          </h5>
          <h4 className="text-[24px] font-bold text-center text-white leading-[134%] tracking-[0.1px] my-2.5"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
            Video in Live Action
          </h4>
          <p className="text-white text-[14px] font-normal text-center leading-[143%] tracking-[0.2px] max-w-[469px] mx-auto xl:mb-20 lg:mb-10 md:mb-7 mb-5"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="max-w-[688px] mx-auto bg-[#F9F9F9] border-[#E6E6E6] !rounded-[5px] flex justify-between items-center xl:mb-5"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
            <input
              type="email"
              placeholder="Your Email"
              className="!text-[#737373] text-[14px] font-normal leading-[200%] tracking-[0.2px] sm:py-[15px] py-3 ps-5 rounded-[5px] bg-[#F9F9F9] outline-none"
            />
            <button className="text-white text-[14px] font-normal leading-[200%] tracking-[0.2px] sm:py-[15px] py-3 px-[23px] bg-[#96BB7C] rounded-r-[5px] hover:scale-[0.9] hover:rounded-[5px] transition-all duration-300 ease-linear hover:shadow-[3px_0px_10px_1px_#96BB7C] outline-none border-[#E6E6E6] border">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
