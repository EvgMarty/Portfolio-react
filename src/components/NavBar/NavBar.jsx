import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import BtnDarcMode from '../../UI/BtnDarkMode/BtnDarcMode';
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu === true) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [openMenu]);

  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <strong>My</strong> Portfolio
        </div>
        <ul className={`${styles.list} ${openMenu ? styles.activeNavBar : ''}`}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => closeMenu()}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => closeMenu()}
              to="projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => closeMenu()}
              to="skills"
            >
              Scills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => closeMenu()}
              to="contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className={styles.menuWrap}>
          <BtnDarcMode />
          <BurgerMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
