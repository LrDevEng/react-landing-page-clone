import { ReactComponent as DownloadApple } from '../svg/downloadApple.svg';
import { ReactComponent as DownloadGoogle } from '../svg/downloadGoogle.svg';
import { ReactComponent as Hero } from '../svg/hero.svg';
import styles from './Eyecatcher.module.css';

function Eyecatcher() {
  return (
    <section className={styles.confetti}>
      <div className={styles.container}>
        <div className={styles.flexColumn}>
          <Hero />
          <h1>
            A habit tracker for
            <br />
            celebrating daily goals
          </h1>
          <h2>
            Develop good habits and eliminate bad ones by
            <br />
            visualizing daily progress
          </h2>
          <div className={styles.download}>
            <a href="/">
              <DownloadApple className={styles.downloadButton} />
            </a>

            <a href="/">
              <DownloadGoogle className={styles.downloadButton} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eyecatcher;
