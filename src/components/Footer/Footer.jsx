import styles from './Footer.module.scss';
import SocialNet from '../SocialNet/SocialNet';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialNet />
      <span className={styles.footerText}>© 2022 frontend-dev</span>
    </div>
  );
};

export default Footer;
