import { TiChevronRight } from "react-icons/ti";

const Guarante = () => {
      const services = [
    {
      name: "Buy TikTok Likes",
      url: "#",
    },
    {
      name: "Buy TikTok Followers",
      url: "#",
    },
  ];

  let data = [
    {
      title: "6-month views retention guarantee",
      des: "When you purchase real views from Buzzoid, they don’t disappear after a few days or even a few months. That’s one of the major reasons to buy our genuine interactions from real people. However, views can occasionally drop if a user leaves TikTok, or gives their account to a family member. We protect against that possibility by continually monitoring all customer accounts, and immediately replacing any dropped views for six months after your purchase.",
    },
    {
      title: "30-day money-back guarantee",

      des: "No ifs, ands, or buts. If you’re unhappy with our delivery speed, service, views, or support, just let us know. We’ll quickly issue a full refund.",
    },
  ];
  return (
    <div className="bg-gradient-blue">
      <div className="custom-container py-20">
        <h6 className="heading font-semibold text-center">
          Buzzoid’s Guarantees and Refund Policy
        </h6>
        <div className="rounded-4xl shadow-md mt-20 bg-gradient-to-b from-[#CEEDFF] to-[#F1FAFF] w-8/12 mx-auto py-10 pr-10 flex items-center gap-20">
          <div className="bg-black w-full h-60 rounded-t-[65px] rounded-b-[65px]" />
          <div className="space-y-10">
            <p>
              It’s easy for a company to promise safety, service, and results,
              but that doesn’t mean the company will deliver. Buzzoid backs up
              our promises with the most full-featured guarantees you’ll get
              from any TikTok service provider.
            </p>
            <p className="text-gradient">
              These guarantees apply to all of our clients, of course, but we
              hope they’ll reassure first-time customers who are skittish about
              risking their money and Instagram accounts to buy Buzzoid’s TikTok
              video views, likes, or followers. In short, there’s no risk
              whatsoever when buying from Buzzoid
            </p>
          </div>
        </div>

        <div
          className={`align-center items-stretch gap-5 w-8/12 mx-auto my-20`}
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-5 py-10 space-y-5 rounded-3xl shadow-md transition-all duration-300 ease-in-out hover:shadow-none bg-white border border-gray-200 cursor-pointer bg-red-400 ${
                  origin === "tiktokviews" ? "w-1/3 mx-auto" : "flex-1"
                }`}
              >
                <div className="w-16 h-16 bg-black mx-auto rounded-2xl" />
                <h6 className="text-center font-semibold text-primary-text-color">
                  {item.title}
                </h6>
                <p className="text-center text-secondary-text-color text-[0.95rem]">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
        <p className="w-8/12 mx-auto text-center">
          This isn’t a “guarantee,” but it’s just as good. Our experienced
          customer support team is available{" "}
          <span className="text-gradient">24 hours a day</span> to handle any
          rare issues you may experience and solve them quickly. They’re also
          happy to answer questions about Buzzoid’s service or craft a custom
          order just for you.
        </p>

        <div className="grid grid-cols-12 w-10/12 mx-auto py-20 space-y-10">
                <div className="col-span-12 center">
                  <div className="space-y-5 center flex-col">
                    <h1 className="heading text-gradient">More Growth Services from Buzzoid</h1>
                    <p className="text-secondary-text-color font-medium w-9/12 text-center">
                      Honest, trustworthy, responsible, and powerful TikTok and
                      Instagram growth is what we’ve specialized in for more than a
                      dozen years. We invite you to join our family of satisfied
                      customers today!
                    </p>
                  </div>
                </div>
                <div className="col-start-4 col-span-6 space-y-4">
                  {services.map((service, index) => (
                    <p
                      key={index}
                      className="uppercase w-full bg-gradient-to-r from-[#ff7236] to-[#e261c5] text-white text-center font-semibold px-4 py-2.5 shadow-amber-500 shadow border border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-none hover:scale-105 align-center justify-between"
                    >
                      <div />
                      {service.name}
                      <span className="mr-4 bg-white w-4 h-4 center rounded-full flex-none">
                        <TiChevronRight className="text-[#ff45aa]" />
                      </span>
                    </p>
                  ))}
                </div>
              </div>

      </div>
    </div>
  );
};

export default Guarante;
