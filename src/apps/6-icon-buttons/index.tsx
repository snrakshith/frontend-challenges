import "./buttons.css";

type btnType = "like" | "loading";
type btnVariant = "primary" | "secandary";

function IconButtons({
  type = "like",
  btnText,
  variant = "primary",
  svgIcon,
}: {
  type: btnType;
  variant: btnVariant;
  btnText?: string;
  svgIcon?: any;
}) {
  return (
    <>
      <button className={`btn ${variant}`}>
        {svgIcon ? (
          <img src={svgIcon} alt={btnText} />
        ) : (
          <span>{type === "like" ? "O" : "..."}</span>
        )}
        {btnText ?? "Button text"}
      </button>
    </>
  );
}

export default IconButtons;
