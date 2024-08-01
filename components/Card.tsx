import React from "react";
import Tab from "@/components/Tab";
import Image from "next/image";
import HeroSection from "./HeroSection";
import Bottom from "./Bottom";
const Card = () => {
  return (
    <div className="w-[405px] bg-white border-[1px] border-black h-[525px] rounded-lg  ">
      {/* <div className="absolute inset-0 bg-black rounded-lg  "></div> */}
      <div className="flex flex-col w-full gap-y-3 px-5 py-7">
        <div className="flex w-full justify-center flex-1">
          <Image
            src={`/assets/images/illustration-article.svg`}
            width={350}
            height={200}
            alt="illustration"
            className="rounded-lg"
          />
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default Card;
