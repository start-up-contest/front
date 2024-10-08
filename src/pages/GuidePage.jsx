import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./GuidePage.module.css";
import TutorProfileCardComponent from "../components/TutorProfileCardComponent";
import Header from "../components/Header";

import tutorImg1 from "../assets/images/profile_1.jpeg";
import bg_img from "../assets/images/bg_img.png";
import search_svg from "../assets/icons/search.svg";
import bottom_triangle from "../assets/icons/bottom_triangle.svg";
import left_arrow_mint from "../assets/icons/left_arrow_mint.svg";
import right_arrow_mint from "../assets/icons/right_arrow_mint.svg";
import guide from "../assets/guide.svg";

function GuidePage() {
  const {} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
      <div className={styles.container}>
        <Header />
       <img src={guide} />
      </div>
    );
  });

  return content;
}

export default GuidePage;
