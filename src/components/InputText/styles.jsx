import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  containerField: ({ border, size, state }) => ({
    border: !border
      ? "none"
      : state === "focus"
        ? "1px solid rgba(255, 255, 255, 1)"
        : state === "error" || state === "focus error"
          ? "1px solid rgba(253, 162, 155, 1)"
          : "1px solid rgba(209, 209, 214, 1)",
    boxShadow:
      state === "error focus"
        ? "0px 0px 0px 4px rgba(240, 68, 56, 0.24)"
        : state === "focus"
          ? "0px 0px 0px 4px rgba(46, 144, 250, 0.24)"
          : "none",
    borderRadius: "4px",
    position: "relative",
    '&:focus':{
border: '1px solid rgba(255, 255, 255, 1)',
boxShadow: '0px 0px 0px 4px rgba(46, 144, 250, 0.24)',
    },
    paddingLeft: "16px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    paddingRight: "16px",
    minWidth:
      size === "small"
        ? "36px"
        : size === "medium"
          ? "54px"
          : size === "large"
            ? "60px"
            : "144px",
    fontSize: size === "small" || size === "medium" ? "12px" : "14px",
    height:
      size === "small"
        ? "24px"
        : size === "medium"
          ? "36px"
          : size === "large"
            ? "40px"
            : "48px",
  }),
  input: ({ alignment, size, userText, state }) => ({
    border: "none",
    color:
      state === "disabled"
        ? "rgba(209, 209, 214, 1)"
        : userText
          ? "rgba(26, 26, 30, 1)"
          : "rgba(112, 112, 123, 1)",
    outline: "none",
    fontFamily: `"Inter", sans-serif`,
    minWidth:
      size === "small"
        ? "36px"
        : size === "medium"
          ? "54px"
          : size === "large"
            ? "60px"
            : "144px",
    fontSize: size === "small" || size === "medium" ? "12px" : "14px",
    textAlign: `${alignment}`,
  }),
});
