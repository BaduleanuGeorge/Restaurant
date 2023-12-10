import React from "react";

function TestimonialsComponent(props) {
  return (
    <div className="max-w-[350px] h-auto bg-white border-[1px] border-red-950 rounded-sm p-4 shadow-sm shadow-black">
      <h3 className="h3-preset-dark pb-4">{props.title}</h3>
      <p className="max-w-[350px] h-[140px] border-b-[1px] border-red-950 text-red-950 text-[17px]">
        "{props.description}"
      </p>
      <h3 className="text-lg text-red-950 pt-4 flex justify-end">
        {props.name}
      </h3>
    </div>
  );
}

export default TestimonialsComponent;
