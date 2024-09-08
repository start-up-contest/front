import React, {useState} from "react";
import styles from "./LanguageSelectionPage.module.css";
import {useNavigate} from "react-router-dom";

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigate = useNavigate();
  const languages = [
    {id: 1, label: "한국어"},
    {id: 2, label: "English"},
    {id: 3, label: "中國語"},
    {id: 4, label: "にほんご"},
  ];

  const handleSelection = (id) => {
    setSelectedLanguage(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2 className={styles.title}>사용 가능한 언어를 선택해주세요</h2>
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <div className={styles.options}>
          {languages.map((language) => (
            <div
              key={language.id}
              className={`${styles.option} ${
                selectedLanguage === language.id ? styles.selected : ""
              }`}
              onClick={() => handleSelection(language.id)}
            >
              <h3 className={styles.optionTitle}>{language.label}</h3>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.backButton}>뒤로가기</button>
          <button
            className={styles.nextButton}
            onClick={() => navigate("/duration")}
          >
            넘어가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
