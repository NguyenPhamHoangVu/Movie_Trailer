import React from "react";
import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieProvide";

const SearchMovie = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl font-bold mb-5">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[200px] h-[300px] relative group"
                onClick={() => {
                  handleTrailer(item.id);
                }}
              >
                <div className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-2">
                    <p className="uppercase text-md">
                      {item.title || item.original_title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default SearchMovie;
