import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import styles from "./HomePage.module.css";
import TutorProfileCardComponent from "../components/TutorProfileCardComponent";
import Header from "../components/Header";
import footer from "../assets/footer.svg";

import tutorImg1 from "../assets/images/profile_1.jpeg";
import bg_img from "../assets/images/bg_img.png";
import guide_megaphone from "../assets/images/guide_megaphone.png";

import search_svg from "../assets/icons/search.svg";
import bottom_triangle from "../assets/icons/bottom_triangle.svg";
import left_arrow_mint from "../assets/icons/left_arrow_mint.svg";
import right_arrow_mint from "../assets/icons/right_arrow_mint.svg";

function HomePage() {
  const {} = useParams();
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setContent(
      <div className={styles.container}>
        <Header />
        <div className={styles.background}>
          <div className={styles.searchRowComponent}>
            <div className={styles.searchListBox}>
              {" "}
              <img
                src={bottom_triangle}
                className={styles.bottom_triangle}
              ></img>
              language
            </div>
            <div className={styles.searchBox}>
              <img src={search_svg} className={styles.searchIcon}></img>
              <input
                className={styles.searchInput}
                placeholder="대학, 지하철, 지역 등을 검색해 보세요."
              ></input>
            </div>
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
        </div>
        <div className={styles.roomRowComponent} style={{marginTop: "100px"}}>
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
        <div
          className={styles.roomRowComponent}
          style={{marginBottom: "100px"}}
        >
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
        <div className={styles.tutorHighlightText}>
          인기있는 <span className={styles.tutorMintText}>부동산 튜터</span>를
          추천드려요
        </div>
        <div className={styles.tutorRowComponent}>
          <img src={left_arrow_mint} className={styles.left_arrow_mint}></img>
          <TutorProfileCardComponent
            image={tutorImg1}
            university={"중앙대학교"}
            name={"이가은"}
            description={
              "활발한 성격이에요! 부동산은 물론 다양한 학교 근처 생활 꿀팁도 알려드릴게요!"
            }
            language={["일본어", "영어"]}
            option={["자취경력 3년"]}
          />{" "}
          <TutorProfileCardComponent
            image={tutorImg1}
            university={"중앙대학교"}
            name={"이하영"}
            description={
              "영어, 불어 능통자! 모르는 것이 있으면 언제든지 물어봐주세요~"
            }
            language={["불어", "영어"]}
          />
          <TutorProfileCardComponent
            image={tutorImg1}
            university={"숭실대학교"}
            name={"서지영"}
            description={
              "상도역, 숭실대 입구역은 모두 꿰뚫고 있습니다! 연락주세요."
            }
            language={["영어"]}
            option={["자취경력 4년"]}
          />{" "}
          <TutorProfileCardComponent
            image={tutorImg1}
            university={"중앙대학교"}
            name={"문벼리"}
            description={"중국어, 영어 다 가능합니다! 편하게 연락주세요~!"}
            language={["중국어", "영어"]}
            option={["자취경력 1년"]}
          />{" "}
          <img src={right_arrow_mint} className={styles.right_arrow_mint}></img>
        </div>
        <div className={styles.guideBackground}>
          <div>
            <div className={styles.guideHighlightText}>
              부동산 유의사항은{" "}
              <span
                className={styles.guideMintText}
                onClick={() => {
                  navigate("/guide");
                }}
              >
                여기
              </span>
              서 체크하세요
            </div>
            <div className={styles.guideBodyText}>
              한국 생활의 시작!{" "}
              <span className={styles.guideBodyHighlightText}>
                Konnect에서 부동산 계약 시 주의사항
              </span>
              을 알려드려요.
              <br />
              가이드를 확인하시고 꼭 맞는 방 찾아보세요!
            </div>
          </div>
          <img src={guide_megaphone} className={styles.guide_megaphone} />
        </div>
        <img src={footer} />
      </div>
    );
  });

  return content;
}

export default HomePage;
