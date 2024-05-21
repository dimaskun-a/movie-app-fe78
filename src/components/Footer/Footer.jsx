/**
 * import CSS Module Footer
 * simpan di object styles
 */
import React from 'react';
import styles from './Footer.module.css';

// Membuat Component Footer
function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        <h2 className={styles.footer__title}>Movie App</h2>
        <p className={styles.footer__author}>Created by dimas aprillianto</p>
      </footer>
    </div>
  );
}

// Lakukan export default Footer
export default Footer;
 