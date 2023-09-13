import styles from './AboutMy.module.scss';

const AboutMy = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1>About My</h1>
        <div className={styles.aboutWrap}>
          <div className={styles.description}>
            <h5>About my</h5>
            <p>
              My story began with my training at Step Academy, where I spent a
              year immersing myself in the world of frontend development. This
              exciting year was filled with learning the fundamental
              technologies needed to create web pages, such as HTML, CSS, and
              JavaScript.
            </p>
            <p>
              After that, I actively practiced, did my own projects and
              participated in the development of landing page for an online
              store. Over time, ambition made me go further. I started learning
              the SASS preprocessor to speed up the creation of styles, and
              decided to dive deeper into the world of React.
            </p>
            <p>
              On Udemy, I have successfully completed a full-fledged course on
              React and of course created some exciting pet projects, including
              building my own portfolio site. I am convinced that constant
              learning and openness to new technologies are key aspects of the
              web development industry. That's why I am constantly on the
              lookout for new knowledge and ways to improve my skills in
              building web applications.
            </p>
          </div>
          <div className={styles.description}>
            <h5> Academic background</h5>
            <ul>
              <li>Step Academy</li>
              <li>Frontend developer| Deс 2021 - Dec 2022</li>
              <li>Programming basics</li>
              <li>
                Project courses with a focus on web development and design
              </li>
            </ul>
            <ul>
              <li>Udemy</li>
              <li>Full course on React</li>
              <li>Date Aug, 29,2023</li>
              <li>
                <a
                  className={styles.certificate}
                  href="https://udemy-certificate.s3.amazonaws.com/image/UC-db1e68b5-6c5c-447b-b370-ac3247aafe3c.jpg?v=1693315963000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.descriptionSite}>
          <h5>About the site</h5>
          <p>
            I chose the React library to build my one-page portfolio website
            application. The entire site is made up of JSX components, which
            allowed me to easily organize and structure the content. To isolate
            styles and prevent conflicts when deploying the project, I used CSS
            modules.
          </p>
          <p>
            One of the key features of the site is its night theme, which I
            implemented using CSS variables and adding an attribute to the
            "body" tag. This allows users to comfortably browse the site at
            different times of the day.
          </p>
          <p>
            For routing and moving between pages on the site, I integrated the
            react-router-dom library. This allows me to create multiple pages
            and provide navigation without reloading the page.
          </p>
          <p>
            To add icons to buttons and other UI elements, I used the
            react-icons library, which provides access to a rich set of icons.
          </p>
          <p>
            The site is adaptive and cross-browser, which ensures a convenient
            display on different devices and browsers.
          </p>
          <p>
            Creating this website is just part of my continued learning and
            development in web development. I am proud of this project and hope
            it will help me showcase my skills and achievements in this field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMy;
