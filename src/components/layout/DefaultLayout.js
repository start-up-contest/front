import React from 'react';
import { Outlet } from 'react-router-dom';

// style
import styles from './DefaultLayout.module.css';

const DefaultLayout = () => {
  return <div className={styles.layout}><Outlet /></div>;
};

export default DefaultLayout;
