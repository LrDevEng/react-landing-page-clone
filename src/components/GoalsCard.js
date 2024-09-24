import styles from './GoalsCard.module.css';

function GoalsCard(props) {
  return (
    <div className={styles.card}>
      {props.icon}
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
      <img src={props.imgSrc} alt="Display of goals" />
    </div>
  );
}

export default GoalsCard;
