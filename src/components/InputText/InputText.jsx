import { Styles } from "./styles";
export default function InputText({
  size,
  placeholder,
  state,
  alignment,
  border,
  userText,
  iconBefore,
  iconAfter,
  shortkey,
  labelPosition
}) {
  const classes = Styles({ border, alignment, state, size, userText });
  return (
    <div className={classes.containerField}>
      {iconBefore && labelPosition === 'top' && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13L10.6667 10.6667M12.3333 6.66667C12.3333 9.79628 9.79628 12.3333 6.66667 12.3333C3.53705 12.3333 1 9.79628 1 6.66667C1 3.53705 3.53705 1 6.66667 1C9.79628 1 12.3333 3.53705 12.3333 6.66667Z"
            stroke={
              state === "disabled"
                ? "rgba(209, 209, 214, 1)"
                : state === "error" || state === "error focus"
                  ? "rgba(217, 45, 32, 1)"
                  : "rgba(160, 160, 171, 1)"
            }
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <input className={classes.input} placeholder={placeholder} />
      {iconAfter && labelPosition === 'top' && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.05998 5.99998C6.21672 5.55442 6.52608 5.17872 6.93328 4.9394C7.34048 4.70009 7.81924 4.61261 8.28476 4.69245C8.75028 4.7723 9.17252 5.01433 9.4767 5.37567C9.78087 5.737 9.94735 6.19433 9.94665 6.66665C9.94665 7.99998 7.94665 8.66665 7.94665 8.66665M7.99998 11.3333H8.00665M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998Z"
            stroke={
              state === "disabled"
                ? "rgba(209, 209, 214, 1)"
                : state === "error" || state === "error focus"
                  ? "rgba(217, 45, 32, 1)"
                  : "rgba(160, 160, 171, 1)"
            }
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {shortkey && labelPosition === 'top' && <img src="/shortkey.svg" alt="shortkey" />}
    </div>
  );
}
