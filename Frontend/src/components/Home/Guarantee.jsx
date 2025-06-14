const Guarantee = ({ origin }) => {
  let data = [
    {
      title: "Real Social Media Engagement",
      des: "All of our Instagram follows, likes, views, and comments come from the highest-quality active users. Since they’re real interactions, they stick in your account for the long term and always keep your account safe from the penalties or removal that often come with the fake followers, likes, or views sold by other, disreputable vendors.",
    image: "images/sea.svg",
    },
    {
      title: "Commitment to Security",
      des: "We go the extra mile to ensure that all of our customers’ personal and financial data stay safe as well, with secure servers and encrypted transactions guaranteeing that personal information always stays private.",
      image: "images/tick.png",   
    },
    {
      title: "Premium Customer Experience",
      des: "It’s important to us that Buzzoid’s service is as high-quality as our interactions. Our delivery is immediate, customers can choose from a large menu of options and features that match any account size, there is a wide range of payment options, and our around-the-clock customer support team is knowledgeable, helpful, courteous, and always happy to answer questions or solve occasional problems.",
    image: "images/call.png",
    },
  ];
  data = origin === "tiktokviews" ? data.slice(0, 1) : data;
  return (
    <div className="custom-container space-y-20 py-20">
      <div className="space-y-5">
        {origin !== "tiktokviews" && (
          <>
            <p className="heading text-center">Our Guarantees</p>
            <div className="w-full max-w-3xl mx-auto">
              <p className="text-center text-primary-text-color font-medium text-lg">
                At Buzzoid, we also pride ourselves on quality, security, and
                service.
              </p>
            </div>
          </>
        )}
      </div>
      <div className={`align-center items-stretch gap-5`}>
   {data.map((item, index) => {
  return (
    <div
      key={index}
      className={`px-5 py-10 space-y-5 rounded-3xl shadow-md transition-all duration-300 ease-in-out hover:shadow-none bg-white border border-gray-200 cursor-pointer bg-red-400 ${
        origin === "tiktokviews" ? "w-1/3 mx-auto" : "flex-1"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 mx-auto object-contain rounded-2xl"
      />
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
      {origin == "tiktokviews" && (
        <p className="text-2xl text-center w-9/12 font-medium mx-auto">
          Those are just some of the reasons that likes matter to TikTok users.
          No matter why they want to boost their engagement, audience, and
          follower bases, though, they’ve all found that our high-quality
          services{" "}
          <span className="text-gradient">
            make Buzzoid the best site for buying TikTok likes and other
            interactions.
          </span>
        </p>
      )}
    </div>
  );
};

export default Guarantee;
