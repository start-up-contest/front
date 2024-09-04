import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./LoginPage.module.css";
import TutorProfileCardComponent from "../components/TutorProfileCardComponent";
import Header from "../components/Header";

import tutorImg1 from "../assets/images/profile_1.jpeg";
import bg_img from "../assets/images/bg_img.png";
import search_svg from "../assets/icons/search.svg";
import bottom_triangle from "../assets/icons/bottom_triangle.svg";
import left_arrow_mint from "../assets/icons/left_arrow_mint.svg";
import right_arrow_mint from "../assets/icons/right_arrow_mint.svg";
import guide from "../assets/guide.svg";
import logo from "../assets/images/big_logo.png";

function LoginPage() {
  const {} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
      <div className={styles.container}>
        <img src={logo} className={styles.logo}></img>
        <div className={styles.loginBox}>
          <div className={styles.titleText} style={{marginBottom: "50px"}}>
            다양한 서비스를 위해 로그인해주세요
          </div>
          <input className={styles.inputStyle} placeholder="이메일 주소 입력" />
          <input className={styles.inputStyle} placeholder="비밀번호 입력" />
          <button className={styles.loginButton}>로그인</button>
          <div className={styles.bottomButton}>
            <button className={styles.textButton}>계정 찾기</button>{" "}
            <button className={styles.textButton}>비밀번호 찾기</button>
            <div style={{flexGrow:"1"}}/>
            <button className={styles.textButton}>회원가입</button>
          </div>
        </div>
      </div>
    );
  });

  return content;
}

export default LoginPage;
