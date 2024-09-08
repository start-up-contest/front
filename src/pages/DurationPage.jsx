import React, { useState } from 'react';
import styles from './DurationPage.module.css';

const DurationPage = () => {
    const [duration, setDuration] = useState('');

    const handleInputChange = (e) => {
        setDuration(e.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.title}>거주 기간은 어떻게 되나요?</h2>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="number"
                        placeholder="숫자를 입력해주세요"
                        value={duration}
                        onChange={handleInputChange}
                        className={styles.input}
                    />
                    <span className={styles.unit}>개월</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.backButton}>뒤로가기</button>
                    <button className={styles.nextButton}>넘어가기</button>
                </div>
            </div>
        </div>
    );
};

export default DurationPage;
