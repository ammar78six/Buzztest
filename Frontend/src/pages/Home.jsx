import Buy from "../components/commons/Buy"; // Ensure correct import path
import InfoCard from "../components/commons/InfoCard"; // Still needed if InfoCard is used elsewhere directly
import {
  GetStarted,
  Guarantee,
  Hero,
  SocialSection,
  WhyUs,
} from "../components/Home";
import { Carousel } from "../components/Individual";

const Home = () => {
  return (
    <>
      <Hero />
      <SocialSection />
      <div className="custom-container">
        <p className="heading text-center">
          CompanyName's <span className="text-gradient">Services</span>
        </p>
      </div>
      <p className="text-lg text-[#484f5e] font-medium w-full max-w-3xl text-center mx-auto my-5">
        Amplify your social media impact with Buzzoid's comprehensive Instagram
        services. Our user-friendly platform delivers real followers, likes,
        views, and comments in just a few clicks. Experience rapid, secure
        growth for your accounts with our top-rated engagement packages.
      </p>
      <Carousel>
        {/* Instagram Followers */}
        <Buy
          title="Buy Instagram Followers"
          description="A high follower count is the number one sign that an Instagram user is popular and influential. This section delves into the various benefits and reasons why increasing your follower count is crucial for social media success."
          subtitle="Key Reasons to Buy Instagram Followers"
          features={[
            "100% legitimate followers that keep your account safe",
            "Packages of 10-200,000 real followers available",
            "Premium and VIP follower upgrades available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY INSTAGRAM FOLLOWERS"}
          bg={"bg-gradient-to-b from-[#e0f2ff] to-white"}
          cardsFirst={false}
          card1Title={"Why Are Instagram Followers Important?"}
          card1Content={
            "A high follower count is the number one sign that an Instagram user is popular and influential. And when you increase your followers, you signal to others that your account is worth their attention, driving more organic engagement."
          }
          card1Image={"/images/1c.svg"}
          card2Title={"Key Reasons to Buy Instagram Followers"}
          card2Content={
            "Your purchased followers will boost your Insta follower count. That provides users with an immediate signal that your account is important, and tells them it will be worth their time to stop and view the content you’ve posted. Just as importantly, your new followers tell the system’s algorithms that your account is becoming more popular and deserves greater visibility."
          }
          card2Image={"/images/2c.svg"}
        />

        {/* Instagram Likes */}
        <Buy
          title="Buy Instagram Likes"
          description="Likes are the currency of social media engagement, indicating how much your content resonates with your audience. Discover why buying likes can significantly boost your post visibility and credibility."
          subtitle="Advantages of Purchasing Instagram Likes"
          features={[
            "100% legitimate likes that keep your account safe",
            "Premium and VIP like upgrades available",
            "Packages of 10-200,000 real likes available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY INSTAGRAM LIKES"}
          bg={"bg-gradient-to-b from-[#fff0e5] to-white"}
          cardsFirst={true}
          card1Title={"The Power of Instagram Likes"}
          card1Content={
            "Likes serve as social proof, making your content appear more appealing and valuable. This encourages more users to interact with your posts, creating a snowball effect of engagement."
          }
          card1Image={"/images/1c.svg"}
          card2Title={"Boosting Your Content's Reach"}
          card2Content={
            "When your posts receive more likes, Instagram's algorithm is more likely to show them to a wider audience, including non-followers, significantly increasing your organic reach and discovery."
          }
          card2Image={"/images/2c.svg"}
        />

        {/* Instagram Views */}
        <Buy
          title="Buy Instagram Views"
          description="For video content, views are paramount. A high view count suggests popularity and relevance, drawing more attention to your reels, stories, and IGTV videos. Learn how to maximize your video impact."
          subtitle="Why Views Matter for Your Instagram Videos"
          features={[
            "100% legitimate views that keep your account safe",
            "Premium and VIP view upgrades available",
            "Packages of 10-200,000 real views available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY INSTAGRAM VIEWS"}
          bg={"bg-gradient-to-b from-[#eff0fc] to-white"}
          cardsFirst={false}
          card1Title={"The Impact of Video Views"}
          card1Content={
            "More views on your videos translate directly into higher engagement and perceived value. It signals to users that your video content is engaging and worth watching, boosting overall profile appeal."
          }
          card1Image={"/images/1c.svg"}
          card2Title={"Algorithmic Advantage of Views"}
          card2Content={
            "High view counts tell Instagram's algorithm that your video is popular. This can lead to your videos being featured on the Explore page or recommended to new users, expanding your audience exponentially."
          }
          card2Image={"/images/2c.svg"}
        />

        {/* Instagram Comments */}
        <Buy
          title="Buy Instagram Comments"
          description="Comments foster genuine interaction and indicate a highly engaged audience. They are a powerful metric for the algorithm and signal authentic connection. Discover how comments can transform your presence."
          subtitle="The Value of Real Instagram Comments"
          features={[
            "100% legitimate comments that keep your account safe",
            "Premium and VIP comment upgrades available",
            "Packages of 10-200,000 real comments available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY INSTAGRAM COMMENTS"}
          bg={"bg-gradient-to-b from-[#f2e5ff] to-white"}
          cardsFirst={true}
          card1Title={"Driving Deeper Engagement"}
          card1Content={
            "Comments are a direct measure of audience engagement and interest. They spark conversations, build community, and make your profile a more dynamic and interactive space for followers."
          }
          card1Image={"/images/1c.svg"}
          card2Title={"Algorithmic Boost from Comments"}
          card2Content={
            "Instagram's algorithm highly values comments as a sign of valuable content. More comments can significantly increase your content's visibility, pushing it into more users' feeds and the Explore page."
          }
          card2Image={"/images/2c.svg"}
        />

        {/* TikTok Followers */}
        <Buy
          title="Buy Tiktok Followers"
          description="Just like on Instagram, a robust follower count on TikTok is a fundamental indicator of influence and popularity. Attract more organic followers by showcasing your existing social proof."
          subtitle="Boosting Your TikTok Presence with Followers"
          features={[
            "100% legitimate followers that keep your account safe",
            "Premium and VIP follower upgrades available",
            "Packages of 10-200,000 real followers available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY TIKTOK FOLLOWERS"}
          bg={"bg-gradient-to-b from-[#e0f2ff] to-white"}
          cardsFirst={false}
          card1Title={"The Importance of TikTok Followers"}
          card1Content={
            "A higher follower count on TikTok immediately makes your profile more attractive to new users and potential collaborators, signalling credibility and a strong community."
          }
          card1Image={"/images/1c.svg"}
          card2Title={"TikTok Algorithm and Followers"}
          card2Content={
            "TikTok's 'For You' page algorithm favors accounts with higher engagement and follower counts, increasing the likelihood of your videos being discovered by a broader audience."
          }
          card2Image={"/images/2c.svg"}
        />

        {/* TikTok Likes */}
        <Buy
          title="Buy Tiktok Likes"
          description="Likes on TikTok are crucial for video visibility and viral potential. They tell the algorithm that your content is engaging and worth sharing, propelling your videos to a wider audience."
          subtitle="Why TikTok Likes Drive Engagement"
          features={[
            "100% legitimate likes that keep your account safe",
            "Premium and VIP like upgrades available",
            "Packages of 10-200,000 real likes available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY TIKTOK LIKES"}
          bg={"bg-gradient-to-b from-[#fff0e5] to-white"}
          cardsFirst={true}
          card1Title={"The Impact of TikTok Likes"}
          card1Content={
            "Likes are a key indicator of your video's popularity and appeal. A high like count can significantly increase your video's reach, pushing it into more users' 'For You' feeds."
          }
          card1Image={"/images/1c.svg"}
          card2Title={"Going Viral with Likes"}
          card2Content={
            "More likes mean higher chances of your content going viral. TikTok's algorithm prioritizes videos with strong engagement, making likes a vital component of your growth strategy."
          }
          card2Image={"/images/2c.svg"}
        />

        {/* TikTok Views */}
        <Buy
          title="Buy Tiktok Views"
          description="Views are the most direct measure of your video's reach on TikTok. A high view count enhances credibility and encourages more users to watch, making your content stand out in a crowded feed."
          subtitle="Boosting Your Video Reach with TikTok Views"
          features={[
            "100% legitimate views that keep your account safe",
            "Premium and VIP view upgrades available",
            "Packages of 10-200,000 real views available",
            "Immediate delivery",
            "Very affordable prices",
            "Safe and secure ordering process",
            "24/7 customer support",
            "Unparalleled results",
          ]}
          cta={"BUY TIKTOK VIEWS"}
          bg={"bg-gradient-to-b from-[#eff0fc] to-white"}
          cardsFirst={false}
          card1Title={"Why TikTok Views Important?"}
          card1Content={
            "A high number of views instantly conveys popularity and relevance. It draws new viewers in and increases the perceived value of your content, leading to more organic plays."
          }
          card1Image={"/images/1c.svg"} 
          card2Title={"TikTok's Discovery Engine"}
          card2Content={
            "TikTok's algorithm uses view counts as a strong signal for content to be featured on the 'For You' page. More views directly translate to greater exposure and new audience discovery."
          }
          card2Image={"/images/2c.svg"} 
        />
      </Carousel>
      <WhyUs />
      <Guarantee />
      <GetStarted />
    </>
  );
};

export default Home;