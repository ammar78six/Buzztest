import { ComparisonSection, FAQsTikTok, Guarante, Hero, ImageSection } from "../components/commons";
import { PackagesSection } from "../components/commons/PakagesSection";
import ReviewSection from "../components/commons/ReviewSection";
import { GetStarted, Guarantee, WhyUs } from "../components/Home";
import Benefits from "../components/Individual/TikTok/Benefits";

const BuyTikTokViews = () => {
  return (
    <div>
          <div>
      <div className="custom-container space-y-10">
        <Hero
          heading={"Buy TikTok Views with"}
          gradientHeading={"Instant Delivery"}
          greenText={"Rated world's #1 IG growth service since 2012."}
          subHeading={
            "At Buzzoid, you can buy TikTok followers quickly, safely, and easily with just a few clicks. See our affordable prices and deals below!"
          }
        />
      </div>
      <PackagesSection fromInsta={false}/>
      <Benefits />
      <ReviewSection />
      <FAQsTikTok />
      <ComparisonSection />
      </div>
      <WhyUs
        name={
          <span>
            TikTok Views <span className="text-black">Matters</span>{" "}
          </span>
        }
      />
      <Guarantee origin={"tiktokviews"} />
      <div className="bg-pink-gradient custom-container">
        <div className="py-20 text-center space-y-10">
          <h6 className="heading font-semibold">
            How Buzzoid Protects{" "}
            <span className="text-gradient-purple">Customers’ Safety</span>
          </h6>
          <p className="text-lg">
            If you’re worried about buying likes from other TikTok services, you
            should be. Most of the vendors you find online aren’t on the level;
            they create fake likes with automated bots and post them from fake
            accounts. Everything looks great, until the system detects the
            interactions, deletes them, and penalizes or bans you for using
            them.
          </p>
        </div>

        <div className="space-y-10">
          <ImageSection
            heading={"Industry-Leading Services"}
            title={
              "CompanyName has been delivering high-quality, real Instagram followers, likes, and video views for more than a dozen years, and we’ve been the top-ranked Instagram service provider ever since. We’ve also been featured as a trusted IG service in publications like Men’s Journal, US Weekly, and 303 Magazine."
            }
            des={
              "When TikTok was first open for American and European signups, we added TikTok services to our menu almost immediately and rapidly became the highest-rated TikTok provider as well."
            }
            imgPosition="right"
          />
          <ImageSection
            heading={"Trusted Growth Experts"}
            title={
              "Since we began operations, we've helped countless users grow their social media presence across platforms, delivering billions of Instagram interactions and hundreds of thousands of TikTok engagements. Our diverse community includes individual content creators and everyday users looking to expand their reach and connect with others who share their interests."
            }
            des={
              "They all trust CompanyName because we deliver the best results available from any social media service provider. That’s all thanks to our expert and experienced staff, who understand the fastest and most effective ways to generate organic account growth, safely and according to all apps’ terms and conditions."
            }
            imgPosition="left"
          />
          <ImageSection
            heading={"Industry-Leading Services"}
            title={
              "CompanyName has been delivering high-quality, real Instagram followers, likes, and video views for more than a dozen years, and we’ve been the top-ranked Instagram service provider ever since. We’ve also been featured as a trusted IG service in publications like Men’s Journal, US Weekly, and 303 Magazine."
            }
            des={
              "When TikTok was first open for American and European signups, we added TikTok services to our menu almost immediately and rapidly became the highest-rated TikTok provider as well."
            }
            imgPosition="right"
          />
          <ImageSection
            heading={"Trusted Growth Experts"}
            title={
              "Since we began operations, we've helped countless users grow their social media presence across platforms, delivering billions of Instagram interactions and hundreds of thousands of TikTok engagements. Our diverse community includes individual content creators and everyday users looking to expand their reach and connect with others who share their interests."
            }
            des={
              "They all trust CompanyName because we deliver the best results available from any social media service provider. That’s all thanks to our expert and experienced staff, who understand the fastest and most effective ways to generate organic account growth, safely and according to all apps’ terms and conditions."
            }
            imgPosition="left"
          />
        </div>
      </div>
      <Guarante />
    </div>
  );
};

export default BuyTikTokViews;
