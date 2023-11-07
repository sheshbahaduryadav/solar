import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../../assets/categories/solar appliances icons.png";
import prod2 from "../../assets/categories/solar battery icon.png";
import prod3 from "../../assets/categories/solar components icon.png";
import prod4 from "../../assets/categories/solar light icon.png";
import prod5 from "../../assets/categories/Solar panel icon.png";

export const CategoriesProduct = () => {
  const data = [
    {
      image: prod1,
      heading: "Solar Appliances",
    },
    {
      image: prod2,
      heading: "Solar Battery",
    },
    {
      image: prod3,
      heading: "Solar Components",
    },
    {
      image: prod4,
      heading: "Solar Light",
    },
    {
      image: prod5,
      heading: "Solar Panels",
    },
  ];
  return (
    <div className="container my-20 mx-auto px-4 md:px-12">
      <div>
        <h3>Popular Categories</h3>
      </div>
      <div className="flex flex-wrap ">
        {/* <!-- Column --> */}
        {data !== undefined
          ? data.map((val, index) => {
              return (
                <div className="my-1 px-1 w-full md:w-1/2 flex justify-center lg:my-4 lg:px-4 lg:w-1/5">
                  {/* <!-- Article --> */}
                  <div>
                    <article className="overflow-hidden h-44 w-44 rounded-full shadow-2xl">
                      <Link to="">
                        <img
                          alt="Placeholder"
                          className="block h-44 w-44"
                          src={val.image}
                        />
                      </Link>
                    </article>
                    <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <Link
                          to=""
                          className="no-underline hover:underline text-black"
                        >
                          {val.heading}
                        </Link>
                      </h1>
                    </header>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
