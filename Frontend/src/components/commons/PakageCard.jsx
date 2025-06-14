
const PackageCard = ({ label, discount, highlight, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        "relative w-full border rounded-xl text-center py-4 cursor-pointer transition-all" ${selected ? "border-pink-500 shadow-md" : "border-gray-200 hover:border-pink-400"}`}
    >
      {highlight && (
        <span className={`
          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-0.5 rounded-full text-white",
          ${highlight === "BEST SELLING" ? "bg-green-500" : "bg-black"}
        `}>
          {highlight}
        </span>
      )}
      <p className="text-lg font-semibold">{label}</p>
      {discount && <p className="text-xs text-orange-500 mt-1">{discount}</p>}
    </div>
  );
};

export default PackageCard