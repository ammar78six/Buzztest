const ImageSection = ({ heading, title, des, imgPosition = "left", image }) => {
  const isImageLeft = imgPosition === "left";

  return (
    <div
      className={`flex flex-col md:grid md:grid-cols-12 md:gap-5 items-center`}
    >
      {/* Image Section */}
      <div
        className={`w-full mb-6 md:mb-0 md:col-span-3 flex justify-center ${
          isImageLeft ? "" : "md:col-start-9"
        }`}
      >
        <img
          src={image}
          alt={heading}
          width="800"
          height="800"
          srcSet={`${image.replace(".png", ".w400.q50.png")} 400w, ${image} 800w`}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full max-w-[400px] md:max-w-full h-80 md:h-96 object-contain rounded-t-[65px] rounded-b-[65px]"
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-full md:col-span-5 flex flex-col justify-center space-y-5 ${
          isImageLeft ? "md:col-start-8" : ""
        }`}
      >
        <h1 className="heading">{heading}</h1>
        <h2 className="text-primary-text-color font-medium text-lg">{title}</h2>
        <p className="text-secondary-text-color">{des}</p>
      </div>
    </div>
  );
};

export default ImageSection;
