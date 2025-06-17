"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const reviewsData = [
  {
    name: "Alisha Perri",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    timeAgo: "a week ago",
    review: "been using them for 4 years. Great service. Very quick with providing information."
  },
  {
    name: "Денис Карасев",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    timeAgo: "a week ago",
    review: "This is a great company to deal with! Team is very friendly. Very organized and polite. Very patient. I visited their office few times and..."
  },
  {
    name: "Artur Begel", 
    avatar: "/api/placeholder/40/40",
    rating: 5,
    timeAgo: "a day ago",
    review: "Had some major repairs for my vehicle and Mr. Rabishankar did wonderful job in expediting the process from claim approvals to garage..."
  },
  {
    name: "Vishnu Vijayakumar",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    timeAgo: "a week ago",
    review: "Had some major repairs for my vehicle and Mr. Rabishankar did wonderful job in expediting the process from claim approvals to garage..."
  },
  {
    name: "Natalia Aleksandrova",
    avatar: "/api/placeholder/40/40", 
    rating: 5,
    timeAgo: "a month ago",
    review: "I was assisted by Gloria. She is a very helpful and friendly professional. She clearly explained the process and answered all my questions. I..."
  },
  {
    name: "Kirshan Kumar",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    timeAgo: "a day ago",
    review: "Throughout the claim process, Mr. Charles had guided promptly. He has always made sure, my concern is listened and rectified as soon as..."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

type Review = {
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  review: string;
};

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            <span className="text-sm text-gray-500">{review.timeAgo}</span>
          </div>
          <div className="mb-3">
            <StarRating rating={review.rating} />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function ReviewsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 text-black">
            What our customers say about us
          </h2>
          
          {/* Google Reviews Summary */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google"
                className="h-6"
              />
              <span className="text-sm text-gray-600 font-medium">Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">4.8/5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-700">23,000+ Reviews</span>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const quotes = [
  {
    title: "Motoring >",
    image: "/sofia-in-the-car.png"
  },
  {
    title: "Home >",
    image: "/sofia-home.png"
  },
  {
    title: "Health >",
    image: "/sofia-medicine.png"
  }
];

export default function ComponentsSection() {
  return (
    <>
      
      
      {/* Quotes Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-5xl font-extrabold text-center mb-20 text-black">What type of quotes can you get?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {quotes.map((quote, index) => (
              <a
                key={index}
                href={`/quote/${quote.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block"
              >
                <motion.div
                  className="bg-[#F9F9F9] p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, repeatType: "reverse" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={quote.image}
                      alt={quote.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-black">{quote.title}</h4>
                </motion.div>
              </a>
            ))}
          </div>
          {/* Reviews Section */}
      <ReviewsSection />
        </div>
      </section>
    </>
  );
}