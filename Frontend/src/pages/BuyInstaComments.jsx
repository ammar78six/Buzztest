import {
  FAQSection,
  Hero,
  HowItWorksSection,
  TestimonialSlider,
} from "../components/commons";
import icon1 from "../Images/clock.png";
import icon2 from "../Images/like.png";
import icon3 from "../Images/call.png";
import InfoSection from "../components/commons/InfoSection";
import { PackagesSection } from "../components/commons/PakagesSection";

const BuyInstaComments = () => {
  const cardsData = [
    {
      icon: icon1,
      title: "1. Instant Delivery Guaranteed",
      description:
        "Don’t wait to get your views. We send instant views from real people.",
    },
    {
      icon: icon2,
      title: "2. Real, Relevant Comments",
      description:
        "Exactly what Instagram wants: relevant comments posted by real IG users. 100% safe.",
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
            heading={"Buy Instagram Comments with"}
            gradientHeading={"Instant Delivery"}
            greenText={"See our deals below!"}
            subHeading={
              "Buzzoid's revolutionary, customized technology lets you buy highly-relevant Instagram comments for your posts quickly, safely, and easily with just a few clicks."
            }
          />
        </div>
      </div>
      <PackagesSection />
      <TestimonialSlider />
      <InfoSection
        title="Ready to buy"
        highlight="Instagram Comments?"
        subtitle="Instagram comments are the “secret sauce” that boosts audience and popularity. Buzzoid's unique, highly relevant IG comments, crafted with advanced technology that analyzes your posts for context and emotion, will send your organic growth soaring!"
        cards={cardsData}
      />
      <HowItWorksSection />
      <FAQSection
        renderIn="Comments"
        des={
          "Over 1,000 daily customers trust us as the best site for relevant Instagram comments"
        }
      />
    </>
  );
};

export default BuyInstaComments;
