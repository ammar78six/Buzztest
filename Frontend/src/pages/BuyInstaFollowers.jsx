import {
  FAQSection,
  Hero,
  HowItWorksSection,
  TestimonialSlider,
} from "../components/commons";
import InfoSection from "../components/commons/InfoSection";
import icon1 from "../Images/clock.png";
import icon2 from "../Images/like.png";
import icon3 from "../Images/call.png";
import { PackagesSection } from "../components/commons/PakagesSection";

const BuyIntaFollowers = () => {
  const cardsData = [
    {
      icon: icon1,
      title: "1. Instant Delivery Guaranteed",
      description:
        "Don’t wait to get your views. We send instant views from real people.",
    },
    {
      icon: icon2,
      title: "2. Real, Organic Followers",
      description:
        "Buying Instagram followers doesn't have to be hard! We only deliver 100% organic followers.",
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
            heading={"Buy Instagram Followers with"}
            gradientHeading={"Instant Delivery"}
            greenText={"Rated world's #1 IG growth service since 2012."}
            subHeading={
              "At Buzzoid, you can buy Instagram followers quickly, safely, and easily with just a few clicks. See our affordable prices and deals below!"
            }
          />
        </div>
      </div>
      <PackagesSection />
      <TestimonialSlider />
      <InfoSection
        title="Ready to buy"
        highlight="Instagram Followers?"
        subtitle="Instagram followers are the key to your success on the platform. Buzzoid’s Instagram followers rapidly and safely boost engagement with your account, bringing in more viewers and making your posts more popular!"
        cards={cardsData}
      />
      <HowItWorksSection />
      <FAQSection
        renderIn="Followers"
        des={
          "Over 1,000 daily customers trust us as the best site to deliver real Instagram followers"
        }
      />
    </>
  );
};

export default BuyIntaFollowers;
