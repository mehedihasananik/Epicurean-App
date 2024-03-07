import Container from "@/components/Utils/Container/Container";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUs my-20">
      <Container>
        {/* whyChoose Us section */}
        <div className="flex justify-between items-center">
          {/* left section */}
          <div className="md:w-[55%]">
            {/* title & description */}
            <div>
              <div className="flex items-center gap-4 h-20">
                <span className="whyUs_title"></span>
                <h3 className="text-[#86371C] text-[16px] tracking-wide italic font-lemonada">
                  Why Choose Us
                </h3>
              </div>
              <h1 className="md:text-[44px] font-Bakilda leading-[60px]">
                Choosing Unlocklive, A Taste of Perfection
              </h1>
              <p className="w-full md:w-[80%] font-ValueSans text-[16px] tracking-wide opacity-70 font-medium">
                Unlocklive takes pride in the art of roasting, transforming raw
                coffee beans into a symphony of aromatic notes and rich flavors.
              </p>
            </div>

            {/* boxes */}
            <div className="flex justify-between  py-10">
              {/* 1st box */}
              <div className="w-[250px] p-10 text-center rounded-lg  border-[#270A05] border-[1.5px] border-opacity-10">
                <div className="flex justify-center items-center font-Bakilda text-[44px] capitalize font-bold">
                  <span> 20</span> <span className="text-[20px] ">+</span>
                </div>
                <p className="text-[20px] capitalize font-medium">
                  Years Experience
                </p>
              </div>
              {/* 2nd box */}
              <div className="w-[250px] p-10 text-center rounded-lg  border-[#270A05] border-[1.5px] border-opacity-10">
                <div className="flex justify-center items-center font-Bakilda text-[44px] capitalize font-bold">
                  <span> 100</span> <span className="text-[20px] ">+</span>
                </div>
                <p className="text-[20px] capitalize font-medium">
                  Master Chefs
                </p>
              </div>
              {/* 3rd box */}
              <div className="w-[250px] p-10 text-center rounded-lg  border-[#270A05] border-[1.5px] border-opacity-10">
                <div className="flex justify-center items-center font-Bakilda text-[44px] capitalize font-bold">
                  <span> 30</span> <span className="text-[20px] ">+</span>
                </div>
                <p className="text-[20px] capitalize font-medium">
                  Achievements
                </p>
              </div>
            </div>

            {/* description */}
            <div className="w-[80%]">
              <p className="text-[16px] font-ValueSans opacity-70">
                Your choice to savor our coffee is an invitation to experience
                the epitome of craftsmanship, flavor, and dedication.
              </p>
            </div>
            {/* button */}
            <div className="my-5 ">
              <button
                className="text-[#86371C] text-[16px] font-ValueSans
               border-[2px] border-[#86371C] rounded-[12px] px-5 py-2 font-semibold"
              >
                Explore Our Menus
              </button>
            </div>
          </div>

          {/* right section */}
          <div className="md:w-[50%] flex justify-center pt-14">
            <Image
              className="ml-4"
              src={"/images/whyUs (2).png"}
              width={450}
              height={500}
              alt="whyUs Picture"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
