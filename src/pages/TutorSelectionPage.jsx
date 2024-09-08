import React, { useState } from 'react';
import styles from './TutorSelectionPage.module.css';

const TutorSelectionPage = () => {
    const [selectedTutor, setSelectedTutor] = useState(null);

    const tutors = [
        {
            id: 1,
            university: "중앙대학교",
            name: "이가은 튜터",
            description: "활발한 성격이에요! 부동산은 물론 다양한 학교 근처 생활 꿀팁도 알려드릴게요!",
            languages: ["일본어", "영어"],
            experience: "재학생 3년",
            rating: 4.3,
            reviews: 8
        },
        {
            id: 2,
            university: "중앙대학교",
            name: "이하영 튜터",
            description: "영어, 물어보통자 모르는 것이 있으면 언제든지 물어봐주세요~",
            languages: ["중국어", "영어"],
            experience: "재학생 3년",
            rating: 4.5,
            reviews: 5
        },
        {
            id: 3,
            university: "숭실대학교",
            name: "서지영 튜터",
            description: "상도역, 숭실대 입구역은 모두 훤히 보고 있습니다! 연락주세요.",
            languages: ["영어"],
            experience: "재학생 4년",
            rating: 5.0,
            reviews: 10
        }
    ];

    const handleSelection = (id) => {
        setSelectedTutor(id);
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.title}>나에게 딱 맞는 튜터예요!</h2>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.tutorList}>
                    {tutors.map((tutor) => (
                        <div
                            key={tutor.id}
                            className={`${styles.tutorCard} ${selectedTutor === tutor.id ? styles.selected : ''}`}
                            onClick={() => handleSelection(tutor.id)}
                        >
                            <div className={styles.tutorImage}></div>
                            <div className={styles.tutorInfo}>
                                <p className={styles.university}>{tutor.university}</p>
                                <h3 className={styles.name}>{tutor.name}</h3>
                                <p className={styles.description}>{tutor.description}</p>
                                <div className={styles.details}>
                                    <div className={styles.languages}>
                                        {tutor.languages.map((lang, index) => (
                                            <span key={index} className={styles.language}>{lang}</span>
                                        ))}
                                    </div>
                                    <span className={styles.experience}>{tutor.experience}</span>
                                    <div className={styles.rating}>
                                        <span>⭐</span> {tutor.rating} ({tutor.reviews})
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.moreTutorsButton}>더 많은 튜터 보기</button>
                <div className={styles.buttons}>
                    <button className={styles.backButton}>뒤로가기</button>
                    <button className={styles.nextButton}>메인으로</button>
                </div>
            </div>
        </div>
    );
};

export default TutorSelectionPage;
