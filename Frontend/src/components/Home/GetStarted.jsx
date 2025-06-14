import { TiChevronRight } from "react-icons/ti";

const GetStarted = () => {
  const services = [
    {
      name: "Buy Instagram Likes",
      url: "#",
      image: "/images/1.svg",
    },
    {
      name: "Buy Instagram Followers",
      url: "#",
      image: "/images/2.svg",
    },
    {
      name: "Buy Instagram Comments",
      url: "#",
      image: "/images/1.svg",
    },
    {
      name: "Buy Instagram Views",
      url: "#",
      image: "/images/3.svg",
    },
  ];

  const services2 = [
    {
      name: "Buy Tiktok Likes",
      url: "#",
      image: "/images/1.svg",
    },
    {
      name: "Buy Tiktok Views",
      url: "#",
      image: "/images/3.svg",
    },
    {
      name: "Buy Tiktok Followers",
      url: "#",
      image: "/images/1.svg",
    },
    
  ];

  return (
    <div className="custom-container space-y-20 py-20">
      <div className="grid grid-cols-12">
        <div className="col-span-5 center">
          <div className="space-y-5">
            <h1 className="heading text-gradient">Get Started Now</h1>
            <h2 className="text-primary-text-color font-medium text-lg">
              And importantly, Buzzoid’s real followers, likes, views, and
              comments are available at very reasonable prices that are never
              higher than those charged by other reputable providers.
            </h2>
            <p className="text-secondary-text-color">
              Honest, trustworthy, responsible, and powerful TikTok and
              Instagram growth is what we’ve specialized in for more than a
              dozen years. We invite you to join our family of satisfied
              customers today!
            </p>
          </div>
        </div>

        <div className="col-start-9 col-span-4 space-y-4">
          {services.map((service, index) => (
            <p
              key={index}
              className="flex items-center justify-between uppercase w-full bg-gradient-to-r from-[#ff7236] to-[#e261c5] text-white font-semibold px-4 py-2.5 shadow-amber-500 shadow border border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-none hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-6 h-6"
                />
                <span>{service.name}</span>
              </div>
              <span className="bg-white w-5 h-5 flex items-center justify-center rounded-full">
                <TiChevronRight className="text-[#ff45aa]" />
              </span>
            </p>
          ))}

          {services2.map((service, index) => (
            <p
              key={index}
              className="flex items-center justify-between uppercase w-full bg-gradient-to-r from-[#4dbbeb] via-[#c387ff] to-[#ff45aa] text-white font-semibold px-4 py-2.5 shadow-amber-500 shadow border border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-none hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-6 h-6"
                />
                <span>{service.name}</span>
              </div>
              <span className="bg-white w-5 h-5 flex items-center justify-center rounded-full">
                <TiChevronRight className="text-[#ff45aa]" />
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
