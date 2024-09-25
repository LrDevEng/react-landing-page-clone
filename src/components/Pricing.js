import { ReactComponent as CheckMarkIcon } from '../svg/icons/checkMarkIcon.svg';
import LinkButton from './LinkButton';
import PriceCard from './PriceCard';
import styles from './Pricing.module.css';

function Pricing() {
  return (
    <section>
      <div className={styles.center}>
        <div className={styles.pricing}>
          <div className={styles.getStarted}>
            <h1>Pricing</h1>
            <p>
              Free for your first three habits or join premium for unlimited.
            </p>
            <LinkButton
              text="Get Started Free"
              backgroundColor="var(--color-corporate)"
              color="#fff"
            />
          </div>
          <div className={styles.priceCards}>
            <PriceCard>
              <h1>
                <span role="img" aria-label="Free">
                  🌱
                </span>
              </h1>
              <h2>Free</h2>
              <h3>$0</h3>
              <h4>/ forever</h4>
              <ul>
                <li>
                  <CheckMarkIcon /> 3 Free Habits
                </li>
                <li>
                  <CheckMarkIcon /> All the features
                </li>
              </ul>
            </PriceCard>
            <PriceCard>
              <h1>
                <span role="img" aria-label="Rocket">
                  🚀
                </span>
              </h1>
              <h2>Premium</h2>
              <div className={styles.priceGrid}>
                <div>
                  <h3>$2.50</h3>
                  <h4>/ month</h4>
                </div>
                <div>
                  <h3>$25.00</h3>
                  <h4>/ year</h4>
                </div>
              </div>
              <ul>
                <li>
                  <CheckMarkIcon /> 3 Free Habits
                </li>
                <li>
                  <CheckMarkIcon /> All the features
                </li>
              </ul>
            </PriceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
