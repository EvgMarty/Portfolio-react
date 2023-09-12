import { useState, useEffect } from 'react';

import styles from './BtnDarcMode.module.scss';

//Картинки
import sun from './sun.svg';
import moon from './moon.svg';

const BtnDarcMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  }, [darkMode]);

  return (
    <button
      className={`${styles.darkModeBtn} ${darkMode ? `${styles.active}` : ''}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <img className={styles.iconBtn} src={sun} alt="Light mode" />
      <img className={styles.iconBtn} src={moon} alt="Dark mode" />
    </button>
  );
};

export default BtnDarcMode;
