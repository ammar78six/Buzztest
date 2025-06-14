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

export default function BuyInstagramLikes() {
  const cardsData = [
    {
      icon: icon1,
      title: "1. Instant Delivery Guaranteed",
      description:
        "Don’t wait to get your views. We send instant views from real people.",
    },
    {
      icon: icon2,
      title: "2. 100% Real Likes",
      description:
        "Get high quality, instant likes from real users with real accounts (no fake accounts).",
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
        <div className="custom-container">
          <Hero
            heading={"Buy Instagram Likes with"}
            gradientHeading={"Instant Delivery"}
            greenText={"Rated best site for Instagram growth!"}
            subHeading={
              "Buzzoid’s Instagram likes rapidly and safely boost engagement with your account, bringing in more viewers and making your posts more popular!"
            }
          />
        </div>
      </div>
      <PackagesSection />
      <TestimonialSlider />
      <InfoSection
        title="Ready to buy"
        highlight="Instagram Likes?"
        subtitle="Buying likes for your Instagram posts is the best way to gain more engagement and success. Improve your social media marketing strategy with Buzzoid."
        cards={cardsData}
      />
      <HowItWorksSection />
      <FAQSection
        renderIn="Likes"
        des={
          "Over 1,000 daily customers trust us as the best site to deliver real Instagram likes"
        }
      />
    </>
  );
}
