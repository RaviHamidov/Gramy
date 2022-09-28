import React from 'react';
import styles from "../Styles/Categories.module.css"

function Categories() {
  return (
    <div className="lg:p-12 p-16  ">
    <span className={styles.category}>Şorbalar</span>
    <span className={styles.category}>Salatlar</span>
    <span className={styles.category}>Fast Food</span>
    <span className={styles.category}>Kabablar</span>
    <span className={styles.category}>Əsas Yeməklər</span>
    <span className={styles.category}>Soyuq içkilər</span>
    </div>
  )
}

export default Categories