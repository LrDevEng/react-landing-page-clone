import styles from './LinkButton.module.css';

function LinkButton(props) {
  return (
    <div
      style={{
        '--color-link-button': props.color,
        '--color-background-link-button': props.backgroundColor,
        '--border-link-button': props.border,
        '--hover-box-shadow': props.hoverBoxShadow
          ? props.hoverBoxShadow
          : '0 12px 15px 0 rgba(0, 123, 255, 0.25)',
      }}
      className={styles.linkButtonDiv}
    >
      {props.icon && <img src={props.icon} alt="Icon of link button." />}
      <a href="/">{props.text}</a>
    </div>
  );
}

export default LinkButton;
