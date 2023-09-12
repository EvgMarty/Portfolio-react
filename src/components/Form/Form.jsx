import Button from '../../UI/Button/Button';
import styles from './Form.module.scss';
import { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({
    userName: '',
    userMail: '',
    userMessage: '',
  });

  const handlerInputChang = (text, name) => {
    setData({ ...data, [name]: text });
  };

  const handlerForSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(data));
  };

  return (
    <form className={styles.form} onSubmit={handlerForSubmit}>
      <div className={styles.formGroup}>
        <input
          placeholder=""
          className={styles.formInput}
          value={data.userName}
          onChange={(e) => handlerInputChang(e.target.value, 'userName')}
          type="text"
        />
        <label className={styles.formLable}>Name</label>
      </div>
      <div className={styles.formGroup}>
        <input
          placeholder=""
          className={styles.formInput}
          value={data.userMail}
          onChange={(e) => handlerInputChang(e.target.value, 'userMail')}
          type="mail"
        />
        <label className={styles.formLable}>Mail</label>
      </div>
      <div className={styles.formGroup}>
        <input
          placeholder=""
          className={styles.formInput}
          value={data.userMessage}
          onChange={(e) => handlerInputChang(e.target.value, 'userMessage')}
          type="text"
        />
        <label className={styles.formLable}>Message</label>
      </div>

      <div className={styles.buttonContainer}>
        <Button type="submit" title="Отправить">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
