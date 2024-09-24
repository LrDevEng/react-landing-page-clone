import { ReactComponent as Logo } from '../svg/logo.svg';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <section className={styles.container}>
      <nav>
        <div>
          <a href="/">
            <Logo className={styles.navLogo} />
          </a>
        </div>
        <ul>
          <li>
            <a className={styles.standard} href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className={styles.standard} href="/">
              Sign In
            </a>
          </li>
          <li>
            <div className={styles.button}>
              <a href="/">Try for Free</a>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavigationBar;
