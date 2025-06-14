import { ImageSection } from "../commons";

const SocialSection = () => {
  return (
    <div className="primary-gradient">
      <div className="custom-container space-y-20 py-20">
        <ImageSection
          heading={"Social Media Visibility"}
          title={"Instagram and TikTok have become so popular worldwide..."}
          des={"But when users see accounts and posts with large numbers..."}
          imgPosition="right"
          image="images/s.png" // Updated URL
        />
        <ImageSection
          heading={"Accelerated Profile Growth"}
          title={"That gets more and more people engaged..."}
          des={"CompanyName can make it happen!..."}
          imgPosition="left"
          image="images/a.png" // Updated URL
        />
      </div>
    </div>
  );
};

export default SocialSection;
