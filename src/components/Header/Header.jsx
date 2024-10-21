import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState("");

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold text-red-500">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="" className="text-white">
            Trang chủ
          </a>
          <a href="" className="text-white">
            Giới thiệu
          </a>
          <a href="" className="text-white">
            Liên Hệ
          </a>
        </nav>
      </div>
      <div className=" flex items-center space-x-4">
        <input
          type="text"
          placeholder="search"
          className="p-2 text-black"
          onChange={(e) => {
            setTextSearch(e.target.value);
          }}
          value={textSearch}
        />
        <button
          className="p-2 text-white bg-red-500 rounded"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
