import styles from './Button.module.scss';

const Button = ({ onClick, children, title, type }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
