import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";
import InputAnnotation from "../InputAnnotation/InputAnnotation";
import { Styles } from "./styles";
export default function InputGroup({
  border,
  size,
  state,
  alignment,
  placeholder,
  label,
  labelSize,
  labelPosition,
  userText,
  info,
  infoMessage,
  helperText,
  helperTextMessage,
  iconBefore,
  iconAfter,
  shortkey,
  onInfoHover,
  onInfoLeave,
  infoSec
}) {
  const classes = Styles({ info, infoMessage, state, size, labelPosition });
  return (
    <div onMouseEnter={onInfoHover} onMouseLeave={onInfoLeave} className={classes.inputGroup}>
      <div className={classes.wrapInputLabel}>
        <InputLabel
          label={label}
          labelSize={labelSize}
          state={state}
          info={info}
          infoMessage={infoMessage}
          infoSec={infoSec}
        > 
</InputLabel>
      <InputText
      shortkey={shortkey}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      labelPosition={labelPosition}
        size={size}
        border={border}
        userText={userText}
        state={state}
        alignment={alignment}
        placeholder={placeholder}
      ></InputText>
      </div>
      {helperText && (
        <InputAnnotation
          state={state}
          helperTextMessage={helperTextMessage}
        ></InputAnnotation>
      )}
    </div>
  );
}
