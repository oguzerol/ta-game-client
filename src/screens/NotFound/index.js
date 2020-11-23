import React from 'react';
import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Not Found!</h1>

      <div className={styles.hitarea}>
        <div id='a-1' className={styles.hitbox}></div>
        <div id='a-2' className={styles.hitbox}></div>
        <div id='a-3' className={styles.hitbox}></div>
        <div id='a-4' className={styles.hitbox}></div>
        <div id='a-5' className={styles.hitbox}></div>
        <div id='b-1' className={styles.hitbox}></div>
        <div id='b-2' className={styles.hitbox}></div>
        <div id='b-3' className={styles.hitbox}></div>
        <div id='b-4' className={styles.hitbox}></div>
        <div id='b-5' className={styles.hitbox}></div>
        <div id='c-1' className={styles.hitbox}></div>
        <div id='c-2' className={styles.hitbox}></div>
        <div id='c-3' className={styles.hitbox}></div>
        <div id='c-4' className={styles.hitbox}></div>
        <div id='c-5' className={styles.hitbox}></div>
        <div id='d-1' className={styles.hitbox}></div>
        <div id='d-2' className={styles.hitbox}></div>
        <div id='d-3' className={styles.hitbox}></div>
        <div id='d-4' className={styles.hitbox}></div>
        <div id='d-5' className={styles.hitbox}></div>
        <div id='e-1' className={styles.hitbox}></div>
        <div id='e-2' className={styles.hitbox}></div>
        <div id='e-3' className={styles.hitbox}></div>
        <div id='e-4' className={styles.hitbox}></div>
        <div id='e-5' className={styles.hitbox}></div>
        <div className={styles.eye}>
          <div className={styles.pupil}></div>
        </div>
        <div className={styles.eye}>
          <div className={styles.pupil}></div>
        </div>
        <div className={styles.eyelid}></div>
        <div className={styles.eyelid}></div>
      </div>
    </div>
  );
}
