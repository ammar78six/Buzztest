import React, { useState } from "react";
import { Star } from "lucide-react";

const ReviewSection = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-[#f4f6ff]">
      <section className="py-16 custom-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center heading mb-4">
            Customer Reviews & Feedback{" "}
            <span role="img" aria-label="smile">
              😄
            </span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            We’re proud to have so many Buzzoid customers come back over and
            over again when they want to buy followers and other TikTok
            engagements. Here’s what just a few of our repeat clients have to
            say.
          </p>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left Form */}
            <div className="col-span-2 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Submit Your Review</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Your name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Rating</label>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Star
                        key={num}
                        className={`w-5 h-5 cursor-pointer ${
                          num <= rating ? "text-orange-400" : "text-gray-300"
                        }`}
                        onClick={() => setRating(num)}
                        fill={num <= rating ? "#fb923c" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Your Review
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your Review"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded text-white font-semibold bg-orange-gradient"
                >
                  SUBMIT REVIEW
                </button>
              </form>
            </div>

            {/* Right Testimonial */}
            <div className="col-span-3">
              <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-5 h-5 bg-green-500 rounded text-white text-xs font-bold text-center mr-1"
                  >
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-3">
                “As a content creator, finding your audience can be tough.
                That’s where Buzzoid steps in. Their TikTok followers service
                gave my account the jumpstart it needed. Noticed a decent
                increase in follower count and engagement. It's a good tool for
                creators who are just starting out and need that initial push.”
              </blockquote>
              <p className="text-xs text-gray-400 mb-6">Tony W.</p>
              <button className="w-full text-center py-2 bg-gray-200 text-sm font-medium rounded-full">
                SHOW ALL REVIEWS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
