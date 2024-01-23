import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-[#111827] text-white lg:pt-32 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="footer-col">
            <div>
              <Link href="/">
                <span className="sr-only">Your Company</span>
                {/* <img
                                    className="h-14 w-14"
                                    src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                                    alt=""
                                /> */}
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  House Hunter
                </h2>
              </Link>
            </div>
            <p className="text-sm mt-8">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="mt-8">
              <ul className="flex space-x-4 text-[#9CA3AF]">
                <li>
                  <Facebook />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <GitHub />
                </li>
                <li>
                  <YouTube />
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <div>
              <h3 className="font-semibold">Solutions</h3>
              <ul role="list" className="mt-6">
                <li className="mb-4">
                  <a href="#" className="">
                    Marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="">
                    Analytics
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="">
                    Commerce
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="font-semibold">Support</h3>
            <ul role="list" className="mt-6">
              <li className="mb-4">
                <a href="#" className="">
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  Documentation
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  Guides
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  API Status
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="font-semibold">Company</h3>
            <ul role="list" className="mt-6">
              <li className="mb-4">
                <a href="#" className="">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  Jobs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  Press
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
