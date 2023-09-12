import Tabs from '../../components/Tabs/Tabs';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className="container">
        <h1>Projects</h1>
        <Tabs />
      </div>
    </div>
  );
};

export default Projects;
