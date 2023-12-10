import React from "react";
import Hero from "../components/Hero";
import AboutImage from "../assets/AboutImage.jpg";
import ItalianFood from "../assets/ItalianFood.jpg";
import AsianFood from "../assets/AsianFood.jpg";
import Seafood from "../assets/Seafood.jpg";
import Dessert from "../assets/Dessert.jpg";
import TestimonialsComponent from "../components/TestimonialsComponent";
import { Link } from "react-router-dom";
import CTAComponent from "../components/CTAComponent";

function Home() {
  return (
    <div>
      <Hero />

      {/*THE ABOUT SECTION*/}
      <div className="w-full h-auto py-20">
        <div className="max-w-6xl mx-auto h-auto px-4 flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={AboutImage}
              alt="about us image"
              className="rounded-md md:w-[500px]"
            />
          </div>

          <div className="w-full flex flex-col items-start justify-evenly pt-4 md:pt-0">
            <h2 className="font-custom text-3xl lg:text-4xl border-b-2 border-[#d62828]">
              About London Flavorscapes
            </h2>
            <p className="p-preset pt-2 text-justify">
              We're on a mission to redefine the dining experience. With a
              passion for culinary excellence and a commitment to celebrating
              diverse flavors, our chefs craft masterpieces that tantalize your
              taste buds. We invite you to savor the artistry in every dish and
              join us on a journey where food is more than sustenance.
            </p>
            <Link to="/about">
              <button
                className="text-white flex justify-center items-center gap-2 w-[150px] h-[50px] bg-[#c1121f] 
            rounded-lg hover:bg-[#ff0011] duration-300 mt-4"
              >
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*THE MENU SECTION*/}
      <div className="w-full h-auto py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto h-auto px-4 flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full flex flex-col items-start justify-evenly pt-4 md:pt-0">
            <h2 className="font-custom text-3xl lg:text-4xl border-b-2 border-[#d62828]">
              Explore our culinary selection
            </h2>
            <p className="p-preset pt-2 text-justify">
              We take pride in offering a diverse and exquisite culinary
              selection that caters to every taste bud, from enticing appetizers
              that tease your palate, to sumptuous main courses that satisfy
              your hunger, and a delightful array of desserts that provide the
              perfect sweet finish to your meal.
            </p>
            <Link to="/menu">
              <button
                className="text-white flex justify-center items-center gap-2 w-[150px] h-[50px] bg-[#c1121f] 
            rounded-lg hover:bg-[#ff0011] duration-300 mt-4"
              >
                See The Menu
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 w-full h-full gap-4 ">
            <img src={ItalianFood} className="rounded-md" />
            <img src={AsianFood} className="rounded-md" />
            <img src={Seafood} className="rounded-md" />
            <img src={Dessert} className="rounded-md" />
          </div>
        </div>
      </div>

      {/*THE TESTIMONIALS SECTION*/}
      <div className="w-full h-auto py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center">
          <h2 className="font-custom text-3xl lg:text-4xl border-b-2 border-[#d62828] w-fit">
            Our satisfied customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 pt-10">
            <TestimonialsComponent
              title="An amazing experience!"
              name="John Doe"
              description="An unforgettable dining experience! The flavors were simply amazing. Every bite tells a story of culinary mastery. The staff's attention to detail and warm hospitality make each visit truly special."
            />
            <TestimonialsComponent
              title="Delicious dishes"
              name="Lisa Green"
              description="I keep coming back for the exceptional service and delightful dishes. It's my go-to place for a memorable evening. The extensive wine list perfectly complements the menu."
            />
            <TestimonialsComponent
              title="The best place for seafood"
              name="David Michael"
              description="The seafood paella is a masterpiece. A burst of flavors in every bite. Highly recommend the restaurant for seafood lovers!"
            />
          </div>
        </div>
      </div>

      <CTAComponent />
    </div>
  );
}

export default Home;
