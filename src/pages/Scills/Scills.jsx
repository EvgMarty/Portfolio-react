import Scill from '../../components/Scill/Scill';
import styles from './Scills.module.scss';

const Scills = () => {
  return (
    <div className={styles.scills}>
      <div className="container">
        <h1>Scills</h1>
        <Scill />
      </div>
    </div>
  );
};

export default Scills;
