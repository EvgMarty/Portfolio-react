import styles from './BurgerMenu.module.scss';

const BurgerMenu = (props) => {
  const { openMenu, toggleMenu } = props;

  return (
    <div
      onClick={toggleMenu}
      className={`${styles.burger} ${openMenu ? `${styles.open}` : ''}`}
    >
      <span></span>
    </div>
  );
};

export default BurgerMenu;
