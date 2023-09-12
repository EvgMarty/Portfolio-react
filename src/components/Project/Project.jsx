import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import styles from './Project.module.scss';
import { BsGit, BsFillEyeFill } from 'react-icons/bs';

const Project = ({ project }) => {
  const { name, img, skills, repository, demo } = project;

  return (
    <div className={styles.project}>
      <div className={styles.imgProject}>
        <img  src={img} alt="" />
      </div>
      <div className={styles.description}>
        <h5 className={styles.nameProject}>{name}</h5>
        <span>Skills</span>
        <p>{skills}</p>
      </div>
      <div className={styles.btnWrap}>
        <Button title="Repository">
          <Link to={repository} target="_blank">
            <div className={styles.btnCentr}>
              <BsGit />
              GitHub repo
            </div>
          </Link>
        </Button>
        <Button title="Preview">
          <Link to={demo} target="_blank">
            <div className={styles.btnCentr}>
              <BsFillEyeFill />
              Demo
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Project;
