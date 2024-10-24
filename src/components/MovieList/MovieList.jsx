import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieProvide";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
    // Thêm khoảng cách
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const MovieList = ({ title, data = [] }) => {
  const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl font-bold mb-5">{title}</h2>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container" // Thêm class cho container
        itemClass="carousel-item" // Thêm class cho item
        additionalTransfrom={0} // Ngăn chặn việc hiển thị item bị dính
      >
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="relative group mx-2" // Giữ lại margin cho item
              style={{ width: "calc(200px - 20px)", height: "300px" }} // Điều chỉnh chiều rộng
              onClick={() => {
                handleTrailer(item.id);
              }}
            >
              <div className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Không có dữ liệu để hiển thị</p>
        )}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
