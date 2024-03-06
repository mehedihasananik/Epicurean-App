import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="hero-section">
      {/* hero-section started */}
      <div className="flex flex-col lg:flex-row pt-20 px-4">
        <div className="left relative">
          {/* title */}
          <div className="md:px-20 md:pt-10 lg:px-44">
            <h5 className="text-[16px] font-extrabold italic">
              WELCOME TO OUR
            </h5>
            <h2 className="font-Bakilda text-2xl md:text-[110px] md:my-14">
              Epicurean
            </h2>
          </div>
          {/* line */}
          <div className="w-full absolute top-[-70%] right-[39%]">
            <Image
              src={"/images/line.png"}
              width={1080}
              height={545}
              alt="line"
            />
          </div>
          {/* description */}
          <div className="font-ValueSans opacity-[.16px] pt-20 md:px-20 lg:px-44 lg:pr-56">
            <p className=" font-thin">
              Epicurean embodies our commitment to transforming the simple act
              of sipping coffee into a refined and memorable journey. At
              Epicurean, we take pride in curating an exceptional coffee
              experience that transcends the ordinary.
            </p>
          </div>
          <div className="flex gap-8 pt-10 md:px-20 lg:px-44">
            {/* button */}
            <div>
              <button className="bg-[#86371C] text-white text-[16px] rounded-[12px] px-5 py-3">
                EXPLORE OUR MENU
              </button>
            </div>
            {/* logos */}
            <div className="flex">
              <Image
                src="/images/Ellipse 1.png"
                width={54}
                height={54}
                alt="logo"
              />
              <Image
                src="/images/Ellipse 2.png"
                width={54}
                height={54}
                alt="logo"
              />
              <Image
                src="/images/Ellipse 3.png"
                width={54}
                height={54}
                alt="logo"
              />
            </div>
            {/* types */}
            <div>
              <h3>1200+ </h3>
              <p>Tasty Variant Coffee</p>
            </div>
          </div>
        </div>
        <div className="right md:px-20 lg:pr-32">
          {/* image */}
          <div className="w-[100%] h-[100%]">
            <Image
              src={"/images/cup.png"}
              width={1000} // Set the width here
              height={630} // Set the height here
              alt="cup image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
