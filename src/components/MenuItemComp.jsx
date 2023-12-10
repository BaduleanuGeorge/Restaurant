import React from "react";

function MenuItemComp(props) {
  return (
    <div className="max-w-[600px] lg:max-w-[600px] flex justify-between items-center pt-4 border-b-[1px] border-red-950 gap-8 text-white">
      <div className="flex flex-col">
        <h3 className="text-md md:text-lg">{props.title}</h3>
        <p className="text-gray-400 text-sm">{props.description}</p>
      </div>
      <h3 className="text-md md:text-lg">{props.price}</h3>
    </div>
  );
}

export default MenuItemComp;
