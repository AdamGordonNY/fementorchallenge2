import React from "react";
import Image from "next/image";
const Bottom = () => {
  return (
    <div className="flex gap-x-3 pb-5 ">
      <Image
        src="/assets/images/image-avatar.webp"
        alt="avatar"
        className="rounded-full"
        width={32}
        height={32}
      ></Image>
      <p className="font-bold text-black text-md">Greg Hooper</p>{" "}
    </div>
  );
};

export default Bottom;
