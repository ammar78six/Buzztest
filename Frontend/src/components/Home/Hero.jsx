import React from "react";

const Hero = () => {
  const titles = [
    "Buy Instagram likes",
    "Buy Instagram followers",
    "Buy Instagram comments",
    "Buy Instagram views",
  ];

  return (
    <div className="primary-gradient">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-10 min-h-screen px-4 pt-24 pb-8">
        {/* Heading */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight text-primary-text-color">
          Buy Instagram likes, followers, comments and other Interactions{" "}
          <span className="text-gradient">Delivered in Minutes</span>
        </p>

        {/* Subheading */}
        <p className="text-secondary-text-color font-medium text-center text-base sm:text-lg max-w-2xl">
          Count on Company name #1 ranked growth service to help you build a
          robust social media presence!
        </p>

        {/* Service Tiles */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {titles.map((title, index) => (
            <div
              key={index}
              className="hero-tiles uppercase text-center py-3 px-4 border border-white/30 rounded shadow"
            >
              {title}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 items-center justify-between mt-6">
          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="bg-[#00d084] px-1 rounded">
                <i className="fa-solid fa-star text-white text-sm"></i>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-300" />

          {/* Delivery Info Box */}
          <div className="flex flex-col sm:flex-row items-center bg-[#00d084]/10 gap-2 px-4 py-3 rounded-2xl text-sm w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="bg-[#00d084] w-2.5 h-2.5 animate-ping rounded-full absolute" />
                <div className="bg-[#00d084] w-2.5 h-2.5 rounded-full z-10" />
              </div>
              <p className="text-[#065f46]">
                <span className="font-medium">100 followers</span> delivered
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white flex items-center justify-center w-6 h-6 rounded-full">
                <i className="fa-solid fa-check text-[#00d084]"></i>
              </div>
              <p className="text-[#065f46]">43 minutes ago</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-300" />

          {/* Apple Pay Button */}
          <div className="text-primary-text-color border border-gray-300 px-4 py-2 rounded-lg text-xl flex items-center gap-2">
            <i className="fa-brands fa-apple"></i>
            <p>Pay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;