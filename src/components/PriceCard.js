import styles from './PriceCard.module.css';

function PriceCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export default PriceCard;
