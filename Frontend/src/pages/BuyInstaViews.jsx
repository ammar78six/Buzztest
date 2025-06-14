import { FAQSection, Hero, HowItWorksSection, TestimonialSlider } from "../components/commons";
import icon1 from "../Images/clock.png";
import icon2 from "../Images/like.png";
import icon3 from "../Images/call.png";
import InfoSection from "../components/commons/InfoSection";

const BuyInstaViews = () => {
  const cardsData = [
    {
      icon: icon1,
      title: "1. Instant Delivery Guaranteed",
      description:
        "Don’t wait to get your views. We send instant views from real people.",
    },
    {
      icon: icon2,
      title: "2. Real Instagram Views",
      description:
        "Buying Instagram views doesn't have to be hard! We only deliver 100% organic views.",
    },
    {
      icon: icon3,
      title: "3. 24/7 Customer Support",
      description:
        "Nothing worse than dealing with bad customer support. We got your back.",
    },
  ];
  return (
    <>
      <div className="primary-gradient">
        <div className="custom-container py-20 space-y-10">
          <Hero
            heading={"Buy Instagram Views with"}
            gradientHeading={"Instant Delivery"}
            greenText={"See our deals below!"}
            subHeading={
              "At Buzzoid, you can buy Instagram views to your videos quickly, safely and easily with just a few clicks. "
            }
          />
        </div>
      </div>
      <TestimonialSlider />
      <InfoSection
        title="Ready to buy"
        highlight="Instagram Views?"
        subtitle="Instagram video views are an essential part of your marketing strategy. Buy Instagram views from Buzzoid, and watch your video gain more popularity and brand awareness."
        cards={cardsData}
      />
      <HowItWorksSection />
      <FAQSection
        renderIn="Views"
        des={
          "Over 1,000 daily customers trust us as the best site to deliver real Instagram views"
        }
      />
    </>
  );
};

export default BuyInstaViews;
