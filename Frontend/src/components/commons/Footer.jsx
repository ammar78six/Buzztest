import { Link } from "react-router-dom"; // Use react-router-dom for Link

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const links = [
    {
      name: "FAQs",
      url: "#",
    },
    {
      name: "Blog", // Added Blog from screenshot
      url: "#",
    },
    {
      name: "About Us",
      url: "#",
    },
    {
      name: "Our Team", // Added Our Team from screenshot
      url: "#",
    },
    {
      name: "Contact Us",
      url: "#",
    },
    {
      name: "Terms of Service", // Changed from "Terms of Services" to match screenshot
      url: "#",
    },
    {
      name: "Privacy Policy",
      url: "#",
    },
  ];
  const instagramServices = [ // Renamed to clearly differentiate
    {
      name: "Buy Instagram Likes",
      url: "#",
    },
    {
      name: "Buy Instagram Comments",
      url: "#",
    },
    {
      name: "Buy Instagram Followers",
      url: "#",
    },
    {
      name: "Buy Instagram Views",
      url: "#",
    },
    {
      name: "Automatic Instagram Likes", // Added from screenshot
      url: "#",
    },
  ];
  const tiktokServices = [ // Renamed to clearly differentiate
    {
      name: "Buy Tiktok Likes",
      url: "/tiktok-likes",
    },
    {
      name: "Buy Tiktok Followers",
      url: "/tiktok-followers",
    },
    {
      name: "Buy Tiktok Views",
      url: "/tiktok-views",
    },
  ];

  return (
    <div className="footer-container bg-white py-10 md:py-20 border-t border-gray-200"> {/* Added some default styling here if `footer-container` doesn't provide it */}
      <div className="custom-container">
        {/* Main Footer Grid for Desktop, stacked for Mobile */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-16"> {/* Changed to grid for desktop layout */}

          {/* Column 1: Links (FAQ, About Us, etc.) */}
          <div className="space-y-4 md:col-span-1"> {/* md:col-span-1 to occupy one grid column */}
            <h4 className="font-semibold text-lg text-gray-800 md:mb-4">Company Info</h4> {/* Added a section heading */}
            {links.map((link, index) => (
              <Link to={link.url} key={index} className="block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium"> {/* block makes each link take full width and stack */}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Column 2: Instagram Services */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-semibold text-lg text-gray-800 md:mb-4">Instagram Services</h4> {/* Section heading */}
            {instagramServices.map((service, index) => (
              <Link to={service.url} key={index} className="block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
                {service.name}
              </Link>
            ))}
          </div>

          {/* Column 3: TikTok Services */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-semibold text-lg text-gray-800 md:mb-4">TikTok Services</h4> {/* Section heading */}
            {tiktokServices.map((service, index) => (
              <Link to={service.url} key={index} className="block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
                {service.name}
              </Link>
            ))}
          </div>

          {/* Column 4 (Optional): Payment Methods or Other Info */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-semibold text-lg text-gray-800 md:mb-4">Payment Methods</h4>
            <p className="text-sm text-gray-600 font-medium">
              List of payment methods supported
            </p>
            {/* You can add payment icons here if you have them */}
          </div>
        </div>

        {/* Copyright Section (Always full width at the bottom) */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-500 font-medium mb-2 md:mb-0">
            Copyright © {year} Company name All rights reserved.
          </p>
          {/* Moved "List of payment methods supported" into its own column above, if you want it there.
              Otherwise, it can stay here if you prefer. */}
        </div>
      </div>
    </div>
  );
}

export default Footer;