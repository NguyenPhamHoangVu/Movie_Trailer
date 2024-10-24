import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(textSearch);
    }
  };

  return (
    <div className="p-4 bg-black flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-3xl font-bold text-red-500">Movie</h1>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <a href="#" className="text-white">
            Trang chủ
          </a>
          <a href="#" className="text-white">
            Giới thiệu
          </a>
          <a href="#" className="text-white">
            Liên Hệ
          </a>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center space-x-4 w-full md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            className="p-2 text-black w-full md:w-auto"
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
            value={textSearch}
            onKeyPress={handleKeyPress} // Thêm sự kiện này để xử lý Enter
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
