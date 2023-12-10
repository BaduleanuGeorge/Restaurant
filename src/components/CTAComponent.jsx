import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function CTAComponent() {
  return (
    <div>
      {/*THE RESERVATION SECTION*/}
      <div className="w-full h-[500px] bg-[url(../src/assets/ReservationBG.jpg)] bg-bottom bg-cover">
        <div className="w-full h-full bg-black/60 flex flex-col justify-center items-center">
          <h2 className="font-custom text-3xl md:text-5xl text-white">
            Reserve Your Culinary Experience
          </h2>
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-[700px] pt-2 pb-4">
            Secure your seat for an unforgettable dining adventure. Book a table
            with us and savor the finest flavors in the heart of London.
          </p>

          <Link to="/reservation">
            <button className="text-white flex justify-center items-center gap-2 w-[150px] h-[50px] bg-[#d62828] rounded-lg hover:bg-[#ff2121] duration-300">
              Reserve Table <BsArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTAComponent;
