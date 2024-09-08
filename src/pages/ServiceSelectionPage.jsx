import React, { useState } from 'react';
import styles from './ServiceSelectionPage.module.css';

const ServiceSelectionPage = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { id: 1, title: "메시지", description: "튜터에게 메시지로 조언을 구하고 싶어요" },
        { id: 2, title: "메시지 + 전화", description: "튜터에게 메시지와 전화를 통해 조언을 구하고 싶어요" },
        { id: 3, title: "메시지 + 전화 + 화상채팅", description: "메시지와 전화뿐만 아니라 화상채팅을 이용해 도움을 받고 싶어요" },
        { id: 4, title: "메시지 + 전화 + 화상채팅 + 오프라인", description: "튜터와 직접 만나서 도움을 받고 싶어요" }
    ];

    const handleSelection = (id) => {
        setSelectedService(id);
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.title}>이용하고 싶은 서비스를 선택해주세요</h2>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.options}>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${styles.option} ${selectedService === service.id ? styles.selected : ''}`}
                            onClick={() => handleSelection(service.id)}
                        >
                            <div className={styles.optionHeader}>
                                <span className={styles.optionNumber}>{service.id}</span>
                            </div>
                            <h3 className={styles.optionTitle}>{service.title}</h3>
                            <p className={styles.optionDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.backButton}>뒤로가기</button>
                    <button className={styles.nextButton}>넘어가기</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSelectionPage;
