import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Removed 'bg' prop from here, assuming cards are always white based on your image
const InfoCard = ({ title, content, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${
        expanded ? "max-h-full" : "max-h-[67vh] overflow-hidden relative" // This max-h might need adjustment based on content length
      } relative space-y-6 text-center rounded-xl shadow-md hover:shadow-sm py-12 px-6 max-w-xs w-full transition-all duration-300 bg-white border border-gray-100`} // Added bg-white and border
    >
      {/* Image slot - replacing the black square */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain mx-auto rounded-2xl mb-4" // Centered and styled image
        />
      ) : (
        // Fallback or placeholder if no image is provided
        <div className="w-24 h-24 bg-gray-200 mx-auto rounded-2xl flex items-center justify-center text-gray-500 mb-4">
          No Image
        </div>
      )}

      <h3 className="font-semibold text-md mb-2">{title}</h3>
      <div className={`text-gray-600 transition-all text-sm duration-300 `}>
        <p>{content}</p>
        {!expanded && (
          // This gradient is crucial for masking the content before expanding
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>
      {/* Button position adjusted slightly to ensure it's always clickable below gradient */}
      <div className="flex justify-center mt-4 absolute bottom-2 left-1/2 -translate-x-1/2">
        <button
          className="text-gray-500 bg-white p-1 rounded-full shadow cursor-pointer"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle More"
        >
          {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </button>
      </div>
    </div>
  );
};

export default InfoCard;