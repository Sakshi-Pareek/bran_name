import React from "react";
import ColorProduct from "../assets/images/webp/ColorCircle.webp";
import ProductCover from "../assets/images/webp/ProductCover.webp";
import {
  AddToCart,
  DownLoad,
  LikeIcon,
  RightArrow1,
  StarIcon,
  WishList,
} from "./Icon";

const EveryClientMatters = () => {
  return (
    <>
      <div className="max-w-[1334px] px-3 mx-auto xl:py-40 lg:py-24 md:py-16 py-10 xl:mb-[36px]">
        <h5 className="text-[14px] text-[#96BB7C] font-bold leading-[171.429%] tracking-[0.2px] text-center"data-aos="zoom-in" id="Product"
              data-aos-duration="1000"
              data-aos-easing="linear">
          Practice Advice
        </h5>
        <h4 className="sm:text-[40px] text-[30px] font-bold text-center text-[#252B42] leading-[134%] tracking-[0.1px] my-2.5"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
          Every Client Matters
        </h4>
        <p className="text-[#737373] text-[14px] font-normal text-center leading-[143%] tracking-[0.2px] max-w-[469px] mx-auto xl:mb-20 lg:mb-10 md:mb-7 mb-5"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
          Problems trying to resolve the conflict between<br/> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-row flex-wrap max-w-[710px] mx-auto gap-4 sm:justify-between justify-center"data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear">
          <div className="sm:w-[48.5%] w-full group hover:shadow-lg transition-all duration-300 ease-linear cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={ColorProduct}
                alt="ColorProduct"
                className="w-full sm:max-w-[348px] group-hover:scale-[1.03] transition-all duration-300 ease-linear"
              />
              <p className="text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-white bg-[#E74040] px-2.5 rounded-[3px] w-[52px] absolute top-[20px] left-[20px]">
                Sale
              </p>
              <div className="flex items-center gap-2.5 absolute bottom-[24px] left-1/2 translate-x-[-50%]">
                <a href="">
                  <WishList />
                </a>
                <a href="">
                  <AddToCart />
                </a>
                <a href="">
                  <LikeIcon />
                </a>
              </div>
            </div>
            <div className="md:p-[25px] p-4 flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <p className="text-[14px] text-[#96BB7C] font-bold leading-[171.429%] tracking-[0.2px]">
                  Books Liberary
                </p>
                <p className="text-[12px] font-normal leading-[133.333%] tracking-[0.2px] text-white bg-[#2D4059] transition-all duration-300 ease-linear group-hover:bg-[#96BB7C] p-[5px] rounded-[20px] flex items-center gap-[5px]">
                    <StarIcon />
                  4.9
                </p>
              </div>
              <h3 className="text-[#252B42] text-[16px] font-bold leading-[150%] tracking-[0.1px] sm:max-w-[131px]">
                Get Quality Education
              </h3>
              <p className="text-[#737373] text-[14px] font-normal leading-[142.857%] tracking-[0.2px]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <a
                href=""
                className="text-[#737373] text-[14px] font-bold leading-[171.429%] tracking-[0.2px] flex items-center gap-[10px]"
              >
                <span>
                  <DownLoad />
                </span>
                15 Sales
              </a>
              <p className="text-[16px] font-bold leadin-[150%] tracking-[0.1px] flex gap-[5px] px-[3px] py-[5px]">
                <span className="text-[#BDBDBD]">$16.48</span>
                <span className="text-[#FFAB71]">$6.48</span>
              </p>
              <button className="flex items-center text-[#96BB7C] group-hover:text-[white] group-hover:bg-[#96BB7C] text-[14px] font-bold leading-[171.429%] tracking-[0.2px] px-[16px] py-[9px] border border-[#96BB7C] rounded-[37px] w-[142px] transition-all duration-300 ease-linear">
                Learn More
                <span className="ml-2.5">
                  <RightArrow1 />
                </span>
              </button>
            </div>
          </div>
          <div className="sm:w-[48.5%] w-full group hover:shadow-lg transition-all duration-300 ease-linear cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={ProductCover}
                alt="ProductCover"
                className="w-full sm:max-w-[348px] group-hover:scale-[1.03] transition-all duration-300 ease-linear"
              />
              <p className="text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-white bg-[#E74040] px-2.5 rounded-[3px] w-[52px] absolute top-[20px] left-[20px]">
                Sale
              </p>
              <div className="flex items-center gap-2.5 absolute bottom-[24px] left-1/2 translate-x-[-50%]">
                <a href="">
                  <WishList />
                </a>
                <a href="">
                  <AddToCart />
                </a>
                <a href="">
                  <LikeIcon />
                </a>
              </div>
            </div>
            <div className="md:p-[25px] p-4 flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <p className="text-[14px] text-[#96BB7C] font-bold leading-[171.429%] tracking-[0.2px]">
                  Training Courses
                </p>
                <p className="text-[12px] font-normal leading-[133.333%] tracking-[0.2px] text-white bg-[#2D4059] p-[5px] rounded-[20px] flex items-center transition-all duration-300 ease-linear group-hover:bg-[#96BB7C]">
                  <span className="mr-[5px]">
                    <StarIcon />
                  </span>
                  4.9
                </p>
              </div>
              <h3 className="text-[#252B42] text-[16px] font-bold leading-[150%] tracking-[0.1px] sm:max-w-[131px]">
                Video in Live Action
              </h3>
              <p className="text-[#737373] text-[14px] font-normal leading-[142.857%] tracking-[0.2px]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <a
                href=""
                className="text-[#737373] text-[14px] font-bold leading-[171.429%] tracking-[0.2px] flex items-center gap-[10px]"
              >
                <span>
                  <DownLoad />
                </span>
                15 Sales
              </a>
              <p className="text-[16px] font-bold leadin-[150%] tracking-[0.1px] flex gap-[5px] px-[3px] py-[5px]">
                <span className="text-[#BDBDBD]">$16.48</span>
                <span className="text-[#FFAB71]">$6.48</span>
              </p>
              <button className="flex items-center text-[#96BB7C] text-[14px] font-bold leading-[171.429%] tracking-[0.2px] px-[16px] py-[9px] border border-[#96BB7C] rounded-[37px] w-[142px] group-hover:text-[white] group-hover:bg-[#96BB7C] transition-all duration-300 ease-linear">
                Learn More
                <span className="ml-2.5">
                  <RightArrow1 />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EveryClientMatters;
