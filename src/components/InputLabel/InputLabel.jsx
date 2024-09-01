import { Styles } from "./styles";
export default function InputLabel({
  label,
  labelSize,
  state,
  info,
  infoMessage,
  infoSec
}) {
  const classes = Styles({ labelSize, state, infoMessage });
  return (
    <span className={classes.label}>
      {label}
      {(info || infoSec) && (
        <span className={classes.infoImg}>
          <img src="/info-circle.svg" alt="info" />
        </span>
      )}
    </span>
  );
}
