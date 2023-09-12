import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import Form from '../../components/Form/Form';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className="container">
        <h1>Contacts</h1>
        <div className={styles.contactWrapper}>
          <ul className={styles.myContacts}>
            <li>
              <h3>Location</h3>
              <p>Ukraine, Odesa</p>
            </li>
            <li>
              <h3>Number/ Telegram </h3>
              <Link className={styles.link} to="tel:0507406980">
                +38 (050) 740 69 80
              </Link>
            </li>
            <li>
              <h3>Email</h3>
              <Link className={styles.link} to="mailto:mrtevgeniy@gmail.com">
                mrtevgeniy@gmail.com
              </Link>
            </li>
          </ul>
          <div className={styles.addForm}>
            <h3>Write to me</h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
