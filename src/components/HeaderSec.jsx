import React, { useState } from "react";
import { ArrowIcon } from "./Icon";
import LeftImg from "../assets/images/webp/left_rectangle.webp";
import RightImg from "../assets/images/webp/right_rectangle.webp";
import HeaderImg from "../assets/images/webp/heroImg.webp";

const HeaderSec = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="relative">
        <img
          src={LeftImg}
          alt="LeftImg"
          className="xl:block hidden w-full max-w-[111px] absolute top-0 left-0"
        />
        <img
          src={RightImg}
          alt="RightImg"
          className="xl:block hidden w-full max-w-[179px] absolute top-0 right-0 "
        />
        <div className="container xl:max-w-[980px] mx-auto lg:px-4 px-6">
          <div className="flex justify-between items-center py-4 ">
            <div className="flex items-center gap-[87px]">
              <p className="text-[#252B42] text-2xl !leading-[133.333%] font-bold translate-[0.1px] cursor-pointer">
                Brandname
              </p>
              <ul
                className={`${
                  show ? "left-[-100%]" : "left-0 z-10 bg-[#ffffff]"
                } gap-[21px] flex items-center justify-center max-lg:fixed flex-row max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300`}
              >
                <li onClick={() => setshow(!show)}>
                  <a
                    className="text-[#737373] hover:text-[#96BB7C] transition-all duration-300 ease-linear text-sm leading-[171.429%] font-bold translate-[0.2px] after:w-0 after:h-[2px] after:bg-[#96BB7C] after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-300 after:ease-in-out"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="text-[#737373] hover:text-[#96BB7C] transition-all duration-300 ease-linear text-sm leading-[171.429%] font-bold translate-[0.2px] after:w-0 after:h-[2px] after:bg-[#96BB7C] after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-300 after:ease-in-out"
                    href="#Product"
                  >
                    Product
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="text-[#737373] hover:text-[#96BB7C] transition-all duration-300 ease-linear text-sm leading-[171.429%] font-bold translate-[0.2px] after:w-0 after:h-[2px] after:bg-[#96BB7C] after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-300 after:ease-in-out"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="text-[#737373] hover:text-[#96BB7C] transition-all duration-300 ease-linear text-sm leading-[171.429%] font-bold translate-[0.2px] after:w-0 after:h-[2px] after:bg-[#96BB7C] after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-300 after:ease-in-out"
                    href="#Contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="lg:hidden flex" onClick={() => setshow(!show)}>
                  <a
                    className="text-[#96BB7C] text-sm !leading-[157.143%] font-bold tracking-[0.2px]"
                    href=""
                  >
                    {" "}
                    Login
                  </a>
                </li>
                <li className="lg:hidden flex" onClick={() => setshow(!show)}>
                  <a
                    className="group py-[15px] px-[25px] rounded-[5px] whitespace-nowrap bg-[#96BB7C] hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500 flex gap-[15px] items-center text-sm !leading-[157.143%] tracking-[0.2px] font-bold text-white"
                    href=""
                  >
                    JOIN US{" "}
                    <span>
                      <ArrowIcon />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex hidden gap-[45px]">
              <button
                className="text-[#96BB7C] text-sm !leading-[157.143%] font-bold tracking-[0.2px] after:w-0 after:h-[2px] after:bg-[#96BB7C] after:absolute relative after:left-0 after:bottom-[16px] hover:after:w-full after:duration-300 transition-all duration-300 ease-linear after:ease-in-out
               "
              >
                Login
              </button>
              <a
                className="py-[15px] px-[25px] rounded-[5px] whitespace-nowrap bg-[#96BB7C] transition-all ease-linear duration-500 flex gap-[15px] items-center text-sm !leading-[157.143%] tracking-[0.2px] font-bold text-white hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)]"
                href=""
              >
                JOIN US{" "}
                <span>
                  <ArrowIcon />
                </span>
              </a>
            </div>
            <div
              onClick={() => setshow(!show)}
              className="lg:hidden w-[32px] h-[28px] relative z-10 flex justify-between flex-col cursor-pointer"
            >
              <span
                className={`${
                  show ? "" : "rotate-[50deg] translate-y-[22px]"
                } bg-[#96BB7C] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "hidden"
                } bg-[#96BB7C] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all `}
              ></span>
              <span
                className={`${
                  show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#96BB7C] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </div>
        </div>
        <div className="container mx-auto xl:max-w-[1320px] px-3" id="home">
          <div className="flex flex-row flex-wrap items-center lg:justify-between lg:pt-0 pt-10">
            <div className="lg:w-6/12">
              <p
                className="text-[#96BB7C] text-base !leading-[150%] font-bold tracking-[0.1px] sm:pb-[20px] pb-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Join Us
              </p>
              <h1
                className="text-[#252B42] lg:text-[58px] sm:text-[45px] text-[35px] font-bold leading-[137.931%] tracking-[0.2px] sm:pb-[20px] pb-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                HIGH QUALITY COURSES{" "}
              </h1>
              <p
                className="text-[#737373] leading-[150%] text-[20px] font-normal tracking-[0.2px] lg:max-w-[458px] sm:pb-[20px] pb-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Every day brings with it a fresh set of learning possibilities.
              </p>
              <div
                className="flex gap-[10px]"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <button className="group py-[15px] px-[40px] rounded-[5px] whitespace-nowrap bg-[#96BB7C] hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500 flex gap-[15px] items-center text-sm !leading-[157.143%] tracking-[0.2px] font-bold text-white">
                  Join Us
                </button>
                <button className="border border-solid border-[#96BB7C] py-[15px] px-[40px] rounded-[5px] whitespace-nowrap hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500 flex gap-[15px] items-center text-sm !leading-[157.143%] tracking-[0.2px] font-bold text-[#96BB7C]">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="lg:w-6/12 w-full flex items-center justify-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <div className="max-w-[570px]">
                <img src={HeaderImg} alt="HeaderImg" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
