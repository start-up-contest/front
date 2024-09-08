import React, {useState} from "react";
import styles from "./HousingTypeSelectionPage.module.css";
import {useNavigate} from "react-router-dom";

const HousingTypeSelection = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();
  const housingTypes = [
    {
      id: 1,
      label: "월세",
      description: "매달 일정 금액을 월세비로 지불하는 거주 방식이에요.",
    },
    {
      id: 2,
      label: "전세",
      description:
        "일정 금액의 보증금을 계약 기간 동안 지불하고, 그 기간 동안 월세 없이 거주하는 방식이에요. 계약 기간이 끝나면 보증금을 돌려받아요.",
    },
    {
      id: 3,
      label: "고시원",
      description:
        "작은 방 하나만을 제공하는 주거 옵션이며, 화장실과 주방을 공유하는 경우가 많아요. 저렴하게 거주할 수 있는 방식이에요.",
    },
    {
      id: 4,
      label: "하숙",
      description:
        "집주인이 거주자와 함께 사는 형태로, 식사나 청소 등의 생활 서비스를 제공받는 경우가 많아요.",
    },
    {
      id: 5,
      label: "쉐어하우스",
      description:
        "여러 사람이 한 집을 공유하는 형태의 주거 방식이에요. 각자 방은 사용하지만, 부엌, 거실, 화장실 등을 공동으로 사용해요.",
    },
  ];

  const handleSelection = (id) => {
    setSelectedType(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2 className={styles.title}>원하는 거주 형태는 무엇인가요?</h2>
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <div className={styles.options}>
          {housingTypes.map((type) => (
            <div
              key={type.id}
              className={`${styles.option} ${
                selectedType === type.id ? styles.selected : ""
              }`}
              onClick={() => handleSelection(type.id)}
            >
              <h3 className={styles.optionTitle}>{type.label}</h3>
              <p className={styles.optionDescription}>{type.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.backButton}>뒤로가기</button>
          <button
            className={styles.nextButton}
            onClick={() => navigate("/language")}
          >
            넘어가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default HousingTypeSelection;
