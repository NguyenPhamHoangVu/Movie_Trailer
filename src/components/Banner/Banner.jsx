import Icon from "../../assets/rating.png";
import Iconhalf from "../../assets/rating-half.png";
import Imgtemp from "../../assets/temp-1.jpeg";
import Iconplay from "../../assets/play-button.png";

import React from "react";
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-center bg-no-repeat bg-cover bg-banner relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-4 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r text-xl from-red-600 to-red-200 py-3 px-5">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-4xl font-bold">
              Nghe nói em thích anh
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <img src={Icon} alt="rating" className="w-8 h-8" />
            <img src={Icon} alt="rating" className="w-8 h-8" />
            <img src={Icon} alt="rating" className="w-8 h-8" />
            <img src={Icon} alt="rating" className="w-8 h-8" />
            <img src={Iconhalf} alt="rating" className="w-8 h-8" />
          </div>
          <p className="text-white">
            "Nghe nói em thích anh" là một câu chuyện tình cảm đầy cảm xúc, nơi
            những giấc mơ và thực tại giao thoa. Câu chuyện khắc họa hành trình
            khám phá tình yêu, nỗi nhớ và những khoảnh khắc ngọt ngào trong cuộc
            sống. Từ những buổi hẹn hò đầu tiên cho đến những thử thách mà các
            nhân vật phải đối mặt, mỗi chi tiết đều mang lại cho người xem cảm
            giác gần gũi và quen thuộc, khiến họ không thể rời mắt khỏi màn
            hình.
          </p>
          <div className="flex items-center space-x-3">
            <button className="p-3 text-white bg-black font-bold text-lg">
              Chi tiết
            </button>
            <button className="p-3 text-white bg-red-600 font-bold text-lg">
              Xem phim
            </button>
          </div>
        </div>
        <div className=" w-[50%] flex items-center justify-center">
          <div className="w-[350px] h-[450px] relative group cursor-pointer">
            <img src={Imgtemp} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img src={Iconplay} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
