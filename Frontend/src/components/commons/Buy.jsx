import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { TiStarFullOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import AnimationContainer from "./NumberCounter";

export default function Buy({
  title,
  description, // This prop will no longer be rendered anywhere
  features,
  cta,
  bg,
  cardsFirst,
  card1Title,
  card1Content,
  card1Image,
  card2Title,
  card2Content,
  card2Image,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 800);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Outer container for the entire Buy section. This gets the background color and main vertical padding.
    <div className={`${bg} my-20 py-10 rounded-4xl overflow-hidden`}>
      {/* Container that applies `custom-container` for content width and centering */}
      <div className="custom-container">
        {/* Desktop Layout: Hidden on screens smaller than md, visible on md and up. */}
        {/* Uses flex to create three columns on desktop. */}
        <div className="hidden md:flex justify-between items-start gap-8"> {/* Adjusted gap and items-start */}

          {/* Left Column (Card 1) */}
          <div className="w-full md:w-1/3 flex-shrink-0"> {/* Explicitly w-1/3 */}
            <InfoCard title={card1Title} content={card1Content} image={card1Image} />
          </div>

          {/* Middle Column (Card 2) */}
          <div className="w-full md:w-1/3 flex-shrink-0"> {/* Explicitly w-1/3 */}
            <InfoCard title={card2Title} content={card2Content} image={card2Image} />
          </div>

          {/* Right Column (Features & CTA) */}
          <div className="w-full md:w-1/3 flex-shrink-0 pl-8"> {/* Explicitly w-1/3, added left padding as per image */}
            <div className="flex items-center text-xs w-fit rounded-full mt-4 mb-8">
              <span className="font-semibold bg-white px-2 py-1 rounded-l-full flex gap-0.5">
                <TiStarFullOutline
                  className={`text-[#38c793] ${animate ? "spin" : ""}`}
                />
                5.0
              </span>
              <span className="bg-black/10 text-gray-700 font-semibold rounded-r-full px-2 py-1">
                <AnimationContainer value={1045} />
              </span>
            </div>
            <h3 className="text-4xl font-semibold text-primary-text-color my-4">
              {title}
            </h3>
            {/* REMOVED: {description && (
              <p className="text-lg text-[#484f5e] font-medium my-4">
                {description}
              </p>
            )} */}
            <ul className="grid gap-4 my-10">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-4 bg-white w-6 h-6 center rounded-full shadow-md flex-none">
                    <TiTick className="text-orange-400 text-xl" />
                  </span>
                  <span className="text-[#484f5e] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 hero-tiles text-white rounded-lg font-semibold transition-colors uppercase">
              {cta}
            </button>
          </div>
        </div>

        {/* Mobile Layout: Hidden on md and up, visible on screens smaller than md. */}
        {/* This will remain a single column. */}
        <div className="md:hidden py-2">
          <div className="space-y-8">
            {/* Main Title for Mobile */}
            <h2 className="heading text-center text-4xl font-bold text-gray-800">
              {title}
            </h2>
            {/* REMOVED: {description && (
              <p className="text-lg text-[#484f5e] font-medium text-center px-4">
                {description}
              </p>
            )} */}

            {/* Features Section for Mobile */}
            <div className="w-full max-w-2xl mx-auto px-4">
              <ul className="list-none space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-lg text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main CTA Button for Mobile */}
            <div className="flex justify-center mt-8 px-4">
                <button className="px-10 py-4 w-full text-xl font-semibold rounded-lg text-white
                                   bg-gradient-to-r from-orange-500 to-red-500
                                   hover:from-orange-600 hover:to-red-600 transition duration-300 shadow-lg uppercase">
                    {cta}
                </button>
            </div>

            {/* Info Cards Section for Mobile */}
            <div className="flex flex-col justify-center items-center gap-8 pt-8">
              <InfoCard title={card1Title} content={card1Content} image={card1Image} />
              <InfoCard title={card2Title} content={card2Content} image={card2Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}