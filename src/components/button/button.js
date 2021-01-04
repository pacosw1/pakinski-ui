
import "./button.scss";

export const Button = ({ onClick, text, width, height, bg, color, border, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        opacity: disabled ? 0.2 : 1,
        color: color,
        backgroundColor: bg,
        height: `${height}rem`,
        width: `${width}rem`,
        border: "1px solid " + border,
      }}
      className="btn"
    >
      {text}
    </button>
  );
};
