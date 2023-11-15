import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.png";
import {
  MapPin,
  Envelope,
  AppleLogo,
  Copyright,
} from "@phosphor-icons/react/dist/ssr";

function Footer() {
  return (
    <div className="h-60 p-4">
      <div className="w-[40%] m-auto flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <Image src={logo} width={45} alt="logo" />
          <p className=" text-2xl font-semibold text-[#4927D7]">ahead</p>
        </div>

        <div className="w-full flex justify-around items-center text-sm">
          <div className="flex justify-center items-center gap-2">
            <MapPin size={20} color="#0a0a0a" weight="fill" />
            <p>Augustrabe 26, 10117 Berlin</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Envelope size={20} color="#554e4e" weight="fill" />
            <p>hi@ahead-app.com</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center bg-black rounded-md p-0.5 text-white min-w-[120px]">
          <AppleLogo size={28} color="#ffffff" weight="fill" />
          <div>
            <p className="text-[8px]">Download on the</p>
            <p className="text-[14px] -mt-[2px]">App Store</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-xs gap-0.5">
          <Copyright size={16} color="#554e4e" weight="fill" />
          <p className="">
            {new Date().getFullYear()} Ahead app. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
