import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";

function Footer() {
  return (
    <div className="w-full py-14 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-3 text-white">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h4 className="text-sm">Email us</h4>
            <div className="flex items-center gap-2 pt-2">
              <AiOutlineMail size={20} />
              <p>info@londonflavorscapes.co.uk</p>
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <h4 className="text-sm">Call us</h4>
            <div className="flex items-center gap-2 pt-2">
              <AiOutlinePhone size={20} />
              <p>(020) 1234-5678</p>
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <h4 className="text-sm">Address</h4>
            <div className="flex items-center gap-2 pt-2">
              <FiMapPin size={20} />
              <p className="max-w-[150px]">
                4 Liverpool Road, London, N1 0IU, UK
              </p>
            </div>
          </div>
          <div className="flex gap-2 pt-4 md:pt-0">
            <div className="hover:bg-white hover:text-black duration-300 cursor-pointer w-[40px] h-[40px] border-2 border-white text-white rounded-full flex items-center justify-center">
              <AiOutlineInstagram size={20} />
            </div>
            <div className="hover:bg-white hover:text-black duration-300 cursor-pointer w-[40px] h-[40px] border-2 border-white text-white rounded-full flex items-center justify-center">
              <AiOutlineTwitter size={20} />
            </div>
            <div className="hover:bg-white hover:text-black duration-300 cursor-pointer w-[40px] h-[40px] border-2 border-white text-white rounded-full flex items-center justify-center">
              <AiOutlineYoutube size={20} />
            </div>
            <div className="hover:bg-white hover:text-black duration-300 cursor-pointer w-[40px] h-[40px] border-2 border-white text-white rounded-full flex items-center justify-center">
              <BiLogoFacebook size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-gray-100 mt-10 pb-4">
        <div className="max-w-7xl mx-auto pt-5 text-white px-3 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-md pb-2">Copyright © 2023 London Flavorscape.</h2>
          <h2>Website Designed By George Baduleanu</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
