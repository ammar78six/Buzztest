import { Routes, Route } from "react-router";
import { Banner, Footer, Header } from "./components/commons";
import { BuyInstaFollowers, BuyInstaLikes, Home, BuyInstaViews, BuyInstaComments, BuyTikTokLikes, BuyTikTokFollowers } from "./pages";
import BuyTikTokViews from "./pages/BuyTikTokViews";

function App() {
  const bannerTitle = (
    <p className="font-light">
      Use coupon code to{" "}
      <span className="font-medium border border-dotted p-1">DEMO</span> to get{" "}
      <span className="font-medium">5% OFF</span> on orders above $10.
    </p>
  );

  return (
    <>
      <Banner text={bannerTitle} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insta-likes" element={<BuyInstaLikes />} />
        <Route path="/insta-followers" element={<BuyInstaFollowers />} />
        <Route path="/insta-views" element={<BuyInstaViews />} />
        <Route path="/insta-comments" element={<BuyInstaComments />} />
        <Route path="/tiktok-views" element={<BuyTikTokViews />} />
        <Route path="/tiktok-followers" element={<BuyTikTokFollowers />} />
        <Route path="/tiktok-likes" element={<BuyTikTokLikes />} />




      </Routes>
      <Footer />
    </>
  );
}

export default App;
