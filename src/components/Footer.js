import { ReactComponent as Logo } from '../svg/logo.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.footer}>
        <div>
          <Logo className={styles.logo} />
          <p className={styles.copywrite}>Copyright © 2024</p>
          <p>
            Made with ❤️ by <a href="/">Danny</a> & <a href="/">Wilson</a>
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Email Us</a>
          </div>
          <div className={styles.links}>
            <a href="/">Chrome Extension</a>
            <a href="/">iOS App</a>
            <a href="/">Android App</a>
          </div>
          <div className={styles.socialMedia}>
            <a href="/">
              <img src="./icons/twitterIcon.svg" alt="Twitter Icon" />
            </a>
            <img src="./icons/linkedInIcon.svg" alt="Linked In Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
