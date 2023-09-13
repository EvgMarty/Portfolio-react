import Button from '../../UI/Button/Button';
import AboutMy from '../../components/AboutMy/AboutMy';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={`container ${styles.container}`}>
          <div className={styles.bgHeadr}></div>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>
              Hi, my name is <span>Evgen</span>
            </h1>
            <p className={styles.dev}>a frontend developer</p>
            <p className={styles.text}>
              with passion for learning and creating.
            </p>
          </div>
          <Button type="button" title="Download Resume">
            <a href="./CV_Yevhen-Martyniuk_Front-end_developer.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </div>
      <AboutMy />
    </>
  );
};

export default Home;
