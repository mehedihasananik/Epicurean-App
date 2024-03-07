import Container from "@/components/Utils/Container/Container";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUs">
      <Container>
        {/* whyChoose Us section */}
        <div className="flex justify-between items-center">
          {/* left section */}
          <div className="md:w-[50%]">
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
            <div>
              {/* 1st box */}
              <div>
                <h2>20+</h2>
                <p>Years Experience</p>
              </div>
              {/* 2nd box */}
              <div>
                <h2>100+</h2>
                <p>Master Chefs</p>
              </div>
              {/* 3rd box */}
              <div>
                <h2>30+</h2>
                <p>Achievements</p>
              </div>
            </div>
            {/* description */}
            <div>
              <p>
                Your choice to savor our coffee is an invitation to experience
                the epitome of craftsmanship, flavor, and dedication.
              </p>
            </div>
            {/* button */}
            <div>
              <button>Explore Our Menus</button>
            </div>
          </div>

          {/* right section */}
          <div className="md:w-[50%] flex justify-end">
            <Image
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
