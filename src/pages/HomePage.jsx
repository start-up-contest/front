import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./HomePage.module.css";
import TutorProfileCardComponent from "../components/TutorProfileCardComponent";
import tutorImg1 from "../assets/images/profile_1.jpeg";

function HomePage() {
  const {} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
      <div className={styles.container}>
        <div className={styles.searchRowComponent}>
          <div className={styles.searchListBox}></div>
          <div className={styles.searchBox}></div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.titleHighlightText}>
            나를 도와줄 <br />
            한국의 튜터를 찾아드려요
          </div>
          <div className={styles.titleDescriptionText}>
            내게 딱 맞는 튜터? 간단한 테스트로 찾기!
          </div>
          <div
            className={styles.titleButton}
            onPress={() => {}}
            variant="primary"
          >
            튜터 찾기
          </div>
        </div>
        <div className={styles.roomRowComponent}>
          <div className={styles.roomButtonBox}>
            <div className={styles.roomButtonTitleText}>원 / 투룸</div>
            <div className={styles.roomButtonDescriptionText}>
              단기임대부터 전/월세까지
              <br />
              마음에 맞는 매물을 한번에!
            </div>
          </div>
          <div className={styles.roomButtonBox}>
            {" "}
            <div className={styles.roomButtonTitleText}>셰어하우스</div>
            <div className={styles.roomButtonDescriptionText}>
              다양한 매물 정보와
              <br />
              셰어하우스 랭킹까지!
            </div>
          </div>
          <div className={styles.roomButtonBox}>
            {" "}
            <div className={styles.roomButtonTitleText}>부동산 튜터 찾기</div>
            <div className={styles.roomButtonDescriptionText}>
              내게 딱 맞는 튜터?
              <br />
              필터링으로 찾기!
            </div>
          </div>
        </div>
        <div className={styles.roomRowComponent}>
          <div className={styles.roomButtonBox}>
            {" "}
            <div className={styles.roomButtonTitleText}>추천 매물보기</div>
            <div className={styles.roomButtonDescriptionText}>
              대학 근처, 원하는 위치
              <br />
              추천 매물 톺아보기!
            </div>
          </div>
          <div className={styles.roomButtonBox}>
            {" "}
            <div className={styles.roomButtonTitleText}>방 종류 더보기</div>
            <div className={styles.roomButtonDescriptionText}>
              오피스텔, 주택, 빌라, <br />
              원룸, 셰어하우스까지!
            </div>
          </div>
          <div className={styles.roomColumnComponent}>
            <div className={styles.roomButtonBox}>
              {" "}
              <div className={styles.roomButtonTitleText}>커뮤니티</div>
            </div>
            <div className={styles.roomButtonBox}>
              {" "}
              <div className={styles.roomButtonTitleText}>찜한 방</div>
            </div>
          </div>
        </div>
        <TutorProfileCardComponent
          image={tutorImg1}
          university={"중앙대학교"}
          name={"이가은"}
          description={
            "활발한 성격이에요! 부동산은 물론 다양한 학교 근처 생활 꿀팁도 알려드릴게요!"
          }
          language={["일본어", "영어"]}
        />
      </div>
    );
  });

  return content;
}

export default HomePage;
