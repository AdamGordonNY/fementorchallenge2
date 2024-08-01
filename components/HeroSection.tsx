import React from "react";
import Tab from "./Tab";
import Bottom from "./Bottom";

const HeroSection = () => {
  return (
    <div className="mt-4 gap-y-2 flex flex-col text-black">
      {" "}
      <Tab />
      <p className="text-[24px] tezt-black font-bold z-10">
        HTML & CSS foundations
        <p className="text-[16px] font-normal text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </p>
      <Bottom />
    </div>
  );
};

export default HeroSection;
