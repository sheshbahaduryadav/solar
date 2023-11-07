import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header z-50 sticky text-white top-0 bg-[#1D475F] shadow-md flex items-center justify-between px-8 py-02">
      {/* <!-- navigation --> */}
      <nav className="nav font-semibold text-[16px]">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <div className="flex items-center gap-1">
              <FaBars className="text-white text-lg" />
              <select name="" className="border-none bg-[#1D475F]" id="">
                <option value="">All Categories</option>
                {/* <option value="">All Categories</option>
                <option value="">All Categories</option>
                <option value="">All Categories</option> */}
              </select>
            </div>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link to="/solar-water">SOLAR WATER</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">HEAT PUMP</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">SOLAR LIGHT</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">SOLAR POWER SYSTEM</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="/help">HELP</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">PRODUCT SELECTOR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
