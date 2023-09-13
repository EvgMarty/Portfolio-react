import vsCode from '../../img/vsCode.svg';
import html from '../../img/html.svg';
import css from '../../img/css.svg';
import sass from '../../img/sass.svg';
import js from '../../img/js.svg';
import react from '../../img/react.svg';
import npm from '../../img/npm.svg';
import gitHub from '../../img/gitHub.svg';

import styles from './Scill.module.scss';

const Scill = () => {
  return (
    <ul className={styles.listScillc}>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={vsCode} alt="VS Code" />
        <p>VS Code</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={html} alt="HTML" />
        <p>HTML</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={css} alt="CSS" />
        <p>CSS</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={sass} alt="SASS" />
        <p>SASS</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={js} alt="JS" />
        <p>JavaSctipt</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={react} alt="React" />
        <p>React</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={npm} alt="NPM" />
        <p>NPM</p>
      </li>
      <li className={styles.skill}>
        <img className={styles.imgScill} src={gitHub} alt="gitHub" />
        <p>git/gitHub</p>
      </li>
    </ul>
  );
};

export default Scill;
