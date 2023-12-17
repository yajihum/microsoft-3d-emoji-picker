import styles from './ThreeDotsLoading.module.css';

export const ThreeDotsLoading = () => {
  return (
    <div className={styles.ldsGrid}>
      <div className={`${styles.ldsGridDiv} ${styles.ldsGridDiv1}`}></div>
      <div className={`${styles.ldsGridDiv} ${styles.ldsGridDiv2}`}></div>
      <div className={`${styles.ldsGridDiv} ${styles.ldsGridDiv3}`}></div>
    </div>
  );
};
