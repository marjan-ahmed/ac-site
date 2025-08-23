import React, { useEffect, useState } from "react";
import { Carousel } from "antd";

// Default reviews fallback data
const defaultReviews = [
  {
    name: "John Doe",
    rating: 5,
    review: "Excellent service! Highly recommended for anyone looking for quality work."
  },
  {
    name: "Jane Smith", 
    rating: 4,
    review: "Great experience overall. Professional and timely delivery."
  },
  {
    name: "Mike Johnson",
    rating: 5,
    review: "Outstanding results! Will definitely use their services again."
  }
];

function Reviews() {
  const [reviews, setReviews] = useState(defaultReviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          "https://docs.google.com/spreadsheets/d/1IwR6P6IU9YUgFGHnBFLqY-TH6D-5LkJIh81rN96P5Bk/gviz/tq?tqx=out:json"
        );
        const text = await res.text();
        const json = JSON.parse(text.substring(47, text.length - 2));

        // Sheet columns: 0 = Timestamp, 1 = Full Name, 2 = Service Type, 3 = Rating, 4 = Review
        const rows = json.table.rows
          .map((row) => {
            const rawName = row.c[1]?.v ?? "Anonymous";
            const name = String(rawName).replace(/^"|"$/g, "").trim();

            const ratingRaw = row.c[3]?.v;
            const ratingNum = Math.max(
              0,
              Math.min(5, parseInt(ratingRaw, 10) || 0)
            );

            const review = String(row.c[4]?.v ?? "").trim();

            return { name, rating: ratingNum, review };
          })
          .filter((r) => r.review.length > 0);

        if (rows.length > 0) setReviews(rows);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
          Customer Reviews
        </h2>
        <p className="text-slate-600 mb-12 text-lg max-w-2xl mx-auto">
          See what our valued customers have to say about their experience with us
        </p>

        {/* Custom styled container for the carousel */}
        <div className="reviews-carousel-container bg-cyan-800 rounded-2xl shadow-md p-4 mb-12">
          <style jsx>{`
            .reviews-carousel-container .ant-carousel .slick-dots {
              bottom: -50px !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-dots li button {
              background: #374151 !important;
              border-radius: 50% !important;
              width: 12px !important;
              height: 12px !important;
              opacity: 0.5 !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-dots li.slick-active button {
              background: #1f2937 !important;
              opacity: 1 !important;
              transform: scale(1.2) !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-arrow {
              color: #1f2937 !important;
              font-size: 24px !important;
              z-index: 2 !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-arrow:before {
              color: #1f2937 !important;
              font-size: 24px !important;
              opacity: 0.8 !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-arrow:hover:before {
              opacity: 1 !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-prev {
              left: -40px !important;
            }
            
            .reviews-carousel-container .ant-carousel .slick-next {
              right: -40px !important;
            }
            
            @media (max-width: 640px) {
              .reviews-carousel-container .ant-carousel .slick-prev {
                left: -25px !important;
              }
              
              .reviews-carousel-container .ant-carousel .slick-next {
                right: -25px !important;
              }
            }
          `}</style>
          
          {/* AntD Carousel with dark dots + arrows */}
          <Carousel 
            arrows 
            dots 
            autoplay 
            autoplaySpeed={5000} 
            infinite
            pauseOnHover
            pauseOnDotsHover
          >
            {reviews.map((review, idx) => (
              <div key={idx}>
                <div className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-sm min-h-[220px] flex flex-col justify-center mx-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-teal-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Review */}
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-6 font-medium">
                    "{review.review}"
                  </p>

                  {/* Rating */}
                  <div
                    className="flex justify-center mb-4"
                    aria-label={`Rating: ${review.rating} out of 5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl mx-0.5 ${
                          i < review.rating ? "text-amber-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Name */}
                  <p className="font-bold capitalize text-slate-900 text-lg">
                     {review.name}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Leave Review Button */}
        <div className="text-center">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeyc0z_1fl5O8KOv03e2t_pllKB9NPTVoOq7RGZXdeZb7cX_g/viewform?usp=dialog"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-7 py-3 rounded-lg font-semibold text-sm hover:from-teal-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
  >
    Leave a Review
  </a>
  <p className="text-slate-500 mt-3 text-sm sm:text-md">
    Share your experience and help others make informed decisions
  </p>
</div>

      </div>
    </section>
  );
}

export default Reviews;