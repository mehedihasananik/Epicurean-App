import Container from "@/components/Utils/Container/Container";
import Image from "next/image";
import React from "react";

const OverView = () => {
  return (
    <div className="bg-[#FFFAF2] mb-20">
      <Container>
        <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between gap-0 xl:gap-5 ">
          <div className="w-[60%] md:w-[40%] xl:relative xl:w-[20%] ">
            <Image
              className="w-full xl:w-[100%] 4xl:w-[80%] xl:absolute "
              width={200}
              height={200}
              src={"/images/Overview Section.png"}
              alt="over view"
            />
          </div>

          <div className="xl:w-[80%] flex flex-col gap-5 xl:flex-row xl:gap-0 xl:justify-between xl:items-start pt-10 pb-9 text-center xl:text-start ">
            <div>
              <h3 className="text-[24px] font-Abril font-semibold pb-2">
                Our Opening Hours
              </h3>
              <p className="font-ValueSans text-[16px]">
                Mon - Sat: 07:00 - 18:00{" "}
              </p>
              <p className="font-ValueSans text-[16px]">
                Only Sun: 09:00 - 14:00
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-Abril font-semibold pb-2">
                Our Live Location
              </h3>
              <p className="font-ValueSans text-[16px]">
                848 A 28TH ST, Brooklyn New York, UK{" "}
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-Abril font-semibold pb-2">
                Book A Table Now
              </h3>
              <p className="font-ValueSans text-[16px]">+1 318-254-6849</p>
              <p className="font-ValueSans text-[16px]">+1 452-754-6579</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OverView;
