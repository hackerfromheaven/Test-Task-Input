import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  inputGroup: {
    width: "240px",
    marginTop: "10%",
    marginLeft: "10%",
    "&:hover $infoImg": {
      display: "block", 
    },
  },
  wrapInputLabel:({labelPosition}) =>({
display: 'flex',
flexDirection: labelPosition === 'top' ? 'column' : 'row',
gap: labelPosition === 'left' ? '60px' : '5px'
  }),
});
