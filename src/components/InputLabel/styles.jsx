import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  label: ({ labelSize, state }) => ({
    color:  state === 'disabled' ? 'rgba(112, 112, 123, 1)' : 'rgba(26, 26, 30, 1)',
    fontSize: labelSize === 'small' ? '12px' : '14px',
    fontWeight: '500',
    maxWidth: '240px',
    fontFamily: `"Inter", sans-serif`,
      overflowWrap: `break-word`,
      alignItems: 'center'
  }),
  infoImg: ({ infoMessage }) => ({
    position: "relative",
    marginLeft: '4px',
    "&:hover": {
      "&::before": {
        content: `"${infoMessage}"`,
        display: "block",
        backgroundColor: "rgba(19, 19, 22, 1)",
        fontSize: "12px",
        fontFamily: `"Inter", sans-serif`,
        fontWeight: "600",
        position: "absolute",
        textAlign: "center",
        borderRadius: "8px",
padding: '16px',
minWidth: '80px',
minHeight: '12px',
        top: "-60px",
        left: "-45px",
        zIndex: 1,
        boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        color: "rgba(255, 255, 255, 1)",
      },
      "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        backgroundColor: "rgba(19, 19, 22, 1)",
        width: "16px",
        left: "0",
        height: "16px",
        top: "-25px",
        transform: "rotate(45deg)",
      },
    },
  }),
});
