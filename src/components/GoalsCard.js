import styles from './GoalsCard.module.css';

function GoalsCard(props) {
  return (
    <div className={styles.card}>
      {props.icon}
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
      {props.imgSrc && <img src={props.imgSrc} alt="Display of goals" />}
      {props.shoulderImg && (
        <img
          className={styles.shoulder}
          src={props.shoulderImg}
          alt="Shoulder"
        />
      )}
    </div>
  );
}

export default GoalsCard;
