import styles from './LinkButton.module.css';

function LinkButton(props) {
  return (
    <div
      style={{
        '--color-link-button': props.color,
        '--color-background-link-button': props.backgroundColor,
        '--border-link-button': props.border,
      }}
      className={styles.linkButtonDiv}
    >
      {props.icon && <img src={props.icon} alt="Icon of link button." />}
      <a href="/">{props.text}</a>
    </div>
  );
}

export default LinkButton;
