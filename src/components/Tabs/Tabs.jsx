import projects from '../../data/project';
import Project from '../Project/Project';
import { useState } from 'react';
import styles from './Tabs.module.scss';

const Tabs = () => {
  const [tab, setTab] = useState(1);

  const jsProjects = projects.filter(
    (project) => project.technologies === 'js'
  );
  const reactProjects = projects.filter(
    (project) => project.technologies === 'react'
  );

  const handlerTabs = (index) => {
    setTab(index);
  };

  return (
    <div className={styles.tabsWraper}>
      <ul className={`${styles.tabs} ${tab === 2 ? styles.tabs_2 : ''}`}>
        <li onClick={() => handlerTabs(1)} className={styles.tab}>
          JavaSctipt Projects
        </li>
        <li onClick={() => handlerTabs(2)} className={styles.tab}>
          React Projects
        </li>
      </ul>
      <div className={`${styles.tabContent} ${tab === 1 && styles.active}`}>
        {jsProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div className={`${styles.tabContent} ${tab === 2 && styles.active}`}>
        {reactProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
