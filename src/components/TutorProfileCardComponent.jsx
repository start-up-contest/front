import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./TutorProfileCardComponent.module.css";

function TutorProfileCardComponent({
  image,
  university,
  name,
  star,
  description,
  language,
  option
}) {
  const {} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
      <div className={styles.container}>
        <img src={image} className={styles.img}></img>
        <div className={styles.universityText}>{university}</div>
        <div className={styles.contentText}>{name} 튜터</div>
        <div className={styles.contentText}>{description}</div>
        <div className={styles.optionContainer}>
          {language?.map((text, i) => {
            return (
              <div className={styles.languageBox}>
                <span className={styles.contentText}>{text}</span>
              </div>
            );
          })}
          {option?.map((text, i) => {
            return (
              <div className={styles.optionBox}>
                <span className={styles.contentText}>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return content;
}

export default TutorProfileCardComponent;
