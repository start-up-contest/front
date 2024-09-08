import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TutorPage.module.css";
import search_svg from "../assets/icons/search.svg";

function TutorPage() {
  const {} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
        <div className={styles.container}>
          <div className={styles.modal}>
            <button className={styles.closeButton}>&times;</button>
            <h1 className={styles.title}>나를 도와줄 한국의 튜터를 찾아드려요</h1>
            <p className={styles.subtitle}>
              매물 탐색부터 방 계약까지!<br />
              한국에서 나를 도와줄 튜터를 찾아드릴게요.
            </p>
            <img src={search_svg} alt="Search Icon" className={styles.icon} />
            <br />
            <button className={styles.startButton}>시작하기</button>
          </div>
        </div>
    );
  }, []);

  return content;
}

export default TutorPage;
