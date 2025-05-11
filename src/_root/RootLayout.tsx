import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Logo } from "../assets/icons";
// import './../tailwind.css';

const RootLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="wrapper z-50">
        <div className="bg-[#fdbe33] py-4">
          <div className="mx-auto md:px-16">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              {/* Logo - kiri pojok */}
              <div className="w-full lg:w-auto flex justify-center items-center lg:justify-start text-[#030f27] lg:mb-0">
                <Logo />
                <div className="ml-3 flex flex-col">
                  <span className="text-xl font-bold">Mechanical</span>
                  <span className="text-sm font-light">Construction</span>
                </div>
              </div>

              {/* Contact Info - kanan pojok */}
              <div className="hidden lg:flex items-center xl:space-x-8">
                {/* Opening Hour */}
                <div className="flex items-center space-x-3 px-4">
                  <FaCalendarAlt className="text-[#030f27] text-3xl" />
                  <div className="leading-tight">
                    <p className="text-[#030f27] text-sm m-0">Opening Hour</p>
                    <p className="text-[#030f27] text-sm m-0">Mon - Fri, 8:00 - 9:00</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-center space-x-3 px-4">
                  <FaPhoneAlt className="text-[#030f27] text-3xl" />
                  <div className="leading-tight">
                    <p className="text-[#030f27] text-sm m-0">Call Us</p>
                    <p className="text-[#030f27] text-sm m-0">+021-557-33371</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-center space-x-3 px-4">
                  <FaEnvelope className="text-[#030f27] text-3xl" />
                  <div className="leading-tight">
                    <p className="text-[#030f27] text-sm m-0">Email Us</p>
                    <p className="text-[#030f27] text-sm m-0">starplusnaver@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Nav Bar Start --> */}
        <div className="nav-bar md:px-16">
          <div className="navbar flex justify-between items-center h-16">
            {/* Mobile - Left: MENU */}
            <div className="flex items-center">
              <a href="#" className="text-xl block md:hidden text-white">
                MENU
              </a>
            </div>

            {/* Desktop - Center: Nav links */}
            <div className="hidden pl-3 md:flex flex-1 justify-start space-x-6 items-center text-white">
              <Link
                to="/"
                className={`transition-colors duration-200 ${location.pathname === "/"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                <div>Home</div>
              </Link>

              <Link
                to="/about"
                className={`${location.pathname === "/about"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                About
              </Link>
              <Link
                to="/service"
                className={`hover:text-yellow-400 ${location.pathname === "/service"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                Service
              </Link>
              <Link
                to="/team"
                className={`hover:text-yellow-400 ${location.pathname === "/team"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                Team
              </Link>
              <Link
                to="/portfolio"
                className={`hover:text-yellow-400 ${location.pathname === "/portfolio"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`hover:text-yellow-400 ${location.pathname === "/blog"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`hover:text-yellow-400 ${location.pathname === "/contact"
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* Right: Button */}
            <div className="hidden md:flex gap-2 items-center">
              <a href="#" className="btn">
                Log in
              </a>
              <a href="#" className="btn">
                Sign up
              </a>
            </div>

            {/* Mobile - Burger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    // X icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
              <Link
                to="/"
                className="block text-white hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white block hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/service"
                className="text-white block hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
              <Link
                to="/team"
                className="text-white block hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/portfolio"
                className="text-white block hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="text-white block hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-white block hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <a
                href="#"
                className="block mt-2 bg-yellow-400 text-black text-center py-2 rounded hover:bg-yellow-500"
              >
                Get A Quote
              </a>
            </div>
          )}
        </div>
        {/* <!-- Nav Bar End --> */}
      </div>

      <div className="wrapper">
        <Outlet />
      </div>

      <div className="wrapper">
        {/* <!-- Footer Start --> */}
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
          <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Office Contact */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Office Contact</h2>
                <p className="flex items-center">
                  <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
                </p>
                <p className="flex items-center">
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
                </p>
                <p className="flex items-center">
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <div className="flex space-x-4">
                  <a href="" className="text-gray-600 hover:text-blue-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="text-gray-600 hover:text-blue-500">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="text-gray-600 hover:text-blue-500">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="" className="text-gray-600 hover:text-blue-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="text-gray-600 hover:text-blue-500">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              {/* Services Areas */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Service Areas</h2>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Building Construction
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  House Renovation
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Architecture Design
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Interior Design
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Painting
                </a>
              </div>

              {/* Useful Pages */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Useful Pages</h2>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  About Us
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Contact Us
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Our Team
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Projects
                </a>
                <a href="" className="block text-gray-700 hover:text-blue-500">
                  Testimonial
                </a>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Newsletter</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
                  facilisis ornare velit non vulpu.
                </p>
                <div className="flex space-x-2">
                  <input
                    className="flex-grow px-4 py-2 border border-gray-300 rounded"
                    placeholder="Email here"
                  />
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-menu">
            <div className="f-menu">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
          <div className="container copyright">
            <div className="row">
              <div className="col-md-6">
                <p>
                  &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
};

export default RootLayout;
