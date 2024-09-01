import InputGroup from "../InputGroup/InputGroup";
import { useState } from "react";
export default function InputComponent({
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
}) {
    const [infoSec, setInfoSec] = useState(false);

  return (
    <InputGroup
      state={state}
      border={border}
      infoSec={infoSec}
      size={size}
      alignment={alignment}
      placeholder={placeholder}
      label={label}
      info={info}
      infoMessage={infoMessage}
      helperText={helperText}
      helperTextMessage={helperTextMessage}
      iconAfter={iconAfter}
      iconBefore={iconBefore}
      onInfoHover={()=>{setInfoSec(true)}}
      onInfoLeave={()=>{setInfoSec(false)}}
      infoSec={infoSec}
      shortkey={shortkey}
      labelSize={labelSize}
      labelPosition={labelPosition}
      userText={userText}
    ></InputGroup>
  );
}
