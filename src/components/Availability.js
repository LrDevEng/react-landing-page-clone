import styles from './Availability.module.css';
import LinkButton from './LinkButton';

function Availability() {
  return (
    <section className={styles.available}>
      <h1>Available wherever you are</h1>
      <h2>
        Available for <a href="/">iOS</a>, <a href="/">Android</a>,{' '}
        <a href="/">Chrome</a> and <a href="/">Web</a>
      </h2>
      <div className={styles.goodAfternoon}>
        <img
          className={styles.desktop}
          src="./images/goodAfternoon.png"
          alt="Desktop version of app."
        />
        <img
          className={styles.phone}
          src="./images/mobileFrame.png"
          alt="Mobile version of app."
        />
      </div>
      <div className={styles.links}>
        <LinkButton
          text="Try for Free"
          backgroundColor="var(--color-corporate)"
          color="#fff"
        />
        <LinkButton
          text="Add to Chrome"
          backgroundColor="#fff"
          color="var(--color-corporate)"
          border="1px solid var(--color-corporate)"
          icon="./images/chromeIcon.svg"
        />
      </div>
    </section>
  );
}

export default Availability;
