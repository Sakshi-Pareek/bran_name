import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:gap-4 gap-2 justify-center items-center fixed bg-[#96BB7C]">
        <div className="text_loading">
          <span data-text-preloader="L" className="letters_loading">
            L
          </span>
          <span data-text-preloader="O" className="letters_loading">
            O
          </span>
          <span data-text-preloader="A" className="letters_loading">
            A
          </span>
          <span data-text-preloader="D" className="letters_loading">
            D
          </span>
          <span data-text-preloader="I" className="letters_loading">
            I
          </span>
          <span data-text-preloader="N" className="letters_loading">
            N
          </span>
          <span data-text-preloader="G" className="letters_loading">
            G
          </span>
        </div>
        <div className="loader w-[210px] h-1"></div>
      </div>
    </>
  );
};

export default Preloader;
