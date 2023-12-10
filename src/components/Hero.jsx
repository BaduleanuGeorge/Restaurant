import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full h-[70vh] bg-[url(../src/assets/HeroBGSmall.jpg)] md:bg-[url(../src/assets/HeroBG.jpg)] bg-top bg-cover">
      <div className="w-full h-full bg-black/60">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-4 text-white ">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              London Flavorscapes
            </h1>
            <h3 className="pt-2 max-w-[700px] text-lg md:text-xl text-justify text-gray-300">
              Embark on a gastronomic journey that harmonizes flavors, culture,
              and passion. Discover the symphony of tastes, textures, and aromas
              as we invite you to savor each moment and celebrate the art of
              dining with us.
            </h3>
          </div>
          <div className="flex gap-3 pt-8">
            <Link to="/reservation">
              <button className="flex justify-center items-center gap-2 w-[150px] h-[50px] bg-[#d62828] rounded-lg hover:bg-[#ff2121] duration-300">
                Reserve Table <BsArrowRight size={20} />
              </button>
            </Link>
            <Link to="/menu">
              <button className="flex justify-center items-center gap-2 w-[150px] h-[50px] border-[3px] border-[#d62828] rounded-lg hover:bg-[#d62828] duration-300">
                Full Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
