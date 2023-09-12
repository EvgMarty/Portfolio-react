import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './SocialNet.module.scss';
const SocialNet = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <Link to="https://github.com/EvgMarty" target="_blank">
          <BsGithub className={styles.link} />
        </Link>
      </li>
      <li>
        <Link to="https://www.linkedin.com/in/evgmarty/" target="_blank">
          <BsLinkedin className={styles.link} />
        </Link>
      </li>
      <li>
        <Link to="https://t.me/martyynn" target="_blank">
          <BsTelegram className={styles.link} />
        </Link>
      </li>
      <li>
        <Link to="mailto:mrtevgeniy@gmail.com" target="_blank">
          <BiLogoGmail className={styles.link} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialNet;
