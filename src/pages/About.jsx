import React, { useEffect } from "react";
import RestaurantExterior from "../assets/RestaurantExt.jpg";
import TeamImage from "../assets/TeamImage.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import CTAComponent from "../components/CTAComponent";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-auto">
      {/* TOP BANNER */}
      <div className="w-full h-[200px] lg:h-[250px] bg-[url(../src/assets/AboutUsPageBG.jpg)] bg-center bg-cover">
        <div className="w-full h-full bg-black/70 flex justify-center items-center">
          <h1 className="font-custom text-4xl md:text-5xl text-white">
            A bit more about us
          </h1>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full h-auto bg-white py-14">
        <div className="max-w-7xl mx-auto h-auto px-4 flex flex-col justify-between lg:flex-row gap-8">
          <div className="flex justify-center lg:justify-normal order-last lg:order-first">
            <img
              src={RestaurantExterior}
              className="rounded-md lg:max-w-[550px] lg:max-h-[350px]"
            />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="font-custom text-3xl lg:text-4xl">
              About London Flavorscapes
            </h2>
            <h3 className="pt-2 text-xl border-b-2 border-[#d62828] w-fit">
              A decade of refinement
            </h3>
            <p className="text-gray-600 lg:max-w-[550px] pt-2">
              Located in the vibrant heart of London, London Flavorscapes has
              been a beloved culinary destination for over a decade. Established
              ten years ago, our restaurant has stood as a testament to our
              unwavering commitment to serving exceptional cuisine in the heart
              of this iconic city. Nestled in the heart of London, our
              establishment has become a gastronomic hub that harmoniously
              combines tradition and innovation, offering a unique fusion of
              flavors to the discerning palates of both locals and visitors.
              Over the years, we have grown and evolved, continuously striving
              to deliver an extraordinary dining experience that captures the
              spirit of this bustling metropolis while staying true to our
              culinary roots.
            </p>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="w-full h-auto bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto h-auto px-4 flex flex-col justify-between lg:flex-row gap-8">
          <div className="flex justify-center lg:justify-normal order-last">
            <img
              src={TeamImage}
              className="rounded-md lg:max-w-[550px] lg:max-h-[350px] "
            />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="font-custom text-3xl lg:text-4xl">
              Our Passionate Team
            </h2>
            <h3 className="pt-2 text-xl border-b-2 border-[#d62828] w-fit">
              Culinary Excellence from Heart
            </h3>
            <p className="text-gray-600 lg:max-w-[550px] pt-2">
              At London Flavorscapes, our culinary journey is driven by a team
              of passionate individuals who bring a wealth of experience and
              creativity to the kitchen. Committed to delivering a dining
              experience that goes beyond the ordinary, our chefs, servers, and
              support staff are united by a shared love for exceptional food and
              hospitality. With a dedication to culinary innovation and a
              commitment to using only the finest, locally-sourced ingredients,
              our team takes pride in crafting dishes that not only tantalize
              the taste buds but also tell a story of flavors. Each member of
              our staff is not just an employee; they are a vital part of the
              London Flavorscapes family, and their passion for their craft is
              evident in every detail of the dining experience we provide. From
              the kitchen to the dining room, our team's enthusiasm shines
              through, making every meal a celebration of food, community, and
              the joy of shared moments.
            </p>
          </div>
        </div>
      </div>

      <CTAComponent />
    </div>
  );
}

export default About;
