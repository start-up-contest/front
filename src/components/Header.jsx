import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Header.module.css";

import logo from "../assets/images/logo.png";

function Header() {
  const {} = useParams();
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setContent(
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <div className={styles.rightButtonComponent}>
          <div className={styles.textButton}>지도</div>
          <div className={styles.textButton}>도움말</div>
          <div className={styles.textButton}>관심목록</div>
          <div className={styles.textButton}>방내놓기</div>
          <div className={styles.textButton}>메시지</div>
          <div className={styles.mintButton} onClick={() => navigate("/login")}>
            로그인
          </div>
          <div className={styles.greyButton}>광고문의</div>
        </div>
      </div>
    );
  }, []);

  return content;
}

export default Header;
