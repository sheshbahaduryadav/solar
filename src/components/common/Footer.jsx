import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    // <!-- Footer container -->
    <footer class="bg-[#416c84] w-[100%] lg:text-center  text-white mt-8 ">
      <div class="flex items-center justify-center border-b-2 border-neutral-200 px-4 py-2 lg:justify-between">
        <div class="mr-12 hidden lg:block">
          <div className="flex items-center gap-2">
            <BsFillSendFill className="text-2xl" />
            <span>
              SIGN UP TO SOLARCLUE AND RECEIVE INR 100 COUPON FOR FIRST SHOPPING
            </span>
          </div>
        </div>
        <div class="rounded-full flex items-center justify-between w-96 bg-white first-letter overflow-hidden">
          <div>
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 text-black text-sm outline-none"
            />
          </div>
          <div className="px-5">
            <Link to="">
              <MdEmail className="text-[#444343] text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div class="mx-6 py-10 text-center w-[100%] md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Tailwind Elements section --> */}
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Tailwind ELEMENTS
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p class="mb-4">
              <a href="#!" class="">
                Angular
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="">
                React
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" class="">
                Laravel
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p class="mb-4">
              <a href="#!" class="">
                Pricing
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="">
                Settings
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" class="">
                Help
              </a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              New York, NY 10012, US
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@example.com
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div class="bg-[#25404e] p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a class="font-semibold" href="https://tailwind-elements.com/">
          Solar
        </a>
      </div>
    </footer>
  );
};
