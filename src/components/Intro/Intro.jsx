import { motion } from "framer-motion";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import glassesimoji from "../../img/glassesimoji.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import thumbup from "../../img/thumbup.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "White" : "" }}>Hi! I am</span>
          <span>Andrew Thomas</span>
          <span>
            Frontend Developer With High Level of Experiance in Web Design and
            Development. Producting The Quality Works
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="github" />
          <img src={Linkedin} alt="github" />
          <img src={Instagram} alt="github" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassy"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
