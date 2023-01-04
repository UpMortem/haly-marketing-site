import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
type PostSummary = {
  title: string;
  summary: string;
};

export const Slider = ({ posts }: { posts: PostSummary[] }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      navigation={true}
    >
      {posts.map((post, index) => (
        <SwiperSlide key={index}>
          <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.summary}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
