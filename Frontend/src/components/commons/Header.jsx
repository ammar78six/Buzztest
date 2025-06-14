import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // For hamburger and close icons
import { TiStarFullOutline } from "react-icons/ti"; // For filled stars

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // These links will only be displayed in the mobile menu and desktop navigation
  const links = [
    {
      name: "Buy instagram likes",
      url: "/insta-likes",
    },
    {
      name: "Buy instagram followers",
      url: "/insta-followers",
    },
    {
      name: "Buy instagram comments",
      url: "/insta-comments",
    },
    {
      name: "Buy instagram views",
      url: "/insta-views",
    },
    {
      name: "FAQs",
      url: "#",
    },
    {
      name: "Contact Us",
      url: "#",
    },
  ];

  return (
    <div className="header-container bg-white shadow-sm py-4">
      <div className="custom-container flex justify-between items-center">
        {/* Logo and Rating Section - Visible on both mobile and desktop */}
        <div className="flex items-center gap-4">
          <Link to="/" className="header-logo text-2xl font-bold text-gray-800">
            buzzoid {/* Matches text in screenshot */}
          </Link>

          {/* Star Rating - Visible on both mobile and desktop as per screenshot */}
          <div className="flex items-center text-xs w-fit rounded-full">
            <span className="font-semibold px-1 py-1 flex gap-0.5 items-center">
              5.0
              {/* Render 5 green stars matching screenshot */}
              <TiStarFullOutline className="text-green-500 text-lg" />
              <TiStarFullOutline className="text-green-500 text-lg" />
              <TiStarFullOutline className="text-green-500 text-lg" />
              <TiStarFullOutline className="text-green-500 text-lg" />
              <TiStarFullOutline className="text-green-500 text-lg" />
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <Link
              to={link.url}
              key={index}
              className="header-link text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          {/* Login and Signup buttons for desktop */}
          <Link to="#" className="sign-up-button px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Login
          </Link>
          <Link to="#" className="sign-up-button px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) - Hidden on desktop, visible on mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-8 w-8" /> // Close icon when menu is open
            ) : (
              <HiMenu className="h-8 w-8" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Only visible when open on mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center pt-20 space-y-6 shadow-lg">
          {links.map((link, index) => (
            <Link
              to={link.url}
              key={index}
              className="text-xl text-gray-800 hover:text-orange-500 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          {/* Login and Signup buttons inside the mobile menu */}
          <Link
            to="#"
            className="sign-up-button px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg w-3/4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="#"
            className="sign-up-button px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold text-lg w-3/4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;