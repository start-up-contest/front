import React, {useState} from "react";
import styles from "./UniversitySelectionPage.module.css";
import {useNavigate} from "react-router-dom";

function UniversitySelectionPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState("중앙대학교");
  const navigate = useNavigate();

  const universities = [
    "서울대학교",
    "연세대학교",
    "고려대학교",
    "서강대학교",
    "성균관대학교",
    "한양대학교",
    "중앙대학교",
    "경희대학교",
    "한국외국어대학교",
    "서울시립대학교",
    "동국대학교",
    "이화여자대학교",
    "건국대학교",
    "홍익대학교",
    "숭실대학교",
    "국민대학교",
    "세종대학교",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (university) => {
    setSelectedUniversity(university);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeButton}>&times;</button>
        <h1 className={styles.title}>
          소속 대학교 혹은 인근에 위치한 대학교는 어디인가요?
        </h1>
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdown} onClick={toggleDropdown}>
            <span>{selectedUniversity}</span>
            <div className={styles.dropdownIcon}></div>
          </div>
          {isDropdownOpen && (
            <div className={styles.options}>
              {universities.map((university, index) => (
                <div
                  key={index}
                  className={`${styles.option} ${
                    selectedUniversity === university ? styles.selected : ""
                  }`}
                  onClick={() => handleOptionClick(university)}
                >
                  <span>{university}</span>
                  {selectedUniversity === university && (
                    <span className={styles.checkMark}>✔</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.buttons}>
          <button className={styles.backButton}>뒤로가기</button>
          <button
            className={styles.nextButton}
            onClick={() => navigate("/housing")}
          >
            넘어가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default UniversitySelectionPage;
