import React, { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import "./Portfolio.css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="SideBar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="SideBar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="SideBar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="SideBar" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
