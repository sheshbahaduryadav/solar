import React from "react";
import { Link } from "react-router-dom";
import first from "../../assets/total-viewed-icons/brands listed.png";
import two from "../../assets/total-viewed-icons/product viewed.png";
import three from "../../assets/total-viewed-icons/pincode reached.png";
import four from "../../assets/total-viewed-icons/brands listed.png";
import five from "../../assets/total-viewed-icons/product viewed.png";
import six from "../../assets/total-viewed-icons/pincode reached.png";

export const TotalViewed = () => {
  const data = [
    {
      image: first,
      heading: "1,08,715 +",
      title: "Tones of CO2 Removed",
    },
    {
      image: two,
      heading: "537.63 Lakhs",
      title: "Total Products Viewed",
    },
    {
      image: three,
      heading: "11,942+",
      title: "Pin Codes Reached",
    },
    {
      image: four,
      heading: "11,942+",
      title: "Pin Codes Reached",
    },
    {
      image: five,
      heading: "537.63 Lakhs",
      title: "Total Products Viewed",
    },
    {
      image: six,
      heading: "1,08,715 +",
      title: "Tones of CO2 Removed",
    },
  ];
  return (
    <div className="container my-20 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap ">
        {/* <!-- Column --> */}
        {data !== undefined
          ? data.map((val, index) => {
              return (
                <div className="my-1 px-1 w-full md:w-full flex justify-center lg:my-4 lg:px-4 lg:w-1/3">
                  <div className="w-full flex gap-8 justify-center items-center p-2 border-2 rounded border-[#232F3E] ">
                    <div>
                      <img src={val.image} className="h-20 w-20" alt="" />
                    </div>
                    <div className="flex justify-center">
                      <div className="text-center">
                        <h3 className="font-bold">{val.heading}</h3>
                        <p className="font-bold">{val.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
