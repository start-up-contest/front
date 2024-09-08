import React, { useState } from 'react';
import styles from './ResidenceStatusPage.module.css';

const ResidenceStatusPage = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.title}>현재 한국에 거주중인가요?</h2>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.optionsContainer}>
                    <button
                        className={`${styles.optionButton} ${selectedOption === 'no' ? styles.selected : ''}`}
                        onClick={() => handleOptionClick('no')}
                    >
                        아니요. 한국에 없습니다
                    </button>
                    <button
                        className={`${styles.optionButton} ${selectedOption === 'yes' ? styles.selected : ''}`}
                        onClick={() => handleOptionClick('yes')}
                    >
                        예. 한국에 있습니다
                    </button>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.backButton}>뒤로가기</button>
                    <button className={styles.nextButton}>넘어가기</button>
                </div>
            </div>
        </div>
    );
};

export default ResidenceStatusPage;
