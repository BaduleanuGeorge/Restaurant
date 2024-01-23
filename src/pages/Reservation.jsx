import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full h-auto pb-14">
      <div className="w-full h-[200px] lg:h-[250px] bg-[url(../src/assets/ReservationBG.jpg)] bg-center bg-cover">
        <div className="w-full h-full bg-black/70 flex justify-center items-center">
          <h1 className="font-custom text-4xl md:text-5xl text-white">
            Book your experience
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 flex justify-center items-center">
        {/* BOOKING FORM */}
        <form className="pt-10 max-w-[300px] md:max-w-[600px]">
          <div class="flex flex-wrap -mx-3 mb-6">
            {/* NAME */}
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-name"
              >
                Name
              </label>
              <input
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                id="grid-name"
                type="text"
              ></input>
            </div>

            {/* EMAIL */}
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                id="grid-email"
                type="text"
              ></input>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-phone"
              >
                Phone
              </label>
              <input
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                id="grid-phone"
                type="text"
              ></input>
            </div>

            {/* PERSONS */}
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-budget"
              >
                Persons
              </label>
              <input
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                id="grid-budget"
                type="text"
              ></input>
            </div>

            {/* CALENDAR */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="grid-date"
              >
                Reservation Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
