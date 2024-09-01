import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  annotation: ({ state }) => ({
    color:
      state === "disabled"
        ? "rgba(209, 209, 214, 1)"
        : state === "error" || state === "error focus"
          ? "rgba(217, 45, 32, 1)"
          : "rgba(81, 82, 92, 1)",
    fontSize: "12px",
    fontFamily: `"Inter", sans-serif`,
    marginTop: "10px",
    overflowWrap: `break-word`,
  }),
});
